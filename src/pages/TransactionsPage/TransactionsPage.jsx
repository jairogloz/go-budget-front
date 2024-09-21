import AddForm from "../../components/transactions/AddForm/AddForm";
import TransactionsByCategorySummaryList from "../../components/transactions/TransactionsByCategorySummaryList/TransactionsByCategorySummaryList";
import "./TransactionsPage.css";
import TransactionsList from "../../components/transactions/TransactionsList/TransactionsList";

function TransactionsPage() {
  return (
    <div className="transactions-page">
      {/* Section 1: Horizontal list of components */}
      <TransactionsByCategorySummaryList />
      <AddForm />
      <TransactionsList />
    </div>
  );
}

export default TransactionsPage;
