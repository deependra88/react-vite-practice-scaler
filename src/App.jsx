import './App.css';
import Bye from './components/Bye';
import Hello from './components/Hello';
function App() {
  // const seatNumbers = [1,4,7];
  const person = {
    name: 'Aman',
    phone: '123456',
    seatNumbers: [1, 4, 7],
  };
  return (
    <>
      <Hello person={person} />
    </>
  );
}

export default App;
