export const htmlTemplate = (clientCSS, clientJS, preloadedState, markup) => {
  return `<!doctype html>
    <html lang="en">
    <head>
    
    <head>
        <base href="">
        <title>Qmerit</title>
        <link rel="shortcut icon" type="image/x-icon" href="https://static1.squarespace.com/static/589b4564ebbd1a9503b657d6/t/5abd3d096d2a73027d7050c0/favicon.ico">
        <link rel="canonical" href="http://localhost/">

        <meta property="og:site_name" content="Qmerit">
        <meta property="og:title" content="Home">
        <meta property="og:url" content="http://www.qmerit.com/">
        <meta property="og:type" content="website">
        <meta property="og:description" content="A Qmerit demo app built on React">
        <meta property="og:image" content="http://static1.squarespace.com/static/589b4564ebbd1a9503b657d6/t/5abb0491f950b7364cc606b9/1522205843336/Qmerit-Wordmark-Full-Color.png?format=1000w">
        <meta property="og:image:width" content="1000">
        <meta property="og:image:height" content="312">

        <meta itemprop="name" content="Home">
        <meta itemprop="url" content="http://www.qmerit.com/">
        <meta itemprop="description" content="A Qmerit demo app built on React">
        <meta itemprop="thumbnailUrl" content="http://static1.squarespace.com/static/589b4564ebbd1a9503b657d6/t/5abb0491f950b7364cc606b9/1522205843336/Qmerit-Wordmark-Full-Color.png?format=1000w">
        <link rel="image_src" href="http://static1.squarespace.com/static/589b4564ebbd1a9503b657d6/t/5abb0491f950b7364cc606b9/1522205843336/Qmerit-Wordmark-Full-Color.png?format=1000w">
        <meta itemprop="image" content="http://static1.squarespace.com/static/589b4564ebbd1a9503b657d6/t/5abb0491f950b7364cc606b9/1522205843336/Qmerit-Wordmark-Full-Color.png?format=1000w">

        <meta name="twitter:title" content="Home">
        <meta name="twitter:image" content="http://static1.squarespace.com/static/589b4564ebbd1a9503b657d6/t/5abb0491f950b7364cc606b9/1522205843336/Qmerit-Wordmark-Full-Color.png?format=1000w">
        <meta name="twitter:url" content="http://www.qmerit.com/">
        <meta name="twitter:card" content="summary">
        <meta name="twitter:description" content="A Qmerit demo app built on React">
        <meta name="description" content="We bring order to the chaos of supply chain management Workforce Management&nbsp; &nbsp;Procurement Solutions">

        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <meta name="Description" content="A React App" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="apple-mobile-web-app-title" content="Qmerit App">
        <meta name="application-name" content="Qmerit App">
        <meta name="msapplication-TileColor" content="#3B64C2">
        <meta name="theme-color" content="#3B64C2">

        <link rel="manifest" href="/manifest.json">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">

        ${clientCSS ? `<link rel="stylesheet" href="${clientCSS}">` : ""}

    </head>
    <body>
        <div id="root">${markup}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            "\\u003c"
          )}
        </script>
        ${
          process.env.NODE_ENV === "production"
            ? `<script src="${clientJS}" defer></script>`
            : `<script src="${clientJS}" defer crossorigin></script>`
        }
    </body>
</html>`;
};
