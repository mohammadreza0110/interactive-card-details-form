import { object, string } from "yup";

export default object({
  name: string()
    .typeError("Wrong format, numbers only")
    .required("name is required"),
  card_number: string()
    .required("card_number is required")
    .matches(/^[0-9]{16}$/, "Invalid Card Number, Should be 16 numbers"),
  month: string()
    .typeError("Wrong format, numbers only")
    .required("Can’t be blank")
    .matches(/^(0[1-9]|1[0-2])$/, "Invalid month"),
  year: string()
    .typeError("Wrong format, numbers only")
    .required("Can’t be blank")
    .matches(/^(202[4-9]|20[3-9]{3,})$/, "Invalid year (2024 | 29)"),
  CVC: string()
    .typeError("Wrong format, numbers only")
    .required("Can’t be blank")
    .matches(/^\d{4}$/, "Invalid CVC Number, Should be 4 Char"),
});
