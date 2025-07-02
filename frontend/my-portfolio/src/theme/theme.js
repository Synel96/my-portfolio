import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#673ab7",
    },
    secondary: {
      main: "#9575cd",
      dark: "#65499c",
    },
    background: {
      default: "#e6e0f8",
      paper: "#fff",
    },
  },
});

export default theme;
