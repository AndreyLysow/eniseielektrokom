import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useRouter } from "next/router";

export default function LoginModal({ onClose }) {
  const [form, setForm] = useState({ username: "", password: "" });
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Реализация входа
    // Пример: просто выводим логин, но здесь будет ваша логика авторизации.
    alert("Логин: " + form.username);

    // После успешной авторизации перенаправляем на страницу отчетов
    router.push("/report"); // Замените на вашу страницу после авторизации
  };

  return (
    <Modal show onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Вход</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Логин</Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="Введите логин"
              value={form.username}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Пароль</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Введите пароль"
              value={form.password}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Войти
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
