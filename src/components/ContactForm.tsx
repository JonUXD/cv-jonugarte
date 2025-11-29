import React from 'react';
import { TextField, Button, Box, Card, CardContent, Typography } from "@mui/material";

const ContactForm: React.FC = () => {
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
            action="/thank-you"
          >
            <input type="hidden" name="form-name" value="contact" />
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                name="name"
                label="Your Name"
                variant="outlined"
                size="small"
                required
                fullWidth
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
    </Box>
  );
};

export default ContactForm;