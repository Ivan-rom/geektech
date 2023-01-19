import "./App.css";
import User from "./components/User/Uesr";
import Text from "./components/Text/Text";

function App() {
  const person = {
    name: "Ivan",
    profession: "React programmer",
  };
  const students = [
    { id: 1, name: "Kayrat", age: 20 },
    { id: 2, name: "Alex", age: 20 },
  ];
  return (
    <>
      <ul>
        {students.map((student) => (
          <User key={student.id} person={student} />
        ))}
      </ul>
      <Text />
    </>
  );
}

export default App;
