import Document, { Html, Head, Main, NextScript } from "next/document";
class myDocument extends Document {
  render() {
    return (
      <Html>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />{" "}
        <title>ISNA Matrimonials </title>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <link
            rel="icon"
            href="/assets/images/favicon.png"
            type="image/ico"
            sizes="16x16"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
          {/* <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" /> */}
          <link type="text/css" rel="stylesheet" href="/assets/css/style.css" />
          <link
            type="text/css"
            rel="stylesheet"
            href="/assets/css/responsive.css"
          />
          <link href="/assets/css/aos.css" rel="stylesheet" />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
          ></link>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
          <script src="/assets/js/custom.js"></script>{" "}
          <script src="/assets/js/bootstrap.min.js"></script>
          <script src="/assets/js/jquery-3.5.1.js"></script>
          {/* <script src="/assets/js/custom.js"></script> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default myDocument;
