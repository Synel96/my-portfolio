import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Skeleton,
  Grow,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { fetchProjects } from "../../services/projectService";

const brandColor = "#673ab7";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects()
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch projects:", error);
        setLoading(false);
      });
  }, []);

  return (
    <Box
      sx={{
        display: "grid",
        gap: 4,
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
        px: 2,
        py: 4,
      }}
    >
      {loading
        ? Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} variant="rectangular" height={300} />
          ))
        : projects.map(
            ({ id, title, description, project_url, images, stack }) => (
              <Grow in={true} key={id} timeout={700}>
                <Card
                  sx={{
                    maxWidth: 345,
                    mx: "auto",
                    boxShadow: 3,
                    transition: "transform 0.3s ease",
                    ":hover": {
                      transform: "scale(1.03)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" component="h2" gutterBottom>
                      {title}
                    </Typography>

                    {images && images.length > 0 && (
                      <Swiper
                        modules={[Autoplay, Pagination]}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        loop={true}
                        style={{ marginBottom: 16 }}
                      >
                        {images.map(({ id: imgId, image_url }) => (
                          <SwiperSlide key={imgId}>
                            <Box
                              component="img"
                              src={image_url}
                              alt="project preview"
                              sx={{
                                width: "100%",
                                height: 180,
                                objectFit: "cover",
                                borderRadius: 1,
                              }}
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    )}

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 1 }}
                    >
                      {description}
                    </Typography>

                    <Typography
                      variant="caption"
                      display="block"
                      sx={{ fontStyle: "italic", mb: 1 }}
                    >
                      Stack: {stack}
                    </Typography>
                  </CardContent>

                  {project_url && (
                    <CardActions>
                      <Button
                        variant="contained"
                        href={project_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          backgroundColor: brandColor,
                          "&:hover": {
                            backgroundColor: "#532e8a",
                          },
                          textTransform: "none",
                          fontWeight: "bold",
                        }}
                      >
                        GitHub Link
                      </Button>
                    </CardActions>
                  )}
                </Card>
              </Grow>
            )
          )}
    </Box>
  );
};

export default Projects;
