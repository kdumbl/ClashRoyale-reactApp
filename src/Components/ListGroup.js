function ListGroup() {
  let items = ["one", "two", "three"];

  return (
    <>
      <h2>Items</h2>
      {items.length === 0 && <p>No items found</p>}

      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
