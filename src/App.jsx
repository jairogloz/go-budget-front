import './App.css'

function ListItem({text}){
  return <div className="list-item">{text}</div>
}

function App() {

  const accountSummaries = Array.from({length:5}, (_, index) => `Item ${index + 1}`)

  return (
    <div className="app-container">
      {/* Section 1: Horizontal list of components */}
      <section className="horizontal-list">
        {
          accountSummaries.map((item, index) => (
            <ListItem key={index} text={item}/>
          ))
        }
      </section>
    </div>
  )
}

export default App
