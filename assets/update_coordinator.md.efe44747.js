import{_ as e}from"./chunks/disable_esp.52c52488.js";import{_ as a,o as s,c as o,Q as t}from"./chunks/framework.f1c0562b.js";const C=JSON.parse('{"title":"Перепрошивка CC2538 (SBL) при наличии ESP","description":"","frontmatter":{},"headers":[],"relativePath":"update_coordinator.md","filePath":"update_coordinator.md"}'),l={name:"update_coordinator.md"},p=t('<h1 id="перепрошивка-cc2538-sbl-при-наличии-esp" tabindex="-1">Перепрошивка CC2538 (SBL) при наличии ESP <a class="header-anchor" href="#перепрошивка-cc2538-sbl-при-наличии-esp" aria-label="Permalink to &quot;Перепрошивка CC2538 (SBL) при наличии ESP&quot;">​</a></h1><p>Если в Zigbee координатор CC2538 была загружена правильная прошивка, где не отключен Serial Boot Loader (SBL), то его можно перепрошить без программатора J-Link (J-Tag). Проблема в том, что работе последовательного порта будет мешать ESP.</p><p>Чтобы перепрошить координатор CC2538 через SBL на работающем шлюзе с ESP нужно:</p><ol><li>Перепаять 2 перемычки ESP/MOD (между кнопкой SW1 и чипом U7) в положение MOD.</li><li>Отключить питание ESP, проще всего перерезав дорожку как показано тут. (Не обязательно, достаточно сменить пины rx,tx,rst,bsl на 255) <img src="'+e+'" alt="home"></li><li>Подключить USB при нажатой кнопке B_NXP (на некоторых платах BOOT_Z). Если такой кнопки нет, то нужно проводком закоротить контакт PA7 CC2538 на землю (можно на момент подключения USB, можно просто временно припаять). Важно - экран/корпус USB разъема не является землёй, ищите землю в другом месте!</li><li>Проверить считывание прошивки. Скачиваете <a href="https://github.com/JelmerT/cc2538-bsl" target="_blank" rel="noreferrer">cc2538-bsl.py</a>, в Windows запускаете<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">python cc2538-bsl.py -p &quot;\\\\.\\COM2&quot; -r old_firmware.bin</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">python cc2538-bsl.py -p &quot;\\\\.\\COM2&quot; -r old_firmware.bin</span></span></code></pre></div>Вместо COM2 нужно указать правильный порт - см. в диспетчере устройств.</li><li>Если прошивка считалась и ничего не прервалось, можно прошивать новую прошивку <a href="/rom/JH_2538_2592_ZNP_UART_20201010.hex">JH_2538_2592_ZNP_UART_20201010.hex</a> командой<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">python cc2538-bsl.py -p &quot;\\\\.\\COM2&quot; -e -w -v JH_2538_2592_ZNP_UART_20201010.hex</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">python cc2538-bsl.py -p &quot;\\\\.\\COM2&quot; -e -w -v JH_2538_2592_ZNP_UART_20201010.hex</span></span></code></pre></div></li><li>Отпаиваем проводок от PA7, перепаиваем перемычки ESP/MOD в ESP, восстанавливаем питание ESP.</li></ol><p>После загрузки шлюза сразу должна быть отображена новая версия Zigbee. Список устройств останется без изменений, но все устройства нужно будет переподключить заново.</p>',5),c=[p];function i(r,n,_,d,h,u){return s(),o("div",null,c)}const m=a(l,[["render",i]]);export{C as __pageData,m as default};
