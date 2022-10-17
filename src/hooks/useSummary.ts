import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../contexts/TransactionContext'

export function useSummary() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price
      } else if (transaction.type === 'outcome') {
        acc.outcome += transaction.price
      }

      acc.total = acc.income - acc.outcome

      return acc
    },
    { income: 0, outcome: 0, total: 0 },
  )

  return summary
}
