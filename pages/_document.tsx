import NextDocument, { Head, Html, Main, NextScript } from "next/document";

type Props = Record<string, unknown>;

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html style={{background: "yellow"}}>
        <Head />
        <body className="h-full overflow-hidden">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
