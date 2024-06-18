import "./App.css";
import formData from "../Utils/FormData/formData";
import FormInput from "./Components/FormInput";

function App() {
  return (
    <>
      <main>
        <form>
          <legend>Contact Us</legend>
          {formData.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              label={input.lable}
              id={input.name}
            />
          ))}
          <div>
            <label htmlFor="">Query Type</label>
            <input type="radio" name="" id="" />
            <label htmlFor="">General Enquiry</label>

            <input type="radio" name="" id="" />
            <label htmlFor="">Support Request</label>
          </div>
          <div>
            <label htmlFor="">Message</label>
            <textarea name="" id=""></textarea>
          </div>
          <div>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">I consent to being contacted by the team</label>
          </div>
        </form>
      </main>
    </>
  );
}

export default App;
