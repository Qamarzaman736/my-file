export default function Footer() {
    return (
      <footer className="bg-gray-900 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>&copy; </p>
          <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li>
                <a href="#about" className="hover:text-blue-400">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    )
  }
  
  