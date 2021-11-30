import React from "react";
import "./Button.scss";

export interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => <button type="button">{label}</button>

export default Button;
