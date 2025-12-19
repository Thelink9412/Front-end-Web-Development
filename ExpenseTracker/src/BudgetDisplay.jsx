
function BudgetDisplay({ budget, expense}){

    return(<section className="budget-display">
        <div className="expense">
            <span>Expense</span>
            <span className="expense-value">${expense}</span>
        </div>
        <div className="budget">
            <span>Budget</span>
            <span className="budget-value">${budget}</span>
        </div>
    </section>)
}

export default BudgetDisplay