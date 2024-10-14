import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { CartContext } from "../../Contexts/CartContext";

export default function FilledAlerts() {
  const { showAlert, setShowAlert, alertMessage, alertSeverity } =
    React.useContext(CartContext);

  React.useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showAlert, setShowAlert]);

  if (!showAlert) return null;

  return (
    <Stack
      style={{
        width: "fit-content",
        position: "fixed",
        top: 10,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
      }}
      spacing={2}
    >
      <Alert variant="filled" severity={alertSeverity}>
        {alertMessage}
      </Alert>
    </Stack>
  );
}
