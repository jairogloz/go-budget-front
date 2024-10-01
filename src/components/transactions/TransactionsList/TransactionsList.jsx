import config from "../../../config";
import "./TransactionsList.css";
import { useSession } from "../../../context/SessionContext";

function TransactionsList({ transactions, refreshData }) {
  const sessionCtx = useSession();
  const accessToken = sessionCtx.session?.access_token;

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${config.backendURL}/transactions/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        method: "DELETE",
      });
      if (!response.ok) {
        console.log(response);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      refreshData();

      alert("Transaction deleted!");
    } catch (error) {
      alert("Error deleting transaction:", error);
    }
  };

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
          {transactions &&
            transactions.map((transaction) => (
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
