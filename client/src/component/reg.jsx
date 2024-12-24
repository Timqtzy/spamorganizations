import React from "react";

const EventRegistration = () => {
  let loc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15412.183259971867!2d120.65233659776362!3d15.045581980252779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f76ad3222415%3A0xfdcd3074422f96ca!2sLausGroup%20Event%20Centre!5e0!3m2!1sen!2sph!4v1733739465888!5m2!1sen!2sph";
  return (
    <div className="container mx-auto p-4 max-w-screen-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Event Data */}
        <div className="bg-white p-8 border border-gray-200 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Event Details</h2>
          <p className="text-gray-700">
            Join us for an exciting event filled with insightful talks and
            networking opportunities. Learn from industry experts and connect
            with like-minded individuals.
          </p>
          <ul className="list-disc list-inside mt-4">
            <li>Date: January 15, 2025</li>
            <li>Time: 10:00 AM - 4:00 PM</li>
            <li>Location: Main Auditorium, City Conference Center</li>
          </ul>
        </div>

        {/* Registration Form */}
        <div className="bg-white p-8 border border-gray-200 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Register Now</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-[#ffacac] focus:border-customRed text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-[#ffacac] focus:border-customRed text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone</label>
              <input
                type="tel"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-[#ffacac] focus:border-customRed text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Your Phone Number"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-customRed text-white py-2 rounded-md hover:bg-customRedHover rounded text-lg transform transition-all duration-[300ms] ease-in delay-[100ms]"
            >
              Register
            </button>
          </form>
        </div>
      </div>
      <div className="flex justify-center items-center mt-8 h-64 bg-none rounded-md">
        {" "}
        <iframe
          className="w-full h-64 border-0 rounded-md"
          src={loc}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map"
        ></iframe>{" "}
      </div>
    </div>
  );
};

export default EventRegistration;
