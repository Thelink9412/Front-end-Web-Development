import { useState } from 'react'
import AddNewTransactionSection from './AddNewTransactionSection'
import BudgetDisplay from './BudgetDisplay'
import Transaction from './Transaction'

function App() {
  const [balance, setBalance] = useState(100)
  const [expense, setExpense] = useState(0)
  const [budget, setBudget] = useState(100)
  const [displayAddTransaction, setDisplayAddTransaction] = useState(false)
  const [transactions, setTransactions] = useState([])
  const [search, setSearch] = useState('');

  return (<div className='app'>
    <h2>Expense Tracker App</h2>
    <section className='balance-display'>
      <span className='balance'>Balance ${balance}</span>
      <button className='show-add-transaction-btn' onClick={() => setDisplayAddTransaction(prev => !prev)}>{displayAddTransaction ? 'Cancel' : 'Add'}</button>
    </section>
    <AddNewTransactionSection setBudget={setBudget}
      balance={balance}
      setBalance={setBalance}
      setExpense={setExpense}
      display={displayAddTransaction}
      setDisplay={setDisplayAddTransaction}
      transactions={transactions}
      setTransactions={setTransactions} />
    <BudgetDisplay budget={budget} expense={expense} />
    <div className='transactions-list'>
      <h2>Transactions</h2>
      <input type="text" className='search-bar' onChange={(e) => setSearch(e.target.value)} placeholder='Search' />
      {transactions.filter(val => {
        return val.name.toLowerCase().includes(search.toLowerCase())
      })
        .map((transaction, index) => {
          return <Transaction key={index} id={index} name={transaction.name} value={transaction.value} type={transaction.type} setTransactions={setTransactions} />
        })}
    </div>
  </div>)
}

export default App
