import './TransactionsByCategorySummary.css'

function TransactionsByCategorySummary({category_summary}){
  return <div className="cat-summary">
    <div >{category_summary.category.id}: ${category_summary.total_amount}</div>
  </div>
}

export default TransactionsByCategorySummary;