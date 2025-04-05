import { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'About', link: '/', isExternal: false },
    { text: 'Projects', link: '/projects', isExternal: false },
    { text: 'AI Projects', link: '/ai-projects', isExternal: false },
    { text: 'Contact', link: '/contact', isExternal: false },
  ];

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem
          key={item.text}
          component={item.isExternal ? 'a' : Link}
          href={item.isExternal ? item.link : undefined}
          to={item.isExternal ? undefined : item.link}
          target={item.isExternal ? '_blank' : undefined}
          rel={item.isExternal ? 'noopener noreferrer' : undefined}
          onClick={handleDrawerToggle}
          sx={{
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
            },
          }}
        >
          <ListItemText 
            primary={item.text}
            sx={{
              '& .MuiTypography-root': {
                fontSize: '0.875rem',
                fontWeight: 400,
              }
            }}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar 
      position="fixed" 
      color="transparent" 
      elevation={0}
      sx={{
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', py: 1.5 }}>
        <Box 
          component={Link} 
          to="/" 
          sx={{ 
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif',
              fontWeight: 500,
              fontSize: '1.125rem',
              color: '#1d1d1f',
              letterSpacing: '-0.01em',
            }}
          >
            Jeongmin Ryu
          </Typography>
        </Box>
        
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: '#1d1d1f' }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                '& .MuiDrawer-paper': {
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                }
              }}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 3 }}>
            {menuItems.map((item) => (
              <Box
                key={item.text}
                component={item.isExternal ? 'a' : Link}
                to={item.isExternal ? undefined : item.link}
                href={item.isExternal ? item.link : undefined}
                target={item.isExternal ? '_blank' : undefined}
                rel={item.isExternal ? 'noopener noreferrer' : undefined}
                sx={{
                  textDecoration: 'none',
                  color: '#1d1d1f',
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                  opacity: 0.85,
                  transition: 'opacity 0.2s ease-in-out',
                  '&:hover': {
                    opacity: 1,
                  },
                }}
              >
                {item.text}
              </Box>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header; 