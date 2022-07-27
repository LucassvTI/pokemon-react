import { ButtonHTMLAttributes, ReactNode } from "react";
import "./styles.css";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({children, type = "button", ...rest}: Props) {
  return (
    <button type={type} className="button" {...rest}>{children}</button>
  )
}
