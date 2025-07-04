import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  Typography,
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Skeleton,
  Grow,
} from "@mui/material";
import cvImage from "../../assets/cv.jpg";
import AndorImg from "../../assets/andor.jpg";
import NaluImg from "../../assets/nalu.jpg";
import MexImg from "../../assets/mex.jpg";

const devTeam = [
  {
    name: "Andor",
    title: "Head of Surprised Expressions",
    img: AndorImg,
  },
  {
    name: "Nalu",
    title: "Senior Bug Detector",
    img: NaluImg,
  },
  {
    name: "Mex",
    title: "Cyber Pizza Protection Officer",
    img: MexImg,
  },
];

const Home = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      const promises = [cvImage, AndorImg, NaluImg, MexImg].map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
        });
      });
      await Promise.all(promises);
      setImagesLoaded(true);
    };
    loadImages();
  }, []);

  return (
    <Container
      maxWidth="md"
      sx={{
        mt: 6,
        mb: 6,
        textAlign: "center",
        bgcolor: "white",
        background: "linear-gradient(135deg, #ede7f6 0%, #fff 100%)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        borderRadius: 3,
        p: 4,
      }}
    >
      <Grow in={imagesLoaded} timeout={600}>
        <Box>
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

          {imagesLoaded ? (
            <Avatar
              alt="Szilveszter Németh"
              src={cvImage}
              sx={{
                width: 220,
                height: 220,
                margin: "0 auto",
                boxShadow: "0 8px 15px rgba(103, 58, 183, 0.4)",
                borderRadius: "50%",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.08)",
                },
              }}
            />
          ) : (
            <Skeleton
              variant="circular"
              width={220}
              height={220}
              sx={{ margin: "0 auto" }}
            />
          )}
        </Box>
      </Grow>

      <Box sx={{ mt: 6 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            color: "#5e35b1",
            mb: 4,
            textShadow: "1px 1px 4px rgba(0,0,0,0.1)",
          }}
        >
          Development Team
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {devTeam.map(({ name, title, img }) => (
            <Grid item xs={12} sm={6} md={4} key={name}>
              <Card
                sx={{
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                  },
                }}
              >
                {imagesLoaded ? (
                  <CardMedia
                    component="img"
                    height="240"
                    image={img}
                    alt={name}
                  />
                ) : (
                  <Skeleton variant="rectangular" height={240} />
                )}
                <CardContent>
                  <Typography variant="h6" component="div">
                    {name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontStyle: "italic" }}
                  >
                    {title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
