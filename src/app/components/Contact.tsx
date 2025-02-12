"use client"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full p-2 rounded bg-gray-700 text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            Send Message
          </button>
        </form>
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href=" https://whatsapp.com/dl/ "
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-blue-300"
          >
            whatsapp
          </a>
          <a
            href="https://github.com/mrmehranmehar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300"
          >
            GitHub
          </a>
          <a
            href=" https://www.tiktok.com/@arainzadaa04?_t=ZS-8teo8ElHaqu&_r=1 "
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 hover:text-blue-300"
          >
            TikTOk
            </a>
        </div>
      </div>
    </section>
  )
}

