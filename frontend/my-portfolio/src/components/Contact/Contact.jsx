import React from "react";
import { Container, Typography, Button, Stack, Box } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ContactSVG from "../../assets/contactsvg.svg"; // <- SVG import

const Contact = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Box
        sx={{
          backgroundColor: "#f9f9f9",
          p: 4,
          borderRadius: 4,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        {/* SVG illusztráció */}
        <Box sx={{ mb: 4 }}>
          <img
            src={ContactSVG}
            alt="Contact Illustration"
            style={{
              width: "100%",
              maxWidth: "300px",
              margin: "0 auto",
            }}
          />
        </Box>

        {/* Cím és szöveg */}
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "primary.main",
            textShadow: "2px 2px 6px rgba(103, 58, 183, 0.4)",
          }}
        >
          Contact Me
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
          Feel free to reach out to me through any of the platforms below.
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          If I caught your interest, don’t hesitate to contact me — whether it’s
          for a full-time job opportunity or a freelance project.
        </Typography>

        {/* Gombok */}
        <Stack spacing={2} alignItems="center">
          <Button
            variant="contained"
            startIcon={<EmailIcon />}
            href="mailto:syneldev@gmail.com"
            sx={{
              backgroundColor: "#ff9800",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#fb8c00",
              },
              width: "100%",
              maxWidth: 350,
            }}
          >
            synel.web@gmail.com
          </Button>

          <Button
            variant="contained"
            color="info"
            startIcon={<LinkedInIcon />}
            href="https://www.linkedin.com/in/szilveszter-nemeth-636689332/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ width: "100%", maxWidth: 350 }}
          >
            LinkedIn Profile
          </Button>

          <Button
            variant="contained"
            color="inherit"
            startIcon={<GitHubIcon />}
            href="https://github.com/synel96"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ width: "100%", maxWidth: 350 }}
          >
            GitHub Profile
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default Contact;
