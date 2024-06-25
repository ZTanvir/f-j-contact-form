const FormData = [
  {
    id: crypto.randomUUID(),
    lable: "First Name",
    type: "text",
    name: "fname",
    errorMsg: "This field is required",
  },
  {
    id: crypto.randomUUID(),
    lable: "Last Name",
    type: "text",
    name: "lname",
    errorMsg: "This field is required",
  },
];

export default FormData;
