function ListGroup({ items }) {
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item.index} className="list-group-item">
            {item.index + 1} away from a <b>{item.name}</b>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
