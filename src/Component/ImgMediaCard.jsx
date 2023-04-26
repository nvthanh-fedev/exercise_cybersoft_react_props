import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CustomModal from "./CustomModal";

const ImgMediaCard = ({ product }) => {
  const [openModal, setOpenModal] = React.useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" height="100%" image={product.image} />
        <CardContent>
          <Typography id="modal-modal-title" variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h6">
            {product.price} $
          </Typography>
        </CardContent>
        <CardActions>
          <CustomModal
            open={openModal}
            onClick={handleOpenModal}
            onClose={handleCloseModal}
            product={product}
          />
        </CardActions>
      </Card>
    </div>
  );
};

export default ImgMediaCard;
