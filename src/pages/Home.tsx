import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";

type ISlides = {
  url: string;
  title: string;
};

export default function Home() {
  const slides: ISlides[] = [
    { url: "/images/image-1.jpg", title: "Beach" },
    { url: "/images/image-2.jpg", title: "Boat" },
    { url: "/images/image-3.jpg", title: "Forest" },
    { url: "/images/image-4.jpg", title: "City" },
    { url: "/images/image-5.jpg", title: "Italy" },
  ];

  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };

  return (
    <div>
      <Header />

      <h1>Slider</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
}
