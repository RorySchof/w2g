// src/components/Planning5.jsx
import React from 'react';
import { Button, Typography, Container, Box, useMediaQuery } from '@mui/material';
import Layout from './Layout';

const Planning5 = () => {
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
    marginTop: '300px',
    marginBottom: '5px',
  };


  return (
    <Layout>
      <Container>
        <Box textAlign="center" mt={4}>
          <Typography variant="h4" style={{ fontWeight: 'bold', marginBottom: '16px', fontSize: '3rem' }}>
            How many results do you want?
          </Typography>

          <Typography variant="body2" style={{ margin: '16px', fontSize: '2.5rem' }}>
            Results refers to the number of options you want to choose from
          </Typography>

          <Typography variant="body2" style={{ margin: '16px', fontSize: '2.0rem', textAlign: 'left' }}>
            Results
          </Typography>
          <Box
            display="flex"
            flexDirection={isSmallScreen ? 'column' : 'row'}
            alignItems="center"
            justifyContent="space-between"
            mt={2}
          >
            <Button variant="contained" color="primary" size="large" style={buttonStyle}>
              3        
              </Button>
            <Button variant="contained" color="primary" size="large" style={buttonStyle}>
              5
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
              10
            </Button>
            <Button variant="contained" color="primary" size="large" style={buttonStyle}>
              15+
            </Button>
          </Box>

          <Typography variant="h4" style={{ fontWeight: 'bold', marginBottom: '16px', fontSize: '3rem' }}>
            How many matches do you want?
          </Typography>

          <Typography variant="body2" style={{ margin: '16px', fontSize: '2.5rem' }}>
            Matches refers to the number of restaurants your group has agreed on.          </Typography>

          <Typography variant="body2" style={{ margin: '16px', fontSize: '2.0rem', textAlign: 'left' }}>
            Number of matches
          </Typography>
          <Box
            display="flex"
            flexDirection={isSmallScreen ? 'column' : 'row'}
            alignItems="center"
            justifyContent="space-between"
            mt={2}
          >
            <Button variant="contained" color="primary" size="large" style={buttonStyle}>
              1
            </Button>
            <Button variant="contained" color="primary" size="large" style={buttonStyle}>
              3
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
              5
            </Button>
            <Button variant="contained" color="primary" size="large" style={buttonStyle}>
              Custom
            </Button>
          </Box>
          <Box
            display="flex"
            flexDirection={isSmallScreen ? 'column' : 'row'}
            alignItems="center"
            justifyContent="space-between"
            mt={2}
          >
          </Box>

          <Typography variant="body2" style={{ margin: '16px', fontSize: '2.0rem', textAlign: 'left' }}>
            Price Range (Per Person)
          </Typography>

          <Box
            display="flex"
            flexDirection={isSmallScreen ? 'column' : 'row'}
            alignItems="center"
            justifyContent="space-between"
            mt={2}
          >
            <Button variant="contained" color="primary" size="large" style={buttonStyle}>
              $50
            </Button>
            <Button variant="contained" color="primary" size="large" style={buttonStyle}>
              $50 - $100
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
              $100 - $150
            </Button>
            <Button variant="contained" color="primary" size="large" style={buttonStyle}>
              $150+
            </Button>
          </Box>


          <Typography variant="body2" style={{ margin: '16px', fontSize: '2.0rem', textAlign: 'left' }}>
            Rating(Optional)
          </Typography>

          <Box
            display="flex"
            flexDirection={isSmallScreen ? 'column' : 'row'}
            alignItems="center"
            justifyContent="space-between"
            mt={2}
          >
            <Button variant="contained" color="primary" size="large" style={buttonStyle}>
              Any Rating           </Button>
            <Button variant="contained" color="primary" size="large" style={buttonStyle}>
              3+
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
              4+
            </Button>
            <Button variant="contained" color="primary" size="large" style={buttonStyle}>
              5
            </Button>
          </Box>

          <Typography variant="body2" style={{ margin: '16px', fontSize: '2.0rem', textAlign: 'left' }}>
            Do you want to save this searcht to your account. yes no button
          </Typography>

          <Button
            variant="contained"
            color="primary"
            size="large"
            style={createPlanButtonStyle}
          >
            Next
          </Button>
        </Box>
      </Container>
    </Layout>
  );
};

export default Planning5;
