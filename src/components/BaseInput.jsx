import React from "react";

export default function TextInput({
  title,
  name,
  placeholder,
  type,
  onChange,
  onBlur,
  value,
  errorStyle
}) {

  return (
    <div className="flex flex-col">
      {/* <div>
        <label htmlFor="name">Name:</label>
        <Field type="text" name="name" />
        <ErrorMessage name="name" component="div" />
      </div> */}

      {title && <label className="text-[12px] font-bold pb-1">{title}</label>}
      <input
        className={`${errorStyle && 'border-red-500'} px-3 py-2 border-2 rounded-lg outline-none bg-primary-background placeholder:text-neutral-DarkGrayishViolet placeholder:opacity-60`}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
}
