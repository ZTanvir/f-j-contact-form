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

  const [focus, setFocus] = useState({
    fname: false,
    lname: false,
    mail: false,
    query: false,
    message: false,
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
  const handleOnBlur = (e) => {
    console.log(e.currentTarget.name, !e.currentTarget.name);
    setFocus({
      ...focus,
      [e.currentTarget.name]: true,
    });
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
                className={input.name}
                id={input.name}
                value={formValue[input.name]}
                onChange={handleInputData}
                isRequired={input.isRequired}
                handleOnBlur={handleOnBlur}
                focus={focus[input.name].toString()}
              />
            ))}
          </div>
          <FormInput
            className="inputEmail"
            name="mail"
            errorMsg="Please enter a valid email address"
            id={crypto.randomUUID()}
            label="Email Address"
            type="email"
            isRequired={true}
            handleOnBlur={handleOnBlur}
            focus={focus["mail"].toString()}
          />
          <div className="inputQuery">
            <p>
              Query Type <span className="isFieldRequired">*</span>
            </p>
            <div className="radioQuery">
              <label
                data-islebelcheck={formValue["query"] === "general"}
                className="queryGeneral"
              >
                <input
                  type="radio"
                  name="query"
                  id="generalQuery"
                  value="general"
                  onChange={handleInputData}
                  checked={formValue["query"] === "general"}
                  onBlur={handleOnBlur}
                  focus={focus["query"].toString()}
                  required
                />
                General Enquiry
              </label>

              <label
                data-islebelcheck={formValue["query"] === "support"}
                className="querySupport"
              >
                <input
                  type="radio"
                  name="query"
                  id="supportQuery"
                  value="support"
                  onChange={handleInputData}
                  checked={formValue["query"] === "support"}
                  onBlur={handleOnBlur}
                  focus={focus["query"].toString()}
                />
                Support Request
              </label>
            </div>
            <p className="errorMessage">Please select a query type</p>
          </div>

          <div className="inputMsg">
            <label htmlFor="msg">
              Message <span className="isFieldRequired">*</span>
            </label>
            <textarea
              name="message"
              id="msg"
              value={formValue["message"]}
              onChange={handleInputData}
              rows="4"
              onBlur={handleOnBlur}
              focus={focus["message"].toString()}
              required
            ></textarea>
            <p className="errorMessage">This field is required</p>
          </div>

          <div className="inputCheckbox">
            <div className="inputTypeCheck">
              <input
                type="checkbox"
                name="agree"
                id="agreed"
                checked={formValue["agree"]}
                onChange={handleCheckBox}
                onBlur={handleOnBlur}
                focus={focus["agree"].toString()}
                required
              />
              <label htmlFor="agreed">
                I consent to being contacted by the team
              </label>
            </div>
            <p className="errorMessage">
              To submit this form,please consent to being contacted
            </p>
          </div>

          <button type="submit">Submit</button>
        </form>
      </main>
    </>
  );
}

export default App;
