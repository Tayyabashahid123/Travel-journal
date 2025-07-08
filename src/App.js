import './App.css';
import Header from './components/header.js'
import Entry from './components/Entry.js'
import data from './data.js'
function App() {

    const EntryElements = data.map(entry => (     
          <Entry
            key={entry.key}
            {...entry}
          />
    ));
  
  return (

      <div className="App">
        <div className="center-box">
          <Header />
          {EntryElements}
          
        </div>
      </div>
    )
}

export default App;