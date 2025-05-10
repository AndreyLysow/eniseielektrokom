import 'bootstrap/dist/css/bootstrap.min.css'; // Подключаем Bootstrap
import '@/styles/globals.css'; // Ваши собственные стили

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
