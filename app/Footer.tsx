import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="p-5 bg-black text-gray-300 py-10">
      <div className="container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-3">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold text-white">Genuine Autocenter</h3>
          <p className="mt-4 text-base">
            Your one-stop shop for quality parts and accessories for both bikes
            and cars. We pride ourselves on delivering top-notch products and
            exceptional customer service.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-2xl font-semibold text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-white transition">
                Products
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-white transition">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-2xl font-semibold text-white">Contact Us</h4>
          <ul className="mt-4 space-y-2 text-base">
            <li className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-purple-500" />
              <span>123 Auto Parts St., City, Country</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-purple-500" />
              <span>info@genuineautocenter.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-purple-500" />
              <span>+123 456 7890</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-600 pt-6 text-center text-sm">
        <p>&copy; 2024 Genuine Autocenter. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <Link href="#" className="hover:text-purple-500 transition">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link href="#" className="hover:text-purple-500 transition">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link href="#" className="hover:text-purple-500 transition">
            <i className="fab fa-instagram"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
