import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';

const Viewproduct = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <Box sx={{ width: '100%', padding: '1%' }}>
      <Grid container spacing={3}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ minWidth: 275, margin: 'auto' , borderRadius: '20px'}}>
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt={item.title}
                sx={{ objectFit: 'contain' }}
              />
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="h5" component="div">
                  ${item.price}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Category: {item.category}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Viewproduct;
