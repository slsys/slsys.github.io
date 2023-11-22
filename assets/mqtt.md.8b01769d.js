import{_ as s,o as a,c as p,Q as t}from"./chunks/framework.9b0cfcaf.js";const y=JSON.parse('{"title":"MQTT","description":"","frontmatter":{},"headers":[],"relativePath":"mqtt.md","filePath":"mqtt.md"}'),o={name:"mqtt.md"},n=t('<h1 id="mqtt" tabindex="-1">MQTT <a class="header-anchor" href="#mqtt" aria-label="Permalink to &quot;MQTT&quot;">​</a></h1><p>Шлюз умеет подключаться к MQTT-брокеру как клиент, получать и отправлять данные в топики.</p><h2 id="работа-с-mqtt-из-скриптов" tabindex="-1">Работа с MQTT из скриптов <a class="header-anchor" href="#работа-с-mqtt-из-скриптов" aria-label="Permalink to &quot;Работа с MQTT из скриптов&quot;">​</a></h2><p><strong>mqtt.pub()</strong></p><p>Синтаксис: mqtt.pub(topic, payload)</p><p>Публикует на MQTT сервер в топик topic значение payload.</p><p>Пример управления реле на прошивке Tasmota - cmnd/имя устройства/имя реле</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">mqtt.</span><span style="color:#79B8FF;">pub</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;cmnd/sonoff5/power&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;toggle&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">mqtt.</span><span style="color:#005CC5;">pub</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;cmnd/sonoff5/power&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;toggle&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><p><strong>mqtt.sub</strong></p><p>Синтаксис: mqtt.sub(Topic, ObjName)</p><p>Подписывается на топик и помещает полученые значения в объект.</p><p>Можно вызывать повторно с другим именем объекта, для его изменения.</p><p>Пример подписки на топик с температурой, которую шлюз помещает в объект:</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">mqtt.</span><span style="color:#79B8FF;">sub</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;dev/sensor/temp&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;room_temp&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">mqtt.</span><span style="color:#005CC5;">sub</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;dev/sensor/temp&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;room_temp&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><p><strong>mqtt.unSub</strong></p><p>Синтаксис: mqtt.unSub(Topic)</p><p>Отписывается от топика.</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">mqtt.</span><span style="color:#79B8FF;">unSub</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;dev/sensor/temp&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">mqtt.</span><span style="color:#005CC5;">unSub</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;dev/sensor/temp&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><p><strong>mqtt.connected()</strong></p><p>Проверяет подключение к брокеру</p>',20),e=[n];function l(c,r,i,d,E,m){return a(),p("div",null,e)}const h=s(o,[["render",l]]);export{y as __pageData,h as default};
