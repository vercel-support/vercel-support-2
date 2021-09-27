import React from "react";
import Script from "next/script";
import Head from "next/head";

const fire = () => {
  return (
    <div>
      <Head>
        <script
          dangerouslySetInnerHTML={{ __html: "jQuery.('#cat').html('cats')" }}
        ></script>
      </Head>

      {/* <Script id="two">{`$('#cat').html('cats')`}</Script> */}
      <div id="cat"></div>
      <Script
        id="one"
        strategy="beforeInteractive"
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
        crossOrigin="anonymous"
      ></Script>
    </div>
  );
};

export default fire;
