import React from "react";
import PropTypes from "prop-types";
import { SelectField } from "react-md";

const SimpleDropdown = (props, { simplifiedMenu }) => (
  <div className="md-grid">
    <SelectField
      id="select-field-2"
      label={props.label}
      placeholder={props.label}
      className="md-cell"
      menuItems={props.items}
      simplifiedMenu={simplifiedMenu}
    />
  </div>
);

SimpleDropdown.propTypes = {
  simplifiedMenu: PropTypes.bool
};

export const Dropdown = SimpleDropdown;
