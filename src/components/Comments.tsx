import { Box, Typography, Button, Paper, Avatar, Snackbar, Alert } from '@mui/material';
import { useState, useEffect } from 'react';

interface Comment {
  id: number;
  user: {
    login: string;
    avatar_url: string;
  };
  created_at: string;
  body: string;
}

const Comments = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoadingComments, setIsLoadingComments] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    setIsLoadingComments(true);
    try {
      const response = await fetch(
        'https://api.github.com/repos/ryujeongmin/ryujeongmin.github.io/issues/1/comments'
      );
      if (response.ok) {
        const data = await response.json();
        setComments(data);
      }
    } catch (err) {
      console.error('Failed to fetch comments:', err);
      setSnackbar({
        open: true,
        message: 'Failed to load comments. Please try again later.',
        severity: 'error',
      });
    }
    setIsLoadingComments(false);
  };

  const handleCommentSubmit = () => {
    window.open('https://github.com/ryujeongmin/ryujeongmin.github.io/issues/1', '_blank');
  };

  return (
    <Box sx={{ maxWidth: '800px', mx: 'auto', px: { xs: 2, md: 4 } }}>
      <Typography 
        variant="h3" 
        component="h2" 
        gutterBottom 
        align="center"
        sx={{
          fontSize: { xs: '2rem', md: '2.5rem' },
          fontWeight: 600,
          color: '#1d1d1f',
          letterSpacing: '-0.02em',
          mb: 4,
        }}
      >
        Comments
      </Typography>

      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          size="large"
          onClick={handleCommentSubmit}
          sx={{
            py: 1.5,
            px: 4,
            borderRadius: '12px',
            textTransform: 'none',
            fontSize: '1.1rem',
            background: 'linear-gradient(45deg, #2563eb, #7c3aed)',
            boxShadow: 'none',
            '&:hover': {
              background: 'linear-gradient(45deg, #1e40af, #5b21b6)',
              boxShadow: '0 4px 16px rgba(37, 99, 235, 0.2)',
            },
          }}
        >
          Leave a Comment on GitHub
        </Button>
      </Box>

      <Box sx={{ mt: 4 }}>
        {isLoadingComments ? (
          <Typography align="center" sx={{ color: '#86868b' }}>
            Loading comments...
          </Typography>
        ) : comments.length > 0 ? (
          comments.map((comment) => (
            <Paper
              key={comment.id}
              elevation={0}
              sx={{
                p: 3,
                mb: 2,
                borderRadius: '16px',
                background: '#f5f5f7',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar
                  src={comment.user.avatar_url}
                  alt={comment.user.login}
                  sx={{ width: 40, height: 40, mr: 2 }}
                />
                <Box>
                  <Typography
                    variant="subtitle1"
                    sx={{ 
                      fontWeight: 500,
                      color: '#1d1d1f',
                    }}
                  >
                    {comment.user.login}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: '#86868b' }}
                  >
                    {new Date(comment.created_at).toLocaleDateString()}
                  </Typography>
                </Box>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  color: '#1d1d1f',
                  lineHeight: 1.6,
                  '& a': {
                    color: '#2563eb',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  },
                }}
              >
                {comment.body}
              </Typography>
            </Paper>
          ))
        ) : (
          <Typography align="center" sx={{ color: '#86868b' }}>
            No comments yet. Be the first to comment!
          </Typography>
        )}
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
      >
        <Alert 
          onClose={() => setSnackbar(prev => ({ ...prev, open: false }))} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Comments; 