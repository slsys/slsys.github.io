import{_ as e,a as t,b as o,c as a,d as i,e as r,f as s,g as n,h as l,i as p,j as c,k as m,l as d,m as h,n as g,o as u,p as b,q as f,r as v,s as w,t as y}from"./chunks/slslog.4cbb14fb.js";import{_,o as q,c as k,Q as z}from"./chunks/framework.9b0cfcaf.js";const F=JSON.parse('{"title":"Description","description":"","frontmatter":{},"headers":[],"relativePath":"en/integrations/majordomo.md","filePath":"en/integrations/majordomo.md"}'),j={name:"en/integrations/majordomo.md"},S=z('<h1 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;Description&quot;">​</a></h1><p>Module for integrating Zigbee or BLE devices for automation systems based on <a href="https://mjdm.ru/" target="_blank" rel="noreferrer">MajorDoMo</a>. For integration, the software <a href="https://www.zigbee2mqtt.io" target="_blank" rel="noreferrer">zigbee2mqtt</a> can be used together with various versions of zigbee dongles, or the ready-made Smart Logic System (SLS) Zigbee BLE gateway. The module allows you to simultaneously work with an unlimited number of gateways or applications zigbee2mqtt, representing a mqtt client and a ready-made database of supported devices. Using the module eliminates the need for prescribing and memorizing device metrics.</p><p><img src="'+e+'" alt="home"></p><h1 id="preparatory-activities" tabindex="-1">Preparatory activities <a class="header-anchor" href="#preparatory-activities" aria-label="Permalink to &quot;Preparatory activities&quot;">​</a></h1><p>The module works through MQTT. Install mosqutto on raspberry or linux:</p><p><a href="https://robot-on.ru/articles/ystanovka-mqtt-brokera-mosquitto-raspberry-orange-pi" target="_blank" rel="noreferrer">link 1</a></p><p><a href="https://smartideal.net/ustanovka-i-zapusk-mqtt-brokera-mosquitto/" target="_blank" rel="noreferrer">link 2</a></p><p>Mosqutto for windows can be downloaded <a href="https://mosquitto.org/download/" target="_blank" rel="noreferrer">here</a></p><p>For correct work with MajorDoMo, it is necessary to install the <a href="https://connect.smartliving.ru/tasks/355.html" target="_blank" rel="noreferrer">zigbee2mqtt module</a> through the add-ons market.</p><p>After installing the mqtt broker and the add-on for MajorDomo, you need to specify the necessary settings on the Tools tab:</p><ol><li><p>mqtt server address</p></li><li><p>mqtt port</p></li><li><p>if necessary, the mqtt login and password</p></li><li><p>Subscription path - the path for subscribing the module. If you use several gateways, then each of the gateways must be specified with a comma, for example, like this:</p></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">ZigBeeCA20/#,zigbee2mqtt/#</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">ZigBeeCA20/#,zigbee2mqtt/#</span></span></code></pre></div><ol start="5"><li><p>If zigbee2mqtt is installed on the same machine natively, or through docker, you can configure the zigbee2mqtt log to be viewed by specifying the path to the application, for example /opt/zigbee2mqtt</p></li><li><p>To view the log of the SLS gateway, you must specify its ip address in the format 192.168.1.93.</p></li></ol><p>Other settings are optional.</p><p><img src="'+t+'" alt="settings"></p><p>After clicking the save button, the zigbee2mqtt cycle restarts. Its status can be viewed in XRAY on the Services tab. If necessary, it can be restarted or stopped there.</p><p>** For the module to work correctly, you need to click the Disable strict mode button on the Tools tab - this will turn off the strict mode of the MySQL server. **</p><p><img src="'+o+'" alt="settingss"></p><h1 id="adding-pairing-devices" tabindex="-1">Adding (pairing) devices <a class="header-anchor" href="#adding-pairing-devices" aria-label="Permalink to &quot;Adding (pairing) devices&quot;">​</a></h1><p>To add Zigbee devices, you must enable pairing mode on the gateway. This can be done through the Web interface of the SLS gateway, or from the MajorDomo module. The mode is switched on the Tools tab, or by clicking on &quot;Pairing [gateway_name]&quot;. When the pairing indicator is green, the gateway is ready to pair. For gateways based on Zigbee 3, the maximum allowed pairing mode time is 5 minutes.</p><p><img src="'+a+'" alt="permit"></p><p>After turning on pairing mode, you must press the reset button on the device in accordance with the instructions. You can find out how the device can be put into pairing mode in the [zigbee2mqtt] directory (<a href="https://www.zigbee2mqtt.io/information/supported_devices.html" target="_blank" rel="noreferrer">https://www.zigbee2mqtt.io/information/supported_devices.html</a>).</p><h1 id="device-management-from-the-control-panel" tabindex="-1">Device management from the control panel <a class="header-anchor" href="#device-management-from-the-control-panel" aria-label="Permalink to &quot;Device management from the control panel&quot;">​</a></h1><p>Managed devices can be given commands in the admin panel of the module for MajorDoMo. For such devices in the upper bar are the control buttons in accordance with the type of device. Clicking on the corresponding icons changes the mode.</p><p><img src="'+i+'" alt="remote"></p><p>When you click on the picture of the device, the &quot;toggle&quot; command is sent, which changes the mode to the opposite.</p><h1 id="device-management-through-applications" tabindex="-1">Device management through applications <a class="header-anchor" href="#device-management-through-applications" aria-label="Permalink to &quot;Device management through applications&quot;">​</a></h1><p>The module management interface is accessible from applications. So, having installed the application for Majordroid phones, the mode of simplicity and device management will be available through the applications.</p><p><img src="'+r+'" alt="majordroid1"><img src="'+s+'" alt="majordroid2"></p><p>Also, the permanent page of the add-on <a href="http://192.168.1.39/module/zigbee2mqtt.html" target="_blank" rel="noreferrer">http: /ipaddr/module/zigbee2mqtt.html</a> can be set in the browser or your home page.</p><p><img src="'+n+'" alt="app"></p><p>You can also control devices from here. The link to this page can be set as the home page on a wall-mounted tablet or similar device on the home network.</p><p><img src="'+l+'" alt="app2"></p><h1 id="binding-devices-to-objects" tabindex="-1">Binding devices to objects <a class="header-anchor" href="#binding-devices-to-objects" aria-label="Permalink to &quot;Binding devices to objects&quot;">​</a></h1><p>The zigbee2mqtt add-on is integrated for integration with <a href="https://kb.mjdm.ru/devices_help/" target="_blank" rel="noreferrer">&quot;Simple devices&quot;</a> MajorDoMo. Through the “Simple devices” tab in the admin panel, you need to select and add a device that is meaningful to the system (for example, “Motion Sensor” or “Controlled Relay”)</p><p><img src="'+p+'" alt="sd1"><img src="'+c+'" alt="sd2"> After adding it, you need to find out and remember the name of the associated object: <img src="'+m+'" alt="sd2"></p><p>Now, in the admin panel of the zigbee2mqtt module, you need to find the desired device and go to the &quot;Data&quot; tab: <img src="'+d+'" alt="sd2"></p><p>Select the appropriate device metric: ![sd2] (/img/sd4.png) And bind the previously created object as in the picture: <img src="'+h+'" alt="sd2"><img src="'+g+'" alt="sd2"></p><p>Your device’s metrics are now linked to MajorDoMo’s logic. Your device’s metrics are now linked to MajorDoMo’s logic. You can receive appropriate notifications, configure reactions, manage devices using the available tools, including using <a href="https://kb.mjdm.ru/category/oborudovanie/golosovoe-upravlenie-umnim-domom-majordomo/" target="_blank" rel="noreferrer">voice commands</a></p><p>** Please note that click, command, etc. metrics received from remote controls. turn around. This allows you to use different settings for the supported commands (double tap, double tap, long press, etc.). You need to bind the necessary command, for example single (double, long) instead of the click metric. If you bind click to the desired action, the event will be executed for each action (click, release, etc.). <img src="'+u+'" alt="sd8"></p><p>** It is also worth noting that for &quot;Simple devices&quot; such as relays, dimmers, etc. it is better to bind the switch method, then the control logic will be respected. For sensors, you must bind the appropriate metrics. **</p><p>** Attention!!! The simultaneous binding of a method and a property for buttons will cause a double trigger.</p><h1 id="groups" tabindex="-1">Groups <a class="header-anchor" href="#groups" aria-label="Permalink to &quot;Groups&quot;">​</a></h1><p>Grouping devices allows devices to subscribe to group commands, thereby eliminating the need for a user or home automation system to send commands to each device. Also, the response time of devices is much faster than cyclic sending.</p><p>Adding devices to groups is done from the Edit Device tab. You can create a new group or choose from the existing ones.</p><p><img src="'+b+'" alt="gr"></p><p>Then, according to the zigbee2mqtt protocol, a new device is created with the group name. By sending one command to a group, you can change the operation mode of all devices included in it.</p><p>The zigbee protocol provides for device support in multiple groups. You can re-read the list of groups where the device belongs from the Parameters tab</p><p><img src="'+f+'" alt="gr2"></p><p>In the admin panel, you can select the &quot;only groups&quot; display mode. <img src="'+v+'" alt="gr2"></p><h1 id="touchlink" tabindex="-1">TouchLink <a class="header-anchor" href="#touchlink" aria-label="Permalink to &quot;TouchLink&quot;">​</a></h1><p>The zigbee protocol provides device management without a coordinator. TouchLink technology allows you to create a separate zigbee network between two devices. For communication supporting technology devices, you should familiarize yourself with the documentation. Ikea stores sell Tradfri lamp and remote control kits that support this pairing. Usually to pair the lamp and the remote control, you need to bring the remote control to the included light and press the pairing button. After some time, the lamp will blink with increasing frequency. After some time, the blinking will stop, the devices will need to create their own network and register for device events.</p><p>#Binding The zigbee protocol also provides settings for device communications with the coordinator. This technology is called Binding. It allows you to similarly sign some devices (lamps) to others (remotes, sensors), only configuration is done through the coordinator. This allows you to fine-tune communications without creating a separate zigbee network.</p><h1 id="view-zigbee2mqtt-or-sls-zgw-logs" tabindex="-1">View zigbee2mqtt or SLS ZGW logs <a class="header-anchor" href="#view-zigbee2mqtt-or-sls-zgw-logs" aria-label="Permalink to &quot;View zigbee2mqtt or SLS ZGW logs&quot;">​</a></h1><p>In addition to MajorDoMo, you can view the log file of the software gateway. If zigbee2mqtt is installed on the same server where MajorDoMo is installed, you need to specify the path where zigbee2mqtt is installed on the Settings tab in the Folder path field. The default instructions are installed in the / opt / zigbee2mqtt folder. As a result, viewing the zigbee2mqtt log file becomes available.</p><p><img src="'+w+'" alt="z2mlog"></p><p>For the SLS hardware gateway in proxy mode, viewing the operation log is available. It is necessary to specify the IP address of the gateway on the Settings tab in the SLS ZGW IP adress field. View is available on the SLS log tab.</p><p><img src="'+y+`" alt="slslog"></p><h1 id="example-majoromo-script-to-reboot-the-gateway" tabindex="-1">Example Majoromo script to reboot the gateway <a class="header-anchor" href="#example-majoromo-script-to-reboot-the-gateway" aria-label="Permalink to &quot;Example Majoromo script to reboot the gateway&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">include_once (DIR_MODULES. &#39;zigbee2mqtt/zigbee2mqtt.class.php&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">$ z2m = new zigbee2mqtt ();</span></span>
<span class="line"><span style="color:#e1e4e8;">$ z2m-&gt; sendcommand (&#39;ZigBeeXXXX/reboot&#39;, &#39;&#39;);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">include_once (DIR_MODULES. &#39;zigbee2mqtt/zigbee2mqtt.class.php&#39;);</span></span>
<span class="line"><span style="color:#24292e;">$ z2m = new zigbee2mqtt ();</span></span>
<span class="line"><span style="color:#24292e;">$ z2m-&gt; sendcommand (&#39;ZigBeeXXXX/reboot&#39;, &#39;&#39;);</span></span></code></pre></div><h1 id="an-example-of-a-majoromo-script-for-installing-the-backlight-of-a-modernized-aqara-gateway" tabindex="-1">An example of a Majoromo script for installing the backlight of a modernized Aqara gateway <a class="header-anchor" href="#an-example-of-a-majoromo-script-for-installing-the-backlight-of-a-modernized-aqara-gateway" aria-label="Permalink to &quot;An example of a Majoromo script for installing the backlight of a modernized Aqara gateway&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">include_once (DIR_MODULES. &#39;zigbee2mqtt/zigbee2mqtt.class.php&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">$ z2m = new zigbee2mqtt ();</span></span>
<span class="line"><span style="color:#e1e4e8;">$ z2m-&gt; sendcommand (&#39;ZigBeeXXXX/led&#39;, &#39;{“mode”: ”manual”, ”hex”: ”# FF0000”}&#39;);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">include_once (DIR_MODULES. &#39;zigbee2mqtt/zigbee2mqtt.class.php&#39;);</span></span>
<span class="line"><span style="color:#24292e;">$ z2m = new zigbee2mqtt ();</span></span>
<span class="line"><span style="color:#24292e;">$ z2m-&gt; sendcommand (&#39;ZigBeeXXXX/led&#39;, &#39;{“mode”: ”manual”, ”hex”: ”# FF0000”}&#39;);</span></span></code></pre></div><h1 id="useful-links" tabindex="-1">Useful links <a class="header-anchor" href="#useful-links" aria-label="Permalink to &quot;Useful links&quot;">​</a></h1><p>Link to an interesting thematic channel in telegrams: <a href="https://t.me/zigbeer" target="_blank" rel="noreferrer">https://t.me/zigbeer</a></p><p>Link to the zigbee2mqtt module repository: <a href="http://github.com/directman66/majordomo-zigbee2mqtt/" target="_blank" rel="noreferrer">http://github.com/directman66/majordomo-zigbee2mqtt/</a></p><p>Topics for managing devices through mqtt <a href="https://www.zigbee2mqtt.io/integration/home_assistant.html" target="_blank" rel="noreferrer">https://www.zigbee2mqtt.io/integration/home_assistant.html</a></p><p>Topics for gateway management through mqtt <a href="https://www.zigbee2mqtt.io/information/mqtt_topics_and_message_structure.html#zigbee2mqttbridgelog" target="_blank" rel="noreferrer">https://www.zigbee2mqtt.io/information/mqtt_topics_and_message_structure.html#zigbee2mqttbridgelog</a></p>`,67),T=[S];function x(M,D,A,P,I,L){return q(),k("div",null,T)}const Z=_(j,[["render",x]]);export{F as __pageData,Z as default};
