import React, { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  console.log(formData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e?.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // სექრეტულად შეგიძლიათ დაამატოთ ფორმის გაგზავნის ლოგიკა აქ
    console.log("Form submitted:", formData);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="bg-neutral-500 absolute top-0 flex flex-col items-center justify-center w-screen h-screen">
      <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700">
            სახელი:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700">
            გვარი:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            იმეილი:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">
            ტექსტი:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border p-2 w-full"
            rows={4}
          />
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
