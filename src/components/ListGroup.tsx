function ListGroup() {
  const items = [
  'Nairobi',
  'New York',
  'Paris',
  'Tokyo',
  'Sydney'
  ];

    return (
      <> {/* Wrapping the return value in a fragment since it contains multiple elements */}
        <h1>List</h1>
        <ul className="list-group">
           {items.map(item => <li key={item}>{item}</li>)}
        </ul>
      </>
      );
}

export default ListGroup;