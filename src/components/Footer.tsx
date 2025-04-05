import { Box, Container, Typography, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/images/white.png';
import instagramIcon from '../assets/icons/ico_instagram_lightgrey.svg';
import linkedinIcon from '../assets/images/linkedin.png';
import githubIcon from '../assets/images/git.png';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: 'auto',
        backgroundColor: 'black',
        color: 'white',
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
          }}
        >
          <Box component={Link} to="/">
            <img src={logo} alt="Jeongmin Ryu" height="40" />
          </Box>

          <Box 
            sx={{ 
              display: 'flex', 
              gap: 4,
              '& img': {
                width: '24px',
                height: '24px',
                objectFit: 'contain',
                transition: 'opacity 0.2s ease',
                '&:hover': {
                  opacity: 0.8,
                },
              },
            }}
          >
            <MuiLink
              href="https://www.instagram.com/ryujeongmin3812"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <img src={instagramIcon} alt="Instagram" />
            </MuiLink>
            <MuiLink
              href="https://www.linkedin.com/in/정민-류-4656252a9/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <img src={linkedinIcon} alt="LinkedIn" />
            </MuiLink>
            <MuiLink
              href="https://github.com/ryujeongmin"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <img src={githubIcon} alt="GitHub" />
            </MuiLink>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Typography variant="body2" color="inherit">
              <MuiLink
                href="mailto:ryujeongmin0224@gmail.com"
                color="inherit"
                sx={{ 
                  textDecoration: 'none',
                  transition: 'opacity 0.2s ease',
                  '&:hover': {
                    opacity: 0.8,
                  },
                }}
              >
                ryujeongmin0224@gmail.com
              </MuiLink>
            </Typography>

            <Typography variant="body2" color="inherit">
              © {new Date().getFullYear()} Jeongmin Ryu
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 