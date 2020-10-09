import { Formik } from "formik";
import { createUseStyles } from "react-jss";
import ClearFix from "../container/ClearFix";
import TextField from "../textField/TextField";
import ContentWrap from "../wrapper/ContentWrap";
import { string, object } from "yup";
import Form from "./Form";
const useStyles = createUseStyles({
  wrapper: {
    width: "100%",
    position: "relative",
    marginBottom: 50,
    clear: "both",
    float: "none",
    marginRight: 0,
  },
  title: {
    fontWeight: 400,
    textAlign: "left",
    fontSize: "0.875rem",
    lineHeight: 1.5,
    color: "#555",
    fontFamily: "'Lato',sans-serif",
    boxSizing: "border-box",
    position: "relative",
    marginBottom: 30,
    background: "url('images/icons/dotted.png') repeat-x center",
  },
  formWrapper: {
    color: "#555",
    fontFamily: "'Lato', sans-serif",
    boxSizing: "border-box",
  },
});

const Contact = () => {
  const initialFormState = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };
  const validationSchema = object().shape({
    name: string().required("Required"),
    email: string().email().required("Required"),
    phone: string(),
    subject: string().required("Required"),
    message: string().required("Required"),
  });
  const classes = useStyles();
  return (
    <section>
      <ContentWrap style={{ marginBottom: 0 }}>
        <ClearFix>
          <div className={classes.wrapper}>
            <div className={classes.title}>
              <h3>Send us an Email</h3>
            </div>
            <div className={classes.formWrapper}>
              <Formik
                initialValues={initialFormState}
                validationSchema={validationSchema}
              >
                {(props) => <Form {...props} />}
              </Formik>
            </div>
          </div>
        </ClearFix>
      </ContentWrap>
    </section>
  );
};

export default Contact;
