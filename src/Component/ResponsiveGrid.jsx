import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import ImgMediaCard from "./ImgMediaCard";
import Typography from "@mui/material/Typography";
// ResponsiveGrid.jsx
const ResponsiveGrid = ({ products, onProductSelect }) => {
  const renderProduct = () => {
    console.log("productsssss, ", products);

    return products.map((product) => (
      <Grid xs={2} sm={4} md={4} key={product.id} item="true">
        <ImgMediaCard
          product={product}
          onSelect={() => onProductSelect(product)}
        />
      </Grid>
    ));
  };

  return (
    <Box sx={{ flexGrow: 1, mt: 20, mb: 100 }}>
      <Typography variant="h3" component="div" align="center" sx={{ mb: 5 }}>
        Shop shoes
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {renderProduct()}
      </Grid>
    </Box>
  );
};

export default ResponsiveGrid;
