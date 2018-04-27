import React from "react";
import { SelectionControl } from "react-md";

export const Slider = props => (
  <div>
    <SelectionControl
      id="switch-lights"
      type="switch"
      label={props.label}
      name="lights"
      defaultChecked
    />
  </div>
);
