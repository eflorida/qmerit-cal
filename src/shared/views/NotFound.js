import React from "react";
import { Link } from "react-router-dom";

export const PageNotFound = (props, context = Object.create({})) => {
  if (context.setStatus) {
    context.setStatus(404);
  }

  return (
    <div>
      <h1>Sorry, we're still procurring that page.</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
};
