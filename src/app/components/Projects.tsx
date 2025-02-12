import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "webdevelpment",
      description: "Web development: Building and maintaining websites and web applications using programming languages, frameworks, and databases to create interactive and dynamic online experiences.",
      image: "/w.jpeg",
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Next.js", 
      description: "Next.js is a popular React-based framework for building server-rendered, statically generated, and performance-optimized web applications.",
      image: "/n.webp",
      github: "",
      demo: "https://demo.com",
    },
    {
      title: "Chat GPT DEVELPER",
      description: "A generator in AI is a deep learning model that generates new, synthetic data or content, such as images text or music.",
      image: "/g.png",
      github: "",
      demo: "https://demo.com",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-700 rounded-lg overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

