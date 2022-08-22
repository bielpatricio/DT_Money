import { useMemo } from 'react'
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../contexts/TransactionsContext'

export function useSummary() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  // {income: 0, outcome: 0, total: 0}
  const sumarry = useMemo(() => {
    transactions.reduce(
      (acc, transaction) => {
        switch (transaction.type) {
          case 'income':
            acc.income += transaction.price
            acc.total += transaction.price
            break
          case 'outcome':
            acc.outcome += transaction.price
            acc.total -= transaction.price
            break
          default:
            break
        }
        return acc
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    )
  }, [transactions])
  return sumarry
}
