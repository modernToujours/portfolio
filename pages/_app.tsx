import React from "react";
import type { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";

import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default App;
