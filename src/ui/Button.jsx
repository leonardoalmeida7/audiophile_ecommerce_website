import './Button.css';

const Button = ({ children, event }) => {
  return (
    <button onClick={event} className="button">{children}</button>
  )
}

export default Button