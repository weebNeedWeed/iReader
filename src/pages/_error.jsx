import Error from "next/error";
import React from "react";

export default function CustomError({ statusCode }) {
  return <Error statusCode={statusCode} />;
}

CustomError.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
