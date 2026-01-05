function Hello({ person }) {
  return (
    <h1>
      Hello {person.name} {person.phone}
      {person.seatNumbers}
    </h1>
  );
}

export default Hello;
