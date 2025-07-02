import React from "react";
import { Container, Box, Typography, Avatar } from "@mui/material";
import cvImage from "../../assets/cv.jpg";

const Home = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        mt: 6,
        mb: 6,
        textAlign: "center",
        bgcolor: "white",
        background: "linear-gradient(135deg, #ede7f6 0%, #fff 100%)", // halvány lila-fehér átmenet
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        borderRadius: 3,
        p: 4,
      }}
    >
      {/* Hero / Welcome szöveg */}
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "primary.main",
          textShadow: "2px 2px 6px rgba(103, 58, 183, 0.6)",
        }}
      >
        Welcome to my portfolio website!
      </Typography>

      {/* Bemutatkozás */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          component="h2"
          sx={{ color: "secondary.dark", fontWeight: 600, mb: 1 }}
        >
          I am Szilveszter Németh
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Based in Sopron, Hungary — a passionate web developer skilled in
          responsive front-end development, server-side programming, and
          database management.
        </Typography>
      </Box>

      {/* Kép */}
      <Avatar
        alt="Szilveszter Németh"
        src={cvImage}
        sx={{
          width: 220,
          height: 220,
          margin: "0 auto",
          boxShadow: "0 8px 15px rgba(103, 58, 183, 0.4)",
          borderRadius: "50%",
        }}
      />
    </Container>
  );
};

export default Home;
