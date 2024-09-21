import React, { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const RegistrationForm: React.FC = () => {
  const [error, setError] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e?.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    if (formData.firstName.length <= 1) {
      setError(true);
    } else {
      setError(false);
    }

    try {
      const response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Data saved successfully");
        // ფორმის ველების გასუფთავება
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      } else {
        console.error("Failed to save data");
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <div className="mt-10">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="w-full flex flex-col gap-5">
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="სახელი"
              className="border p-2 w-full"
            />
            {error ? <span>The field is required.</span> : null}
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="გვარი"
              className="border p-2 w-full"
            />
            <input
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="მეილი"
              className="border p-2 w-full"
            />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="შეტყობინება"
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
};

export default RegistrationForm;
