import { useEffect, useState } from "react";
import "./TransactionsList.css";

function TransactionsList() {
  const [transactions, setTransactions] = useState([]);

  var a = 0;
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/transactions?from=2024-09-01T00:00:00.000Z&to=2024-10-01T00:00:00.000Z"
        );
        const data = await response.json();
        setTransactions(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);
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
              <td>{transaction.category}</td>
              <td>{transaction.subcategory}</td>
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
