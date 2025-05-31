function Logout() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 via-pink-200 to-purple-200 text-gray-900 px-4">
        <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-md w-full">
          <h1 className="text-4xl font-bold text-red-500 mb-4">You’ve Logged Out</h1>
          <p className="text-lg mb-6 text-gray-600">
            You have been successfully logged out of your account.
          </p>
  
          <button
            onClick={() => (window.location.href = "/login")}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl shadow transition duration-300"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  export default Logout;
  