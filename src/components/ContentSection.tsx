export default function ContentSection() {
  return (
    <div className="my-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">About Us</h1>
        <div className="mt-6 sm:mt-8 md:mt-10">
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            voluptatibus perspiciatis, obcaecati incidunt placeat excepturi
            iusto pariatur voluptate nulla cum facilis quisquam expedita magnam
            quae autem soluta accusamus, explicabo deserunt laboriosam saepe
            fugiat. Aliquid itaque tenetur, et similique architecto,
            necessitatibus soluta temporibus sapiente aperiam, quia sunt
            asperiores expedita a cum.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 p-4 lg:p-8">
        {/* Image Section */}
        <div className="flex-shrink-0 w-full lg:w-1/2">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Placeholder"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2">
          <form className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Additional Information"
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
      </div>
    </div>
  );
}
