import './App.css';
import Header from './components/header.js'
import Entry from './components/Entry.js'
import data from './data.js'
function App() {

    const EntryElements = data.map(entry => (     
          <Entry
            imgSrc={entry.img.src}
            imgAlt={entry.img.alt}
            title= {entry.title}
            country= {entry.country}
            googleMapsLink= {entry.googleMapsLink}
            dates= {entry.dates}
            text= {entry.text}
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