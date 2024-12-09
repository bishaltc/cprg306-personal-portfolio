"use client";

import React, { useState } from "react";
import Link from "next/link";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Thank you for your message! I will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="flex-1 p-4 mx-12">
      <h2 className="text-center text-3xl text-sky-700 font-extrabold mb-6">
        Contact Me
      </h2>
      <p className="text-2xl text-center mb-6">
        Feel free to reach out with any questions or feedback.
      </p>

      <div className="max-w-md mx-auto bg-sky-100 shadow-md rounded-md p-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sky-700 text-lg font-semibold mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sky-700 text-lg font-semibold mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sky-700 text-lg font-semibold mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              rows="4"
              required
            />
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-sky-700 text-white font-bold py-2 px-4 rounded-md hover:bg-sky-600"
            >
              Submit
            </button>
          </div>
        </form>

        {formStatus && (
          <div className="text-center text-green-600 font-semibold mt-4">
            {formStatus}
          </div>
        )}
      </div>

      <div className="text-center mt-6">
        <p className="text-xl text-sky-700 mb-4">Connect with me:</p>
        <div className="flex justify-center gap-6">
          
          {/* GitHub Link */}
          <Link href="https://github.com/bishaltc" className="text-sky-700 text-lg font-semibold hover:text-sky-500">
            GitHub
          </Link>

          {/* LinkedIn Link */}
          <Link href="https://www.linkedin.com/in/bishal-thapachhetri-9a5382331/" className="text-sky-700 text-lg font-semibold hover:text-sky-500">
            LinkedIn
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
