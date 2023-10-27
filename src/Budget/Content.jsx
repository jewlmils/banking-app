import "./Content.css";
import {
  BalanceAndIncomeExpenses,
  TransactionList,
  AddTransaction,
} from "./Budget";
import { GlobalProvider } from "./GlobalState";
function Content() {
  return (
    <GlobalProvider>
      <div className="budget-body">
        <div className="budget-container">
          <BalanceAndIncomeExpenses />
          <AddTransaction />
          <TransactionList />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default Content;
