import Link from "next/link";

const CTASection = () => {
  return (
    <section className="relative bg-fuchsia-800 py-16">
      <div className="text-center mx-auto max-w-screen-lg">
        <h2 className="text-4xl font-bold text-white">
          Ready for Exceptional Auto Service?
        </h2>
        <p className="mt-4 text-white text-lg">
          Trust Genuine Autocenter for top-tier maintenance, repairs, and
          diagnostics. Book your appointment today!
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/appointment"
            className="bg-white text-fuchsia-800 hover:bg-gray-100 hover:text-fuchsia-700 transition px-8 py-3 text-sm font-semibold rounded-lg"
          >
            Book an Appointment
          </Link>
          <Link
            href="/contact"
            className="border border-white text-white hover:bg-white hover:text-fuchsia-800 transition px-8 py-3 text-sm font-semibold rounded-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};
export default CTASection;
