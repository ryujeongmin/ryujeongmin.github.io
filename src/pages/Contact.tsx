import { Container, Typography, Box, Divider } from '@mui/material';
import Comments from '../components/Comments';

const Contact = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 8 }}>
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom 
          align="center"
          sx={{
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            fontWeight: 700,
            color: '#1d1d1f',
            letterSpacing: '-0.02em',
            mb: 6,
          }}
        >
          Contact
        </Typography>

        <Box 
          sx={{ 
            maxWidth: '600px', 
            mx: 'auto',
            mb: 8,
            p: 4,
            borderRadius: '20px',
            background: '#f5f5f7',
          }}
        >
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#1d1d1f' }}>
              Email
            </Typography>
            <Typography variant="body1" sx={{ color: '#86868b' }}>
              <a
                href="mailto:ryujeongmin0224@gmail.com"
                style={{ 
                  color: 'inherit', 
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#2563eb'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#86868b'}
              >
                ryujeongmin0224@gmail.com
              </a>
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#1d1d1f' }}>
              CV
            </Typography>
            <Typography variant="body1" sx={{ color: '#86868b' }}>
              <a
                href="https://docs.google.com/document/d/1THJXUJQiZ22WHPw7G3FWacK-ZLLbnJ77/edit?usp=sharing&ouid=116805652462823988859&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  color: 'inherit', 
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#2563eb'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#86868b'}
              >
                View CV
              </a>
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom sx={{ color: '#1d1d1f' }}>
              Social Media
            </Typography>
            <Box sx={{ display: 'flex', gap: 3 }}>
              {[
                { name: 'Instagram', url: 'https://www.instagram.com/ryujeongmin3812' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/정민-류-4656252a9/' },
                { name: 'GitHub', url: 'https://github.com/ryujeongmin' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    color: '#86868b',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#2563eb'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#86868b'}
                >
                  {social.name}
                </a>
              ))}
            </Box>
          </Box>
        </Box>

        <Divider sx={{ mb: 6 }} />
      </Box>

      <Comments />
    </Container>
  );
};

export default Contact; 