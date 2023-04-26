import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CardMedia from "@mui/material/CardMedia";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
};

const CustomModal = ({ open, onClick, onClose, product }) => {
  return (
    <div>
      <Button onClick={onClick}>View Detail</Button>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CardMedia
            component="img"
            height="500"
            image={product.image}
            alt="Paella dish"
          />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {product.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {product.description}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default CustomModal;
