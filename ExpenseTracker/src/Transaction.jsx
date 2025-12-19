
function Transaction({ name, value, type, setTransactions }) {

    function handleRemoveTransaction() {
        setTransactions(prev => prev.filter(transaction => {
            return transaction.name !== name;
        }))
    }

    return (<div className="transaction-container">
        <div className="transaction">
            <span className="transaction-name">{name}</span>
            <span className="transaction-value">${value}</span>
            <button className="delete-transaction-btn" onClick={handleRemoveTransaction}>Remove</button>
        </div>
        <div className={`transaction-type ${type}`}></div>
    </div>)
}

export default Transaction