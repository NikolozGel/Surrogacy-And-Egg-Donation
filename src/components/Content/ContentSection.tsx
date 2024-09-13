import ContentSectionForms from "./ContentSectionForms";
import image from "/images/image-2.jpeg";

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
            src={image}
            alt="Placeholder"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <ContentSectionForms />
      </div>
    </div>
  );
}
