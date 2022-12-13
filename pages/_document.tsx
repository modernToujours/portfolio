import React from "react";
import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@mui/styles";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <body>
          <Head></Head>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const materialSheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () => {
    return originalRenderPage({
      enhanceApp: (App) => {
        return (props) => {
          return materialSheets.collect(<App {...props} />);
        };
      },
    });
  };

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: <>{initialProps.styles}</>,
  };
};
