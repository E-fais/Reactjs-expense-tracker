import {
  Divider,
  Box,
  ListItem,
  ListItemAvatar,
  Button,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useContext } from "react";
import { transactionContext } from "./context/GlobalContext";
import DeleteIcon from "@material-ui/icons/Delete";
import { useEffect } from "react";

function SingleTransaction() {
  const { setTransactions } = useContext(transactionContext);
  const { transactions } = useContext(transactionContext);
  const deleteTransactions = (id) => {
    setTransactions(transactions.filter((item) => item.id !== id));
  };



  return (
    <>
      {transactions.map((item) => (
        <Box>
          <ListItem style={{ color: item.amount < 0 ? "red" : "green" }}>
            <ListItemAvatar>
              <DeleteIcon
                style={{ color: "black" }}
                onClick={() => deleteTransactions(item.id)}
              />
            </ListItemAvatar>
            <ListItemText>
              <Typography align="center" variant="h5">
                {item.title}
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant="h6" align="center">
                {item.amount}
              </Typography>
            </ListItemText>
          </ListItem>
        </Box>
      ))}
    </>
  );
}

export default SingleTransaction;
