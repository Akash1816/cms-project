import React, {useState} from 'react';
import Swal from 'sweetalert2';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handlesubmit(event) {
        event.preventDefault();

        if (email === "admin@example.com" && password === "password123") {
            Swal.fire({title: "Login Successful!", text: "Welcome back!", icon: "success", confirmButtonText: "OK"});
        } else {
            Swal.fire({title: "Login Failed!", text: "Invalid email or password.", icon: "error", confirmButtonText: "Retry"});
        }
    }

    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
                <form onSubmit={handlesubmit}
                    className="space-y-6">
                    <input type="email" placeholder="Email"
                        value={email}
                        onChange={
                            (event) => setEmail(event.target.value)
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        required/>
                    <input type="password" placeholder="Password"
                        value={password}
                        onChange={
                            (event) => setPassword(event.target.value)
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                        required/>
                    <button type="submit" className="w-full bg-blue-600 text-red-500 py-2 rounded-lg hover:bg-blue-700 transition">
                        Login
                    </button>

                </form>
            </div>
        </div>
    );
}
