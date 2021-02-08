import "./calculator.css";
import { createCalculatorElement } from "./calculator";

export default {
  title: "Components/Calculator",
  parameters: { layout: "centered" },
};

export const Simple = () => createCalculatorElement();
