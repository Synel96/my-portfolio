import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
} from "@mui/material";
import { styled } from "@mui/system";

import aboutme from "../../assets/aboutme.svg";
import frontendsvg from "../../assets/frontendsvg.svg";
import serversvg from "../../assets/serversvg.svg";
import versionsvg from "../../assets/versionsvg.svg";

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: "20px",
  boxShadow: theme.shadows[3],
  padding: theme.spacing(2),
  backgroundColor: "#fefefe",
}));

const About = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        padding: 4,
        borderRadius: 4,
        border: "1px solid #ccc",
        mt: 4,
        maxWidth: "1000px",
        mx: "auto",
      }}
    >
      {/* About Me */}
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <img
            src={aboutme}
            alt="About Me"
            style={{
              width: "100%",
              maxWidth: 300,
              display: "block",
              margin: "0 auto",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ color: "#8e44ad" }}>
            About Me
          </Typography>
          <Typography variant="body1">
            In early 2025, I started teaching myself web development with the
            goal of mastering every part of the process — from backend logic to
            deployment and long-term maintenance. I'm passionate, driven, and
            focused on becoming a full-stack developer capable of building and
            scaling modern web applications.
          </Typography>
        </Grid>
      </Grid>

      {/* Tech Stack */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" gutterBottom sx={{ color: "#8e44ad" }}>
          My Tech Stack
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <StyledCard>
              <CardContent>
                <img
                  src={frontendsvg}
                  alt="Frontend"
                  style={{ height: 60, marginBottom: 16 }}
                />
                <Typography variant="h6" sx={{ color: "#8e44ad" }}>
                  Frontend – React + Vite
                </Typography>
                <Typography variant="body2">
                  Fast, modern development with lightning-quick hot reloads and
                  a seamless developer experience. Used by Netflix and many
                  others to create interactive user interfaces.
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>

          <Grid item xs={12} md={4}>
            <StyledCard>
              <CardContent>
                <img
                  src={serversvg}
                  alt="Backend"
                  style={{ height: 60, marginBottom: 16 }}
                />
                <Typography variant="h6" sx={{ color: "#8e44ad" }}>
                  Backend – Django + DRF
                </Typography>
                <Typography variant="body2">
                  Secure and scalable backend framework with RESTful APIs.
                  Trusted by Instagram and Coursera to power high-traffic
                  services.
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>

          <Grid item xs={12} md={4}>
            <StyledCard>
              <CardContent>
                <img
                  src={versionsvg}
                  alt="Version Control"
                  style={{ height: 60, marginBottom: 16 }}
                />
                <Typography variant="h6" sx={{ color: "#8e44ad" }}>
                  Version Control – Git + GitHub
                </Typography>
                <Typography variant="body2">
                  Enables collaboration, change tracking, and open-source
                  contribution. Industry-standard toolset used by developers
                  around the world.
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        </Grid>
      </Box>

      {/* Why Section */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" gutterBottom sx={{ color: "#8e44ad" }}>
          Why?
        </Typography>
        <Typography variant="body1" mb={2}>
          I chose these technologies for their performance, speed, and community
          support. They are trusted by top companies around the world to build
          fast, scalable, and reliable web applications.
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ mt: 2 }}
        >
          <Button
            variant="contained"
            startIcon={
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"
                alt="Spotify"
                style={{
                  width: 20,
                  height: 20,
                  filter: "brightness(0) invert(1)",
                }}
              />
            }
            sx={{
              backgroundColor: "#000",
              color: "#1DB954",
              "&:hover": {
                backgroundColor: "#1ed760",
                color: "#fff",
              },
              textTransform: "none",
              fontWeight: "bold",
            }}
            href="https://www.spotify.com"
            target="_blank"
          >
            Spotify
          </Button>

          <Button
            variant="contained"
            startIcon={
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
                alt="Instagram"
                style={{ width: 20, height: 20 }}
              />
            }
            sx={{
              backgroundColor: "#E1306C",
              "&:hover": { backgroundColor: "#ff4f91" },
              textTransform: "none",
              fontWeight: "bold",
            }}
            href="https://www.instagram.com"
            target="_blank"
          >
            Instagram
          </Button>

          <Button
            variant="contained"
            startIcon={
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix"
                style={{
                  width: 20,
                  height: 20,
                  filter: "brightness(0) invert(1)",
                }}
              />
            }
            sx={{
              backgroundColor: "#000",
              color: "#E50914",
              "&:hover": {
                backgroundColor: "#ff1c1c",
                color: "#fff",
              },
              textTransform: "none",
              fontWeight: "bold",
            }}
            href="https://www.netflix.com"
            target="_blank"
          >
            Netflix
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default About;
