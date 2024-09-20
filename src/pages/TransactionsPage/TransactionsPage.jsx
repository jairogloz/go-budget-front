import AddForm from "../../components/transactions/AddForm/AddForm";
import TransactionsByCategorySummaryList from "../../components/transactions/TransactionsByCategorySummaryList/TransactionsByCategorySummaryList";
import "./TransactionsPage.css";

function TransactionsPage() {
  return (
    <div className="transactions-page">
      {/* Section 1: Horizontal list of components */}
      <TransactionsByCategorySummaryList />
      <AddForm />
    </div>
  );
}

export default TransactionsPage;
