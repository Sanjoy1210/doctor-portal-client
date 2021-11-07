import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';


const services = [
  {
    name: 'Fluoride Treatment',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, iure! Laboriosam repudiandae blanditiis, libero sequi sapiente voluptatem, quasi accusantium itaque iste, non et pariatur corrupti inventore iusto voluptate quibusdam eum.',
    img: fluoride
  },
  {
    name: 'Cavity Treatment',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, iure! Laboriosam repudiandae blanditiis, libero sequi sapiente voluptatem, quasi accusantium itaque iste, non et pariatur corrupti inventore iusto voluptate quibusdam eum.',
    img: cavity
  },
  {
    name: 'Teeth Whitening',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, iure! Laboriosam repudiandae blanditiis, libero sequi sapiente voluptatem, quasi accusantium itaque iste, non et pariatur corrupti inventore iusto voluptate quibusdam eum.',
    img: whitening
  },

]


const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography variant="h6" component="div" sx={{ fontWeight: 500, color: 'success.main', m: 2 }}>
          OUR SERVICES
        </Typography>
        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', mb: 5 }}>
          Services We Provide
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {/* {services.map((service, index) => (
            <Grid item xs={4} sm={4} md={4} key={index}>
              <Service
                service={service}
              ></Service>
            </Grid>
          ))} */}

          {
            services.map(service => <Service
              key={service.name}
              service={service}
            />)
          }
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;