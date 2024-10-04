import * as React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

export default function CircularSize() {
  return (
    <Stack
      spacing={2}
      direction="row"
      alignItems="center"
      justifyContent="center"
      marginY={20}
    >
      <CircularProgress size="10rem" />
      <h1 className="text-6xl">Loading...</h1>
    </Stack>
  );
}
