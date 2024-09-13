import ContentSection from "../components/Content/ContentSection";
import FlexContainer from "../components/FlexContainer";

import Header from "../components/Header";
import ImageSlider from "../components/Content/Carousel/ImageSlider";
import { Footer } from "antd/es/layout/layout";
import WhatsAppIcon from "../components/WhatsAppIcon";

export default function Home() {
  return (
    <>
      <Header />

      <ImageSlider />

      <FlexContainer />
      <ContentSection />
      <Footer />
      <WhatsAppIcon />
    </>
  );
}
