import { useContext } from 'react'
import { PriceHightLight, TransactionsTable } from './styles'
import { TransactionsContext } from '../../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../../utils/formatter'

export function Table() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <TransactionsTable>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td width="50%">{transaction.description}</td>
            <td>
              <PriceHightLight variant={transaction.type}>
                {transaction.type === 'outcome' && '- '}
                {priceFormatter.format(transaction.price)}
              </PriceHightLight>
            </td>
            <td>{transaction.category}</td>
            <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
          </tr>
        ))}
      </tbody>
    </TransactionsTable>
  )
}
