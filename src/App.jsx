import "./App.css";
import formData from "../Utils/FormData/formData";
import FormInput from "./Components/FormInput";
import { useState } from "react";

function App() {
  const [formValue, setFormValue] = useState({
    fname: "",
    lname: "",
    mail: "",
    query: "",
    message: "",
    agree: false,
  });

  const handleInputData = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleCheckBox = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.checked });
  };

  const handleformSubmit = (event) => {
    event.preventDefault();
    console.log(formValue);
  };
  return (
    <>
      <main>
        <form id="contactUs" onSubmit={handleformSubmit}>
          <legend>Contact Us</legend>
          <div className="inputFnameLname">
            {formData.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                label={input.lable}
                id={input.name}
                value={formValue[input.name]}
                onChange={handleInputData}
              />
            ))}
          </div>
          <div className="inputEmail">
            <FormInput
              name="mail"
              errorMsg="Please enter a valid email address"
              id={crypto.randomUUID()}
              label="Email Address"
              type="email"
            />
          </div>
          <div className="inputQuery">
            <p>Query Type</p>
            <div>
              <input
                type="radio"
                name="query"
                id="generalQuery"
                value="general"
                onChange={handleInputData}
                checked={formValue["query"] === "general"}
              />
              <label htmlFor="generalQuery">General Enquiry</label>
            </div>

            <div>
              <input
                type="radio"
                name="query"
                id="supportQuery"
                value="support"
                onChange={handleInputData}
                checked={formValue["query"] === "support"}
              />
              <label htmlFor="supportQuery">Support Request</label>
            </div>
            <p>Please select a query type</p>
          </div>

          <div>
            <label htmlFor="msg">Message</label>
            <textarea
              name="message"
              id="msg"
              value={formValue["message"]}
              onChange={handleInputData}
            ></textarea>
            <p>This field is required</p>
          </div>

          <div>
            <input
              type="checkbox"
              name="agree"
              id="agreed"
              checked={formValue["agree"]}
              onChange={handleCheckBox}
            />
            <label htmlFor="agreed">
              I consent to being contacted by the team
            </label>
            <p>To submit this form,please consent to being contacted</p>
          </div>

          <button type="submit">Submit</button>
        </form>
      </main>
    </>
  );
}

export default App;
