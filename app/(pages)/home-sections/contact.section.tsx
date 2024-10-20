const ContactSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-fuchsia-800">Get in Touch</h2>
          <p className="mt-4 text-lg text-gray-700">
            Have any questions or need to schedule an appointment? We&apos;re
            here to help!
          </p>
        </div>

        <div className="mt-12 flex flex-col lg:flex-row lg:gap-12">
          {/* Contact Form */}
          <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
            <form action="#">
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-fuchsia-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-fuchsia-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Type your message here..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-fuchsia-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-fuchsia-800 text-white py-3 rounded-lg hover:bg-fuchsia-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details & Map */}
          <div className="lg:w-1/2 mt-10 lg:mt-0 flex flex-col gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800">Our Location</h3>
              <p className="mt-2 text-gray-700">
                123 Auto Street, Auto City, CA 98765
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800">Phone</h3>
              <p className="mt-2 text-gray-700">+1 (800) 123-4567</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800">Email</h3>
              <p className="mt-2 text-gray-700">info@genuineautocenter.com</p>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3394.983948456256!2d85.29530277529996!3d27.686659876194508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb196dc5c36ee9%3A0x121ca6afbfec036!2sGenuine%20Auto%20Center!5e1!3m2!1sne!2snp!4v1729412280322!5m2!1sne!2snp"
                width="100%"
                height="300"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
