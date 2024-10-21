import PrimaryButton from "@/components/shared/PrimaryButton";

const AboutSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-screen-xl mx-auto px-4 lg:flex lg:items-center lg:justify-between">
        {/* Left Column: Text */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold">About Us</h2>
          <p className="mt-4 text-lg text-gray-700">
            At Genuine Autocenter, we provide trusted and top-tier auto care
            services, specializing in maintenance, diagnostics, and repairs. Our
            certified team is committed to delivering the highest level of
            service, ensuring your vehicle runs smoothly and efficiently.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            With years of experience and a focus on customer satisfaction, we
            treat every car as if it were our own. We aim to be your go-to for
            all your automotive needs, offering reliable and transparent service
            with a personal touch.
          </p>
          <div className="mt-8 flex gap-4">
            <PrimaryButton href="/services">View Services</PrimaryButton>
            <PrimaryButton href="/contact" variant="outline">
              Contact Us
            </PrimaryButton>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          {/* eslint-disable-next-line */}
          <img
            src="https://www.autotrainingcentre.com/wp-content/uploads/2024/07/auto-mechanic.jpg"
            alt="About Us - Genuine Autocenter"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
