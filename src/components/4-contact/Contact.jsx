import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import Animation from "../../../public/done.json";
import contactAnimation from "../../../public/email.json";

const Contact = () => {
  const [state, handleSubmit] = useForm("xeojzlgp");

  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"> </span>
        Contact us
      </h1>
      <p className="sub-title">
        Contact us for more information and Get notified when I publish
        something new.
      </p>

      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={handleSubmit} className="">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input required type="email" name="email" id="email" />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "Submitting ..." : "Submit"}
          </button>
          {state.succeeded && (
            <p className=" flex success-message">
              <Lottie style={{ height: 55 }} animationData={Animation} />
              Your message has been sent successfully
            </p>
          )}
        </form>
        <div className=" animation">
          
          <Lottie
            
            style={{ height: 355 }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
