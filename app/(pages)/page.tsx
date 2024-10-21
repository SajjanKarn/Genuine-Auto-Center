import { Metadata } from "next";
import {
  BannerSection,
  AboutSection,
  CTASection,
  FAQSection,
  ContactSection,
} from "./home-sections";

export const metadata: Metadata = {
  title: "Genuine Auto Center | Home",
  description: "Genuine Auto Center is a car repair and maintenance service.",
};

const Home = () => {
  return (
    <>
      <BannerSection />

      <AboutSection />
      <CTASection />
      <FAQSection />
      <ContactSection />
    </>
  );
};
export default Home;
