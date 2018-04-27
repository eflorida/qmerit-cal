import React from "react";
import { Button } from "react-md";
import { Link } from "react-router-dom";

export const Submit = props => (
  <div className="buttons__group">
    <Link to="/thank-you">
      <Button type="submit" raised secondary iconBefore={false}>
        {props.label}
      </Button>
    </Link>
  </div>
);
