import { Box, Typography, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Description, Code } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import profileImage from '../assets/images/profile.jpg';
import Comments from '../components/Comments';

const Home = () => {
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      {/* Hero Section with Background Image */}
      <Box
        sx={{
          position: 'relative',
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, rgba(248, 250, 252, 0.2), rgba(248, 250, 252, 1) 85%)',
            zIndex: 1,
          },
        }}
      >
        <Box
          component="img"
          src={profileImage}
          alt="Jeongmin Ryu - Interaction Designer & Engineer"
          sx={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'grayscale(100%)',
          }}
        />
        
        {/* Content Overlay */}
        <Container 
          maxWidth="lg" 
          sx={{ 
            position: 'relative',
            zIndex: 2,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            pt: { xs: 8, md: 0 },
          }}
        >
          <Box 
            sx={{ 
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '2fr 1fr', lg: '3fr 2fr' },
              gap: 3,
            }}
          >
            <Box>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h1"
                  component="h1"
                  gutterBottom
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 800,
                    lineHeight: 1.2,
                    mb: 2,
                    color: '#1e293b',
                    textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  }}
                >
                  Hi, I'm{' '}
                  <Box component="span" sx={{ color: 'primary.main' }}>
                    Jeongmin Ryu
                  </Box>
                </Typography>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{ 
                    mb: 4, 
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                    color: '#475569',
                    textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                  }}
                >
                  Interaction Designer & Engineer
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
                  <Button
                    component={Link}
                    to="/projects"
                    variant="contained"
                    size="large"
                    startIcon={<Code />}
                    sx={{
                      borderRadius: '50px',
                      px: 4,
                      py: 1.5,
                      textTransform: 'none',
                      fontSize: '1.1rem',
                      background: 'linear-gradient(45deg, #2563eb, #7c3aed)',
                      backdropFilter: 'blur(10px)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #1e40af, #5b21b6)',
                      },
                    }}
                  >
                    View Projects
                  </Button>
                  <Button
                    component="a"
                    href="https://docs.google.com/document/d/1THJXUJQiZ22WHPw7G3FWacK-ZLLbnJ77/edit?usp=sharing&ouid=116805652462823988859&rtpof=true&sd=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    size="large"
                    startIcon={<Description />}
                    sx={{
                      borderRadius: '50px',
                      px: 4,
                      py: 1.5,
                      textTransform: 'none',
                      fontSize: '1.1rem',
                      borderColor: 'rgba(37, 99, 235, 0.5)',
                      color: '#2563eb',
                      backdropFilter: 'blur(10px)',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      '&:hover': {
                        borderColor: '#2563eb',
                        backgroundColor: 'rgba(37, 99, 235, 0.04)',
                      },
                    }}
                  >
                    View CV
                  </Button>
                </Box>
              </motion.div>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* About Section */}
      <Box 
        id="about" 
        sx={{ 
          py: { xs: 8, md: 12 }, 
          background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '15%',
            width: '70%',
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(37, 99, 235, 0.2), transparent)',
          },
        }}
      >
        <Container maxWidth="lg">
          <Box 
            sx={{ 
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '3fr 1fr' },
              gap: 4,
              justifyContent: 'center',
            }}
          >
            <Box sx={{ gridColumn: { xs: '1', md: '1 / 3' }, maxWidth: '800px', mx: 'auto' }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    p: { xs: 3, md: 6 },
                    borderRadius: '24px',
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: 'linear-gradient(45deg, #2563eb, #7c3aed)',
                      borderRadius: '24px 24px 0 0',
                    },
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: '1.1rem', md: '1.25rem' },
                      lineHeight: 1.8,
                      mb: 4,
                      color: '#1e293b',
                      letterSpacing: '0.01em',
                    }}
                  >
                    I'm exploring how technology, emotion, and storytelling can meet in everyday life. 
                    With a background in Mechanical Engineering from{' '}
                    <Box component="span" sx={{ color: '#2563eb', fontWeight: 500 }}>
                      Yonsei University
                    </Box>{' '}
                    and a Master's in Industrial Design from{' '}
                    <Box component="span" sx={{ color: '#2563eb', fontWeight: 500 }}>
                      KAIST
                    </Box>
                    , my work blends technical precision with creative curiosity.
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: '1.1rem', md: '1.25rem' },
                      lineHeight: 1.8,
                      mb: 4,
                      color: '#1e293b',
                      letterSpacing: '0.01em',
                    }}
                  >
                    From IoT startups and robotic avatars to diary-writing home appliances and poetic machines, 
                    I build prototypes that invite people to experience technology in unexpected and meaningful ways.
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: '1.1rem', md: '1.25rem' },
                      lineHeight: 1.8,
                      color: '#2563eb',
                      fontStyle: 'italic',
                      fontWeight: 500,
                      textAlign: 'center',
                      mt: 6,
                      letterSpacing: '0.02em',
                    }}
                  >
                    Let's create something thoughtful—and a little bit magical—together.
                  </Typography>
                </Box>
              </motion.div>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{ mt: 12 }}>
        <Comments />
      </Box>
    </Box>
  );
};

export default Home; 