import ContentSection from "../components/Content/ContentSection";
import FlexContainer from "../components/Content/FlexContainer";

import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";
import WhatsAppIcon from "../components/WhatsAppIcon";
import Carousel from "../components/Carousel/Carousel";

export default function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <FlexContainer />
      <ContentSection />
      <WhatsAppIcon />
      <Footer />
    </>
  );
}
