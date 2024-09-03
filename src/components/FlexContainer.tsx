import parentImg2 from "/images/family-play.jpg";
export default function FlexContainer() {
  return (
    <div>
      {" "}
      <h1 className="text-center md:text-[35px] lg:text-[45px] xl:text-[55px] text-orange-600">
        Surrogacy and Egg donation in Georgia
      </h1>
      <div className="flex flex-wrap md:flex-nowrap md:justify-center md:gap-14  md:flex-justify-evenly gap-4 p-4">
        <div className="w-full md:max-w-xs overflow-hidden shadow-lg h-[700px] sm:w-screen">
          <img
            src={parentImg2}
            alt="Image 1"
            className="h-[400px] object-cover"
          />
          <h2 className="text-3xl">Lorem ipsum dolor sit amet.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            veniam reiciendis tempore ipsam, voluptate ad itaque minus dolores
            modi corporis esse sed dolorum voluptas illum tenetur debitis
            officia quae facilis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Architecto, dolor!
          </p>
        </div>
        <div className="w-full md:max-w-xs overflow-hidden shadow-lg">
          <img
            src={parentImg2}
            alt="Image 2"
            className="h-[400px] object-cover"
          />
          <h2 className="text-3xl">Lorem ipsum dolor sit amet.</h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            veniam reiciendis tempore ipsam, voluptate ad itaque minus dolores
            modi corporis esse sed dolorum voluptas illum tenetur debitis
            officia quae facilis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nam, aut?
          </p>
        </div>
        <div className="w-full md:max-w-xs overflow-hidden shadow-lg">
          <img
            src={parentImg2}
            alt="Image 3"
            className="h-[400px] object-cover"
          />
          <h2 className="text-3xl">Lorem ipsum dolor sit amet.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            veniam reiciendis tempore ipsam, voluptate ad itaque minus dolores
            modi corporis esse sed dolorum voluptas illum tenetur debitis
            officia quae facilis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laboriosam, iure!
          </p>
        </div>
      </div>
    </div>
  );
}
