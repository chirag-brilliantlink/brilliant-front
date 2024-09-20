import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { AppType } from 'next/app';
import { ReactElement } from 'react';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      // Collect styled components styles during rendering
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: AppType) => (props: any): ReactElement =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Brilliant Link Studio</title>
          <meta name="description" content="Brilliant Link Studio" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/chain.png" />
          {/* Here the server-side rendered styles will be injected */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
