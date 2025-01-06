import Header from "../components/header/Header";
import WhatsAppIcon from "../components/WhatsAppIcon";

export default function About() {
  return (
    <>
      <Header />
      <WhatsAppIcon />
      <div className="px-8 py-16 bg-white text-gray-700">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <p className="text-lg leading-relaxed mb-6">
          Welcome to our platform, where we are dedicated to helping individuals
          and families achieve their dreams through surrogacy and egg donation
          services. With compassion, transparency, and professionalism, we guide
          our clients through every step of the journey, ensuring a secure and
          supportive experience.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            Our mission is to make the path to parenthood accessible and safe
            for all, whether you’re interested in becoming a surrogate, egg
            donor, or intended parent. We prioritize ethical practices,
            fostering trust and respect in all our relationships.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <p className="text-lg leading-relaxed">
            We understand that each family’s journey is unique, and we are here
            to provide personalized support and expertise. From matching with
            the right surrogate or donor to managing legal and medical
            arrangements, we ensure a smooth and rewarding experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg leading-relaxed">
            If you’re ready to take the next step or simply want to learn more
            about our services, feel free to reach out to us. Our team is here
            to answer your questions and provide the guidance you need on this
            remarkable journey.
          </p>
        </section>
      </div>
    </>
  );
}
