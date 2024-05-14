import React from "react";
import Logo from "../../public/logo.png";

const Header = () => {
  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/png" href={Logo} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ETN</title>
      </head>
    </>
  );
};

export default Header;
