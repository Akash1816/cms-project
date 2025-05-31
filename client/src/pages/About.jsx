export default function About() {
    return (
       
            <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex flex-col justify-center items-center p-8">
              <div className="w-full max-w-screen-2xl mx-auto bg-opacity-80 p-8 rounded-xl shadow-xl">
                <h1 className="text-4xl font-extrabold text-white mb-6 text-center lg:text-5xl">
                  About the Project
                </h1>
        
                <p className="text-lg text-white mb-6 text-center lg:text-xl">
                  Welcome to our platform — a space designed to showcase who we are and what we stand for.
                  This page offers a glimpse into our journey, values, and the purpose that drives our work.
                  Whether you're a visitor, client, or partner, we want you to feel connected and informed.
                </p>
        
                <div className="flex gap-4 mb-8 flex-wrap justify-center lg:justify-center lg:gap-8">
                  <img
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D"
                    alt="Our Team"
                    className="w-full max-w-xs rounded-lg shadow-2xl transform transition duration-500 hover:scale-105 lg:max-w-md"
                  />
                  <img
                    src="https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D"
                    alt="Office Space"
                    className="w-full max-w-xs rounded-lg shadow-2xl transform transition duration-500 hover:scale-105 lg:max-w-md"
                  />
                </div>
        
                <p className="text-lg text-white mb-6 text-center lg:text-xl">
                  You’ll find images that reflect our company culture, the people behind the scenes, and the work we’re passionate about.
                  Visual storytelling helps us share our identity beyond words, bringing you closer to our world.
                </p>
        
                <p className="text-lg text-white mb-6 text-center lg:text-xl">
                  At the heart of our mission is a commitment to innovation, quality, and meaningful impact.
                  If you'd like to connect, explore more, or collaborate, feel free to use our contact info below.
                </p>
        
                <div className="border-t border-white pt-6 mt-6">
                  <h3 className="text-2xl font-medium text-white mb-4 text-center lg:text-3xl">
                    Contact Us:
                  </h3>
                  <p className="text-lg text-white mb-2 text-center lg:text-xl">
                    Email: <a href="mailto:info@yourcompany.com" className="text-yellow-300 hover:underline">info@yourcompany.com</a>
                  </p>
                  <p className="text-lg text-white mb-2 text-center lg:text-xl">Phone: +1 (555) 123-4567</p>
                  <p className="text-center">
                    <a href="/contact" className="text-yellow-300 hover:underline">Go to Contact Page</a>
                  </p>
                </div>
              </div>
            </div>
          );
  }