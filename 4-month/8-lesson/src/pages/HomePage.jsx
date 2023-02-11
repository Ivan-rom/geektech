import MyButton from "../components/UI/MyButton";

export default function AboutPage() {
  return (
    <div>
      <h2>Главная страница</h2>
      <input type="text" />
      <MyButton disabled={false} className="redButton">
        Поиск
      </MyButton>
    </div>
  );
}
