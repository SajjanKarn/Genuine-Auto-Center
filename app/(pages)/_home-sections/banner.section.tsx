import ButtonLink from "@/components/shared/ButtonLink";
import PrimaryButton from "@/components/shared/PrimaryButton";

const BannerSection = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-[80vh] lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Drive with Confidence.
            <strong className="font-extrabold text-fuchsia-700 sm:block">
              {" "}
              Expert Auto Care, Every Time.{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            At Genuine Autocenter, we offer top-tier maintenance, repairs, and
            diagnostics to keep your vehicle running smoothly. Trust us for
            reliable, professional service.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <PrimaryButton href="/services">View Services</PrimaryButton>
            <ButtonLink href="/contact" variant="outline">
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BannerSection;
