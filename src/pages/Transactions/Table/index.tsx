import { PriceHightLight, TransactionsTable } from './styles'

export function Table() {
  return (
    <TransactionsTable>
      <tbody>
        <tr>
          <td width="50%">Desenvolvimento de site</td>
          <td>
            <PriceHightLight variant="income">R$ 12.000,00</PriceHightLight>
          </td>
          <td>Venda</td>
          <td>13/04/2022</td>
        </tr>
        <tr>
          <td width="50%">Desenvolvimento de site</td>
          <td>
            <PriceHightLight variant="income">R$ 12.000,00</PriceHightLight>
          </td>
          <td>Venda</td>
          <td>13/04/2022</td>
        </tr>
        <tr>
          <td width="50%">Desenvolvimento de site</td>
          <td>
            <PriceHightLight variant="outcome">- R$ 59,00</PriceHightLight>
          </td>
          <td>Venda</td>
          <td>13/04/2022</td>
        </tr>
        <tr>
          <td width="50%">Desenvolvimento de site</td>
          <td>
            <PriceHightLight variant="income">R$ 12.000,00</PriceHightLight>
          </td>
          <td>Venda</td>
          <td>13/04/2022</td>
        </tr>
      </tbody>
    </TransactionsTable>
  )
}
