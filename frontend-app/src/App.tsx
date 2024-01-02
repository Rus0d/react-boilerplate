import React from "react";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";

import { store } from "store";
import router from "pages";
import { ThemeProvider } from "components/theme-provider";

import "./App.scss";

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider>
          <CssBaseline />
          <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  );
};

export default App;
