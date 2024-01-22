// src/components/Planning1.jsx
import React from 'react';
import { Button, Typography, Container, Box, useMediaQuery } from '@mui/material';
import Layout from './Layout';

const Planning1 = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const buttonStyle = {
    margin: '8px',
    width: isSmallScreen ? '100%' : '48%',
    height: '150px',
    backgroundColor: '#b3e0ff',
    color: '#000',
    borderRadius: '12px',
    fontSize: '1.5rem',
  };

  const darkBlueButtonStyle = {
    width: isSmallScreen ? '100%' : '48%',
    height: '150px',
    backgroundColor: '#0000cd',
    color: '#fff',
    borderRadius: '12px',
    fontSize: '1.5rem',
    margin: '100px',
  };

  const createPlanButtonStyle = {
    ...darkBlueButtonStyle,
    marginTop: '300px', // Top margin of 100
    marginBottom: '5px', // Bottom margin of 40
  };
  

  return (
    <Layout>
      <Container>
        <Box textAlign="center" mt={4}>
          <Typography variant="h4" style={{ fontWeight: 'bold', marginBottom: '16px', fontSize: '3rem' }}>
            What would you like to do?
          </Typography>
          <Button variant="contained" color="primary" size="large" style={darkBlueButtonStyle}>
            Restaurants
          </Button>
          <Typography variant="body2" style={{ margin: '16px', fontSize: '2.5rem' }}>
            COMING SOON:
          </Typography>
          <Box
            display="flex"
            flexDirection={isSmallScreen ? 'column' : 'row'}
            alignItems="center"
            justifyContent="space-between"
            mt={2}
          >
            <Button variant="contained" color="primary" size="large" style={buttonStyle}>
              Local Attractions
            </Button>
            <Button variant="contained" color="primary" size="large" style={buttonStyle}>
              Arts & Entertainment
            </Button>
          </Box>
          <Box
            display="flex"
            flexDirection={isSmallScreen ? 'column' : 'row'}
            alignItems="center"
            justifyContent="space-between"
            mt={2}
          >
            <Button variant="contained" color="primary" size="large" style={buttonStyle}>
              Shopping
            </Button>
            <Button variant="contained" color="primary" size="large" style={buttonStyle}>
              Beauty and Spa
            </Button>
          </Box>
          <Box
            display="flex"
            flexDirection={isSmallScreen ? 'column' : 'row'}
            alignItems="center"
            justifyContent="space-between"
            mt={2}
          >
            <Button variant="contained" color="primary" size="large" style={buttonStyle}>
              Nightlife
            </Button>
            <Button variant="contained" color="primary" size="large" style={buttonStyle}>
              Hotel and Travel
            </Button>
          </Box>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={createPlanButtonStyle}
          >
            Create a Plan
          </Button>
        </Box>
      </Container>
    </Layout>
  );
};

export default Planning1;
