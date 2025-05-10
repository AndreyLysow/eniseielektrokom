import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const globalForPrisma = global;
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Метод не разрешён" });
  }

  const { username, name, email, password } = req.body;

  if (!username || !name || !email || !password) {
    return res.status(400).json({ message: "Все поля обязательны" });
  }

  try {
    const cleanUsername = username.trim().toLowerCase();
    const cleanEmail = email.trim().toLowerCase();

    const existingUserByUsername = await prisma.users.findUnique({
      where: { username: cleanUsername },
    });

    if (existingUserByUsername) {
      return res.status(400).json({ message: "Логин уже используется" });
    }

    // findFirst безопасен даже если email не unique
    const existingUserByEmail = await prisma.users.findFirst({
      where: { email: cleanEmail },
    });

    if (existingUserByEmail) {
      return res.status(400).json({ message: "Email уже зарегистрирован" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.users.create({
      data: {
        username: cleanUsername,
        name: name.trim(),
        email: cleanEmail,
        password: hashedPassword,
      },
    });

    return res.status(201).json({
      message: "Регистрация прошла успешно",
      user: {
        id: newUser.id,
        username: newUser.username,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error("🔥 Ошибка регистрации:", error);
    return res.status(500).json({
      message: "Внутренняя ошибка сервера",
      error: error.message,
    });
  } finally {
    await prisma.$disconnect();
  }
}
