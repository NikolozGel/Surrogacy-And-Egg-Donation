import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const schema = yup.object({
  fullName: yup.string().required("name is required"),
  phone: yup.string().required(" is required"),
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Email is not valid"
    ),
  message: yup.string().required("Text is required"),
});

interface formData {
  id?: number;
  fullName: string;
  phone: string;
  email: string;
  message: string;
}

export default function RegistrationForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({
    resolver: yupResolver(schema),
  });
  const [data, setData] = useState();
  const [submited, setSubmited] = useState<boolean>(false);

  const onSubmit: SubmitHandler<formData> = async (formData) => {
    const formDataWithId = { ...formData, id: uuidv4() };
    try {
      const response = await axios.post(
        "http://localhost:3000/patients",
        formDataWithId
      );
      if (response.status === 201) {
        setData(response.data);
        setSubmited(true);
      }
      reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <p className="text-[25px]">
          Welcome to a place where dreams are nurtured, and miracles unfold.
        </p>
        <p className="text-gray-500 text-[20px] mb-10"></p>
        <h1 className={`${submited ? "block" : "hidden"} text-[25px]`}>
          Thank you for reaching out! We’ll contact you soon.
        </h1>
        <div className={`${submited ? "hidden" : "block"}`}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full flex flex-col gap-5">
              <div>
                {errors.fullName ? (
                  <p className="text-red-500">{errors.fullName?.message}</p>
                ) : null}
                <input
                  type="text"
                  id="fullName"
                  {...register("fullName")}
                  placeholder="full name  *"
                  className="border p-2 w-full"
                />
              </div>
              <div>
                {errors.phone ? (
                  <p className="text-red-500">{errors.phone?.message}</p>
                ) : null}
                <input
                  type="tel"
                  id="phone"
                  {...register("phone")}
                  placeholder="Phone  (Including country code) *"
                  className="border p-2 w-full"
                />
              </div>
              <div>
                {errors.email ? (
                  <p className="text-red-500">{errors.email?.message}</p>
                ) : null}
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  placeholder="Email  *"
                  className="border p-2 w-full"
                />
              </div>
              <div>
                {errors.message ? (
                  <p className="text-red-500">{errors.message?.message}</p>
                ) : null}
                <textarea
                  id="message"
                  {...register("message")}
                  rows={4}
                  placeholder="message  *"
                  className="border p-2 w-full"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 bg-blue-500 text-white py-2 px-4"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
