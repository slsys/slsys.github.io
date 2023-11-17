import{_ as e,o as a,c as s,Q as i}from"./chunks/framework.f1c0562b.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"lua_doc/luaPersonesTrackerRos.md","filePath":"lua_doc/luaPersonesTrackerRos.md"}'),l={name:"lua_doc/luaPersonesTrackerRos.md"},o=i(`<p>DRAFT</p><p>План</p><ul><li><p>если следим и за микротом и за кинетиком, то микрот меняет только значение объекта, а флагом &quot;все дома&quot; управляет сам SLS - он в таком случае тоже чекает объект ежеминутно</p></li><li><p>если следим только за микротом, то микрот также управляет и флагом</p></li><li><p>TODO - с шлюза забирать JSON</p><ul><li>сделать JSON.conf на SLS</li><li>при инициализации шлюз создает объект из файла json.conf через os.fileRead()</li><li>можно при изменении конфига слать флаг в RB через http.request или дополнительный/временный объект - флаг</li></ul></li><li><p>зареганные устройства скопировать в Access List и дать комент вида &quot;DeviceName&quot; - одним словом без пробелов и спецсимволов</p></li><li><p>скрипт в RB дергает <code>/interface wireless registration-table</code> из шедулера</p><ul><li>если первый раз, формирует глобальные переменные с устройствами из конфига и их предыдущем статусе в RB (не в SLS)</li><li>сверяет список зареганых устройств со списком из конфига и их статусом в предыдущей проверке</li><li>если статус изменился: <ul><li>если в предыдуще проверке не было активных устройств сформировать запрос на изменение объекта SLS и флага &quot;все дома&quot; (ACK в SLS)</li><li>если список активных изменился и в предыдущей проверке активные были - запрос только на изменение значения объекта</li><li>если список изменился и активных не стало, то сформировать запрос на изменение объекта SLS и флага &quot;все дома&quot; (ACK в SLS)</li><li></li></ul></li></ul></li></ul><h3 id="persones-tracker-для-mikrotik-ros" tabindex="-1">Persones Tracker для Mikrotik ROS <a class="header-anchor" href="#persones-tracker-для-mikrotik-ros" aria-label="Permalink to &quot;Persones Tracker для Mikrotik ROS&quot;">​</a></h3><h2 id="введение" tabindex="-1">Введение <a class="header-anchor" href="#введение" aria-label="Permalink to &quot;Введение&quot;">​</a></h2><h2 id="настроика-mikrotik" tabindex="-1">Настройка mikrotik <a class="header-anchor" href="#настроика-mikrotik" aria-label="Permalink to &quot;Настройка mikrotik&quot;">​</a></h2><ul><li>Поскольку SLS может отслеживать устройства не только на RB, но и на других <a href="/lua_doc/luaPersonesTracker">роутерах</a>, хочется иметь единый конфиг для разных маршрутизаторов. Конфиг в свою очередь должен храниться на шлюзе.</li><li>При регистрации Wi-Fi устройства на Mikrotik (далее RB), в <code>/interface wireless registration-table</code> ничего интересного, кроме MAC, нет. Поэтому, отслеживаемые устройства добавлем в <code>/interface wireless access-list</code> и даём им в коментарии имена, которые разрешено использовать в названиях ключей таблиц LUA. Например:</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&gt; /interface wireless access-list print terse</span></span>
<span class="line"><span style="color:#e1e4e8;">0   comment=IPhoneMama ...</span></span>
<span class="line"><span style="color:#e1e4e8;">1   comment=IPhonePapa ...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&gt; /interface wireless access-list print terse</span></span>
<span class="line"><span style="color:#24292e;">0   comment=IPhoneMama ...</span></span>
<span class="line"><span style="color:#24292e;">1   comment=IPhonePapa ...</span></span></code></pre></div>`,8),t=[o];function r(n,c,p,d,u,k){return a(),s("div",null,t)}const m=e(l,[["render",r]]);export{_ as __pageData,m as default};
