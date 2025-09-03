// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Yandex.Metrika */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(m,e,t,r,i,k,a){
  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();
  for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }
  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
})(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=104008308', 'ym');

ym(104008308, 'init', {
  webvisor: true,
  clickmap: true,
  trackLinks: true,
  accurateTrackBounce: true,
  ecommerce: 'dataLayer'
});
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />

        {/* noscript-пиксель */}
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/104008308"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </Html>
  );
}