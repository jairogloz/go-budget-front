import './App.css'
import TransactionsByCategorySummary from './components/transactions/TransactionsByCategorySummary/TransactionsByCategorySummary'
import {useEffect, useState} from 'react'

function App() {

  const [categorySummaries, setCategorySummaries] = useState([]);

  useEffect(() => {
    const fetchCategorySummaries = async() =>{
      try {
        const response = await fetch('http://localhost:8080/transactions?from=2024-09-01T00:00:00.000Z&to=2024-10-01T00:00:00.000Z&list_type=group_by_category');
        console.log(response);
        const data = await response.json();
        setCategorySummaries(data);
      }catch (error) {
        console.error('Error fetching category summaries:', error);
      }
    } 

    fetchCategorySummaries();
    
  }, []);

  return (
    <div className="app-container">
      {/* Section 1: Horizontal list of components */}
      <section className="horizontal-list">
        {
          categorySummaries.map((item, index) => (
            <TransactionsByCategorySummary key={index} category_summary={item}/>
          ))
        }
      </section>
    </div>
  )
}

export default App
