function NavigationButton({ text }) {
  return (
    <li>
      <a href={"some-path/" + text}>{text}</a>
    </li>
  );
}

export default NavigationButton;
