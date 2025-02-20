import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Banner from '../Assets/Banner.png'
import { Link } from "react-router-dom";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const navLinks = [
  { name: "About Us", id: "about-us" },
  { name: "Why Choose Us", id: "why-choose" },
  { name: "Fragrances", id: "fragrances" },
  { name: "Flavours", id: "flavours" },
  { name: "Let’s Connect", id: "connect" },
  { name: "Contact Us", id: "contact" }
];


const Home = () => {

  const [isOpen, setIsOpen] = useState(false); // For Hamburger Menu

  return (
    <div>
      <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
        <div className="px-[2%] md:px-[4%] py-4 flex justify-between items-center">
          <Link to="/"><img src='/Logo Kothari1.png' alt="Logo" /></Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-x-8">
            {navLinks.map((link, i) => (
              <a key={i} href={`#${link.id}`} className="hover:text-blue-500">
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Icon */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-2xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`absolute left-0 w-full bg-white shadow-md transition-all duration-300 overflow-hidden ${isOpen ? "max-h-[300px]" : "max-h-0"}`}>
          <ul className="flex flex-col gap-y-3 px-4 py-4">
            {navLinks.map((link, i) => (
              <li key={i}>
                <a href={`#${link.id}`} className="hover:text-blue-500">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="h-screen flex items-center justify-center bg-cover mt-[4.9rem] bg-no-repeat"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <h2 className="text-xl sm:text-3xl md:text-4xl font-medium italic font-serif -translate-y-12 md:-translate-y-14">“ Molecular Poetry In Every Whiff ”</h2>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-24 flex justify-center">
        <div className="text-center max-w-2xl mx-auto text-gray-700 px-6">
          <p className="tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.5em] font-semibold">
            W h o &nbsp; W E &nbsp; A r e
          </p>
          <h2 className="mt-3 text-2xl md:text-4xl font-semibold">About Us</h2>
          <p className="mt-4">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
            quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
            quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
            quaerat voluptatem.
          </p>

          <p className="mt-4">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem.
          </p>
        </div>
      </section>

      {/* Let's Connect Section */}
      <section id="connect" className="flex justify-center">
        <div className="px-8 w-full md:px-0 md:w-[90%] lg:w-[80%] xl:w-[70%]">
          <h2 className="text-2xl md:text-4xl font-semibold text-center">Let’s Connect</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-700 px-6 text-center">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae.
          </p>

          <form className="space-y-8 mt-14">
            {/* First Row (Name,Contact No., Email*/}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="relative">
                <label className="absolute -top-3 left-3 bg-white px-2 text-sm">Name</label>
                <input type="text" placeholder="Enter Your Name" className="w-full p-3 rounded-2xl border border-gray-500 transition-all duration-150 hover:shadow-[0_0_0_1px_rgba(107,114,128,1)] focus:outline-none focus:ring-1 focus:ring-[gray]" />
              </div>

              <div className="relative">
                <label className="absolute -top-3 left-3 bg-white px-2 text-sm">Contact No.</label>
                <input type="text" placeholder="Enter Your Contact No." className="w-full p-3 rounded-2xl border border-gray-500 transition-all duration-150 hover:shadow-[0_0_0_1px_rgba(107,114,128,1)] focus:outline-none focus:ring-1 focus:ring-[gray]" />
              </div>

              {/* Fix: `sm:col-span-2` to make Email full width on small screens */}
              <div className="relative sm:col-span-2 lg:col-span-1">
                <label className="absolute -top-3 left-3 bg-white px-2 text-sm">Email Address</label>
                <input type="email" placeholder="Type Your Email Address" className="w-full p-3 rounded-2xl border border-gray-500 transition-all duration-150 hover:shadow-[0_0_0_1px_rgba(107,114,128,1)] focus:outline-none focus:ring-1 focus:ring-[gray]" />
              </div>
            </div>

            {/* Second Row Company Name*/}
            <div className="relative">
              <label className="absolute -top-3 left-3 bg-white px-2 text-sm">Company Name</label>
              <input type="text" placeholder="Enter Your Company Name" className="w-full p-3 rounded-2xl border border-gray-500 transition-all duration-150 hover:shadow-[0_0_0_1px_rgba(107,114,128,1)] focus:outline-none focus:ring-1 focus:ring-[gray]" />
            </div>

            {/* Third Row - Message */}
            <div className="relative">
              <label className="absolute -top-3 left-3 bg-white px-2 text-sm">Message</label>
              <textarea rows={4} placeholder="Type Your Message" className="w-full p-3 rounded-2xl border border-gray-500 transition-all duration-150 hover:shadow-[0_0_0_1px_rgba(107,114,128,1)] focus:outline-none focus:ring-1 focus:ring-[gray] overflow-auto resize-none"></textarea>
            </div>

            <div className="flex justify-center">
              <button type="submit" className="w-28 bg-[#232222] text-white p-2 rounded-xl transition-transform duration-200 hover:scale-105">
                Submit
              </button>
            </div>

          </form>
        </div>
      </section>

      {/* Contact Us Section*/}
      <section id="contact" className="py-24 text-center">
        {/* Contact Us Heading */}
        <h2 className="text-2xl md:text-4xl font-semibold">Contact Us</h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-700 px-6">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
          totam rem aperiam, eaque ipsa quae.
        </p>

        {/* Contact Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:px-12 justify-items-center md:justify-items-stretch">

          {/* Location Card */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center
          w-[80%] md:w-auto">
            <FiMapPin strokeWidth={1.5} className="text-3xl mb-4" />
            <p className="mt-2 text-gray-700">
              Kothari Fragrances & Flavours 613 (Sixth Floor), Anam-1, Opp. Parimal Garden, CG Road, Ahmedabad, Gujarat, India. Pin Code - 380006
            </p>
          </div>

          {/* Phone Card */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center
          w-[80%] md:w-auto">
            <FiPhone strokeWidth={1.5} className="text-3xl mb-4" />
            <p className="text-gray-700">+91 81411 53374</p>
            <p className="text-gray-700 mt-2">+91 81411 53384</p>
          </div>

          {/* Email Card */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center
          w-[80%] md:w-auto">
            <FiMail strokeWidth={1.5} className="text-3xl mb-4" />
            <a href="mailto:info@kff.co.in" className="hover:underline text-gray-700">info@kff.co.in</a>
            <a href="mailto:sales@kff.co.in" className="hover:underline mt-2 text-gray-700">sales@kff.co.in</a>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;

{/* Products */ }
{/* <section id="products" className="py-16 bg-gray-200">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-center">What We Have</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {["Fragrances", "Flavours", "Personal Care", "Home Care"].map((item, i) => (
              <div key={i} className="bg-white p-6 shadow rounded text-center">
                <h3 className="font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section> */}

{/* Contact */ }
{/* <section id="contact" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center">Let's Connect</h2>
          <form className="max-w-lg mx-auto mt-6 bg-gray-100 p-6 rounded shadow">
            <input type="text" placeholder="Name" className="block w-full p-2 mb-4 border rounded" />
            <input type="email" placeholder="Email" className="block w-full p-2 mb-4 border rounded" />
            <textarea placeholder="Message" className="block w-full p-2 mb-4 border rounded"></textarea>
            <button className="w-full bg-blue-500 text-white py-2 rounded">Submit</button>
          </form>
        </div>
      </section> */}