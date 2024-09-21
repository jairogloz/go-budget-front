import "./TransactionsList.css";

function TransactionsList({ transactions }) {
  return (
    <div className="transactions-list">
      <h2>Transactions</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Category</th>
            <th>Subcategory</th>
            <th>Created At</th>
            <th>Account</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.description}</td>
              <td>{transaction.category_id}</td>
              <td>{transaction.subcategory_id}</td>
              <td>{transaction.created_at}</td>
              <td>{transaction.account_name}</td>
              <td>{transaction.amount}</td>
              <td>
                <button
                  className="button-delete"
                  onClick={() => handleDelete(transaction.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionsList;
