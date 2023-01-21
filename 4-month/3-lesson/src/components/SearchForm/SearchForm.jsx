function SearchForm({ onSearch }) {
  const beforeSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <>
      <form action="#" onSubmit={beforeSubmit}>
        <input type="text" />
        <button>Поиск</button>
      </form>
    </>
  );
}

export default SearchForm;
