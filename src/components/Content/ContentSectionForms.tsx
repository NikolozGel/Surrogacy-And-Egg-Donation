import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object({
  fullName: yup.string().required("name is required"),
  phone: yup.string().required("phone is required"),
  email: yup
    .string()
    .required("email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Email is not valid"
    ),
  message: yup.string().required("message is required"),
});

interface inputs {
  fullName: string;
  phone: string;
  email: string;
  message: string;
}

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  message: string;
}

export default function ContentSectionForms() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<inputs>({
    resolver: yupResolver(schema),
  });

  const [submited, setSubmited] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FormData> = () => {
    setSubmited(true);
    reset();
  };

  return (
    <>
      <div className="w-full lg:w-1/2">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <div>
            {errors.fullName ?
              <p className=" text-red-500">{errors.fullName.message}</p>
            : null}
            <input
              type="text"
              id="fullName"
              {...register("fullName")}
              placeholder="full name"
              className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            {errors.phone ?
              <p className=" text-red-500">{errors.phone.message}</p>
            : null}
            <input
              type="tel"
              id="phone"
              {...register("phone")}
              placeholder="phone (including country code) *"
              className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            {errors.email ?
              <p className=" text-red-500">{errors.email.message}</p>
            : null}
            <input
              type="email"
              id="email"
              {...register("email")}
              placeholder="email  *"
              className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            {errors.message ?
              <p className=" text-red-500">{errors.message.message}</p>
            : null}
            <textarea
              id="message"
              {...register("message")}
              rows={4}
              placeholder="message  *"
              className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
        <p className={`mt-5 ${submited ? "block" : "hidden"}`}>
          Thank you, we'll contact you as soon as possible!
        </p>
      </div>
    </>
  );
}
