import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Skeleton,
  Grow,
} from "@mui/material";
import { getCertifications } from "../../services/certificationService";

const Resume = () => {
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCertifications()
      .then((data) => {
        setCertifications(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading certifications:", error);
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
        : certifications.map(
            ({
              id,
              title,
              date,
              technologies,
              description,
              preview_image_url,
            }) => (
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
                  <Box
                    component="img"
                    src={preview_image_url}
                    alt="certificate preview"
                    sx={{
                      width: "100%",
                      height: 180,
                      objectFit: "cover",
                      borderTopLeftRadius: 4,
                      borderTopRightRadius: 4,
                    }}
                  />

                  <CardContent>
                    <Typography variant="h6" component="div" gutterBottom>
                      {title}
                    </Typography>

                    <Typography
                      variant="caption"
                      display="block"
                      sx={{ color: "text.secondary", mb: 1 }}
                    >
                      Issued: {new Date(date).toLocaleDateString()}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{ fontStyle: "italic", mb: 1 }}
                      color="primary.main"
                    >
                      Stack: {technologies}
                    </Typography>

                    {description && (
                      <Typography variant="body2" color="text.secondary">
                        {description}
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </Grow>
            )
          )}
    </Box>
  );
};

export default Resume;
