import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import { Container } from "@mui/system";
import './firebase/config.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Container maxWidth='lg' sx={{textAlign : 'center' , mt: '50px'}}>
      <RouterProvider router={router} />
    </Container>
  </React.StrictMode>
);
