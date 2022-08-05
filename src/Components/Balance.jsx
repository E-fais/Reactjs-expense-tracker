import React, { useContext } from "react";
import { Grid, Typography } from "@material-ui/core";
import { transactionContext } from "./context/GlobalContext";

function Balance() {
  const { transactions } = useContext(transactionContext);
  const amount = transactions.map((item) => item.amount);
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2); //toFixed(2) means 2  decimal points
  console.log(total);
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item>
        <Typography variant="h5" style={{ margin: "20px", fontWeight: "700" }}>
          Balance:₹{total}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Balance;
