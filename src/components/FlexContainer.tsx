import { useState } from "react";
import parentImg2 from "/images/family-play.jpg";
import RegistrationForm from "./RegistrationForm";
import { Modal } from "antd";
export default function FlexContainer() {
  const [showForm, setShowForm] = useState(false);

  // ღილაკზე დაჭერის ფუნქცია
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="bg-slate-100">
      <h1 className="text-center md:text-[35px] lg:text-[45px] xl:text-[55px] text-orange-600 mb-10">
        Surrogacy and Egg donation in Georgia
      </h1>
      <div className="flex justify-center">
        <button
          className="w-[200px] h-[50px] bg-orange-500 rounded-full mb-20 text-white active:opacity-55 transition-all"
          onClick={toggleForm}
        >
          Register Now
        </button>
      </div>

      <Modal
        footer={false}
        title="დაგვიკავშირდით"
        open={showForm}
        onOk={() => setShowForm(false)}
        onCancel={() => setShowForm(false)}
      >
        <RegistrationForm />
      </Modal>

      <div className="flex flex-wrap md:flex-nowrap md:justify-center md:gap-14  md:flex-justify-evenly gap-4 px-4">
        <div className="w-full overflow-hidden shadow-lg rounded-md">
          <img
            src={parentImg2}
            alt="Image 1"
            className="h-auto object-cover w-screen block"
          />
          <div>
            <h2 className="text-3xl text-center mt-5 mb-4">
              Lorem ipsum dolor sit amet.
            </h2>
            <p className="text-center px-2 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              veniam reiciendis tempore ipsam, voluptate ad itaque minus dolores
              modi corporis esse sed dolorum voluptas illum tenetur debitis
              officia quae facilis. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nam, aut? lorem10
            </p>
          </div>
        </div>
        <div className="w-full  overflow-hidden shadow-lg rounded-md">
          <img
            src={parentImg2}
            alt="Image 2"
            className="h-auto object-cover w-full  block"
          />
          <div>
            <h2 className="text-3xl text-center mt-5 mb-4">
              Lorem ipsum dolor sit amet.
            </h2>
            <p className="text-center px-2 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              veniam reiciendis tempore ipsam, voluptate ad itaque minus dolores
              modi corporis esse sed dolorum voluptas illum tenetur debitis
              officia quae facilis. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nam, aut?
            </p>
          </div>
        </div>
        <div className="w-full  overflow-hidden shadow-lg rounded-md">
          <img
            src={parentImg2}
            alt="Image 3"
            className="h-auto object-cover w-full  block"
          />
          <div>
            <h2 className="text-3xl text-center mt-5 mb-4">
              Lorem ipsum dolor sit amet.
            </h2>
            <p className="text-center px-2 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              veniam reiciendis tempore ipsam, voluptate ad itaque minus dolores
              modi corporis esse sed dolorum voluptas illum tenetur debitis
              officia quae facilis. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Laboriosam, iure!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
