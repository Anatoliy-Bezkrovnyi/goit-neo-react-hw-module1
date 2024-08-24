import Transaction from "../Transaction/Transaction";

const TransactionHistory = ({ transactions }) => { 

    return (
        <table>
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {transactions.map(transaction => <Transaction key={transaction.id} type={transaction.type} amount={transaction.amount} currency={transaction.currency} />)}
            </tbody>
        </table>
    )
 }

export default TransactionHistory
