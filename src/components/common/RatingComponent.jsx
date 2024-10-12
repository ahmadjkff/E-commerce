import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { ProductContext } from "../../Contexts/ProductContext";

export default function RatingComponent({ product, rating, isreadonly }) {
  const [value, setValue] = React.useState(rating);
  const { setRatingProductsItems } = React.useContext(ProductContext);

  return (
    <Box sx={{ "& > legend": { mt: 2 } }}>
      <Rating
        readOnly={isreadonly}
        name="rating"
        value={value}
        onChange={(event, newValue) => {
          setRatingProductsItems(product, newValue);
        }}
      />
    </Box>
  );
}
