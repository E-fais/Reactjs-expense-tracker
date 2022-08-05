import React from "react";
import { Box, Divider, List, Typography } from "@material-ui/core";
import SingleTransaction from "./SingleTransaction";
function Transactions() {
  return (
    <Box>
      <Typography
        style={{
          marginTop: "15px",
          marginBottom: "10px",
          fontWeight: "600",
          marginLeft: "2.5rem",
          textAlign: "center",
        }}
        variant="h5"
      >
        Transactions History
      </Typography>
      <Divider
        style={{
          marginTop: "15px",
          marginBottom: "10px",
          fontWeight: "600",
          marginLeft: "2.5rem",
        }}
      />
      <List>
        <SingleTransaction />
      </List>
    </Box>
  );
}

export default Transactions;
