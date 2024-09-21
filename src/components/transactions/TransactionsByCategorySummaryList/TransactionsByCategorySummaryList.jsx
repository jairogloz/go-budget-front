import TransactionsByCategorySummary from "./TransactionsByCategorySummary/TransactionsByCategorySummary";

function TransactionsByCategorySummaryList({ categorySummaries }) {
  return (
    <div>
      <h2>Category Summaries</h2>
      <section className="horizontal-list">
        {categorySummaries === null ? (
          <p>No transactions available.</p>
        ) : (
          categorySummaries.map((item, index) => (
            <TransactionsByCategorySummary
              key={index}
              category_summary={item}
            />
          ))
        )}
      </section>
    </div>
  );
}

export default TransactionsByCategorySummaryList;
