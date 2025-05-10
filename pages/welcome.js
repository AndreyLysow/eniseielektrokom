import { useRouter } from "next/router";

export default function Welcome() {
    const router = useRouter();
    const { name } = router.query; // ✅ Получаем имя пользователя

    return (
        <div className="flex justify-center items-center min-h-screen bg-blue-100">
            <h1 className="text-4xl font-bold text-gray-800">
                Добро пожаловать, {name ? name : "гость"}! 🚀
            </h1>
        </div>
    );
}
