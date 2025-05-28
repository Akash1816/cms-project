function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-300 via-purple-200 to-pink-200 text-gray-900 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold mb-6 drop-shadow-lg">
          Welcome to Our App
        </h1>
        <p className="text-2xl mb-10 max-w-xl mx-auto font-light">
          A modern platform designed to simplify your experience. Get started now!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => (window.location.href = "/login")}
            className="bg-white text-indigo-700 font-semibold py-3 px-8 rounded-xl shadow-md hover:bg-indigo-50 transition duration-300"
          >
            Login
          </button>

          <button
            onClick={() => (window.location.href = "/signup")}
            className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-xl shadow-md hover:bg-indigo-700 transition duration-300"
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;

