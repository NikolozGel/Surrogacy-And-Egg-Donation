import { useState } from "react";
import parentImg2 from "/images/family-play.jpg";
import RegistrationForm from "../forms/RegistrationForm";
import { Modal } from "antd";
export default function FlexContainer() {
  const [showForm, setShowForm] = useState(false);

  // ღილაკზე დაჭერის ფუნქცია
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="bg-white">
      <h1 className="text-center md:text-[35px] lg:text-[45px] xl:text-[55px] text-[#116466] mb-10">
        Surrogacy and Egg donation in Georgia
      </h1>
      <div className="flex justify-center">
        <button
          className="w-[200px] h-[50px] bg-[#116466] rounded-full mb-20 text-white active:opacity-55 transition-all"
          onClick={toggleForm}
        >
          Register Now
        </button>
      </div>

      <Modal
        footer={false}
        width={700}
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
              Hope Through Surrogacy and Donation
            </h2>
            <p className="text-center px-2 mb-5">
              Surrogacy and donation offer hope to individuals who cannot have
              children due to health or other reasons. A surrogate mother
              carries and gives birth to a child for someone else. Donation
              involves providing embryos, eggs, or sperm to help others create a
              family. This process brings new beginnings and offers hope to
              many.
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
              A New Path to Parenthood
            </h2>
            <p className="text-center px-2 mb-5">
              Surrogacy and donation open doors for families who face challenges
              with natural conception. Through surrogacy, a woman carries a
              child for those unable to do so themselves. Donation, whether of
              eggs, sperm, or embryos, provides essential support in creating
              life. These methods give countless individuals the opportunity to
              fulfill their dreams of parenthood.
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
              The Gift of Family Through Surrogacy and Donation
            </h2>
            <p className="text-center px-2 mb-5">
              Surrogacy and donation provide an extraordinary path for those who
              struggle to have children. In surrogacy, a woman helps by carrying
              a child for intended parents, while donation involves offering
              eggs, sperm, or embryos to assist in conception. These options
              bring hope, love, and the possibility of creating a family to
              those in need.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
