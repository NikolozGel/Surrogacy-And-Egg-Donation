interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export default function ContentSectionForms() {
  return (
    <>
      <div className="w-full lg:w-1/2">
        <form className="flex flex-col gap-6">
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="full name"
            className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="phone (including country code) *"
            className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            id="email"
            name="email"
            placeholder="email  *"
            className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="message  *"
            className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
