import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  button: { 
    padding: "4px 8px",
    borderRadius: 25,
  },
}));

interface IProps { }

const ButtonOlab: FC<IProps> = ({children}) => {
  const classes = useStyles();
  
  return (
    <Button className={classes.button} variant="contained" fullWidth>
      {children}
    </Button>
  )
}

export default ButtonOlab;
