import { useParams } from 'react-router-dom';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 'foldifolda',
    title: 'FoldiFolda',
    description: 'Chair-mountable robotic avatar system tailored for activity-based group learnings in hybrid educational settings.',
    images: [
      { src: 'fig1.png', title: 'Video' },
      { src: 'UI 1.png', title: 'Control UI' },
      { src: 'installation.png', title: 'Installation Step' },
      { src: 'diagram.png', title: 'Software' },
      { src: 'explodedview.png', title: 'Hardware' },
    ],
    videoUrl: 'https://www.youtube.com/embed/XqLyX_9wlYg',
  },
  // Add other projects here...
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <Container>
        <Typography variant="h4">Project not found</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          {project.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          {project.description}
        </Typography>

        {project.videoUrl && (
          <Box sx={{ mb: 6 }}>
            <Typography variant="h5" gutterBottom>
              Video
            </Typography>
            <Box
              sx={{
                position: 'relative',
                paddingTop: '56.25%', // 16:9 aspect ratio
                mb: 4,
              }}
            >
              <iframe
                src={project.videoUrl}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 0,
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Box>
          </Box>
        )}

        <Grid container spacing={4}>
          {project.images.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={`/src/assets/images/${image.src}`}
                    alt={image.title}
                  />
                  <CardContent>
                    <Typography variant="h6" component="h3">
                      {image.title}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default ProjectDetail; 