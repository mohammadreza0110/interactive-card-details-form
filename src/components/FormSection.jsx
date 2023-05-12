import React, { useState } from "react";
import { object, string, number } from "yup";
import { useFormik } from "formik";
import BaseInput from "./BaseInput";
import ConfirmedForm from "./ConfirmedForm";

const initialValues = {
  name: "",
  card_number: "",
  month: "",
  year: "",
  CVC: "",
};
const onSubmit = (values) => console.log("");

const validationSchema = object({
  name: string().required("name is required"),
  card_number: string()
    .typeError("Wrong format, numbers only")
    .required("card_number is required")
    .matches(/^[0-9]{16}$/, "Invalid Card Number, Should be 16 numbers")
    .nullable(),
  month: string()
    .typeError("Wrong format, numbers only")
    .required("Can’t be blank")
    .matches(/^(0[1-9]|1[0-2])$/, "Invalid month")
    .nullable(),
  year: string()
    .typeError("Wrong format, numbers only")
    .required("Can’t be blank")
    .matches(/^(2023|2024|2025|2026|2027|2028)$/, "Invalid year"),
  CVC: string()
    .typeError("Wrong format, numbers only")
    .required("Can’t be blank")
    .matches(/^\d{10}$/, "Invalid CVC Number, Should be 10 Char"),
});

export default function FormSection({ customClasses }) {
  
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  
  return (
    <>
      <form className="px-6 py-8" onSubmit={formik.handleSubmit}>
        <div className="flex flex-col lg:w-[352px] gap-y-6 m-auto lg:h-screen place-content-center">
          {formik.isSubmitting ? (
            <ConfirmedForm />
          ) : (
            <>
              <div>
                <BaseInput
                  title="Cardholder Name"
                  type="text"
                  name="name"
                  placeholder="e.g. Jane Appleseed"
                  {...formik.getFieldProps("name")}
                  errorStyle={formik.errors.name && formik.touched.name}
                />

                {formik.errors.name && formik.touched.name && (
                  <div className="pt-1 pl-2 text-sm text-red-500">
                    {formik.errors.name}
                  </div>
                )}
              </div>
              <div>
                <BaseInput
                  title="Card Number"
                  name="card_number"
                  placeholder="e.g. 1234 5678 9123 0000"
                  {...formik.getFieldProps("card_number")}
                  errorStyle={
                    formik.errors.card_number && formik.touched.card_number
                  }
                />
                {formik.errors.card_number && formik.touched.card_number && (
                  <div className="pt-1 pl-2 text-sm text-red-500">
                    {formik.errors.card_number}
                  </div>
                )}
              </div>
              <div className="grid grid-cols-2 gap-x-3">
                <div>
                  <div className="text-[12px] font-bold pb-1">
                    Exp. Date (MM/YYYY)
                  </div>
                  <div className="grid grid-cols-2 gap-x-2 lg:w-[170px]">
                    <div>
                      <BaseInput
                        name="month"
                        {...formik.getFieldProps("month")}
                        placeholder="MM"
                        errorStyle={formik.errors.month && formik.touched.month}
                      />
                      {formik.errors.month && formik.touched.month && (
                        <div className="pt-1 pl-2 text-xs text-red-500">
                          {formik.errors.month}
                        </div>
                      )}
                    </div>

                    <div>
                      <BaseInput
                        name="year"
                        {...formik.getFieldProps("year")}
                        placeholder="YYYY"
                        errorStyle={formik.errors.year && formik.touched.year}
                      />
                      {formik.errors.year && formik.touched.year && (
                        <div className="pt-1 pl-2 text-xs text-red-500">
                          {formik.errors.year}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <BaseInput
                    name="CVC"
                    title="CVC"
                    {...formik.getFieldProps("CVC")}
                    placeholder="e.g. 123"
                    errorStyle={formik.errors.CVC && formik.touched.CVC}
                  />
                  {formik.errors.CVC && formik.touched.CVC && (
                    <div className="pt-1 pl-2 text-xs text-red-500">
                      {formik.errors.CVC}
                    </div>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3 text-white transition-transform duration-200 rounded-lg disabled:scale-100 disabled:cursor-not-allowed disabled:bg-neutral-LightGrayishViolet bg-neutral-VeryDarkViolet active:scale-95"
                disabled={!formik.isValid}
              >
                confirm
              </button>
            </>
          )}
        </div>
      </form>
    </>
  );
}
