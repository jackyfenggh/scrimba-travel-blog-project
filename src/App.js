import './App.css';
import data from './data.js';
import Header from './components/Header'
import Main from './components/Main'

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main 
        destinationData={data}
      />
    </div>
  );
}
