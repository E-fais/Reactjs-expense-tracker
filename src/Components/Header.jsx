import { Grid, Typography } from "@material-ui/core";
import React from "react";

function Header() {
  return (
    <div>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item>
          <Typography
            style={{
              marginTop: "5rem",
              fontWeight: "600",
              marginBottom: "3rem",
            }}
            color="primary"
            variant="h4"
          >
            Expense Tracker
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
