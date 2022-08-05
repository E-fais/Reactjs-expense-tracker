import { Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import { useContext } from "react";
import { transactionContext } from "./context/GlobalContext";

function ExpenseIncomeTotal() {
  const { transactions } = useContext(transactionContext);
  const amount = transactions.map((item) => item.amount);
  const totalIncome = amount.filter((item) => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
  const totalExpense = (
    amount.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div>
      <Grid container justifyContent="center" alignItems="center" spacing={1}>
        <Grid item>
          <Paper
            style={{
              width: "100px",
              backgroundColor: "red",
              color: "white",
              padding:'16px',
              paddingRight:'3px',
              marginTop: "15px",
              borderRadius:'10%'
            }}
          >
            <Typography variant="h6">Expense</Typography>
            <Typography variant="h6">₹{totalExpense}</Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper
            style={{
              width: "100px",
              backgroundColor: "green",
              color: "white",
              padding:'16px',
              paddingRight:'3px',
              marginTop: "15px",
              borderRadius:'10%'
            }}
          >
            <Typography variant="h6">Income</Typography>
            <Typography variant="h6">₹{totalIncome}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default ExpenseIncomeTotal;
