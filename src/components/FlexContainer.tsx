import parentImg2 from "/images/family-play.jpg";
export default function FlexContainer() {
  return (
    <div className="bg-slate-100">
      <h1 className="text-center md:text-[35px] lg:text-[45px] xl:text-[55px] text-orange-600">
        Surrogacy and Egg donation in Georgia
      </h1>

      <div className="flex flex-wrap md:flex-nowrap md:justify-center md:gap-14  md:flex-justify-evenly gap-4 p-4">
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
