import React from 'react';
import { Helmet } from 'react-helmet';

const index = () => {
  return(
    <Helmet>
      <meta charSet="UTF-8" />
      <title>Yılmaz Yağız Dokumacı | Android Developer</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Yılmaz Yağız DOKUMACI" />
      <meta name="description" content="Yılmaz Yağız Dokumacı Kişisel Web Sitesi" />
      <meta
        name="keywords"
        content="yılmaz,yağız,dokumacı,android,java,development,software"
      />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf8" />
      <meta name="language" content="Turkish" />
      <meta property="og:title" content="Yılmaz Yağız Dokumacı | Android Developer" />
      <meta property="og:description" content="Kişisel Web Sitesi" />
      <meta
        property="og:site_name"
        content="Yılmaz Yağız Dokumacı | Android Developer"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Yagizdoo" />
      <meta name="twitter:creator" content="Yagizdoo" />
      <meta name="twitter:title" content="Yılmaz Yağız Dokumacı | Android Developer" />
      <meta name="twitter:description" content="Kişisel Web Sitesi" />
      <link rel="icon" href="img/icon/favicon.ico" />

      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
    </Helmet>
  )
}

export default index;
