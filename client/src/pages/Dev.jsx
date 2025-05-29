export default function Dev() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex flex-col justify-center items-center p-10 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute w-72 h-72 bg-pink-300 opacity-20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-yellow-300 opacity-10 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>

      <h1 className="text-5xl font-extrabold mb-12 drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-200">
        Meet Our Dev Team
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-7xl z-10">
        {/* Person 1 */}
        <div className="bg-gradient-to-tr from-green-400 via-blue-400 to-purple-500 shadow-2xl rounded-2xl p-8 text-center transform transition duration-500 hover:scale-105 hover:rotate-1">
          <h2 className="text-3xl font-bold text-white mb-3">Harish S</h2>
          <h4 className="text-lg text-gray-100 mb-4">Pages and Design</h4>
          <p className="text-gray-200 leading-relaxed">
            Our pages are crafted with thoughtful design that blends aesthetics and function. Each layout is tailored to enhance readability and user engagement.
          </p>
        </div>

        {/* Person 2 */}
        <div className="bg-gradient-to-tr from-yellow-400 via-red-400 to-pink-500 shadow-2xl rounded-2xl p-8 text-center transform transition duration-500 hover:scale-105 hover:rotate-1">
          <h2 className="text-3xl font-bold text-white mb-3">Akash S A</h2>
          <h4 className="text-lg text-gray-100 mb-4">Router and Configuration</h4>
          <p className="text-gray-200 leading-relaxed">
            We set up routers with precision to ensure fast and secure connections. From basic setups to advanced routing, we’ve got you covered.
          </p>
        </div>

        {/* Person 3 */}
        <div className="bg-gradient-to-tr from-teal-400 via-cyan-400 to-blue-500 shadow-2xl rounded-2xl p-8 text-center transform transition duration-500 hover:scale-105 hover:rotate-1">
          <h2 className="text-3xl font-bold text-white mb-3">Kailas Nath</h2>
          <h4 className="text-lg text-gray-100 mb-4">TailwindCSS and Designing</h4>
          <p className="text-gray-200 leading-relaxed">
            Tailwind CSS empowers us to build sleek, responsive designs with efficiency. We create modern interfaces that look great on every device.
          </p>
        </div>
      </div>
    </div>
  );
}
