import ContentSection from "../components/ContentSection";
import FlexContainer from "../components/FlexContainer";
import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";

export default function Home() {
  return (
    <>
      <Header />

      <ImageSlider />

      <FlexContainer />
      <ContentSection />
    </>
  );
}
