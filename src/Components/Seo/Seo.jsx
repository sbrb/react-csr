import React from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

function Seo() {
  const { metaData } = useSelector((state) => state.seo);

  return (
    <Helmet>
      <html lang="en" />
      <title>{metaData?.title}</title>
      <meta name="keywords" content={metaData?.keyword} />
      <meta name="description" content={metaData?.description} />
    </Helmet>
  );
}

export default Seo;
