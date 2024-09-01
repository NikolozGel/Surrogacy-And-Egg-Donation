import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";

type ISlides = {
  url: string;
  title: string;
};

export default function Home() {
  // ესენი არის ფოტოებისთვის 'სლაიდერი'
  const slides: ISlides[] = [
    { url: "/images/happy-parents.jpg", title: "Parents1" },
    { url: "/images/baby.jpg", title: "parents2" },
    { url: "/images/happyBabe.jpg", title: "Parents3" },
    { url: "/images/family-play.jpg", title: "Parents4" },
    {
      url: "/images/family-fun-time-stockcake.jpg",
      title: "Parents5",
    },
  ];

  return (
    <div>
      <Header />

      <div className="w-[100%] h-[230px] sm:h-[330px]  md:h-[480px] xl:h-[730px]">
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
}
