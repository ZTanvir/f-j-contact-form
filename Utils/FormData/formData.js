const FormData = [
  { id: crypto.randomUUID(), lable: "First Name", type: "text", name: "fname" },
  { id: crypto.randomUUID(), lable: "Last Name", type: "text", name: "lname" },
  {
    id: crypto.randomUUID(),
    lable: "Email Address",
    type: "email",
    name: "mail",
  },
];

export default FormData;
