import FlexContainer from "../components/FlexContainer";
import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";
import RegistrationForm from "../components/RegistrationForm";

export default function Home() {
  return (
    <div>
      <Header />
      <ImageSlider />
      <FlexContainer />
      <RegistrationForm />
    </div>
  );
}
