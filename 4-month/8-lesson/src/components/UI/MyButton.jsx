export default function MyButton({ children, ...otherProps }) {
  return (
    <button {...otherProps} className={`blueButton ${otherProps.className}`}>
      {children}
    </button>
  );
}
