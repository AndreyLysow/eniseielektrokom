import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
    const [form, setForm] = useState({ username: "", password: "" });
    const router = useRouter();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.username || !form.password) {
            alert("Введите логин и пароль");
            return;
        }

        const res = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        const data = await res.json();

        if (res.ok) {
            alert(data.message);
            router.push(`/welcome?username=${encodeURIComponent(data.user.username)}&name=${encodeURIComponent(data.user.name)}`);
        } else {
            alert(data.message);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-96">
                <h2 className="text-2xl font-bold text-center text-gray-700">Вход</h2>
                <form className="mt-4" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Логин" 
                        value={form.username} 
                        onChange={handleChange} 
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Пароль" 
                        value={form.password} 
                        onChange={handleChange} 
                        className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <button 
                        type="submit" 
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 mt-4 rounded-lg transition"
                    >
                        Войти
                    </button>
                </form>
            </div>
        </div>
    );
}
