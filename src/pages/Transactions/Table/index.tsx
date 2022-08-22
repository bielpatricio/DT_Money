import { PriceHightLight, TransactionsTable } from './styles'
import { TransactionsContext } from '../../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../../utils/formatter'
import { useContextSelector } from 'use-context-selector'

export function Table() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

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
