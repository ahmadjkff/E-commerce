import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { ProductContext } from "../../Contexts/ProductContext";
import { CartContext } from "../../Contexts/CartContext";

export default function RatingComponent({ product, rating, isreadonly }) {
  const { setRatingProductsItems } = React.useContext(ProductContext);
  const { setShowAlert, setAlertMessage, setAlertSeverity } =
    React.useContext(CartContext);

  return (
    <Box sx={{ "& > legend": { mt: 2 } }}>
      <Rating
        readOnly={isreadonly}
        name="rating"
        value={rating}
        onChange={(event, newValue) => {
          setShowAlert(true);
          setAlertMessage("Thank you for your rating");
          setAlertSeverity("success");
          setRatingProductsItems(product, newValue);
        }}
      />
    </Box>
  );
}
