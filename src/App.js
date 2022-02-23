import logo from './logo.svg';
import './App.css';
import location from './components/images/location.png'
import Header from './components/Header/Header';
import Journal from './components/Journal/Journal';
import data from './data';

console.log(data)
const journals = data.map((journal) => {
  return <Journal 
      key={journal.id}
      {...journal}
  />
})

function App() {
  return (
    <div className="App">
      <Header />
      {journals}
      {/* <Journal /> */}
      {/* <Journal /> */}

    
    </div>
  );
}

export default App;
