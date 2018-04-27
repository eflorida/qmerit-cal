import React from "react";
import { DatePicker } from "react-md/lib/Pickers";
import "react-md/dist/react-md.lime-green.min.css";

export const CalDatePicker = props => (
  <div className="md-grid">
    <DatePicker
      id="appointment-date-auto"
      label={props.label}
      className="md-cell"
    />
  </div>
);
