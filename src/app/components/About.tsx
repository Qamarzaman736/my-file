import Image from "next/image";

export default function About() {
  const skills = [
    "Machine Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Deep Learning",
    "Data Analysis",
    "Python",
    "TensorFlow",
    "PyTorch",
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Image Section */}
          <div className="w-full md:w-1/3 flex justify-center">
            <Image
              src="/m.jpg" 
              alt="Your Image Description"
              width={400}
              height={400}
              className="rounded-full"
            />
          </div>
          
          <div className="w-full md:w-2/3">
            <p className="text-lg mb-8">
              I am a passionate AI developer with 5+ years of experience in building intelligent systems. My expertise
              spans across various domains of AI, including machine learning, natural language processing, and computer
              vision. I'm dedicated to creating innovative solutions that make a real-world impact.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <div key={skill} className="bg-gray-700 rounded-lg p-3 text-center">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
