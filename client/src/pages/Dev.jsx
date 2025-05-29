export default function Dev() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Developers</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Person 1 */}
        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
         
          <h2 className="text-xl font-semibold">Harish S</h2>
          <p>
          <h4 className="text-gray-600">Pages and design</h4>
          Our pages are crafted with thoughtful design that blends aesthetics and function. Each layout is tailored to enhance readability and user engagement. We bring ideas to life through clean, creative, and impactful visuals.
          </p>
         
        </div>

        {/* Person 2 */}
        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
          
          <h2 className="text-xl font-semibold">Akash S A</h2>
          <p>
          <h4 className="text-gray-600">Router and configuration</h4>
          We set up routers with precision to ensure fast and secure connections. Each configuration is tailored to your network needs for optimal performance. From basic setups to advanced routing, we’ve got you covered.
          </p>
          
        </div>

        {/* Person 3 */}
        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
         
          <h2 className="text-xl font-semibold">Kailas Nath</h2>
          <p>
          <h4 className="text-gray-600">TailWindcss and designing</h4>
          Tailwind CSS empowers us to build sleek, responsive designs with efficiency. Its utility-first approach allows rapid styling without writing custom CSS. We create clean, modern interfaces that look great on every device.
          </p>
          
        </div>
      </div>
    </div>
  );
}