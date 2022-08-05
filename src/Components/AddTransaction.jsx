import {
  TextField,
  Box,
  Typography,
  Button,
  Container,
} from "@material-ui/core";

import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { transactionContext } from "./context/GlobalContext";

function AddTransaction() {
  const { setTransactions,transactions } = useContext(transactionContext);
  const [inputTranaction, setInputTransction] = useState("");
  const [inputAmount, setInputAmount] = useState();
  const AddNewTransaction = () => {
    const newTransaction = {
      id: Date.now(),
      title: inputTranaction,
      amount: +inputAmount, // + sign used to change string to integer
    };
    setTransactions((prevState) => [newTransaction, ...prevState]);
    setInputAmount();
    setInputTransction();
   
  };
  return (
    <div>
      <Container align="center" style={{ marginTop: "4rem" }}>
        <Typography variant="h5" style={{ marginBottom: "4px" }}>
          New Transaction
        </Typography>
        <Typography style={{ marginBottom: "2rem" }}>
          (For Expense give input amount as negative number)
        </Typography>
        <TextField
          fullWidth
          onChange={(e) => setInputTransction(e.target.value)}
          label="enter expense or income"
          variant="outlined"
        />
        <TextField
          onChange={(e) => setInputAmount(e.target.value)}
          label="enter amount"
          variant="outlined"
          fullWidth
          style={{ margin: "10px 0" }}
        />
        <Button
          onClick={AddNewTransaction}
          style={{ backgroundColor: "blue", color: "white" }}
          variant="contained"
        >
          Add Transaction
        </Button>
      </Container>
    </div>
  );
}

export default AddTransaction;
