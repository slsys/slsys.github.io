import{_ as s,o as a,c as e,Q as l}from"./chunks/framework.9b0cfcaf.js";const h=JSON.parse('{"title":"Голосовое управление в SLS","description":"","frontmatter":{},"headers":[],"relativePath":"lua_doc/voice_ctrl_Kuzia.md","filePath":"lua_doc/voice_ctrl_Kuzia.md"}'),n={name:"lua_doc/voice_ctrl_Kuzia.md"},o=l(`<h1 id="голосовое-управление-в-sls" tabindex="-1">Голосовое управление в SLS <a class="header-anchor" href="#голосовое-управление-в-sls" aria-label="Permalink to &quot;Голосовое управление в SLS&quot;">​</a></h1><h2 id="введение" tabindex="-1">Введение <a class="header-anchor" href="#введение" aria-label="Permalink to &quot;Введение&quot;">​</a></h2><p>В современном мире IoT без голосового управления, умный дом кажется неполноценным. При этом, в кейсах с небольшим количеством устройств бывает нет необходимости в развертывании сервера умного дома, например, Home Assistant. Да и вообще не всегда нужны серверы. На данный момент в SLS поддержка голосового управления в разработке.</p><h2 id="варианты-голосового-управления" tabindex="-1">Варианты голосового управления <a class="header-anchor" href="#варианты-голосового-управления" aria-label="Permalink to &quot;Варианты голосового управления&quot;">​</a></h2><p>Их достаточно много. Так сказать на любой вкус и цвет. У каждого есть свои достоинства и недостатки. Мне довелось поработать с двумя. После чего я взялся за разработку собственного решения и преуспел.</p><ol><li>Навык <a href="https://yaha-cloud.ru/" target="_blank" rel="noreferrer">Yandex Smart Home</a>. Это компонент Home Assistant, который позволяет добавить его устройства в платформу умного дома Яндекса (УДЯ) и управлять ими с любого устройства с Алисой. Облачное решение.</li><li>Навык <a href="https://alexstar.ru/smarthome" target="_blank" rel="noreferrer">Домовенок Кузя</a>. Это навык УДЯ, который позволяет подключить голосовое управление практически к любому устройству. Работает по протоколам HTTP GET, MQTT (без подписки на топики) и IFTTT. Облачное решение.</li><li>Самописный навык, например как <a href="https://github.com/tsurkan-av/SLS/blob/main/AliceSkills/funtik/" target="_blank" rel="noreferrer">Умный Фунтик</a>. Позволяет интегрировать в УДЯ всё что угодно - зависит от фантазии разработчика. Навык можно развернуть где угодно, где есть node.js. Например, Yandex Cloud Functions.</li></ol><p>В данной статье рассматривается вариант интеграции голосового помощника Алиса в SLS через навык <a href="https://alexstar.ru/smarthome" target="_blank" rel="noreferrer">Домовенок Кузя</a> по протоколу HTTP(S).</p><p>Решение разрабатывалось и тестировалось на прошивке версии <code>2023.01.08d1</code>, в сети за Keenetic Speedster с прошивкой <code>3.8.5</code>, который позволяет организовать доступ в сеть через реверсивный прокси с SSL.</p><h2 id="требования" tabindex="-1">Требования <a class="header-anchor" href="#требования" aria-label="Permalink to &quot;Требования&quot;">​</a></h2><p>Для интеграции требуется:</p><ul><li>доступ из сети Интернет к HTTP API SLS</li><li>учетная запись Yandex</li><li>желательно включить авторизацию на шлюзе</li></ul><h2 id="настроика-доступа-из-сети-интернет" tabindex="-1">Настройка доступа из сети Интернет <a class="header-anchor" href="#настроика-доступа-из-сети-интернет" aria-label="Permalink to &quot;Настройка доступа из сети Интернет&quot;">​</a></h2><p>Для доступа к HTTP API SLS из Интернет возможны различные варианты. Однако, желательна защита соединения сертификатом SSL. Например, Zyxel предлагает сервис <a href="https://keenetic.pro/" target="_blank" rel="noreferrer">KeenDNS</a> с доменным именем и сертификатом SSL.</p><h2 id="как-это-работает" tabindex="-1">Как это работает <a class="header-anchor" href="#как-это-работает" aria-label="Permalink to &quot;Как это работает&quot;">​</a></h2><p>Навык Алисы Домовенок Кузя - это сервис в сети Интернет, который взаимодействуя с Алисой, позволяет управлять устройствами умного дома и не только. Управление возможно по протоколам HTTP, MQTT, а также через платформу <a href="https://ifttt.com/" target="_blank" rel="noreferrer">IFTTT</a></p><p>Разберем настройку на примере zigbee лампы.</p><p>Алгоритм следующий:</p><ul><li>навык принимает и обрабатывает команду от Алисы</li><li>отправляет HTTP GET запрос на SLS для управления</li><li>получает статус устройства в ответном сообщении SLS или отдельным запросом</li></ul><p>Для включения, выключения, изменения яркости лампы используем следующий запрос:</p><div class="language-http vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">https://addressSLS/api/scripts?token=e9d38bed.......f4ef49476a2ed9575&amp;action=evalFile&amp;path=/kuzia.lua&amp;param=device|state|{value}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">https://addressSLS/api/scripts?token=e9d38bed.......f4ef49476a2ed9575&amp;action=evalFile&amp;path=/kuzia.lua&amp;param=device|state|{value}</span></span></code></pre></div><p>здесь:</p><ul><li>addressSLS: ip:port или днс адрес шлюза, доступный из сети Интернет</li><li>token: токен шлюза из <code>Settings -&gt; Users</code></li><li><a href="/Gateway/lua_doc/voice_ctrl_Kuzia/kuzia.lua">kuzia.lua</a>: скрипт LUA для обработки запроса</li><li>param: параметры, передаваемые в скрипт <ul><li>device: ieee|nwk адрес или FN устройства</li><li>state: состояние для управления (state|brightness)</li><li>{value}: сюда навык подставляет значения <ul><li>0 = выключено</li><li>1 = включено</li><li>1-100 = значение яркости</li></ul></li></ul></li></ul><p>Для получения статуса устройства, навыку необходимо вернуть JSON вида</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span><span style="color:#79B8FF;">&quot;value&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#FDAEB7;font-style:italic;">|</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span><span style="color:#005CC5;">&quot;value&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#B31D28;font-style:italic;">|</span><span style="color:#005CC5;">false</span><span style="color:#24292E;">}</span></span></code></pre></div><p>Поскольку <code>api/scripts</code> возвращает JSON не подходящего формата, будем записывать правильный JSON в отдельное состояние при изменении <code>state</code> следующим скриптом:</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">local</span><span style="color:#E1E4E8;"> stateON </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;{</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">value</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">: true}&quot;</span></span>
<span class="line"><span style="color:#F97583;">local</span><span style="color:#E1E4E8;"> stateOFF </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;{</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">value</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">: false}&quot;</span></span>
<span class="line"><span style="color:#F97583;">local</span><span style="color:#E1E4E8;"> srcStateVal </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> zigbee.</span><span style="color:#79B8FF;">value</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">tostring</span><span style="color:#E1E4E8;">(Event.</span><span style="color:#B392F0;">ieeeAddr</span><span style="color:#E1E4E8;">), </span><span style="color:#9ECBFF;">&quot;state&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (srcStateVal </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;ON&quot;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">then</span></span>
<span class="line"><span style="color:#E1E4E8;">  zigbee.</span><span style="color:#79B8FF;">setState</span><span style="color:#E1E4E8;">(Event.</span><span style="color:#B392F0;">ieeeAddr</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;kuzia&quot;</span><span style="color:#E1E4E8;">, stateON)</span></span>
<span class="line"><span style="color:#F97583;">elseif</span><span style="color:#E1E4E8;"> (srcStateVal </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;OFF&quot;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">then</span></span>
<span class="line"><span style="color:#E1E4E8;">  zigbee.</span><span style="color:#79B8FF;">setState</span><span style="color:#E1E4E8;">(Event.</span><span style="color:#B392F0;">ieeeAddr</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;kuzia&quot;</span><span style="color:#E1E4E8;">, stateOFF)</span></span>
<span class="line"><span style="color:#F97583;">end</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">local</span><span style="color:#24292E;"> stateON </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;{</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">value</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">: true}&quot;</span></span>
<span class="line"><span style="color:#D73A49;">local</span><span style="color:#24292E;"> stateOFF </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;{</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">value</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">: false}&quot;</span></span>
<span class="line"><span style="color:#D73A49;">local</span><span style="color:#24292E;"> srcStateVal </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> zigbee.</span><span style="color:#005CC5;">value</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">tostring</span><span style="color:#24292E;">(Event.</span><span style="color:#6F42C1;">ieeeAddr</span><span style="color:#24292E;">), </span><span style="color:#032F62;">&quot;state&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (srcStateVal </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;ON&quot;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">then</span></span>
<span class="line"><span style="color:#24292E;">  zigbee.</span><span style="color:#005CC5;">setState</span><span style="color:#24292E;">(Event.</span><span style="color:#6F42C1;">ieeeAddr</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;kuzia&quot;</span><span style="color:#24292E;">, stateON)</span></span>
<span class="line"><span style="color:#D73A49;">elseif</span><span style="color:#24292E;"> (srcStateVal </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;OFF&quot;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">then</span></span>
<span class="line"><span style="color:#24292E;">  zigbee.</span><span style="color:#005CC5;">setState</span><span style="color:#24292E;">(Event.</span><span style="color:#6F42C1;">ieeeAddr</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;kuzia&quot;</span><span style="color:#24292E;">, stateOFF)</span></span>
<span class="line"><span style="color:#D73A49;">end</span></span></code></pre></div><p>После этого можно запросить статус следующим запросом:</p><div class="language-http vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">https://sls.tsurkan.keenetic.pro/api/zigbee?token=e9d38bed.......f4ef49476a2ed9575&amp;dev=device&amp;action=getStateValue&amp;name=kuzia</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">https://sls.tsurkan.keenetic.pro/api/zigbee?token=e9d38bed.......f4ef49476a2ed9575&amp;dev=device&amp;action=getStateValue&amp;name=kuzia</span></span></code></pre></div>`,28),t=[o];function p(r,c,i,y,d,u){return a(),e("div",null,t)}const F=s(n,[["render",p]]);export{h as __pageData,F as default};
