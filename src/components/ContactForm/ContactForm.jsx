import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short! Min 3 symbols!")
    .max(50, "Too long! Max 50 symbols!")
    .required("Required!"),
  number: Yup.string()
    .min(3, "Too short! Min 3 symbols!")
    .max(50, "Too long! Max 50 symbols!")
    .required("Required!"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const handleSubmit = (values, actions) => {
    actions.resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form>
          <label htmlFor="name">
            Name:
            <Field id={nanoid()} type="text" name="name"></Field>
          </label>
          <ErrorMessage name="name" component="span" />

          <label htmlFor="number">
            Number:
            <Field id={nanoid()} type="text" name="number"></Field>
          </label>
          <ErrorMessage name="number" component="span" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
export default ContactForm;
