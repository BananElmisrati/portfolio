import React from 'react';
import { Box, Typography } from '@mui/material';

const skills = [
  { name: 'JavaScript', emoji: '💻' },
  { name: 'Spring Boot', emoji: '🌱' },
  { name: 'AWS', emoji: '☁️' },
  { name: 'Relational DB', emoji: '🗄️' },
  { name: 'Non-Relational DB', emoji: '📦' },
  { name: 'Responsive Design', emoji: '📱' },
  { name: 'Version Control (Git)', emoji: '🔧' },
  { name: 'REST API', emoji: '🔗' },
  { name: 'Website Deployment', emoji: '🚀' },
];

export default function CoreSkills() {
  return (
    <Box id="skills" py={6} display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h4" mb={4}>
        Core Skills
      </Typography>

      <Box
        display="grid"
        gridTemplateColumns={{ xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
        gap={4}
        justifyItems="center"
      >
        {skills.map((skill, index) => (
          <Box
            key={index}
            display="flex"
            flexDirection="column"
            alignItems="center"
            p={2}
            borderRadius="16px"
            boxShadow="0 2px 8px rgba(0,0,0,0.1)"
            width="120px"
            textAlign="center"
            transition="transform 0.2s"
            sx={{
              '&:hover': {
                transform: 'scale(1.05)',
                background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
                color: 'white'
              },
            }}
          >
            <span style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{skill.emoji}</span>
            <Typography variant="subtitle1">{skill.name}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
