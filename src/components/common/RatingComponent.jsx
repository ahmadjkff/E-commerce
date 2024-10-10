import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { ProductContext } from "../../Contexts/ProductContext";

export default function RatingComponent({ product, rating }) {
  const [value, setValue] = React.useState(rating);
  const { setRatingProductsItems, setRating } =
    React.useContext(ProductContext);

  return (
    <Box sx={{ "& > legend": { mt: 2 } }}>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setRating(newValue);
          setRatingProductsItems(product);
        }}
      />
    </Box>
  );
}
