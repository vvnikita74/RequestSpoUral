'use client'
import { useEffect } from 'react';

export default function Script() {
  useEffect(() => {
    // Функция для добавления скрипта
    const addScript = (src, code, async = true) => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = async;
      if (src) {
        script.src = src;
      }
      if (code) {
        script.innerHTML = code;
      }
      document.body.appendChild(script);
    };

    setTimeout(() => {
      addScript(null, `
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
    
        ym(96930115, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true
        });`
      );

    }, 3000)

  }, []);

  return (
    <noscript><div><img src="https://mc.yandex.ru/watch/96930115" style={{position:"absolute", "left":"-9999px"}} alt="" /></div></noscript>
  );
}