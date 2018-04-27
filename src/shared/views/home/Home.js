import React from "react";
import { CalDatePicker } from "../../components/DatePicker";
import { Slider } from "../../components/Slider";
import { Dropdown } from "../../components/DropDown";
import { Submit } from "../../components/Submit";

const JOB_TITLES = [
  "Senior Engineer",
  "Senior Front-end Developer",
  "Technical Lead",
  "Technical Lead, Front-end"
];

export const Home = () => (
  <div>
    <main role="main" className="page-container">
      <form action="return false" method="get">
        <h3>Welcome to the Qmerit Calendar App!</h3>
        <CalDatePicker label="Select a hire date" />
        <Slider label="Hire now!" />
        <Dropdown label="Select a title" items={JOB_TITLES} />
        <Submit label="Hire Now!" />
      </form>
    </main>
  </div>
);
