import { useState } from "react";

export const Greetings = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const fetchGreeting = async () => {
        if (!name.trim()) {
            setMessage(<span className="text-red-600 font-semibold">⚠ Name is required!</span>);
            return;
        }

        try {
            const response = await fetch(`http://localhost:5000/api/greet?name=${name}`);
            const data = await response.json();
            setMessage(data.message || <span className="text-red-600">{data.error}</span>);
        } catch (error) {
            setMessage(<span className="text-red-600">❌ Something went wrong!</span>);
        }
        setName("");
    };

    return (
        <>
            <main className="flex items-center justify-center min-h-screen bg-gray-50">
                <section className="bg-white p-8 rounded-lg shadow-xl w-96 text-center">
                    <h1 className="text-3xl font-bold mb-4 text-rose-600">Greeting App</h1>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 mb-4"
                        aria-label="Enter your name"
                    />
                    <button
                        onClick={fetchGreeting}
                        className="w-full bg-lime-500 text-white py-2 rounded-lg hover:bg-lime-700 transition duration-300 cursor-pointer font-semibold"
                    >
                        Get Greeting
                    </button>
                    {message && <p className="mt-4 text-lg font-medium text-gray-700">{message}</p>}
                </section>
            </main>
        </>
    );
};
