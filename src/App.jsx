// import './App.css';
// import Animals from './components/Animals';
// import Bye from './components/Bye';
// import Fruits from './components/Fruits';
// import Hello from './components/Hello';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import Form from './components/Form';
import ToDo from './components/ToDo';
function App() {
  // const seatNumbers = [1,4,7];
  const person = {
    name: 'Aman',
    phone: '123456',
    seatNumbers: [1, 4, 7],
  };
  return (
    <>
      {/* <Hello person={person} /> */}
      {/* <Animals /> */}
      {/* <Fruits /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <Form /> */}
      <ToDo />

    </>
  );
}

export default App;
