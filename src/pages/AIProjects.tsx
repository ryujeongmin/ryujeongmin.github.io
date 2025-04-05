import { Box, Container, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const aiProjects = [
  {
    id: 'sunflower-seeds',
    title: '해바라기 씨앗은 어디서 구하나요?',
    image: 'https://images.pexels.com/photos/189848/pexels-photo-189848.jpeg',
    description: 'AI-assisted project about sunflower seeds',
  },
  {
    id: 'trading-system',
    title: 'API를 활용한 변동성 기반 자동매매 시스템',
    image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg',
    description: 'Volatility-based automated trading system using API',
  },
];

const AIProjects = () => {
  return (
    <Box sx={{ 
      background: '#f5f5f7',
      minHeight: '100vh',
      pt: { xs: 10, md: 12 },
      pb: { xs: 8, md: 10 },
    }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h2" 
            component="h1" 
            align="center" 
            sx={{ 
              mb: { xs: 3, md: 4 },
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 600,
              color: '#1d1d1f',
              letterSpacing: '-0.02em',
            }}
          >
            Projects by AI
          </Typography>
          <Typography 
            variant="h5" 
            align="center" 
            sx={{ 
              mb: { xs: 6, md: 8 },
              color: '#86868b',
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              fontWeight: 400,
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.5,
            }}
          >
            Innovative projects leveraging artificial intelligence and machine learning technologies
          </Typography>
        </motion.div>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, md: 3 } }}>
          {aiProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                component={Link}
                to={`/projects/${project.id}`}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  textDecoration: 'none',
                  background: '#fff',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: 'none',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  height: { xs: 'auto', md: '300px' },
                  '&:hover': {
                    transform: 'scale(1.02)',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                    '& .MuiCardMedia-root': {
                      transform: 'scale(1.05)',
                    },
                  },
                }}
              >
                <Box 
                  sx={{ 
                    position: 'relative',
                    width: { xs: '100%', md: '450px' },
                    height: { xs: '300px', md: '100%' },
                    overflow: 'hidden',
                  }}
                >
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  />
                </Box>
                <CardContent 
                  sx={{ 
                    flex: 1,
                    p: { xs: 3, md: 4 },
                    '&:last-child': { pb: { xs: 3, md: 4 } },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <Typography 
                    variant="h5" 
                    component="h2"
                    sx={{
                      fontSize: { xs: '1.5rem', md: '1.75rem' },
                      fontWeight: 500,
                      color: '#1d1d1f',
                      mb: 2,
                      letterSpacing: '-0.01em',
                      lineHeight: 1.3,
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{
                      color: '#86868b',
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      lineHeight: 1.6,
                      maxWidth: '600px',
                    }}
                  >
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default AIProjects; 