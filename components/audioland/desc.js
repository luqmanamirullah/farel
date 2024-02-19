import React from "react";
import { createUseStyles } from "react-jss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Divider from '@material-ui/core/Divider';

const useStyles = createUseStyles({
  root: {
    flexGrow: 1,
    marginTop: 80,
    marginBottom: 50,
    textAlign: "center",
  },
  fontCaption: {
    fontSize: 30,
    fontWeight: 300,
    fontFamily: "Poppins",
    lineHeight: 1.8,
    marginBottom: "30px",
    display: "block",
    marginTop: 10,
    marginLeft: 135,
    marginRight: 135,
    textAlign: "center",
  },
  fontTitle: {
    marginBottom: 10,
    fontWeight: 700,
    fontSize: "clamp(1.2rem, 10vw, 1.875rem)",
    letterSpacing: "-2px",
    fontFamily: "Poppins",
    textAlign: "center",
  },
  // "@media (max-width : 999.98px)": {
  //   root: {
  //     flexGrow: 1,
  //     marginTop: 10,
  //     marginBottom: 20,
  //     textAlign: "center",
  //   },
  //   fontCaption: {
  //     // fontSize: '22px',
  //     // fontWeight: 300,
  //     // fontFamily: 'Poppins',
  //     // lineHeight: 1.8,
  //     // marginBottom: '30px',
  //     // display: 'block',
  //     // marginTop: 10,
  //     marginLeft: 20,
  //     marginRight: 20,
  //     textAlign: "center",
  //   },
  // },
  "@media (min-width : 325px)": {
    fontCaption: {
      fontSize: 15,
      margin: "0 25px",
    },
  },
  "@media (min-width : 564px)": {
    fontCaption: {
      fontSize: 15,
      margin: "0 50px",
    },
  },
  "@media (min-width : 768px)": {
    fontCaption: {
      fontSize: 20,
      margin: "0 85px",
    },
  },
  "@media (min-width : 1024px)": {
    fontCaption: {
      fontSize: 25,
      margin: "0 135px",
    },
  },
});

export default function Desc(props) {
  const classes = useStyles();

  return (
    <Container
      className={classes.root}
      style={{
        background: props.backGround,
        maxWidth: "100%",
        margin: 0,
      }}
    >
      {/* <h2
        className={classes.fontTitle}
        style={{ color: props.colorFont ? props.colorFont : "#eee" }}>
        {props.title}
      </h2> */}
      <p
        className={classes.fontCaption}
        style={{
          color: props.colorFont ? props.colorFont : "#eee",
          padding: props.pp,
        }}
      >
        {props.desc}
      </p>
    </Container>
  );
}
