import "./Contact.css";
import { Element } from "react-scroll";

const Contact = () => {
  return (
    <Element name="contact" className="container">
      <div className="element__contact">
        <h2>GET IN TOUCH</h2>
        <form
          className="element__contact--form"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />

          <p hidden>
            <label>
              Don't fill this out: <input name="bot-field" />
            </label>
          </p>
          <input type="text" name="name" id="field-name" placeholder="NAME" />
          <input type="email" name="email" id="field-email" placeholder="EMAIL" />
          <textarea name="message" id="field-message" cols={50} rows={10} placeholder="MESSAGE" />
          <button type="submit">SEND</button>
        </form>
      </div>
    </Element>
  );
};

export default Contact;
