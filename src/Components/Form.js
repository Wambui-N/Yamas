"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const [submitValue, setSubmitValue] = useState(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    setSubmitValue(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input
          className="bg-white text-black border border-primary px-4 py-2 text-sm font-light rounded-xl"
          placeholder="Name"
          {...register("name", {
            required: "This field is required",
            maxLength: {
              value: 50, // Adjust as needed
              message: "Max length is 50",
            },
          })}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <input
          className="bg-white text-black border border-primary px-4 py-2 text-sm font-light rounded-xl"
          placeholder="Email"
          type="email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input
          className="bg-white text-black border border-primary px-4 py-2 text-sm font-light rounded-xl"
          placeholder="People"
          type="number"
          {...register("people", {
            required: "This field is required",
            min: {
              value: 0,
              message: "Number of people cannot be less than 0",
            },
          })}
        />
        {errors.people && (
          <p className="text-red-500">{errors.people.message}</p>
        )}

        <input
          className="bg-white text-black border border-primary px-4 py-2 text-sm font-light rounded-xl"
          type="date"
          {...register("date", {
            required: "This field is required",
          })}
        />
        {errors.date && <p className="text-red-500">{errors.date.message}</p>}

        <input
          className="bg-white text-black border border-primary px-4 py-2 text-sm font-light rounded-xl"
          type="time"
          {...register("time", {
            required: "This field is required",
          })}
        />
        {errors.time && <p className="text-red-500">{errors.time.message}</p>}

        

        <textarea
          className="bg-white text-black border border-primary px-4 py-2 text-sm font-light rounded-xl"
          placeholder="Message"
          {...register("message", {
            maxLength: {
              value: 500,
              message: "The message cannot exceed 500 characters",
            },
          })}
        />
        {errors.message && (
          <p className="text-red-500">{errors.message.message}</p>
        )}

        <input
          type="submit"
          value="Reserve"
          className="bg-primary text-lg font-bold text-white rounded-xl py-1"
        />
      </form>
      {/* Optional: Show the form submission result */}
      {/* {submitValue && <pre>{JSON.stringify(submitValue, null, 2)}</pre>} */}
    </div>
  );
};

export default Form;
