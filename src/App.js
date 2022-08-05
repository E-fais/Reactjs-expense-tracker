import React, { useContext, useEffect} from 'react'
import AddTransaction from './Components/AddTransaction'
import Balance from './Components/Balance'

import ExpenseIncomeTotal from './Components/ExpenseIncomeTotal'
import Header from './Components/Header'
import Transactions from './Components/Transactions'
import { GlobalContextProvider, transactionContext } from './Components/context/GlobalContext'
import { Box, Divider, Grid } from '@material-ui/core'

function App() {

  return (
    <div>

      <GlobalContextProvider>
        <Header />
        <Grid container justifyContent='center' alignContent='center' spacing={7}>
          <Grid item xs={12} md={4}>
            <Balance />
            <ExpenseIncomeTotal />
          </Grid>
          <Grid item>
            <Divider xs={{ display: 'none' }} orientation='vertical' />
          </Grid>
          <Grid item xs={12} md={4}>
            <Transactions />
          </Grid>
        </Grid>
        <AddTransaction />
      </GlobalContextProvider>
    </div>
  )
}

export default App