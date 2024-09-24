import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

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

interface Inputs {
  fullName: string;
  phone: string;
  email: string;
  message: string;
}

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = () => {
    setSubmited(true);
  };
  const [submited, setSubmited] = useState(false);
  return (
    <>
      <div>
        <h2 className="text-[25px]">
          Welcome to a place where dreams are nurtured, and miracles unfold.
        </h2>
        <p className="text-gray-500 text-[20px] mb-10">
          Here’s an alternative version of the text with a slightly different
          tone and phrasing: "Welcome to a place where dreams are nurtured, and
          miracles unfold." You are here because your journey is one of hope,
          love, and the courage to move forward. Our doors are open, ready to
          offer you warmth, understanding, and the expertise needed to support
          you through every step of surrogacy, egg donation, and IVF. Your
          presence here is meaningful, and we deeply value the trust you’ve
          placed in us. Rest assured, you’ve come to the right place. Together,
          we’ll walk this path with confidence, compassion, and a shared goal of
          making your dreams a reality. Reach out today, and let’s take the
          first step toward creating the family you’ve always imagined.
        </p>
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
