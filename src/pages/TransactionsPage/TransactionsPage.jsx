import TransactionsByCategorySummaryList from '../../components/transactions/TransactionsByCategorySummaryList/TransactionsByCategorySummaryList';
import './TransactionsPage.css';

function TransactionsPage() {
  return (
    <div className="transactions-page">
      {/* Section 1: Horizontal list of components */}
      <TransactionsByCategorySummaryList/>
    </div>
  );
}

export default TransactionsPage;
