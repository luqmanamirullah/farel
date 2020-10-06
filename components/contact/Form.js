import React from "react";
import { createUseStyles } from "react-jss";
import Button from "../button/Button";
import TextArea from "../textField/TextArea";
import TextField from "../textField/TextField";

const useStyles = createUseStyles({
  form: {
    fontFamily: "'Lato', sans-serif",
    boxSizing: "border-box",
    marginBottom: "0 !important",
    position: "relative",
    fontSize: "0.875rem",
  },
  column: {
    flex: "1 1 ",
    width: "100%",
    display: "block",
    position: "relative",
    paddingRight: "4%",
    float: "left",
    marginBottom: 25,
    fontSize: "0.875rem",
  },
  textFieldWrapper: {
    display: "flex",
  },
  "@media (max-width: 767.98px)": {
    textFieldWrapper: {
      display: "block",
      width: "100%",
    },
  },
});

const Form = ({
  values,
  touched,
  errors,
  dirty,
  isSubmitting,
  handleChange,
  handleBlur,
  handleSubmit,
  handleReset,
}) => {
  const classes = useStyles();
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "-4%",
          }}
        >
          <div className={classes.textFieldWrapper}>
            <div className={classes.column}>
              <TextField label="name" required />
            </div>
            <div className={classes.column}>
              <TextField label="email" required />
            </div>
            <div className={classes.column}>
              <TextField label="phone" />
            </div>
          </div>
          <div className={classes.column}>
            <TextField label="subject" required />
          </div>
          <div className={classes.column}>
            <TextArea label="message" required />
          </div>
          <div>
            <Button
              text="Submit Comment"
              style={{ backgroundColor: "#8bc865" }}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
