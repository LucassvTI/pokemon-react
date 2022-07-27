import { InputHTMLAttributes } from "react"
import "./styles.css"

type InputProps = InputHTMLAttributes<HTMLInputElement>

export default function Input({type = "text", ...rest}: InputProps) {
  return (
    <input
        className="inputSearch"
        type={type}
        {...rest}
      />
  )
}
