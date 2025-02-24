
import self from "../images/self.jpg";
import cp from "../images/cp.jpg";
import codePic from "../images/codePic.jpg";
import "./home.css";
import "../App.css";
import "../index.css";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Full Stack Developer
            </h1>
            <p className="text-xl text-gray-600">
              Building robust web applications with modern technologies
            </p>
            <div className="flex gap-4">
              <a
                href="/projects"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                View Projects
              </a>
              <a
                href="/contact"
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="md:w-1/2">
            <img
              src={self}
              alt="Professional headshot"
              className="rounded-lg shadow-xl w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Add your skill items here */}
            <div className="text-center p-4">
              <div className="text-4xl mb-2">🌐</div>
              <h3 className="font-semibold">Frontend</h3>
              <p className="text-gray-600">React, JavaScript, Tailwind CSS</p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl mb-2">⚙️</div>
              <h3 className="font-semibold">Backend</h3>
              <p className="text-gray-600">Node.js, Express, MongoDB</p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl mb-2">🔧</div>
              <h3 className="font-semibold">Tools</h3>
              <p className="text-gray-600">Git, Docker, AWS</p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl mb-2">📱</div>
              <h3 className="font-semibold">Mobile</h3>
              <p className="text-gray-600">
                React Native, Progressive Web Apps
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
