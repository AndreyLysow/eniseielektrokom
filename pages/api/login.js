import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Метод не разрешен" });
    }

    const { username, password } = req.body;

    console.log("Вход:", req.body); // ✅ Проверяем входные данные

    if (!username || !password) {
        return res.status(400).json({ message: "Введите логин и пароль" });
    }

    try {
        // Ищем пользователя по логину
        const user = await prisma.users.findUnique({
            where: { username }
        });

        if (!user) {
            return res.status(401).json({ message: "Неверный логин или пароль" });
        }

        // Проверяем пароль
        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
            return res.status(401).json({ message: "Неверный логин или пароль" });
        }

        return res.status(200).json({
            message: "Вход выполнен",
            user: { id: user.id, username: user.username, name: user.name } // ✅ Передаем `name`
        });
    } catch (error) {
        console.error("Ошибка сервера:", error);
        return res.status(500).json({ message: "Ошибка сервера", error });
    } finally {
        await prisma.$disconnect();
    }
}
