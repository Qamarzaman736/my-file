import { ArrowDownIcon } from "@heroicons/react/24/outline"

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center p-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I am Qamar ul Zaman</h1>
      <p className="text-xl md:text-2xl mb-8">AI Enthusiast and Developer</p>
      <p className="text-lg md:text-xl mb-12 max-w-2xl">Building Smart AI Solutions for Real-World Problems</p>
      <a
        href="#about"
        className="animate-bounce bg-white text-gray-800 p-2 rounded-full"
        aria-label="Scroll to About section"
      >
        <ArrowDownIcon className="h-6 w-6" />
      </a>
    </section>
  )
}

