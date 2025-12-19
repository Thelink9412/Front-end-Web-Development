import { useState } from "react"

function AddNewTransactionSection({ setBudget, balance, setBalance, setExpense, display, setDisplay, transactions, setTransactions }) {
    const [name, setName] = useState('')
    const [value, setValue] = useState(0)
    const [type, setType] = useState('expense')

    function handleNewTransaction() {
        if (transactions.find(transaction => transaction.name.toLowerCase() === name.toLowerCase()) || name === '' || value === '') return;

        if (type === 'expense') {
            if (balance - value < 0) return;

            setExpense(prev => prev + +value);
            setBalance(prev => prev - +value);
        } else {
            setBudget(prev => prev + +value);
            setBalance(prev => prev + +value);
        }

        setTransactions(prev => [...prev, { name, value, type }])
        setDisplay(prev => !prev)
    }

    return (
        display && (<>
            <div className="add-transaction-section">
                Name<br />
                <input type="text" className="input-name" onChange={(e) => setName(e.target.value)} placeholder="Insert name" /> <br />
                Value<br />
                <input type="number" className="input-value" onChange={(e) => setValue(e.target.value)} placeholder="Insert value" />
                <section className="radio-inputs">
                    <input type="radio" name="type" value="budget" checked={type === 'budget'} onChange={(e) => setType(e.target.value)} /> Budget
                    <input type="radio" name="type" value="expense" checked={type === 'expense'} onChange={(e) => setType(e.target.value)} /> Expense
                </section>
                <button className="add-transaction-btn" onClick={handleNewTransaction}>Add transaction</button>
            </div>
            <hr width='90%' />
        </>
        )
    )
}

export default AddNewTransactionSection