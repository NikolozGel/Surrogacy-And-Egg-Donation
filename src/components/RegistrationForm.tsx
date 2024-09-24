import { SubmitHandler, useForm } from "react-hook-form";

interface IInputs {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInputs>();

  const onSubmit: SubmitHandler<IInputs> = (data) => {
    console.log(data);
  };

  return (
    <div className="mt-10">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full flex flex-col gap-5">
            <div>
              <input
                type="text"
                id="firstName"
                {...register("firstName")}
                placeholder="Name"
                className="border p-2 w-full"
              />
              {errors.firstName ? <p>{errors.firstName?.message}</p> : null}
            </div>
            <div>
              <input
                type="text"
                id="lastName"
                {...register("lastName")}
                placeholder="LastName"
                className="border p-2 w-full"
              />
              {errors.lastName ? <p>{errors.lastName?.message}</p> : null}
            </div>
            <div>
              <input
                type="email"
                id="email"
                {...register("email")}
                placeholder="Email"
                className="border p-2 w-full"
              />
              {errors.email ? <p>{errors.email?.message}</p> : null}
            </div>
            <textarea
              id="message"
              {...register("message")}
              rows={4}
              placeholder="Text"
              className="border p-2 w-full"
            />
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
  );
}
