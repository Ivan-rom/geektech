import NavigationButton from "../NavigationButton/NavigationButton";

const listOfButtons = [
  {
    id: 100,
    text: "men's clothing",
  },
  {
    id: 101,
    text: "jewelery",
  },
  {
    id: 102,
    text: "electronics",
  },
  {
    id: 103,
    text: "women's clothing",
  },
];

function NavigationButtons() {
  return (
    <ul>
      {listOfButtons.map((buttonsElement) => {
        return (
          <NavigationButton
            text={buttonsElement.text}
            key={buttonsElement.id}
          />
        );
      })}
    </ul>
  );
}

export default NavigationButtons;
