import React, { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import BaseInput from "./BaseInput";
import ConfirmedForm from "./ConfirmedForm";
import validationSchema from "../utils/formik/validationSchema";

const initialValues = {
  name: "",
  card_number: "",
  month: "",
  year: "",
  CVC: "",
};

const onSubmit = (values) => console.log("");

export default function FormSection({ setCardInfo }) {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  const handleName = ({ target }) => {
    const noDigits = target.value.replace(/\d/g, "");
    formik.setFieldValue("name", noDigits);
    setCardInfo((prev) => ({ ...prev, name: noDigits }));
  };

  const handleMonth = ({ target }) => {
    if (target.value.length <= 2) {
      formik.setFieldValue("month", target.value);
      setCardInfo((prev) => ({ ...prev, month: target.value }));
    }
  };

  const handleCVC = ({ target }) => {
    if (target.value.length <= 4) {
      formik.setFieldValue("CVC", target.value);
      setCardInfo((prev) => ({ ...prev, CVC: target.value }));
    }
  };

  const handleYear = ({ target }) => {
    if (target.value.length <= 4) {
      formik.setFieldValue("year", target.value);
      setCardInfo((prev) => ({ ...prev, year: target.value }));
    }
  };

  const handleCardNumber = ({ target }) => {
    const { value } = target;

    // Remove all non-digit characters from input value
    const digitsOnly = value.replace(/\D/g, "");

    if (digitsOnly.length <= 16) {
      formik.setFieldValue("card_number", digitsOnly);
      setCardInfo((prev) => ({ ...prev, number: digitsOnly }));
    }
  };

  return (
    <>
      <form className="px-6 py-8 xl:py-0" onSubmit={formik.handleSubmit}>
        <div className="flex flex-col xl:w-[352px] gap-y-6 m-auto xl:h-screen place-content-center">
          {formik.isSubmitting ? (
            <ConfirmedForm />
          ) : (
            <>
              <div>
                <BaseInput
                  title="Cardholder Name"
                  type="text"
                  name="name"
                  value={formik.values.name}
                  placeholder="e.g. Jane Appleseed"
                  onChange={handleName}
                  onBlur={formik.handleBlur}
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
                  name="card_number" // Keep the name prop as "card_number"
                  placeholder="e.g. 1234 5678 9123 0000"
                  value={formik.values.card_number.replace(/\s/g, "")} // Remove spaces from the value
                  onChange={handleCardNumber}
                  onBlur={formik.handleBlur}
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
                  <div className="grid grid-cols-2 gap-x-2 xl:w-[170px]">
                    <div>
                      <BaseInput
                        name="month"
                        value={formik.values.month}
                        onChange={handleMonth}
                        onBlur={formik.handleBlur}
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
                        value={formik.values.year}
                        onChange={handleYear}
                        onBlur={formik.handleBlur}
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
                    value={formik.values.CVC}
                    onChange={handleCVC}
                    onBlur={formik.handleBlur}
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
                className="w-full py-3 text-white transition-transform duration-200 rounded-xl disabled:scale-100 disabled:cursor-not-allowed disabled:bg-neutral-LightGrayishViolet bg-neutral-VeryDarkViolet active:scale-95"
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
