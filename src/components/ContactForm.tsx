import React, { useState } from 'react';
import { TextField, Button, Box, Card, CardContent, Typography } from "@mui/material";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Encode the form data as required by Netlify
      const encodedData = new URLSearchParams({
        'form-name': 'contact', // This must match the hidden form name
        ...formData,
        'bot-field': '' // Add honeypot field
      }).toString();

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodedData
      });
      
      // On success, mark as submitted
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' }); // Clear form
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error sending your message. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <Box sx={{ marginBottom: 6 }}>
      <Typography variant="h4" sx={{ 
        marginBottom: 4,
        fontWeight: 700,
        color: "text.primary",
        borderBottom: "2px solid",
        borderColor: "primary.main",
        paddingBottom: 1
      }}>
        Get In Touch
      </Typography>
      
      <Card elevation={2}>
        <CardContent>
          <form 
            name="contact" 
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            {/* Hidden fields that Netlify requires */}
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                name="name"
                label="Your Name"
                variant="outlined"
                size="small"
                required
                fullWidth
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitted || isSubmitting}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 1,
                  }
                }}
              />
              
              <TextField
                name="email"
                label="Your Email"
                type="email"
                variant="outlined"
                size="small"
                required
                fullWidth
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitted || isSubmitting}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 1,
                  }
                }}
              />
              
              <TextField
                name="message"
                label="Your Message"
                multiline
                rows={4}
                variant="outlined"
                size="small"
                required
                fullWidth
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitted || isSubmitting}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 1,
                  }
                }}
              />
              
              <Button 
                type="submit"
                variant="contained"
                disabled={isSubmitted || isSubmitting}
                sx={{
                  backgroundColor: isSubmitted ? 'success.main' : 'primary.main',
                  color: 'primary.contrastText',
                  fontWeight: 600,
                  borderRadius: 1,
                  py: 1,
                  '&:hover': {
                    backgroundColor: isSubmitted ? 'success.dark' : 'primary.dark',
                  },
                  '&:disabled': {
                    backgroundColor: 'grey.400',
                  }
                }}
              >
                {isSubmitting ? 'Sending...' : isSubmitted ? '✓ Message Sent!' : 'Send Message'}
              </Button>
              
              {isSubmitted && (
                <Typography variant="body2" color="success.main" sx={{ mt: 1 }}>
                  Thank you for your message! I'll get back to you soon.
                </Typography>
              )}
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ContactForm;