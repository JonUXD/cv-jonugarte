import React, { useState } from 'react';
import { TextField, Button, Box, Card, CardContent, Typography, Alert, Snackbar } from "@mui/material";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission handled by Netlify
    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });
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
          <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                name="name"
                label="Your Name"
                variant="outlined"
                size="small"
                value={formData.name}
                onChange={handleChange}
                required
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
                value={formData.email}
                onChange={handleChange}
                required
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
                value={formData.message}
                onChange={handleChange}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 1,
                  }
                }}
              />
              
              <Button 
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'primary.contrastText',
                  fontWeight: 600,
                  borderRadius: 1,
                  py: 1,
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  }
                }}
              >
                Send Message
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>

      <Snackbar 
        open={submitStatus === 'success'} 
        autoHideDuration={6000} 
        onClose={() => setSubmitStatus('idle')}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert severity="success">
          Message sent successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactForm;