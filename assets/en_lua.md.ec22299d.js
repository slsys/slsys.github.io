import{_ as s,o as e,c as n,Q as a}from"./chunks/framework.9b0cfcaf.js";const t="/Gateway/assets/lua.c1844a1c.png",l="/Gateway/assets/execlua.ba7cd3ba.jpg",m=JSON.parse('{"title":"Support for lua scripts","description":"","frontmatter":{},"headers":[],"relativePath":"en/lua.md","filePath":"en/lua.md"}'),o={name:"en/lua.md"},p=a('<p><a href="/Gateway/lua">Перейти на русскую версию сайта</a></p><h1 id="support-for-lua-scripts" tabindex="-1">Support for lua scripts <a class="header-anchor" href="#support-for-lua-scripts" aria-label="Permalink to &quot;Support for lua scripts&quot;">​</a></h1><p>The SLS gateway has support for automation based on the scripting programming language <a href="https://ru.wikipedia.org/wiki/Lua" target="_blank" rel="noreferrer">lua</a>. The script editor is located in the <em>Actions -&gt; Scripts</em> menu.</p><p>To write a script, you need to create a new file, for example, with the name script.lua and enter the code in the lua language into it.</p><p>The script <code>stdout</code> on the <code>print</code> command prints information to the screen of the Scripts page and to the system log of the gateway. You can start the test script by pressing the <em>RUN</em> button.</p><p>When the gateway starts, the <code>/init.lua</code> file is executed <img src="'+t+'" alt=""></p><h2 id="options-for-running-scripts" tabindex="-1">Options for running scripts <a class="header-anchor" href="#options-for-running-scripts" aria-label="Permalink to &quot;Options for running scripts&quot;">​</a></h2><ol><li>Run the script when the state of the device changes. On the Zigbee tab, you need to go to the device parameters and in the SimpleBind window specify the name of the script file (prefix &quot;/&quot; is optional) <img src="'+l+`" alt="">.</li><li>Run the script on time. Expected.</li><li>Running the script by mqtt subscription. Expected.</li><li>Running the script when calling the http api. /api/scripts?action=evalFile&amp;path=/test.lua.</li></ol><h2 id="list-of-available-functions-and-structures" tabindex="-1">List of available functions and structures <a class="header-anchor" href="#list-of-available-functions-and-structures" aria-label="Permalink to &quot;List of available functions and structures&quot;">​</a></h2><ol><li><a href="./lua#httprequest">http.request ()</a></li><li><a href="./lua#zigbeevalue">zigbee.value ()</a></li><li><a href="./lua#zigbeeget">zigbee.get ()</a></li><li><a href="./lua#zigbeeset">zigbee.set ()</a></li><li><a href="./lua#event">Event</a></li><li><a href="./lua#ostime">os.time()</a></li><li><a href="./lua#objget-objset">obj.get()/obj.set ()</a></li><li><a href="./lua#mqttpub">mqtt.pub()</a></li></ol><h3 id="http-request" tabindex="-1">http.request <a class="header-anchor" href="#http-request" aria-label="Permalink to &quot;http.request&quot;">​</a></h3><p>Calling the request URL http.request (<code>url[:port],[method,headers, body]</code>)</p><p>Currently only the <code>http://</code> protocol is supported.</p><p>Example switching gpio 12 for wifi-iot firmware</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">http.request (&quot;http://192.168.1.34/gpio?st=2&amp;pin=12&quot;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">http.request (&quot;http://192.168.1.34/gpio?st=2&amp;pin=12&quot;)</span></span></code></pre></div><p>An example of sending a POST request:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">http.request (&quot;http://postman-echo.com:80/post?foo1=bar1&quot;, &quot;POST&quot;, &quot;Content-Type:text/text; charset=utf-8\\r\\n&quot;, &quot;body &quot;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">http.request (&quot;http://postman-echo.com:80/post?foo1=bar1&quot;, &quot;POST&quot;, &quot;Content-Type:text/text; charset=utf-8\\r\\n&quot;, &quot;body &quot;)</span></span></code></pre></div><p>Example of switching relay sw1 in espHome firmware:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">http.request(&quot;http://192.168.1.71/switch/sw1/toggle&quot;, &quot;POST&quot;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">http.request(&quot;http://192.168.1.71/switch/sw1/toggle&quot;, &quot;POST&quot;)</span></span></code></pre></div><p>An example of switching gpio for MegaD by pressing btn_2 once on the Jager remote</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">if Event.State.Value == &quot;btn_2_single&quot; then</span></span>
<span class="line"><span style="color:#e1e4e8;">  http.request(&quot;http://192.168.2.200/objects/?object=MegaD1-12&amp;op=m&amp;m=switch&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">if Event.State.Value == &quot;btn_2_single&quot; then</span></span>
<span class="line"><span style="color:#24292e;">  http.request(&quot;http://192.168.2.200/objects/?object=MegaD1-12&amp;op=m&amp;m=switch&quot;)</span></span>
<span class="line"><span style="color:#24292e;">end</span></span></code></pre></div><p>Request for information from a third-party resource</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">local Response = http.request(&quot;http://wtfismyip.com/text&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">print(&quot;My IP:&quot; .. Response)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">local Response = http.request(&quot;http://wtfismyip.com/text&quot;)</span></span>
<span class="line"><span style="color:#24292e;">print(&quot;My IP:&quot; .. Response)</span></span></code></pre></div><h3 id="zigbee-value" tabindex="-1">zigbee.value() <a class="header-anchor" href="#zigbee-value" aria-label="Permalink to &quot;zigbee.value()&quot;">​</a></h3><p>Getting device status value from cache zigbee.value (&quot;ieeard&quot;, &quot;temperature&quot;)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">-- We get the temperature value and round to the nearest integer</span></span>
<span class="line"><span style="color:#e1e4e8;">temp = zigbee.value (&quot;0x00158D0001A2D2FE&quot;, &quot;temperature&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">temp = math.floor(temp)</span></span>
<span class="line"><span style="color:#e1e4e8;">print (&quot;Current temperature:&quot; .. temp .. &quot;C °&quot;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">-- We get the temperature value and round to the nearest integer</span></span>
<span class="line"><span style="color:#24292e;">temp = zigbee.value (&quot;0x00158D0001A2D2FE&quot;, &quot;temperature&quot;)</span></span>
<span class="line"><span style="color:#24292e;">temp = math.floor(temp)</span></span>
<span class="line"><span style="color:#24292e;">print (&quot;Current temperature:&quot; .. temp .. &quot;C °&quot;)</span></span></code></pre></div><p>Instead of the device address, you can use FriendlyName (including Cyrillic), or the current device address on the network (0x9EC8).</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">-- We get the temperature value and round to whole</span></span>
<span class="line"><span style="color:#e1e4e8;">temp = zigbee.value (&quot;room sensor&quot;, &quot;temperature&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">temp = math.floor (temp)</span></span>
<span class="line"><span style="color:#e1e4e8;">print (&quot;Current temperature:&quot; .. temp .. &quot;C °&quot;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">-- We get the temperature value and round to whole</span></span>
<span class="line"><span style="color:#24292e;">temp = zigbee.value (&quot;room sensor&quot;, &quot;temperature&quot;)</span></span>
<span class="line"><span style="color:#24292e;">temp = math.floor (temp)</span></span>
<span class="line"><span style="color:#24292e;">print (&quot;Current temperature:&quot; .. temp .. &quot;C °&quot;)</span></span></code></pre></div><h3 id="zigbee-get" tabindex="-1">zigbee.get () <a class="header-anchor" href="#zigbee-get" aria-label="Permalink to &quot;zigbee.get ()&quot;">​</a></h3><p>Calls a GET command in a carpet. Used to manually read states from devices.</p><p>Example:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">zigbee.get (&quot;lamp1&quot;, &quot;brightness&quot;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">zigbee.get (&quot;lamp1&quot;, &quot;brightness&quot;)</span></span></code></pre></div><h3 id="zigbee-join" tabindex="-1">zigbee.join () <a class="header-anchor" href="#zigbee-join" aria-label="Permalink to &quot;zigbee.join ()&quot;">​</a></h3><p>Syntax: <code>zigbee.join (duration, [target])</code></p><p>Opens the network for connecting new devices for duration seconds (max. 255), for the target device or for the entire network.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">zigbee.join (255, &quot;plug1&quot;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">zigbee.join (255, &quot;plug1&quot;)</span></span></code></pre></div><h3 id="zigbee-set" tabindex="-1">zigbee.set () <a class="header-anchor" href="#zigbee-set" aria-label="Permalink to &quot;zigbee.set ()&quot;">​</a></h3><p>Setting device value <code>zigbee.set (Ident, StateName, StateValue)</code></p><p>An example of a script that, when the lumi.sensor_switch button is pressed, turns on the lamp_1 lighting:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">if zigbee.value (&quot;lumi.sensor_switch&quot;, &quot;click&quot;) == &quot;single&quot; then</span></span>
<span class="line"><span style="color:#e1e4e8;">  -- toggle lamp</span></span>
<span class="line"><span style="color:#e1e4e8;">  current_brightness = zigbee.value (&quot;lamp_1&quot;, &quot;brightness&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">  if current_brightness == 0 then</span></span>
<span class="line"><span style="color:#e1e4e8;">    zigbee.set (&quot;lamp_1&quot;, &quot;brightness&quot;, 255)</span></span>
<span class="line"><span style="color:#e1e4e8;">  else</span></span>
<span class="line"><span style="color:#e1e4e8;">    zigbee.set (&quot;lamp_1&quot;, &quot;brightness&quot;, 0)</span></span>
<span class="line"><span style="color:#e1e4e8;">  end</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">-- switch 0x00124B0009FE36FC on single lumi.sensor_switch click</span></span>
<span class="line"><span style="color:#e1e4e8;">if Event.State.Value == &quot;single&quot; then</span></span>
<span class="line"><span style="color:#e1e4e8;">  zigbee.set (&quot;0x00124B0009FE36FC&quot;, &quot;state&quot;, &quot;toggle&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">if zigbee.value (&quot;lumi.sensor_switch&quot;, &quot;click&quot;) == &quot;single&quot; then</span></span>
<span class="line"><span style="color:#24292e;">  -- toggle lamp</span></span>
<span class="line"><span style="color:#24292e;">  current_brightness = zigbee.value (&quot;lamp_1&quot;, &quot;brightness&quot;)</span></span>
<span class="line"><span style="color:#24292e;">  if current_brightness == 0 then</span></span>
<span class="line"><span style="color:#24292e;">    zigbee.set (&quot;lamp_1&quot;, &quot;brightness&quot;, 255)</span></span>
<span class="line"><span style="color:#24292e;">  else</span></span>
<span class="line"><span style="color:#24292e;">    zigbee.set (&quot;lamp_1&quot;, &quot;brightness&quot;, 0)</span></span>
<span class="line"><span style="color:#24292e;">  end</span></span>
<span class="line"><span style="color:#24292e;">end</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">-- switch 0x00124B0009FE36FC on single lumi.sensor_switch click</span></span>
<span class="line"><span style="color:#24292e;">if Event.State.Value == &quot;single&quot; then</span></span>
<span class="line"><span style="color:#24292e;">  zigbee.set (&quot;0x00124B0009FE36FC&quot;, &quot;state&quot;, &quot;toggle&quot;)</span></span>
<span class="line"><span style="color:#24292e;">end</span></span></code></pre></div><h3 id="event" tabindex="-1">Event <a class="header-anchor" href="#event" aria-label="Permalink to &quot;Event&quot;">​</a></h3><p>The Event structure, for example, allows you to use the same script for different states or devices.</p><p>Possible use cases:</p><ul><li>Event.Name - The name of the script file</li><li>Event.nwkAddr - the nwkAddr of the device that called the script</li><li>Event.ieeeAddr - ieeeAddr of the device that invoked the script</li><li>Event.FriendlyName - FriendlyName of the device that called the script</li><li>Event.State.Name - The name of the state that caused the script</li><li>Event.State.Value - New state value</li></ul><p>An example of a script to turn on the light:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">if Event.State.Value == &quot;single&quot; then</span></span>
<span class="line"><span style="color:#e1e4e8;">  value = 255</span></span>
<span class="line"><span style="color:#e1e4e8;">elseif Event.State.Value == &quot;double&quot; then</span></span>
<span class="line"><span style="color:#e1e4e8;">  value = 0</span></span>
<span class="line"><span style="color:#e1e4e8;">else</span></span>
<span class="line"><span style="color:#e1e4e8;">  return</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span>
<span class="line"><span style="color:#e1e4e8;">zigbee.set (&quot;lamp_1&quot;, &quot;brightness&quot;, value)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">if Event.State.Value == &quot;single&quot; then</span></span>
<span class="line"><span style="color:#24292e;">  value = 255</span></span>
<span class="line"><span style="color:#24292e;">elseif Event.State.Value == &quot;double&quot; then</span></span>
<span class="line"><span style="color:#24292e;">  value = 0</span></span>
<span class="line"><span style="color:#24292e;">else</span></span>
<span class="line"><span style="color:#24292e;">  return</span></span>
<span class="line"><span style="color:#24292e;">end</span></span>
<span class="line"><span style="color:#24292e;">zigbee.set (&quot;lamp_1&quot;, &quot;brightness&quot;, value)</span></span></code></pre></div><h3 id="os-time" tabindex="-1">os.time() <a class="header-anchor" href="#os-time" aria-label="Permalink to &quot;os.time()&quot;">​</a></h3><p><code>os.time()</code> returns Unix time.</p><p>An example of getting the current hour, time and seconds, for example, for a scheduler in a timer:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">local gmt = 3</span></span>
<span class="line"><span style="color:#e1e4e8;">local time = os.time () + gmt * 3600;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">local t1 = math.modf (time/60);</span></span>
<span class="line"><span style="color:#e1e4e8;">local sec = time - t1 * 60;</span></span>
<span class="line"><span style="color:#e1e4e8;">local time = t1;</span></span>
<span class="line"><span style="color:#e1e4e8;">local t1 = math.modf (time/60);</span></span>
<span class="line"><span style="color:#e1e4e8;">local min = time - t1 * 60;</span></span>
<span class="line"><span style="color:#e1e4e8;">local time = t1;</span></span>
<span class="line"><span style="color:#e1e4e8;">local t1 = math.modf (time/24);</span></span>
<span class="line"><span style="color:#e1e4e8;">local hour = time - t1 * 24;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">print (hour .. &quot;:&quot; .. min .. &quot;:&quot; .. sec)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">local gmt = 3</span></span>
<span class="line"><span style="color:#24292e;">local time = os.time () + gmt * 3600;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">local t1 = math.modf (time/60);</span></span>
<span class="line"><span style="color:#24292e;">local sec = time - t1 * 60;</span></span>
<span class="line"><span style="color:#24292e;">local time = t1;</span></span>
<span class="line"><span style="color:#24292e;">local t1 = math.modf (time/60);</span></span>
<span class="line"><span style="color:#24292e;">local min = time - t1 * 60;</span></span>
<span class="line"><span style="color:#24292e;">local time = t1;</span></span>
<span class="line"><span style="color:#24292e;">local t1 = math.modf (time/24);</span></span>
<span class="line"><span style="color:#24292e;">local hour = time - t1 * 24;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">print (hour .. &quot;:&quot; .. min .. &quot;:&quot; .. sec)</span></span></code></pre></div><h3 id="os-delay" tabindex="-1">os.delay() <a class="header-anchor" href="#os-delay" aria-label="Permalink to &quot;os.delay()&quot;">​</a></h3><p>Syntax: <code>os.delay(ms)</code></p><p>Pause for ms milliseconds (1sec = 1000ms)</p><h3 id="os-millis" tabindex="-1">os.millis() <a class="header-anchor" href="#os-millis" aria-label="Permalink to &quot;os.millis()&quot;">​</a></h3><p>Returns the number of milliseconds since system boot</p><h3 id="os-save" tabindex="-1">os.save() <a class="header-anchor" href="#os-save" aria-label="Permalink to &quot;os.save()&quot;">​</a></h3><p>Saves data</p><h3 id="os-restart" tabindex="-1">os.restart() <a class="header-anchor" href="#os-restart" aria-label="Permalink to &quot;os.restart()&quot;">​</a></h3><p>Reboots the OS</p><h3 id="os-ping-host-count" tabindex="-1">os.ping(host [, count]) <a class="header-anchor" href="#os-ping-host-count" aria-label="Permalink to &quot;os.ping(host [, count])&quot;">​</a></h3><p>Sends ICMP PING requests, returns average time or -1 if unavailable.</p><h3 id="os-led-r-g-b-mode" tabindex="-1">os.led(r, g, b [, mode]) <a class="header-anchor" href="#os-led-r-g-b-mode" aria-label="Permalink to &quot;os.led(r, g, b [, mode])&quot;">​</a></h3><p>r, g, b - integers 0-255, sets the gateway LED color. You can use -1 for the corresponding color if you don&#39;t need to change it.</p><p>mode:</p><ul><li>0 - off,</li><li>1 - manual,</li><li>2 - auto</li></ul><h3 id="obj-get-obj-set" tabindex="-1">obj.get() / obj.set() <a class="header-anchor" href="#obj-get-obj-set" aria-label="Permalink to &quot;obj.get() / obj.set()&quot;">​</a></h3><p><code>obj.get(ObjectName)</code> / <code>obj.set(ObjectName, ObjectValue)</code> to save and get an object for exchanging data between scripts</p><p>Checking for the existence of an object:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">local status = obj.get (&quot;security.status&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">if (status == nil) then status = 0 end</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">local status = obj.get (&quot;security.status&quot;)</span></span>
<span class="line"><span style="color:#24292e;">if (status == nil) then status = 0 end</span></span></code></pre></div><h3 id="mqtt-pub" tabindex="-1">mqtt.pub() <a class="header-anchor" href="#mqtt-pub" aria-label="Permalink to &quot;mqtt.pub()&quot;">​</a></h3><p>Syntax: <code>mqtt.pub(topic, payload)</code></p><p>Publishes the <code>payload</code> value to the MQTT server in the <code>topic</code> topic.</p><p>Example of relay control on Tasmota firmware - <code>cmnd/device_name/relay_name</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">mqtt.pub(&#39;cmnd/sonoff5/power&#39;, &#39;toggle&#39;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">mqtt.pub(&#39;cmnd/sonoff5/power&#39;, &#39;toggle&#39;)</span></span></code></pre></div><h3 id="enabling-pairing-mode-by-pressing-the-side-button-of-the-gateway" tabindex="-1">Enabling &quot;pairing mode&quot; by pressing the side button of the gateway <a class="header-anchor" href="#enabling-pairing-mode-by-pressing-the-side-button-of-the-gateway" aria-label="Permalink to &quot;Enabling &quot;pairing mode&quot; by pressing the side button of the gateway&quot;">​</a></h3><p>When the button is clicked, the <code>btn_sw1.lua</code> script is called Add the following code to your script:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">zigbee.join(255, &quot;0x0000&quot;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">zigbee.join(255, &quot;0x0000&quot;)</span></span></code></pre></div><h3 id="gpio-control" tabindex="-1">GPIO control <a class="header-anchor" href="#gpio-control" aria-label="Permalink to &quot;GPIO control&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">gpio.mode(pin, mode)</span></span>
<span class="line"><span style="color:#e1e4e8;">gpio.read(pin) -- reading digital</span></span>
<span class="line"><span style="color:#e1e4e8;">gpio.read(PIN, true) -- read ADC</span></span>
<span class="line"><span style="color:#e1e4e8;">gpio.write(pin, level)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">gpio.mode(pin, mode)</span></span>
<span class="line"><span style="color:#24292e;">gpio.read(pin) -- reading digital</span></span>
<span class="line"><span style="color:#24292e;">gpio.read(PIN, true) -- read ADC</span></span>
<span class="line"><span style="color:#24292e;">gpio.write(pin, level)</span></span></code></pre></div><h3 id="sound-control" tabindex="-1">Sound Control <a class="header-anchor" href="#sound-control" aria-label="Permalink to &quot;Sound Control&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">audio.playurl(url) -- play audio from URL</span></span>
<span class="line"><span style="color:#e1e4e8;">audio.geturl() -- return current url</span></span>
<span class="line"><span style="color:#e1e4e8;">audio.stop() -- stop playing</span></span>
<span class="line"><span style="color:#e1e4e8;">audio.setvolume(volume_procent) -- set volume</span></span>
<span class="line"><span style="color:#e1e4e8;">audio.getvolume() -- get current volume</span></span>
<span class="line"><span style="color:#e1e4e8;">audio.getstatus() -- get current status</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">audio.playurl(url) -- play audio from URL</span></span>
<span class="line"><span style="color:#24292e;">audio.geturl() -- return current url</span></span>
<span class="line"><span style="color:#24292e;">audio.stop() -- stop playing</span></span>
<span class="line"><span style="color:#24292e;">audio.setvolume(volume_procent) -- set volume</span></span>
<span class="line"><span style="color:#24292e;">audio.getvolume() -- get current volume</span></span>
<span class="line"><span style="color:#24292e;">audio.getstatus() -- get current status</span></span></code></pre></div><h3 id="minute-timer" tabindex="-1">Minute timer <a class="header-anchor" href="#minute-timer" aria-label="Permalink to &quot;Minute timer&quot;">​</a></h3><p>Just create a script called <code>OneMinTimer.lua</code>, it will run every minute.</p><p>An example of sending data every minute to <a href="https://narodmon.ru" target="_blank" rel="noreferrer">https://narodmon.ru</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function SendNarodmon (name, value)</span></span>
<span class="line"><span style="color:#e1e4e8;">  local MAC = &quot;BC:DD:C2:D7:68:BC&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  http.request (&quot;http://narodmon.ru/get?ID=&quot; .. MAC .. &quot;&amp;&quot; .. name .. &quot;=&quot; .. tostring (value))</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">local value = zigbee.value (&quot;0x04CF8CDF3C771F6C&quot;, &quot;illuminance&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">SendNarodmon (&quot;illuminance&quot;, value)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function SendNarodmon (name, value)</span></span>
<span class="line"><span style="color:#24292e;">  local MAC = &quot;BC:DD:C2:D7:68:BC&quot;</span></span>
<span class="line"><span style="color:#24292e;">  http.request (&quot;http://narodmon.ru/get?ID=&quot; .. MAC .. &quot;&amp;&quot; .. name .. &quot;=&quot; .. tostring (value))</span></span>
<span class="line"><span style="color:#24292e;">end</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">local value = zigbee.value (&quot;0x04CF8CDF3C771F6C&quot;, &quot;illuminance&quot;)</span></span>
<span class="line"><span style="color:#24292e;">SendNarodmon (&quot;illuminance&quot;, value)</span></span></code></pre></div><h3 id="sending-a-message-to-telegram-using-your-bot" tabindex="-1">Sending a message to telegram using your bot <a class="header-anchor" href="#sending-a-message-to-telegram-using-your-bot" aria-label="Permalink to &quot;Sending a message to telegram using your bot&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">local char_to_hex = function(c)</span></span>
<span class="line"><span style="color:#e1e4e8;">  return string.format (&quot;%%% 02X&quot;, string.byte (c))</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function round(exact, quantum)</span></span>
<span class="line"><span style="color:#e1e4e8;">  local quant, frac = math.modf (exact/quantum)</span></span>
<span class="line"><span style="color:#e1e4e8;">  return quantum * (quant + (frac&gt; 0.5 and 1 or 0))</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">local function urlencode(url)</span></span>
<span class="line"><span style="color:#e1e4e8;">  if url == nil then</span></span>
<span class="line"><span style="color:#e1e4e8;">    return</span></span>
<span class="line"><span style="color:#e1e4e8;">  end</span></span>
<span class="line"><span style="color:#e1e4e8;">  url = url: gsub (&quot;\\n&quot;, &quot;\\r\\n&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">  url = url: gsub (&quot;([^% w])&quot;, char_to_hex)</span></span>
<span class="line"><span style="color:#e1e4e8;">  url = url: gsub (&quot;&quot;, &quot;+&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">  return url</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">local hex_to_char = function(x)</span></span>
<span class="line"><span style="color:#e1e4e8;">  return string.char (tonumber (x, 16))</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function SendTelegram(text)</span></span>
<span class="line"><span style="color:#e1e4e8;">  local token = &quot;5177 ...: AAG0b ....&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  local chat_id = &quot;38806 .....&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  --http.request (&quot;https://api.telegram.org/bot&quot; .. token .. &quot;/sendMessage?chat_id =&quot;.. chat_id..&quot;&amp; text=&quot;..tostring (text)) - https doesn&#39;t work in lua yet</span></span>
<span class="line"><span style="color:#e1e4e8;">  http.request (&quot;http://212.237.16.93/bot&quot;..token..&quot;/sendMessage?chat_id =&quot; .. chat_id .. &quot;&amp; text=&quot;..urlencode (text))</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">local value = zigbee.value (&quot;0x00158D00036C1508&quot;, &quot;temperature&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">local text = &quot;temperature:&quot;..round(tostring(value), 2)</span></span>
<span class="line"><span style="color:#e1e4e8;">SendTelegram (text)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">local char_to_hex = function(c)</span></span>
<span class="line"><span style="color:#24292e;">  return string.format (&quot;%%% 02X&quot;, string.byte (c))</span></span>
<span class="line"><span style="color:#24292e;">end</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function round(exact, quantum)</span></span>
<span class="line"><span style="color:#24292e;">  local quant, frac = math.modf (exact/quantum)</span></span>
<span class="line"><span style="color:#24292e;">  return quantum * (quant + (frac&gt; 0.5 and 1 or 0))</span></span>
<span class="line"><span style="color:#24292e;">end</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">local function urlencode(url)</span></span>
<span class="line"><span style="color:#24292e;">  if url == nil then</span></span>
<span class="line"><span style="color:#24292e;">    return</span></span>
<span class="line"><span style="color:#24292e;">  end</span></span>
<span class="line"><span style="color:#24292e;">  url = url: gsub (&quot;\\n&quot;, &quot;\\r\\n&quot;)</span></span>
<span class="line"><span style="color:#24292e;">  url = url: gsub (&quot;([^% w])&quot;, char_to_hex)</span></span>
<span class="line"><span style="color:#24292e;">  url = url: gsub (&quot;&quot;, &quot;+&quot;)</span></span>
<span class="line"><span style="color:#24292e;">  return url</span></span>
<span class="line"><span style="color:#24292e;">end</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">local hex_to_char = function(x)</span></span>
<span class="line"><span style="color:#24292e;">  return string.char (tonumber (x, 16))</span></span>
<span class="line"><span style="color:#24292e;">end</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function SendTelegram(text)</span></span>
<span class="line"><span style="color:#24292e;">  local token = &quot;5177 ...: AAG0b ....&quot;</span></span>
<span class="line"><span style="color:#24292e;">  local chat_id = &quot;38806 .....&quot;</span></span>
<span class="line"><span style="color:#24292e;">  --http.request (&quot;https://api.telegram.org/bot&quot; .. token .. &quot;/sendMessage?chat_id =&quot;.. chat_id..&quot;&amp; text=&quot;..tostring (text)) - https doesn&#39;t work in lua yet</span></span>
<span class="line"><span style="color:#24292e;">  http.request (&quot;http://212.237.16.93/bot&quot;..token..&quot;/sendMessage?chat_id =&quot; .. chat_id .. &quot;&amp; text=&quot;..urlencode (text))</span></span>
<span class="line"><span style="color:#24292e;">end</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">local value = zigbee.value (&quot;0x00158D00036C1508&quot;, &quot;temperature&quot;)</span></span>
<span class="line"><span style="color:#24292e;">local text = &quot;temperature:&quot;..round(tostring(value), 2)</span></span>
<span class="line"><span style="color:#24292e;">SendTelegram (text)</span></span></code></pre></div><h3 id="telegram-notification-about-door-opening" tabindex="-1">Telegram notification about door opening <a class="header-anchor" href="#telegram-notification-about-door-opening" aria-label="Permalink to &quot;Telegram notification about door opening&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">local char_to_hex = function(c)</span></span>
<span class="line"><span style="color:#e1e4e8;">  return string.format (&quot;%%%02X&quot;, string.byte (c))</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function round(exact, quantum)</span></span>
<span class="line"><span style="color:#e1e4e8;">    local quant, frac = math.modf (exact/quantum)</span></span>
<span class="line"><span style="color:#e1e4e8;">    return quantum * (quant + (frac&gt;0.5 and 1 or 0))</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">local function urlencode(url)</span></span>
<span class="line"><span style="color:#e1e4e8;">  if url == nil then</span></span>
<span class="line"><span style="color:#e1e4e8;">    return</span></span>
<span class="line"><span style="color:#e1e4e8;">  end</span></span>
<span class="line"><span style="color:#e1e4e8;">  url = url: gsub (&quot;\\n&quot;, &quot;\\r\\n&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">  url = url: gsub (&quot;([^% w])&quot;, char_to_hex)</span></span>
<span class="line"><span style="color:#e1e4e8;">  url = url: gsub (&quot;&quot;, &quot;+&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">  return url</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">local hex_to_char = function(x)</span></span>
<span class="line"><span style="color:#e1e4e8;">  return string.char (tonumber (x, 16))</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function SendTelegram (text)</span></span>
<span class="line"><span style="color:#e1e4e8;">  local token = &quot;517781 ...: AAG0 ...&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  local chat_id = &quot;38806 ....&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  --http.request (&quot;https://api.telegram.org/bot&quot; .. token .. &quot;/sendMessage?chat_id =&quot;..chat_id .. &quot;&amp;text =&quot; .. tostring (text)) - https doesn&#39;t work in lua yet</span></span>
<span class="line"><span style="color:#e1e4e8;">  http.request (&quot;http://212.237.16.93/bot&quot; .. token .. &quot;/sendMessage?chat_id =&quot;..chat_id..&quot;&amp;text =&quot; .. urlencode (text))</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">local state = zigbee.value(tostring (Event.ieeeAddr), &quot;contact&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">if (state) then</span></span>
<span class="line"><span style="color:#e1e4e8;">  SendTelegram (&quot;The door is open&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">else</span></span>
<span class="line"><span style="color:#e1e4e8;">  SendTelegram (&quot;Door closed&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">local char_to_hex = function(c)</span></span>
<span class="line"><span style="color:#24292e;">  return string.format (&quot;%%%02X&quot;, string.byte (c))</span></span>
<span class="line"><span style="color:#24292e;">end</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function round(exact, quantum)</span></span>
<span class="line"><span style="color:#24292e;">    local quant, frac = math.modf (exact/quantum)</span></span>
<span class="line"><span style="color:#24292e;">    return quantum * (quant + (frac&gt;0.5 and 1 or 0))</span></span>
<span class="line"><span style="color:#24292e;">end</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">local function urlencode(url)</span></span>
<span class="line"><span style="color:#24292e;">  if url == nil then</span></span>
<span class="line"><span style="color:#24292e;">    return</span></span>
<span class="line"><span style="color:#24292e;">  end</span></span>
<span class="line"><span style="color:#24292e;">  url = url: gsub (&quot;\\n&quot;, &quot;\\r\\n&quot;)</span></span>
<span class="line"><span style="color:#24292e;">  url = url: gsub (&quot;([^% w])&quot;, char_to_hex)</span></span>
<span class="line"><span style="color:#24292e;">  url = url: gsub (&quot;&quot;, &quot;+&quot;)</span></span>
<span class="line"><span style="color:#24292e;">  return url</span></span>
<span class="line"><span style="color:#24292e;">end</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">local hex_to_char = function(x)</span></span>
<span class="line"><span style="color:#24292e;">  return string.char (tonumber (x, 16))</span></span>
<span class="line"><span style="color:#24292e;">end</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function SendTelegram (text)</span></span>
<span class="line"><span style="color:#24292e;">  local token = &quot;517781 ...: AAG0 ...&quot;</span></span>
<span class="line"><span style="color:#24292e;">  local chat_id = &quot;38806 ....&quot;</span></span>
<span class="line"><span style="color:#24292e;">  --http.request (&quot;https://api.telegram.org/bot&quot; .. token .. &quot;/sendMessage?chat_id =&quot;..chat_id .. &quot;&amp;text =&quot; .. tostring (text)) - https doesn&#39;t work in lua yet</span></span>
<span class="line"><span style="color:#24292e;">  http.request (&quot;http://212.237.16.93/bot&quot; .. token .. &quot;/sendMessage?chat_id =&quot;..chat_id..&quot;&amp;text =&quot; .. urlencode (text))</span></span>
<span class="line"><span style="color:#24292e;">end</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">local state = zigbee.value(tostring (Event.ieeeAddr), &quot;contact&quot;)</span></span>
<span class="line"><span style="color:#24292e;">if (state) then</span></span>
<span class="line"><span style="color:#24292e;">  SendTelegram (&quot;The door is open&quot;)</span></span>
<span class="line"><span style="color:#24292e;">else</span></span>
<span class="line"><span style="color:#24292e;">  SendTelegram (&quot;Door closed&quot;)</span></span>
<span class="line"><span style="color:#24292e;">end</span></span></code></pre></div><h3 id="notification-in-telegrams-when-the-motion-sensor-is-triggered" tabindex="-1">Notification in telegrams when the motion sensor is triggered <a class="header-anchor" href="#notification-in-telegrams-when-the-motion-sensor-is-triggered" aria-label="Permalink to &quot;Notification in telegrams when the motion sensor is triggered&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">local char_to_hex = function(c)</span></span>
<span class="line"><span style="color:#e1e4e8;">  return string.format (&quot;%%%02X&quot;, string.byte (c))</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function round(exact, quantum)</span></span>
<span class="line"><span style="color:#e1e4e8;">    local quant, frac = math.modf (exact/quantum)</span></span>
<span class="line"><span style="color:#e1e4e8;">    return quantum * (quant + (frac&gt; 0.5 and 1 or 0))</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">local function urlencode(url)</span></span>
<span class="line"><span style="color:#e1e4e8;">  if url == nil then</span></span>
<span class="line"><span style="color:#e1e4e8;">    return</span></span>
<span class="line"><span style="color:#e1e4e8;">  end</span></span>
<span class="line"><span style="color:#e1e4e8;">  url = url: gsub (&quot;\\n&quot;,&quot;\\r\\n&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">  url = url: gsub (&quot;([^% w])&quot;, char_to_hex)</span></span>
<span class="line"><span style="color:#e1e4e8;">  url = url: gsub (&quot;&quot;, &quot;+&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">  return url</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">local hex_to_char = function(x)</span></span>
<span class="line"><span style="color:#e1e4e8;">  return string.char (tonumber (x, 16))</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function SendTelegram(text)</span></span>
<span class="line"><span style="color:#e1e4e8;">  local token = &quot;517781 ...: AAG0bv ....&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  local chat_id = &quot;3880 ......&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  --http.request (&quot;https://api.telegram.org/bot&quot; .. token .. &quot;/sendMessage?chat_id=&quot; .. chat_id .. &quot;&amp;text =&quot; .. tostring (text)) - https doesn&#39;t work in lua yet</span></span>
<span class="line"><span style="color:#e1e4e8;">  http.request (&quot;http://212.237.16.93/bot&quot; .. token.. &quot;/sendMessage?chat_id=&quot; .. chat_id .. &quot;&amp;text =&quot; .. urlencode (text))</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">local state = zigbee.value (tostring (Event.ieeeAddr), &quot;occupancy&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">if (state) then</span></span>
<span class="line"><span style="color:#e1e4e8;">  SendTelegram (&quot;Motion sensor&quot; .. Event.ieeeAddr .. &quot;detected activity&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">else</span></span>
<span class="line"><span style="color:#e1e4e8;">  SendTelegram (&quot;Sensor value&quot; .. Event.FriendlyName .. &quot;movement normalized&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">local char_to_hex = function(c)</span></span>
<span class="line"><span style="color:#24292e;">  return string.format (&quot;%%%02X&quot;, string.byte (c))</span></span>
<span class="line"><span style="color:#24292e;">end</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function round(exact, quantum)</span></span>
<span class="line"><span style="color:#24292e;">    local quant, frac = math.modf (exact/quantum)</span></span>
<span class="line"><span style="color:#24292e;">    return quantum * (quant + (frac&gt; 0.5 and 1 or 0))</span></span>
<span class="line"><span style="color:#24292e;">end</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">local function urlencode(url)</span></span>
<span class="line"><span style="color:#24292e;">  if url == nil then</span></span>
<span class="line"><span style="color:#24292e;">    return</span></span>
<span class="line"><span style="color:#24292e;">  end</span></span>
<span class="line"><span style="color:#24292e;">  url = url: gsub (&quot;\\n&quot;,&quot;\\r\\n&quot;)</span></span>
<span class="line"><span style="color:#24292e;">  url = url: gsub (&quot;([^% w])&quot;, char_to_hex)</span></span>
<span class="line"><span style="color:#24292e;">  url = url: gsub (&quot;&quot;, &quot;+&quot;)</span></span>
<span class="line"><span style="color:#24292e;">  return url</span></span>
<span class="line"><span style="color:#24292e;">end</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">local hex_to_char = function(x)</span></span>
<span class="line"><span style="color:#24292e;">  return string.char (tonumber (x, 16))</span></span>
<span class="line"><span style="color:#24292e;">end</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function SendTelegram(text)</span></span>
<span class="line"><span style="color:#24292e;">  local token = &quot;517781 ...: AAG0bv ....&quot;</span></span>
<span class="line"><span style="color:#24292e;">  local chat_id = &quot;3880 ......&quot;</span></span>
<span class="line"><span style="color:#24292e;">  --http.request (&quot;https://api.telegram.org/bot&quot; .. token .. &quot;/sendMessage?chat_id=&quot; .. chat_id .. &quot;&amp;text =&quot; .. tostring (text)) - https doesn&#39;t work in lua yet</span></span>
<span class="line"><span style="color:#24292e;">  http.request (&quot;http://212.237.16.93/bot&quot; .. token.. &quot;/sendMessage?chat_id=&quot; .. chat_id .. &quot;&amp;text =&quot; .. urlencode (text))</span></span>
<span class="line"><span style="color:#24292e;">end</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">local state = zigbee.value (tostring (Event.ieeeAddr), &quot;occupancy&quot;)</span></span>
<span class="line"><span style="color:#24292e;">if (state) then</span></span>
<span class="line"><span style="color:#24292e;">  SendTelegram (&quot;Motion sensor&quot; .. Event.ieeeAddr .. &quot;detected activity&quot;)</span></span>
<span class="line"><span style="color:#24292e;">else</span></span>
<span class="line"><span style="color:#24292e;">  SendTelegram (&quot;Sensor value&quot; .. Event.FriendlyName .. &quot;movement normalized&quot;)</span></span>
<span class="line"><span style="color:#24292e;">end</span></span></code></pre></div><h3 id="alert-about-change-of-temperature-humidity-sensor-value" tabindex="-1">Alert about change of temperature / humidity sensor value <a class="header-anchor" href="#alert-about-change-of-temperature-humidity-sensor-value" aria-label="Permalink to &quot;Alert about change of temperature / humidity sensor value&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">local char_to_hex = function(c)</span></span>
<span class="line"><span style="color:#e1e4e8;">  return string.format (&quot;%%%02X&quot;, string.byte (c))</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function round2(num, numDecimalPlaces)</span></span>
<span class="line"><span style="color:#e1e4e8;">  local mult = 10 ^ (numDecimalPlaces or 0)</span></span>
<span class="line"><span style="color:#e1e4e8;">  return math.floor (num * mult + 0.5) / mult</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">local function urlencode(url)</span></span>
<span class="line"><span style="color:#e1e4e8;">  if url == nil then</span></span>
<span class="line"><span style="color:#e1e4e8;">    return</span></span>
<span class="line"><span style="color:#e1e4e8;">  end</span></span>
<span class="line"><span style="color:#e1e4e8;">  url = url: gsub (&quot;\\n&quot;, &quot;\\r\\n&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">  url = url: gsub (&quot;([^%w])&quot;, char_to_hex)</span></span>
<span class="line"><span style="color:#e1e4e8;">  url = url: gsub (&quot;&quot;, &quot;+&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">  return url</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">local hex_to_char = function(x)</span></span>
<span class="line"><span style="color:#e1e4e8;">  return string.char (tonumber (x, 16))</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function SendTelegram(text)</span></span>
<span class="line"><span style="color:#e1e4e8;">  local token = &quot;5177 ....: AAG0 ......&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  local chat_id = &quot;3880 ...&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  --http.request (&quot;https://api.telegram.org/bot&quot; .. token .. &quot;/ sendMessage? chat_id =&quot; .. chat_id .. &quot;&amp; text =&quot; .. tostring (text)) - https doesn&#39;t work in lua yet</span></span>
<span class="line"><span style="color:#e1e4e8;">  http.request (&quot;http://212.237.16.93/bot&quot; .. token .. &quot;/ sendMessage? chat_id =&quot; .. chat_id .. &quot;&amp; text =&quot; .. urlencode (text))</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">local temp = round2 (zigbee.value (tostring (Event.ieeeAddr), &quot;temperature&quot;), 1)</span></span>
<span class="line"><span style="color:#e1e4e8;">local hum = round2 (zigbee.value (tostring (Event.ieeeAddr), &quot;humidity&quot;), 1)</span></span>
<span class="line"><span style="color:#e1e4e8;">SendTelegram (&quot;DTV value&quot; .. Event.FriendlyName .. &quot;&quot; .. temp .. &quot;° /&quot; .. hum .. &quot;%&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">------------ sending value to narodmon</span></span>
<span class="line"><span style="color:#e1e4e8;">function SendNarodmon (name, value)</span></span>
<span class="line"><span style="color:#e1e4e8;">  local MAC = tostring (Event.ieeeAddr)</span></span>
<span class="line"><span style="color:#e1e4e8;">  http.request (&quot;http://narodmon.ru/get?ID=&quot; .. MAC .. &quot;&amp;&quot; .. name .. &quot;=&quot; .. tostring (value))</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">SendNarodmon (&quot;temperature&quot;, temp)</span></span>
<span class="line"><span style="color:#e1e4e8;">SendNarodmon (&quot;humidity&quot;, hum)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">local char_to_hex = function(c)</span></span>
<span class="line"><span style="color:#24292e;">  return string.format (&quot;%%%02X&quot;, string.byte (c))</span></span>
<span class="line"><span style="color:#24292e;">end</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function round2(num, numDecimalPlaces)</span></span>
<span class="line"><span style="color:#24292e;">  local mult = 10 ^ (numDecimalPlaces or 0)</span></span>
<span class="line"><span style="color:#24292e;">  return math.floor (num * mult + 0.5) / mult</span></span>
<span class="line"><span style="color:#24292e;">end</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">local function urlencode(url)</span></span>
<span class="line"><span style="color:#24292e;">  if url == nil then</span></span>
<span class="line"><span style="color:#24292e;">    return</span></span>
<span class="line"><span style="color:#24292e;">  end</span></span>
<span class="line"><span style="color:#24292e;">  url = url: gsub (&quot;\\n&quot;, &quot;\\r\\n&quot;)</span></span>
<span class="line"><span style="color:#24292e;">  url = url: gsub (&quot;([^%w])&quot;, char_to_hex)</span></span>
<span class="line"><span style="color:#24292e;">  url = url: gsub (&quot;&quot;, &quot;+&quot;)</span></span>
<span class="line"><span style="color:#24292e;">  return url</span></span>
<span class="line"><span style="color:#24292e;">end</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">local hex_to_char = function(x)</span></span>
<span class="line"><span style="color:#24292e;">  return string.char (tonumber (x, 16))</span></span>
<span class="line"><span style="color:#24292e;">end</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function SendTelegram(text)</span></span>
<span class="line"><span style="color:#24292e;">  local token = &quot;5177 ....: AAG0 ......&quot;</span></span>
<span class="line"><span style="color:#24292e;">  local chat_id = &quot;3880 ...&quot;</span></span>
<span class="line"><span style="color:#24292e;">  --http.request (&quot;https://api.telegram.org/bot&quot; .. token .. &quot;/ sendMessage? chat_id =&quot; .. chat_id .. &quot;&amp; text =&quot; .. tostring (text)) - https doesn&#39;t work in lua yet</span></span>
<span class="line"><span style="color:#24292e;">  http.request (&quot;http://212.237.16.93/bot&quot; .. token .. &quot;/ sendMessage? chat_id =&quot; .. chat_id .. &quot;&amp; text =&quot; .. urlencode (text))</span></span>
<span class="line"><span style="color:#24292e;">end</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">local temp = round2 (zigbee.value (tostring (Event.ieeeAddr), &quot;temperature&quot;), 1)</span></span>
<span class="line"><span style="color:#24292e;">local hum = round2 (zigbee.value (tostring (Event.ieeeAddr), &quot;humidity&quot;), 1)</span></span>
<span class="line"><span style="color:#24292e;">SendTelegram (&quot;DTV value&quot; .. Event.FriendlyName .. &quot;&quot; .. temp .. &quot;° /&quot; .. hum .. &quot;%&quot;)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">------------ sending value to narodmon</span></span>
<span class="line"><span style="color:#24292e;">function SendNarodmon (name, value)</span></span>
<span class="line"><span style="color:#24292e;">  local MAC = tostring (Event.ieeeAddr)</span></span>
<span class="line"><span style="color:#24292e;">  http.request (&quot;http://narodmon.ru/get?ID=&quot; .. MAC .. &quot;&amp;&quot; .. name .. &quot;=&quot; .. tostring (value))</span></span>
<span class="line"><span style="color:#24292e;">end</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">SendNarodmon (&quot;temperature&quot;, temp)</span></span>
<span class="line"><span style="color:#24292e;">SendNarodmon (&quot;humidity&quot;, hum)</span></span></code></pre></div><h3 id="simplified-sending-of-messages-in-telegrams-starting-from-version-20200915" tabindex="-1">Simplified sending of messages in telegrams (starting from version 20200915) <a class="header-anchor" href="#simplified-sending-of-messages-in-telegrams-starting-from-version-20200915" aria-label="Permalink to &quot;Simplified sending of messages in telegrams (starting from version 20200915)&quot;">​</a></h3><ol><li>Register your bot at <a href="https://t.me/BotFather" target="_blank" rel="noreferrer">@BotFather</a>. <em>token</em> issued to you during bot registration.</li><li>Find out your <em>ChatId</em> from the <a href="https://t.me/userinfobot" target="_blank" rel="noreferrer">@userinfobot</a>.</li></ol><p>It is enough to write the <em>token</em> and <em>ChatId</em> once in <code>init.lua</code>, then use only <code>telegram.send()</code> :</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">-- add in init.lua</span></span>
<span class="line"><span style="color:#e1e4e8;">telegram.settoken (&quot;5961 ....: AAHJP4 ...&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">telegram.setchat (&quot;5748 .....&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">-- add to other lua scripts</span></span>
<span class="line"><span style="color:#e1e4e8;">telegram.send (&quot;Temperature:&quot; .. string.format (&quot;%.2f&quot;, zigbee.value (tostring (Event.ieeeAddr), &quot;temperature&quot;)) .. &quot;° C, Humidity:&quot; .. string.format (&quot;% .2f&quot;, zigbee.value (tostring (Event.ieeeAddr), &quot;humidity&quot;)) .. &quot;%&quot;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">-- add in init.lua</span></span>
<span class="line"><span style="color:#24292e;">telegram.settoken (&quot;5961 ....: AAHJP4 ...&quot;)</span></span>
<span class="line"><span style="color:#24292e;">telegram.setchat (&quot;5748 .....&quot;)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">-- add to other lua scripts</span></span>
<span class="line"><span style="color:#24292e;">telegram.send (&quot;Temperature:&quot; .. string.format (&quot;%.2f&quot;, zigbee.value (tostring (Event.ieeeAddr), &quot;temperature&quot;)) .. &quot;° C, Humidity:&quot; .. string.format (&quot;% .2f&quot;, zigbee.value (tostring (Event.ieeeAddr), &quot;humidity&quot;)) .. &quot;%&quot;)</span></span></code></pre></div><h3 id="gateway-illumination-by-motion-sensor-only-at-night-from-22-to-6" tabindex="-1">Gateway illumination by motion sensor only at night from 22 to 6 <a class="header-anchor" href="#gateway-illumination-by-motion-sensor-only-at-night-from-22-to-6" aria-label="Permalink to &quot;Gateway illumination by motion sensor only at night from 22 to 6&quot;">​</a></h3><p>Option via GPIO</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">local gmt = 3</span></span>
<span class="line"><span style="color:#e1e4e8;">local time = os.time()</span></span>
<span class="line"><span style="color:#e1e4e8;">local hour = (math.modf(time / 3600) + gmt) % 24</span></span>
<span class="line"><span style="color:#e1e4e8;">if hour&gt; = 22 or hour &lt;6 then</span></span>
<span class="line"><span style="color:#e1e4e8;">  if Event.State.Value == &quot;true&quot; then</span></span>
<span class="line"><span style="color:#e1e4e8;">    gpio.pwm(0, 255)</span></span>
<span class="line"><span style="color:#e1e4e8;">    gpio.pwm(1, 255)</span></span>
<span class="line"><span style="color:#e1e4e8;">    gpio.pwm(2, 255)</span></span>
<span class="line"><span style="color:#e1e4e8;">  else</span></span>
<span class="line"><span style="color:#e1e4e8;">    gpio.pwm(0, 0)</span></span>
<span class="line"><span style="color:#e1e4e8;">    gpio.pwm(1, 0)</span></span>
<span class="line"><span style="color:#e1e4e8;">    gpio.pwm(2, 0)</span></span>
<span class="line"><span style="color:#e1e4e8;">  end</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">local gmt = 3</span></span>
<span class="line"><span style="color:#24292e;">local time = os.time()</span></span>
<span class="line"><span style="color:#24292e;">local hour = (math.modf(time / 3600) + gmt) % 24</span></span>
<span class="line"><span style="color:#24292e;">if hour&gt; = 22 or hour &lt;6 then</span></span>
<span class="line"><span style="color:#24292e;">  if Event.State.Value == &quot;true&quot; then</span></span>
<span class="line"><span style="color:#24292e;">    gpio.pwm(0, 255)</span></span>
<span class="line"><span style="color:#24292e;">    gpio.pwm(1, 255)</span></span>
<span class="line"><span style="color:#24292e;">    gpio.pwm(2, 255)</span></span>
<span class="line"><span style="color:#24292e;">  else</span></span>
<span class="line"><span style="color:#24292e;">    gpio.pwm(0, 0)</span></span>
<span class="line"><span style="color:#24292e;">    gpio.pwm(1, 0)</span></span>
<span class="line"><span style="color:#24292e;">    gpio.pwm(2, 0)</span></span>
<span class="line"><span style="color:#24292e;">  end</span></span>
<span class="line"><span style="color:#24292e;">end</span></span></code></pre></div><p>Option via MQTT:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">local gmt = 3</span></span>
<span class="line"><span style="color:#e1e4e8;">local time = os.time()</span></span>
<span class="line"><span style="color:#e1e4e8;">local hour = (math.modf(time / 3600) + gmt) % 24</span></span>
<span class="line"><span style="color:#e1e4e8;">if hour&gt; = 22 or hour &lt;6 then</span></span>
<span class="line"><span style="color:#e1e4e8;">  if Event.State.Value == &quot;true&quot; then</span></span>
<span class="line"><span style="color:#e1e4e8;">    mqtt.pub(&#39;ZigBeeSls/led&#39;, &#39;{&quot;mode&quot;: &quot;manual&quot;, &quot;hex&quot;: &quot;#FF0000&quot;}&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">  else</span></span>
<span class="line"><span style="color:#e1e4e8;">    mqtt.pub(&#39;ZigBeeSls/led&#39;, &#39;{&quot;mode&quot;: &quot;off&quot;}&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">  end</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">local gmt = 3</span></span>
<span class="line"><span style="color:#24292e;">local time = os.time()</span></span>
<span class="line"><span style="color:#24292e;">local hour = (math.modf(time / 3600) + gmt) % 24</span></span>
<span class="line"><span style="color:#24292e;">if hour&gt; = 22 or hour &lt;6 then</span></span>
<span class="line"><span style="color:#24292e;">  if Event.State.Value == &quot;true&quot; then</span></span>
<span class="line"><span style="color:#24292e;">    mqtt.pub(&#39;ZigBeeSls/led&#39;, &#39;{&quot;mode&quot;: &quot;manual&quot;, &quot;hex&quot;: &quot;#FF0000&quot;}&#39;)</span></span>
<span class="line"><span style="color:#24292e;">  else</span></span>
<span class="line"><span style="color:#24292e;">    mqtt.pub(&#39;ZigBeeSls/led&#39;, &#39;{&quot;mode&quot;: &quot;off&quot;}&#39;)</span></span>
<span class="line"><span style="color:#24292e;">  end</span></span>
<span class="line"><span style="color:#24292e;">end</span></span></code></pre></div><h3 id="creating-a-security-mode" tabindex="-1">Creating a security mode <a class="header-anchor" href="#creating-a-security-mode" aria-label="Permalink to &quot;Creating a security mode&quot;">​</a></h3><p>Staging</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">obj.set (&quot;security_status&quot;, &quot;armed&quot;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">obj.set (&quot;security_status&quot;, &quot;armed&quot;)</span></span></code></pre></div><p>Check</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">if obj.get (&quot;security_status&quot;) == &quot;armed&quot; then</span></span>
<span class="line"><span style="color:#e1e4e8;">  print (&quot;Object is armed.&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">else</span></span>
<span class="line"><span style="color:#e1e4e8;">  print (&quot;Object is not armed.&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">if obj.get (&quot;security_status&quot;) == &quot;armed&quot; then</span></span>
<span class="line"><span style="color:#24292e;">  print (&quot;Object is armed.&quot;)</span></span>
<span class="line"><span style="color:#24292e;">else</span></span>
<span class="line"><span style="color:#24292e;">  print (&quot;Object is not armed.&quot;)</span></span>
<span class="line"><span style="color:#24292e;">end</span></span></code></pre></div><h3 id="turn-on-the-sound-of-the-doorbell-on-an-event-the-sound-file-is-in-an-open-network" tabindex="-1">Turn on the sound of the doorbell on an event (the sound file is in an open network) <a class="header-anchor" href="#turn-on-the-sound-of-the-doorbell-on-an-event-the-sound-file-is-in-an-open-network" aria-label="Permalink to &quot;Turn on the sound of the doorbell on an event (the sound file is in an open network)&quot;">​</a></h3><p>192.168.1.5 is the address of another gateway. You can&#39;t run on itself this way, use the audio object.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">http.request (&quot;http://192.168.1.5/audio?action=setvolume&amp;value=100&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">http.request (&quot;http://192.168.1.5/audio?action=play&amp;url=http://funny-dog.surge.sh/door_bell.mp3&quot;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">http.request (&quot;http://192.168.1.5/audio?action=setvolume&amp;value=100&quot;)</span></span>
<span class="line"><span style="color:#24292e;">http.request (&quot;http://192.168.1.5/audio?action=play&amp;url=http://funny-dog.surge.sh/door_bell.mp3&quot;)</span></span></code></pre></div><h3 id="creating-of-virtual-properties" tabindex="-1">Creating of virtual properties <a class="header-anchor" href="#creating-of-virtual-properties" aria-label="Permalink to &quot;Creating of virtual properties&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">zigbee.add(IEEE, &quot;myproperies&quot;, type)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">zigbee.add(IEEE, &quot;myproperies&quot;, type)</span></span></code></pre></div><p>Allowed types:</p><ul><li>&quot;BOOL&quot;</li><li>&quot;INT&quot;</li><li>&quot;FLOAT&quot;</li><li>&quot;STRING&quot;</li></ul><p>Example of initialisation and saving</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">local res= zigbee.add(&quot;0x00124B001F7CA144&quot;, &quot;prop_float&quot;, &quot;FLOAT&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">local res= zigbee.add(&quot;0x00124B001F7CA144&quot;, &quot;prop_bool&quot;, &quot;BOOL&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">local res= zigbee.add(&quot;0x00124B001F7CA144&quot;, &quot;prop_int&quot;, &quot;INT&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">local res= zigbee.add(&quot;0x00124B001F7CA144&quot;, &quot;prop_int&quot;, &quot;STR&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">os.save()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">local res= zigbee.add(&quot;0x00124B001F7CA144&quot;, &quot;prop_float&quot;, &quot;FLOAT&quot;)</span></span>
<span class="line"><span style="color:#24292e;">local res= zigbee.add(&quot;0x00124B001F7CA144&quot;, &quot;prop_bool&quot;, &quot;BOOL&quot;)</span></span>
<span class="line"><span style="color:#24292e;">local res= zigbee.add(&quot;0x00124B001F7CA144&quot;, &quot;prop_int&quot;, &quot;INT&quot;)</span></span>
<span class="line"><span style="color:#24292e;">local res= zigbee.add(&quot;0x00124B001F7CA144&quot;, &quot;prop_int&quot;, &quot;STR&quot;)</span></span>
<span class="line"><span style="color:#24292e;">os.save()</span></span></code></pre></div><h3 id="converting-pressure-readings-from-kpa-to-mmhg" tabindex="-1">Converting pressure readings from kPa to mmHg <a class="header-anchor" href="#converting-pressure-readings-from-kpa-to-mmhg" aria-label="Permalink to &quot;Converting pressure readings from kPa to mmHg&quot;">​</a></h3><p>You need to create a lua script that will be called when the pressure changes:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">local press = zigbee.value(tostring(Event.ieeeAddr), &quot;pressure&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">local pressmm = zigbee.value(tostring(Event.ieeeAddr), &quot;pressure_mm&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">if pressmm == null then</span></span>
<span class="line"><span style="color:#e1e4e8;">  zigbee.add(tostring(Event.ieeeAddr), &quot;pressure_mm&quot;, &quot;FLOAT&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span>
<span class="line"><span style="color:#e1e4e8;">zigbee.set(tostring(Event.ieeeAddr), &quot;pressure_mm&quot;, press * 7.5)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">local press = zigbee.value(tostring(Event.ieeeAddr), &quot;pressure&quot;)</span></span>
<span class="line"><span style="color:#24292e;">local pressmm = zigbee.value(tostring(Event.ieeeAddr), &quot;pressure_mm&quot;)</span></span>
<span class="line"><span style="color:#24292e;">if pressmm == null then</span></span>
<span class="line"><span style="color:#24292e;">  zigbee.add(tostring(Event.ieeeAddr), &quot;pressure_mm&quot;, &quot;FLOAT&quot;)</span></span>
<span class="line"><span style="color:#24292e;">end</span></span>
<span class="line"><span style="color:#24292e;">zigbee.set(tostring(Event.ieeeAddr), &quot;pressure_mm&quot;, press * 7.5)</span></span></code></pre></div><h3 id="requesting-data-from-devices-through-a-script-for-example-requesting-instant-consumption-if-the-device-itself-does-not-notify" tabindex="-1">Requesting data from devices through a script, for example, requesting instant consumption, if the device itself does not notify <a class="header-anchor" href="#requesting-data-from-devices-through-a-script-for-example-requesting-instant-consumption-if-the-device-itself-does-not-notify" aria-label="Permalink to &quot;Requesting data from devices through a script, for example, requesting instant consumption, if the device itself does not notify&quot;">​</a></h3><p>Add <code>zigbee.get(&quot;0x842E14FFFE05B8E2&quot;, &quot;power&quot;)</code> in the onemintimer.lua file where <code>0x842E14FFFE05B8E2</code> is the device identifier</p><h3 id="an-example-of-working-with-an-astrotimer" tabindex="-1">An example of working with an astrotimer <a class="header-anchor" href="#an-example-of-working-with-an-astrotimer" aria-label="Permalink to &quot;An example of working with an astrotimer&quot;">​</a></h3><p>Astrotimer is a regular timer that is tied to the sunset / sunrise cycles. Since at different latitudes the time of sunset and sunrise is different, then in such timers there is a longitude / latitude setting. Longitude / latitude parameters are set via the Web in the <em>Settings -&gt; Location</em> tab.</p><p>Astrotimer is called by the <code>OnMinTimer.lua</code> script every minute:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">local sunrise_add_min &lt;const&gt; = 15</span></span>
<span class="line"><span style="color:#e1e4e8;">local sunrise_hour, sunrise_min = os.sunrise ()</span></span>
<span class="line"><span style="color:#e1e4e8;">sunrise_min = sunrise_min + sunrise_add_min</span></span>
<span class="line"><span style="color:#e1e4e8;">if sunrise_min &gt; 59 then</span></span>
<span class="line"><span style="color:#e1e4e8;">  sunrise_hour = sunrise_hour + 1</span></span>
<span class="line"><span style="color:#e1e4e8;">  sunrise_min = sunrise_min - 60</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span>
<span class="line"><span style="color:#e1e4e8;">if Event.Time.hour == sunrise_hour and Event.Time.min == sunrise_min then</span></span>
<span class="line"><span style="color:#e1e4e8;">  print (sunrise_hour .. &quot;:&quot; .. sunrise_min)</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">local sunrise_add_min &lt;const&gt; = 15</span></span>
<span class="line"><span style="color:#24292e;">local sunrise_hour, sunrise_min = os.sunrise ()</span></span>
<span class="line"><span style="color:#24292e;">sunrise_min = sunrise_min + sunrise_add_min</span></span>
<span class="line"><span style="color:#24292e;">if sunrise_min &gt; 59 then</span></span>
<span class="line"><span style="color:#24292e;">  sunrise_hour = sunrise_hour + 1</span></span>
<span class="line"><span style="color:#24292e;">  sunrise_min = sunrise_min - 60</span></span>
<span class="line"><span style="color:#24292e;">end</span></span>
<span class="line"><span style="color:#24292e;">if Event.Time.hour == sunrise_hour and Event.Time.min == sunrise_min then</span></span>
<span class="line"><span style="color:#24292e;">  print (sunrise_hour .. &quot;:&quot; .. sunrise_min)</span></span>
<span class="line"><span style="color:#24292e;">end</span></span></code></pre></div><p>This script will print the time of dawn, 15 minutes after the onset, i.e. if dawn comes 8:55, add 15 minutes, then the script will work at 9:10. You can ask no more than 60 minutes.</p><h3 id="example-of-using-astrotimer" tabindex="-1">Example of using astrotimer <a class="header-anchor" href="#example-of-using-astrotimer" aria-label="Permalink to &quot;Example of using astrotimer&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">local sunset_add_min &lt;const&gt; = 20</span></span>
<span class="line"><span style="color:#e1e4e8;">local sunset_hour, sunset_min = os.sunset()</span></span>
<span class="line"><span style="color:#e1e4e8;">sunset_min = sunset_min + sunset_add_min</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">if sunset_min &gt; 59 then</span></span>
<span class="line"><span style="color:#e1e4e8;">  sunset_hour = sunset_hour + 1</span></span>
<span class="line"><span style="color:#e1e4e8;">  sunset_min = sunset_min - 60</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">if Event.Time.hour == sunset_hour and Event.Time.min == sunset_min then</span></span>
<span class="line"><span style="color:#e1e4e8;">  -- Turns on street light 20 minutes after sunset</span></span>
<span class="line"><span style="color:#e1e4e8;">  telegram.send (&quot;Street lights on&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">  http.request (&quot;http://192.168.2.200:8888/objects/?object=MegaD3-8&amp;op=m&amp;m=extended&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">local sunrise_add_min &lt;const&gt; = 1</span></span>
<span class="line"><span style="color:#e1e4e8;">local sunrise_hour, sunrise_min = os.sunrise ()</span></span>
<span class="line"><span style="color:#e1e4e8;">sunrise_min = sunrise_min + sunrise_add_min</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">if sunrise_min&gt; 59 then</span></span>
<span class="line"><span style="color:#e1e4e8;">  sunrise_hour = sunrise_hour + 1</span></span>
<span class="line"><span style="color:#e1e4e8;">  sunrise_min = sunrise_min - 60</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">if Event.Time.hour == sunrise_hour and Event.Time.min == sunrise_min then</span></span>
<span class="line"><span style="color:#e1e4e8;">  -- Opens the curtains after dawn</span></span>
<span class="line"><span style="color:#e1e4e8;">  telegram.send (&quot;The curtains in the living room are open&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">  zigbee.set (&quot;0x5C0272FFFEC8A21B&quot;, &quot;position&quot;, 0)</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">local sunset_add_min &lt;const&gt; = 20</span></span>
<span class="line"><span style="color:#24292e;">local sunset_hour, sunset_min = os.sunset()</span></span>
<span class="line"><span style="color:#24292e;">sunset_min = sunset_min + sunset_add_min</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">if sunset_min &gt; 59 then</span></span>
<span class="line"><span style="color:#24292e;">  sunset_hour = sunset_hour + 1</span></span>
<span class="line"><span style="color:#24292e;">  sunset_min = sunset_min - 60</span></span>
<span class="line"><span style="color:#24292e;">end</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">if Event.Time.hour == sunset_hour and Event.Time.min == sunset_min then</span></span>
<span class="line"><span style="color:#24292e;">  -- Turns on street light 20 minutes after sunset</span></span>
<span class="line"><span style="color:#24292e;">  telegram.send (&quot;Street lights on&quot;)</span></span>
<span class="line"><span style="color:#24292e;">  http.request (&quot;http://192.168.2.200:8888/objects/?object=MegaD3-8&amp;op=m&amp;m=extended&quot;)</span></span>
<span class="line"><span style="color:#24292e;">end</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">local sunrise_add_min &lt;const&gt; = 1</span></span>
<span class="line"><span style="color:#24292e;">local sunrise_hour, sunrise_min = os.sunrise ()</span></span>
<span class="line"><span style="color:#24292e;">sunrise_min = sunrise_min + sunrise_add_min</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">if sunrise_min&gt; 59 then</span></span>
<span class="line"><span style="color:#24292e;">  sunrise_hour = sunrise_hour + 1</span></span>
<span class="line"><span style="color:#24292e;">  sunrise_min = sunrise_min - 60</span></span>
<span class="line"><span style="color:#24292e;">end</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">if Event.Time.hour == sunrise_hour and Event.Time.min == sunrise_min then</span></span>
<span class="line"><span style="color:#24292e;">  -- Opens the curtains after dawn</span></span>
<span class="line"><span style="color:#24292e;">  telegram.send (&quot;The curtains in the living room are open&quot;)</span></span>
<span class="line"><span style="color:#24292e;">  zigbee.set (&quot;0x5C0272FFFEC8A21B&quot;, &quot;position&quot;, 0)</span></span>
<span class="line"><span style="color:#24292e;">end</span></span></code></pre></div><h3 id="execution-of-the-script-by-time" tabindex="-1">Execution of the script by time <a class="header-anchor" href="#execution-of-the-script-by-time" aria-label="Permalink to &quot;Execution of the script by time&quot;">​</a></h3><p>An example of completing a task at the appointed time</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">if Event.Time.hour == 15 then</span></span>
<span class="line"><span style="color:#e1e4e8;">  if Event.Time.min == 0 then</span></span>
<span class="line"><span style="color:#e1e4e8;">    -- turn on</span></span>
<span class="line"><span style="color:#e1e4e8;">  elseif Event.Time.min == 1 then</span></span>
<span class="line"><span style="color:#e1e4e8;">    -- turn off</span></span>
<span class="line"><span style="color:#e1e4e8;">  end</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">if Event.Time.hour == 15 then</span></span>
<span class="line"><span style="color:#24292e;">  if Event.Time.min == 0 then</span></span>
<span class="line"><span style="color:#24292e;">    -- turn on</span></span>
<span class="line"><span style="color:#24292e;">  elseif Event.Time.min == 1 then</span></span>
<span class="line"><span style="color:#24292e;">    -- turn off</span></span>
<span class="line"><span style="color:#24292e;">  end</span></span>
<span class="line"><span style="color:#24292e;">end</span></span></code></pre></div><h3 id="run-lua-script-from-other-script" tabindex="-1">Run lua script from other script <a class="header-anchor" href="#run-lua-script-from-other-script" aria-label="Permalink to &quot;Run lua script from other script&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">dofile(&quot;/int/test.lua&quot;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">dofile(&quot;/int/test.lua&quot;)</span></span></code></pre></div><h3 id="run-lua-script-via-http-api" tabindex="-1">Run lua script via HTTP API <a class="header-anchor" href="#run-lua-script-via-http-api" aria-label="Permalink to &quot;Run lua script via HTTP API&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">/api/scripts?action=evalFile&amp;path=/test.lua</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/api/scripts?action=evalFile&amp;path=/test.lua</span></span></code></pre></div><h3 id="run-lua-script-periodically" tabindex="-1">Run lua script periodically <a class="header-anchor" href="#run-lua-script-periodically" aria-label="Permalink to &quot;Run lua script periodically&quot;">​</a></h3><p>SLS gateway can run script periodically. To do this just create scripts with corresponding dedicated names: <code>onesectimer.lua</code>, <code>onemintimer.lua</code>.</p><p><code>onehourtimer.lua</code> - will not start by gateway, but you can simulate it using <code>onemintimer.lua</code>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">if Event.Time.min == 0 then</span></span>
<span class="line"><span style="color:#e1e4e8;">  dofile(&quot;/int/onehourtimer.lua&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">if Event.Time.min == 0 then</span></span>
<span class="line"><span style="color:#24292e;">  dofile(&quot;/int/onehourtimer.lua&quot;)</span></span>
<span class="line"><span style="color:#24292e;">end</span></span></code></pre></div><p>⚠️ <strong>Warning, periodic scripts will work after gateway reboot!!!</strong></p><h3 id="initialization-script" tabindex="-1">Initialization script <a class="header-anchor" href="#initialization-script" aria-label="Permalink to &quot;Initialization script&quot;">​</a></h3><p>При запуске системы единоразово выполняется init.lua . В нем полезно задать переменные для работы с устройством. <code>init.lua</code> is executed once on gateway starts up. It&#39;s useful to initialize common variables here.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">telegram.settoken(&quot;51778***5:AAG0bvK***&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">telegram.setchat(&quot;-3348***&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">telegram.send(&quot;SLS started!!!&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">local sunset_hour, sunset_min = os.sunset()</span></span>
<span class="line"><span style="color:#e1e4e8;">local sunrise_hour, sunrise_min = os.sunrise()</span></span>
<span class="line"><span style="color:#e1e4e8;">telegram.send(&quot;sunrise &quot; ..sunset_hour  ..&quot;:&quot;.. sunset_min )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">telegram.settoken(&quot;51778***5:AAG0bvK***&quot;)</span></span>
<span class="line"><span style="color:#24292e;">telegram.setchat(&quot;-3348***&quot;)</span></span>
<span class="line"><span style="color:#24292e;">telegram.send(&quot;SLS started!!!&quot;)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">local sunset_hour, sunset_min = os.sunset()</span></span>
<span class="line"><span style="color:#24292e;">local sunrise_hour, sunrise_min = os.sunrise()</span></span>
<span class="line"><span style="color:#24292e;">telegram.send(&quot;sunrise &quot; ..sunset_hour  ..&quot;:&quot;.. sunset_min )</span></span></code></pre></div><h2 id="useful-links" tabindex="-1">Useful links <a class="header-anchor" href="#useful-links" aria-label="Permalink to &quot;Useful links&quot;">​</a></h2><ol><li>On-line tutorial on <a href="https://zserge.wordpress.com/2012/02/23/lua-%D0%B7%D0%B0-60-%D0%BC%D0%B8%D0%BD%D1%83%D1%82/" target="_blank" rel="noreferrer">lua</a></li><li>Generator of lua scripts based on <a href="https://blockly-demo.appspot.com/static/demos/code/index.html" target="_blank" rel="noreferrer">Blockly</a></li></ol>`,145),i=[p];function c(r,u,d,h,q,y){return e(),n("div",null,i)}const b=s(o,[["render",c]]);export{m as __pageData,b as default};
