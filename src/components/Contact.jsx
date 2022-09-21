import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ContactStyled } from "./styled/ContactStyle";
import { useInView } from "react-intersection-observer";

function Contact() {
  const { ref: contactRef, inView: contactVisible } = useInView();

  contactVisible &&
    document?.querySelector("#contact")?.classList?.add("inView");

  return (
    <ContactStyled id="contact" ref={contactRef}>
      <h3>
        <span>Hi</span>
        <span className="wave">👋🏾</span>, Let's get to know each other.
      </h3>
      <p>
        Got a job for me, or a question, or you just want to say hi? My inbox is
        always open.
      </p>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "Please input your name")
            .required("Required"),
          email: Yup.string().email("Invalid email address"),
          message: Yup.string()
            .min(2, "Leave a message pls 😉")
            .required("Required"),
        })}
        onSubmit={(values) => {
          fetch("https://formsubmit.co/ajax/tomiaiyeniko@gmail.com", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              name: values.name,
              email: values.email,
              message: values.message,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              data.success && window.location.reload(false);
              console.log(data);
            })
            .catch((error) => console.log(error));
        }}
      >
        <Form>
          <div className="vert">Contact</div>
          <Field name="name" type="text" placeholder="Name" />
          <ErrorMessage component="span" name="name" className="error" />

          <Field name="email" type="email" placeholder="Email" />
          <ErrorMessage component="span" name="email" className="error" />

          <Field
            name="message"
            as="textarea"
            placeholder="Leave a message..."
            rows="7"
          />
          <ErrorMessage component="span" name="message" className="error" />

          <button type="submit">
            <div className="slide"></div>
            <span>Submit</span>
          </button>
        </Form>
      </Formik>
    </ContactStyled>
  );
}

export default Contact;
