import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-green-200 to-yellow-200 text-gray-900">
      {/* Welcome Section */}
      <header className="text-center py-20 px-4">
        <h1 className="text-6xl font-extrabold text-indigo-700 drop-shadow-lg mb-4">
          Welcome to Our World
        </h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-700 font-light mb-12">
          Join us as we share amazing stories, beautiful photos, and create memories that will last a lifetime. 
          Immerse yourself in a world of creativity, wonder, and inspiration.
        </p>
      </header>

      {/* Stories Section */}
      <section className="bg-white py-16 px-4">
        <h2 className="text-4xl font-semibold text-center text-indigo-700 mb-8">Our Stories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <img
              src="https://via.placeholder.com/500"
              alt="Story 1"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold text-indigo-700">The Beauty of Nature</h3>
            <p className="text-gray-600 mt-2">
              Discover the tranquil landscapes and breathtaking views that fill our world with peace and beauty.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <img
              src="https://via.placeholder.com/500"
              alt="Story 2"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold text-indigo-700">Journey to the Unknown</h3>
            <p className="text-gray-600 mt-2">
              Embark on an exciting adventure to the unknown, where every corner holds a new surprise.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <img
              src="https://via.placeholder.com/500"
              alt="Story 3"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold text-indigo-700">Cultural Explorations</h3>
            <p className="text-gray-600 mt-2">
              Immerse yourself in rich cultures from around the globe and experience their unique beauty.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-300 via-teal-200 to-pink-200">
        <h2 className="text-4xl font-semibold text-center text-indigo-700 mb-8">Our Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <img
            src="https://via.placeholder.com/500"
            alt="Gallery Image 1"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <img
            src="https://via.placeholder.com/500"
            alt="Gallery Image 2"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <img
            src="https://via.placeholder.com/500"
            alt="Gallery Image 3"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-center py-12 bg-blue-100">
        <p className="text-gray-600 text-xl">
          Crafted with love. Reach us at{" "}
          <a href="mailto:contact@ourworld.com" className="text-indigo-700 hover:text-indigo-900">
            contact@ourworld.com
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Home;

