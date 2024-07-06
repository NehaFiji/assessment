import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddProduct = ({ product = {} }) => {
  const [form, setForm] = useState({
    productName: product.productName || '',
    productDescription: product.productDescription || '',
    productPrice: product.productPrice || '',
    productCategory: product.productCategory || ''
  });

  function valueAdd() {
    console.log(form);
  }

  function valueCap(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Product Name"
          name="productName"
          value={form.productName}
          onChange={valueCap}
          
        />
      </div>
      <div>
        <TextField
          id="outlined-required"
          label="Product Description"
          name="productDescription"
          value={form.productDescription}
          onChange={valueCap}
          
        />
      </div>
      <div>
        <TextField
          id="outlined-required"
          label="Price"
          name="productPrice"
          value={form.productPrice}
          onChange={valueCap}
         
        />
      </div>
      <div>
        <TextField
          id="outlined-required"
          label="Category"
          name="productCategory"
          value={form.productCategory}
          onChange={valueCap}
          
        />
      </div>
      <div>
        <Button
          variant="contained"
          onClick={valueAdd}
          sx={{
            backgroundColor: '#f59d9b',
            '&:hover': {
              backgroundColor: '#f5939b',
            },
          }}
        >
          Submit
        </Button>
        <br />
      </div>
    </Box>
  );
};

export default AddProduct;