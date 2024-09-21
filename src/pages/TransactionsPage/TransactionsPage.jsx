import AddForm from "../../components/transactions/AddForm/AddForm";
import TransactionsByCategorySummaryList from "../../components/transactions/TransactionsByCategorySummaryList/TransactionsByCategorySummaryList";
import "./TransactionsPage.css";
import TransactionsList from "../../components/transactions/TransactionsList/TransactionsList";
import { useEffect, useState } from "react";

function TransactionsPage() {
  const [transactions, setTransactions] = useState([]);
  const [cateogrySummaries, setCategorySummaries] = useState([]);

  const fetchTransactions = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/transactions?from=2024-09-01T00:00:00.000Z&to=2024-10-01T00:00:00.000Z"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setTransactions(data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  const fetchCategorySummaries = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/transactions?from=2024-09-01T00:00:00.000Z&to=2024-10-01T00:00:00.000Z&list_type=group_by_category"
      );
      const data = await response.json();
      setCategorySummaries(data);
    } catch (error) {
      console.error("Error fetching category summaries:", error);
    }
  };

  const refreshData = async () => {
    fetchTransactions();
    fetchCategorySummaries();
  };

  useEffect(() => {
    refreshData();
  }, []);

  return (
    <div className="transactions-page">
      {/* Section 1: Horizontal list of components */}
      <TransactionsByCategorySummaryList
        categorySummaries={cateogrySummaries}
      />
      <AddForm refreshTransactions={refreshData} />
      <TransactionsList transactions={transactions} refreshData={refreshData} />
    </div>
  );
}

export default TransactionsPage;
