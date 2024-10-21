import { PackageSearch, ShieldCheck, Users, Wrench } from "lucide-react";
import { CTASection } from "../_home-sections";

const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-screen-lg mx-auto px-4 text-center">
        {/* Title */}
        <h1 className="text-5xl font-bold text-gray-900 mb-8">
          About Genuine Autocenter
        </h1>

        {/* Introduction */}
        <p className="text-gray-700 text-lg leading-relaxed">
          Welcome to{" "}
          <span className="text-fuchsia-800 font-semibold">
            Genuine Autocenter
          </span>
          , your trusted source for premium parts and accessories for both bikes
          and cars. Whether you&apos;re a professional mechanic or a DIY
          enthusiast, we offer a vast selection of high-quality components to
          keep your vehicle running smoothly.
        </p>

        {/* Image */}
        <div className="mt-10">
          <img
            src="/path-to-auto-parts-image.jpg"
            alt="Auto parts display at Genuine Autocenter"
            className="rounded-lg shadow-lg object-cover w-full h-[400px]"
          />
        </div>

        {/* Our Mission */}
        <div className="mt-16 text-left">
          <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            At Genuine Autocenter, our mission is to provide vehicle owners with
            reliable, top-quality parts and accessories at competitive prices.
            We strive to ensure every customer finds the exact parts they need,
            with fast shipping and unmatched customer support.
          </p>
        </div>

        {/* Values Section with Lucide Icons */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-gray-800">
            Our Core Values
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-12 h-12 text-fuchsia-800 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">
                Reliability
              </h3>
              <p className="mt-2 text-gray-600 text-center text-base">
                We ensure the parts we offer are of the highest quality and
                built to last, so your vehicle performs at its best.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Wrench className="w-12 h-12 text-fuchsia-800 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Expertise</h3>
              <p className="mt-2 text-gray-600 text-center text-base">
                Our team is comprised of auto part specialists who are
                passionate about helping you find the right fit for your
                vehicle.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <PackageSearch className="w-12 h-12 text-fuchsia-800 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">
                Wide Selection
              </h3>
              <p className="mt-2 text-gray-600 text-center text-base">
                We stock a wide range of parts for bikes and cars, so
                you&apos;ll always find what you&apos;re looking for.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Users className="w-12 h-12 text-fuchsia-800 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">
                Customer Care
              </h3>
              <p className="mt-2 text-gray-600 text-center text-base">
                We value our customers and provide exceptional service to ensure
                every purchase meets your needs.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16" />
      </div>
      <CTASection />
    </section>
  );
};

export default AboutUs;
