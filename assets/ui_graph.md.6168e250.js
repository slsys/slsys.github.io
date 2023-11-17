import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.f1c0562b.js";const p="/assets/graph.b0c4d7ba.jpg",o="/assets/highcharts.a64c50f0.png",h=JSON.parse('{"title":"Отрисовка графиков через UI","description":"","frontmatter":{},"headers":[],"relativePath":"ui_graph.md","filePath":"ui_graph.md"}'),t={name:"ui_graph.md"},e=l('<h1 id="отрисовка-графиков-через-ui" tabindex="-1">Отрисовка графиков через UI <a class="header-anchor" href="#отрисовка-графиков-через-ui" aria-label="Permalink to &quot;Отрисовка графиков через UI&quot;">​</a></h1><p>SLS с помощью библиотек позволяет отобразить график изменений параметров. Для сохранения значений требуется <a href="https://github.com/slsys/Gateway/blob/master/samples_rus.md#%D1%81%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B9-%D0%B2-json-%D1%87%D0%B5%D1%80%D0%B5%D0%B7-lua" target="_blank" rel="noreferrer">периодическая запись значений</a> на карту памяти (рекомендуется) или во внутренюю память.</p><h2 id="пример-и-использованием-бибоиотеки-chart-js" tabindex="-1">Пример и использованием бибоиотеки <a href="https://www.chartjs.org/" target="_blank" rel="noreferrer">chart.js</a> <a class="header-anchor" href="#пример-и-использованием-бибоиотеки-chart-js" aria-label="Permalink to &quot;Пример и использованием бибоиотеки [chart.js](https://www.chartjs.org/)&quot;">​</a></h2><p><img src="'+p+`" alt="График"></p><p>Сохраните файл с именем ui.html:</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">&lt;html&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">link rel</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;icon&quot; </span><span style="color:#E1E4E8;">type</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;image/png&quot; </span><span style="color:#E1E4E8;">href</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;/favicon.png&quot;</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">script src</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;https://cdn.jsdelivr.net/npm/chart.js&quot;</span><span style="color:#F97583;">&gt;&lt;/</span><span style="color:#E1E4E8;">script</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">script</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">meta charset</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;utf-8&quot;</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">meta name</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;viewport&quot; </span><span style="color:#E1E4E8;">content</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;width=device-width,</span></span>
<span class="line"><span style="color:#E1E4E8;">								initial</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">scale</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">1</span><span style="color:#9ECBFF;">&quot;&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">script src</span><span style="color:#F97583;">=</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;https://cdn.jsdelivr.net/npm/chart.js@latest/dist/Chart.min.js&quot;</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">script</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">&lt;title&gt;</span><span style="color:#E1E4E8;">SLS OpenTherm graph</span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">title</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">head</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">&lt;body&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">canvas id</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;bar-chart&quot; </span><span style="color:#E1E4E8;">width</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;800&quot; </span><span style="color:#E1E4E8;">height</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;350&quot;</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">canvas</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">&lt;script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">getData</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#85E89D;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getData</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">var today </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> new </span><span style="color:#79B8FF;">Date</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">var dd </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">String</span><span style="color:#E1E4E8;">(today.</span><span style="color:#79B8FF;">getDate</span><span style="color:#E1E4E8;">()).</span><span style="color:#79B8FF;">padStart</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;0&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">var mm </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">String</span><span style="color:#E1E4E8;">(today.</span><span style="color:#79B8FF;">getMonth</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">).</span><span style="color:#79B8FF;">padStart</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;0&#39;</span><span style="color:#E1E4E8;">); </span><span style="color:#F97583;">//</span><span style="color:#E1E4E8;">January is </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">!</span></span>
<span class="line"><span style="color:#E1E4E8;">var yyyy </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> today.</span><span style="color:#79B8FF;">getFullYear</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">logfile </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;!log_&#39;</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">dd </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;_&#39; </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> mm </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;_&#39; </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> yyyy</span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;">&#39;.json&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">//</span><span style="color:#E1E4E8;">var logfile</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;!log_13_12_2022.json&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">              const response </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> await </span><span style="color:#79B8FF;">fetch</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/api/storage?path=/sd/&#39;</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">logfile);</span></span>
<span class="line"><span style="color:#E1E4E8;">             console.</span><span style="color:#79B8FF;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;------&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">			console.</span><span style="color:#79B8FF;">log</span><span style="color:#E1E4E8;">(response);</span></span>
<span class="line"><span style="color:#E1E4E8;">			const data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> await response.</span><span style="color:#79B8FF;">json</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">			console.</span><span style="color:#79B8FF;">log</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#79B8FF;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;------&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">			length </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> data.</span><span style="color:#B392F0;">temp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#79B8FF;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;------&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">			console.</span><span style="color:#79B8FF;">log</span><span style="color:#E1E4E8;">(length);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">			labels </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">			ul_ot </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">            new_ust </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">            new_ds18 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">            ul_bt </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">            new_dhwt </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">   			average_temp </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">            dhwt_status </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">            flame_status </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> length; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">//</span><span style="color:#E1E4E8;">				labels.</span><span style="color:#79B8FF;">push</span><span style="color:#E1E4E8;">(data.</span><span style="color:#B392F0;">temp</span><span style="color:#E1E4E8;">[i].</span><span style="color:#B392F0;">datetime</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">                labels.</span><span style="color:#79B8FF;">push</span><span style="color:#E1E4E8;">(data.</span><span style="color:#B392F0;">temp</span><span style="color:#E1E4E8;">[i].</span><span style="color:#B392F0;">ctimesh</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">				ul_ot.</span><span style="color:#79B8FF;">push</span><span style="color:#E1E4E8;">(data.</span><span style="color:#B392F0;">temp</span><span style="color:#E1E4E8;">[i].</span><span style="color:#B392F0;">ul_ot</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">                new_ds18.</span><span style="color:#79B8FF;">push</span><span style="color:#E1E4E8;">(data.</span><span style="color:#B392F0;">temp</span><span style="color:#E1E4E8;">[i].</span><span style="color:#B392F0;">new_ds18</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">                new_ust.</span><span style="color:#79B8FF;">push</span><span style="color:#E1E4E8;">(data.</span><span style="color:#B392F0;">temp</span><span style="color:#E1E4E8;">[i].</span><span style="color:#B392F0;">new_ust</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">                new_dhwt.</span><span style="color:#79B8FF;">push</span><span style="color:#E1E4E8;">(data.</span><span style="color:#B392F0;">temp</span><span style="color:#E1E4E8;">[i].</span><span style="color:#B392F0;">new_dhwt</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">                ul_bt.</span><span style="color:#79B8FF;">push</span><span style="color:#E1E4E8;">(data.</span><span style="color:#B392F0;">temp</span><span style="color:#E1E4E8;">[i].</span><span style="color:#B392F0;">ul_bt</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">                average_temp.</span><span style="color:#79B8FF;">push</span><span style="color:#E1E4E8;">(data.</span><span style="color:#B392F0;">temp</span><span style="color:#E1E4E8;">[i].</span><span style="color:#B392F0;">average_temp</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">                dhwt_status.</span><span style="color:#79B8FF;">push</span><span style="color:#E1E4E8;">(data.</span><span style="color:#B392F0;">temp</span><span style="color:#E1E4E8;">[i].</span><span style="color:#B392F0;">dhwt_status</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">                flame_status.</span><span style="color:#79B8FF;">push</span><span style="color:#E1E4E8;">(data.</span><span style="color:#B392F0;">temp</span><span style="color:#E1E4E8;">[i].</span><span style="color:#B392F0;">flame_status</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span></span>
<span class="line"><span style="color:#E1E4E8;">                </span></span>
<span class="line"><span style="color:#E1E4E8;">			}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">			new </span><span style="color:#79B8FF;">Chart</span><span style="color:#E1E4E8;">(document.</span><span style="color:#79B8FF;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;bar-chart&quot;</span><span style="color:#E1E4E8;">), {</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#79B8FF;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;line&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">					</span><span style="color:#B392F0;">labels</span><span style="color:#E1E4E8;">: labels,</span></span>
<span class="line"><span style="color:#E1E4E8;">					</span><span style="color:#B392F0;">datasets</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">						{</span></span>
<span class="line"><span style="color:#E1E4E8;">							</span><span style="color:#B392F0;">label</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Уличная температура OT&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                             </span><span style="color:#B392F0;">backgroundColor</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;#3e95cd&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">							 </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">: ul_ot</span></span>
<span class="line"><span style="color:#E1E4E8;">                  </span></span>
<span class="line"><span style="color:#E1E4E8;">						},</span></span>
<span class="line"><span style="color:#E1E4E8;">                        	{</span></span>
<span class="line"><span style="color:#E1E4E8;">							</span><span style="color:#B392F0;">label</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Уставка&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                            </span><span style="color:#B392F0;">backgroundColor</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;#8e5ea2&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">							</span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">: new_ust</span></span>
<span class="line"><span style="color:#E1E4E8;">                  </span></span>
<span class="line"><span style="color:#E1E4E8;">						},	</span></span>
<span class="line"><span style="color:#E1E4E8;">                           {</span></span>
<span class="line"><span style="color:#E1E4E8;">							</span><span style="color:#B392F0;">label</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Температура теплоносителя&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                            </span><span style="color:#B392F0;">backgroundColor</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;#c45850&quot;</span><span style="color:#E1E4E8;">],                           </span></span>
<span class="line"><span style="color:#E1E4E8;">							</span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">: ul_bt</span></span>
<span class="line"><span style="color:#E1E4E8;">                  </span></span>
<span class="line"><span style="color:#E1E4E8;">						},</span></span>
<span class="line"><span style="color:#E1E4E8;">                        {</span></span>
<span class="line"><span style="color:#E1E4E8;">							</span><span style="color:#B392F0;">label</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Средняя температура в доме&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                            </span><span style="color:#B392F0;">backgroundColor</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;#eeebc9&quot;</span><span style="color:#E1E4E8;">],							</span></span>
<span class="line"><span style="color:#E1E4E8;">                            </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">: average_temp</span></span>
<span class="line"><span style="color:#E1E4E8;">                  </span></span>
<span class="line"><span style="color:#E1E4E8;">						},</span></span>
<span class="line"><span style="color:#E1E4E8;">                          {</span></span>
<span class="line"><span style="color:#E1E4E8;">							</span><span style="color:#B392F0;">label</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Температура бойлера&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                            </span><span style="color:#B392F0;">backgroundColor</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;#e8c3b9&quot;</span><span style="color:#E1E4E8;">],							</span></span>
<span class="line"><span style="color:#E1E4E8;">                            </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">: new_dhwt</span></span>
<span class="line"><span style="color:#E1E4E8;">                  </span></span>
<span class="line"><span style="color:#E1E4E8;">						},</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span></span>
<span class="line"><span style="color:#E1E4E8;">                        {</span></span>
<span class="line"><span style="color:#E1E4E8;">							</span><span style="color:#B392F0;">label</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Нагрев бойлера&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                            </span><span style="color:#B392F0;">backgroundColor</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;#14bfbf&quot;</span><span style="color:#E1E4E8;">], </span></span>
<span class="line"><span style="color:#E1E4E8;">                            </span><span style="color:#79B8FF;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;bar&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">							</span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">: dhwt_status</span></span>
<span class="line"><span style="color:#E1E4E8;">                  </span></span>
<span class="line"><span style="color:#E1E4E8;">						},</span></span>
<span class="line"><span style="color:#E1E4E8;">                         {</span></span>
<span class="line"><span style="color:#E1E4E8;">							</span><span style="color:#B392F0;">label</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Включена горелка&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                            </span><span style="color:#B392F0;">backgroundColor</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;#11bf4f&quot;</span><span style="color:#E1E4E8;">], </span></span>
<span class="line"><span style="color:#E1E4E8;">                            </span><span style="color:#79B8FF;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;bar&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">							</span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">: flame_status</span></span>
<span class="line"><span style="color:#E1E4E8;">                  </span></span>
<span class="line"><span style="color:#E1E4E8;">						},</span></span>
<span class="line"><span style="color:#E1E4E8;">                        {</span></span>
<span class="line"><span style="color:#E1E4E8;">							</span><span style="color:#B392F0;">label</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Уличная ds18b2&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                            </span><span style="color:#B392F0;">backgroundColor</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;#11bfbf&quot;</span><span style="color:#E1E4E8;">],                            </span></span>
<span class="line"><span style="color:#E1E4E8;">							</span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">: new_ds18</span></span>
<span class="line"><span style="color:#E1E4E8;">                  </span></span>
<span class="line"><span style="color:#E1E4E8;">						}</span></span>
<span class="line"><span style="color:#E1E4E8;">					]</span></span>
<span class="line"><span style="color:#E1E4E8;">				},</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#B392F0;">options</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">					</span><span style="color:#B392F0;">legend</span><span style="color:#E1E4E8;">: { </span><span style="color:#B392F0;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">					</span><span style="color:#B392F0;">title</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">						</span><span style="color:#B392F0;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">						</span><span style="color:#B392F0;">text</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;SLS OpenTherm graph&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">					}</span></span>
<span class="line"><span style="color:#E1E4E8;">				}</span></span>
<span class="line"><span style="color:#E1E4E8;">			});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">		}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">script</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">body</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">html</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">&lt;html&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">link rel</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;icon&quot; </span><span style="color:#24292E;">type</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;image/png&quot; </span><span style="color:#24292E;">href</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;/favicon.png&quot;</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">script src</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;https://cdn.jsdelivr.net/npm/chart.js&quot;</span><span style="color:#D73A49;">&gt;&lt;/</span><span style="color:#24292E;">script</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">script</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">meta charset</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;utf-8&quot;</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">meta name</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;viewport&quot; </span><span style="color:#24292E;">content</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;width=device-width,</span></span>
<span class="line"><span style="color:#24292E;">								initial</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">scale</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">1</span><span style="color:#032F62;">&quot;&gt;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">script src</span><span style="color:#D73A49;">=</span></span>
<span class="line"><span style="color:#032F62;">&quot;https://cdn.jsdelivr.net/npm/chart.js@latest/dist/Chart.min.js&quot;</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">script</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">&lt;title&gt;</span><span style="color:#24292E;">SLS OpenTherm graph</span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">title</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">head</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">&lt;body&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">canvas id</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;bar-chart&quot; </span><span style="color:#24292E;">width</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;800&quot; </span><span style="color:#24292E;">height</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;350&quot;</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">canvas</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">&lt;script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">getData</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        </span></span>
<span class="line"><span style="color:#24292E;">        </span></span>
<span class="line"><span style="color:#24292E;">        </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#22863A;">async</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getData</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        </span></span>
<span class="line"><span style="color:#24292E;">var today </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> new </span><span style="color:#005CC5;">Date</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">var dd </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">String</span><span style="color:#24292E;">(today.</span><span style="color:#005CC5;">getDate</span><span style="color:#24292E;">()).</span><span style="color:#005CC5;">padStart</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;0&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">var mm </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">String</span><span style="color:#24292E;">(today.</span><span style="color:#005CC5;">getMonth</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">).</span><span style="color:#005CC5;">padStart</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;0&#39;</span><span style="color:#24292E;">); </span><span style="color:#D73A49;">//</span><span style="color:#24292E;">January is </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">!</span></span>
<span class="line"><span style="color:#24292E;">var yyyy </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> today.</span><span style="color:#005CC5;">getFullYear</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">logfile </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;!log_&#39;</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">dd </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;_&#39; </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> mm </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;_&#39; </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> yyyy</span><span style="color:#D73A49;">+</span><span style="color:#032F62;">&#39;.json&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">//</span><span style="color:#24292E;">var logfile</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;!log_13_12_2022.json&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span></span>
<span class="line"><span style="color:#24292E;">        </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">              const response </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> await </span><span style="color:#005CC5;">fetch</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/api/storage?path=/sd/&#39;</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">logfile);</span></span>
<span class="line"><span style="color:#24292E;">             console.</span><span style="color:#005CC5;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;------&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">			console.</span><span style="color:#005CC5;">log</span><span style="color:#24292E;">(response);</span></span>
<span class="line"><span style="color:#24292E;">			const data </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> await response.</span><span style="color:#005CC5;">json</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">			console.</span><span style="color:#005CC5;">log</span><span style="color:#24292E;">(data);</span></span>
<span class="line"><span style="color:#24292E;">            console.</span><span style="color:#005CC5;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;------&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">			length </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> data.</span><span style="color:#6F42C1;">temp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">length</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            console.</span><span style="color:#005CC5;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;------&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">			console.</span><span style="color:#005CC5;">log</span><span style="color:#24292E;">(length);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">			labels </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">			ul_ot </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">            new_ust </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">            new_ds18 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">            ul_bt </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">            new_dhwt </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">   			average_temp </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">            dhwt_status </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">            flame_status </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">            </span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> length; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">//</span><span style="color:#24292E;">				labels.</span><span style="color:#005CC5;">push</span><span style="color:#24292E;">(data.</span><span style="color:#6F42C1;">temp</span><span style="color:#24292E;">[i].</span><span style="color:#6F42C1;">datetime</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">                labels.</span><span style="color:#005CC5;">push</span><span style="color:#24292E;">(data.</span><span style="color:#6F42C1;">temp</span><span style="color:#24292E;">[i].</span><span style="color:#6F42C1;">ctimesh</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">				ul_ot.</span><span style="color:#005CC5;">push</span><span style="color:#24292E;">(data.</span><span style="color:#6F42C1;">temp</span><span style="color:#24292E;">[i].</span><span style="color:#6F42C1;">ul_ot</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">                new_ds18.</span><span style="color:#005CC5;">push</span><span style="color:#24292E;">(data.</span><span style="color:#6F42C1;">temp</span><span style="color:#24292E;">[i].</span><span style="color:#6F42C1;">new_ds18</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">                new_ust.</span><span style="color:#005CC5;">push</span><span style="color:#24292E;">(data.</span><span style="color:#6F42C1;">temp</span><span style="color:#24292E;">[i].</span><span style="color:#6F42C1;">new_ust</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">                new_dhwt.</span><span style="color:#005CC5;">push</span><span style="color:#24292E;">(data.</span><span style="color:#6F42C1;">temp</span><span style="color:#24292E;">[i].</span><span style="color:#6F42C1;">new_dhwt</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">                ul_bt.</span><span style="color:#005CC5;">push</span><span style="color:#24292E;">(data.</span><span style="color:#6F42C1;">temp</span><span style="color:#24292E;">[i].</span><span style="color:#6F42C1;">ul_bt</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">                average_temp.</span><span style="color:#005CC5;">push</span><span style="color:#24292E;">(data.</span><span style="color:#6F42C1;">temp</span><span style="color:#24292E;">[i].</span><span style="color:#6F42C1;">average_temp</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">                dhwt_status.</span><span style="color:#005CC5;">push</span><span style="color:#24292E;">(data.</span><span style="color:#6F42C1;">temp</span><span style="color:#24292E;">[i].</span><span style="color:#6F42C1;">dhwt_status</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">                flame_status.</span><span style="color:#005CC5;">push</span><span style="color:#24292E;">(data.</span><span style="color:#6F42C1;">temp</span><span style="color:#24292E;">[i].</span><span style="color:#6F42C1;">flame_status</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">          </span></span>
<span class="line"><span style="color:#24292E;">                </span></span>
<span class="line"><span style="color:#24292E;">			}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">			new </span><span style="color:#005CC5;">Chart</span><span style="color:#24292E;">(document.</span><span style="color:#005CC5;">getElementById</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;bar-chart&quot;</span><span style="color:#24292E;">), {</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#005CC5;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;line&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">					</span><span style="color:#6F42C1;">labels</span><span style="color:#24292E;">: labels,</span></span>
<span class="line"><span style="color:#24292E;">					</span><span style="color:#6F42C1;">datasets</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">						{</span></span>
<span class="line"><span style="color:#24292E;">							</span><span style="color:#6F42C1;">label</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Уличная температура OT&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                             </span><span style="color:#6F42C1;">backgroundColor</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;#3e95cd&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">							 </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">: ul_ot</span></span>
<span class="line"><span style="color:#24292E;">                  </span></span>
<span class="line"><span style="color:#24292E;">						},</span></span>
<span class="line"><span style="color:#24292E;">                        	{</span></span>
<span class="line"><span style="color:#24292E;">							</span><span style="color:#6F42C1;">label</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Уставка&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                            </span><span style="color:#6F42C1;">backgroundColor</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;#8e5ea2&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">							</span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">: new_ust</span></span>
<span class="line"><span style="color:#24292E;">                  </span></span>
<span class="line"><span style="color:#24292E;">						},	</span></span>
<span class="line"><span style="color:#24292E;">                           {</span></span>
<span class="line"><span style="color:#24292E;">							</span><span style="color:#6F42C1;">label</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Температура теплоносителя&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                            </span><span style="color:#6F42C1;">backgroundColor</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;#c45850&quot;</span><span style="color:#24292E;">],                           </span></span>
<span class="line"><span style="color:#24292E;">							</span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">: ul_bt</span></span>
<span class="line"><span style="color:#24292E;">                  </span></span>
<span class="line"><span style="color:#24292E;">						},</span></span>
<span class="line"><span style="color:#24292E;">                        {</span></span>
<span class="line"><span style="color:#24292E;">							</span><span style="color:#6F42C1;">label</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Средняя температура в доме&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                            </span><span style="color:#6F42C1;">backgroundColor</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;#eeebc9&quot;</span><span style="color:#24292E;">],							</span></span>
<span class="line"><span style="color:#24292E;">                            </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">: average_temp</span></span>
<span class="line"><span style="color:#24292E;">                  </span></span>
<span class="line"><span style="color:#24292E;">						},</span></span>
<span class="line"><span style="color:#24292E;">                          {</span></span>
<span class="line"><span style="color:#24292E;">							</span><span style="color:#6F42C1;">label</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Температура бойлера&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                            </span><span style="color:#6F42C1;">backgroundColor</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;#e8c3b9&quot;</span><span style="color:#24292E;">],							</span></span>
<span class="line"><span style="color:#24292E;">                            </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">: new_dhwt</span></span>
<span class="line"><span style="color:#24292E;">                  </span></span>
<span class="line"><span style="color:#24292E;">						},</span></span>
<span class="line"><span style="color:#24292E;">                        </span></span>
<span class="line"><span style="color:#24292E;">                        {</span></span>
<span class="line"><span style="color:#24292E;">							</span><span style="color:#6F42C1;">label</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Нагрев бойлера&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                            </span><span style="color:#6F42C1;">backgroundColor</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;#14bfbf&quot;</span><span style="color:#24292E;">], </span></span>
<span class="line"><span style="color:#24292E;">                            </span><span style="color:#005CC5;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;bar&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">							</span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">: dhwt_status</span></span>
<span class="line"><span style="color:#24292E;">                  </span></span>
<span class="line"><span style="color:#24292E;">						},</span></span>
<span class="line"><span style="color:#24292E;">                         {</span></span>
<span class="line"><span style="color:#24292E;">							</span><span style="color:#6F42C1;">label</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Включена горелка&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                            </span><span style="color:#6F42C1;">backgroundColor</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;#11bf4f&quot;</span><span style="color:#24292E;">], </span></span>
<span class="line"><span style="color:#24292E;">                            </span><span style="color:#005CC5;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;bar&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">							</span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">: flame_status</span></span>
<span class="line"><span style="color:#24292E;">                  </span></span>
<span class="line"><span style="color:#24292E;">						},</span></span>
<span class="line"><span style="color:#24292E;">                        {</span></span>
<span class="line"><span style="color:#24292E;">							</span><span style="color:#6F42C1;">label</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Уличная ds18b2&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                            </span><span style="color:#6F42C1;">backgroundColor</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;#11bfbf&quot;</span><span style="color:#24292E;">],                            </span></span>
<span class="line"><span style="color:#24292E;">							</span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">: new_ds18</span></span>
<span class="line"><span style="color:#24292E;">                  </span></span>
<span class="line"><span style="color:#24292E;">						}</span></span>
<span class="line"><span style="color:#24292E;">					]</span></span>
<span class="line"><span style="color:#24292E;">				},</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#6F42C1;">options</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">					</span><span style="color:#6F42C1;">legend</span><span style="color:#24292E;">: { </span><span style="color:#6F42C1;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">					</span><span style="color:#6F42C1;">title</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">						</span><span style="color:#6F42C1;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">						</span><span style="color:#6F42C1;">text</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;SLS OpenTherm graph&#39;</span></span>
<span class="line"><span style="color:#24292E;">					}</span></span>
<span class="line"><span style="color:#24292E;">				}</span></span>
<span class="line"><span style="color:#24292E;">			});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">script</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">body</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">html</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h2 id="пример-с-использованием-библиотеки-highcharts" tabindex="-1">Пример с использованием библиотеки <a href="https://www.highcharts.com/" target="_blank" rel="noreferrer">highcharts</a> <a class="header-anchor" href="#пример-с-использованием-библиотеки-highcharts" aria-label="Permalink to &quot;Пример с использованием библиотеки [highcharts](https://www.highcharts.com/)&quot;">​</a></h2><p>Пример позволяет проводить масштабирование графика.</p><p><img src="`+o+`" alt="График highcharts"></p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">&lt;html&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">meta http</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">equiv</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;Content-Type&quot; </span><span style="color:#E1E4E8;">content</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;text/html; charset=utf-8&quot;</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">&lt;title&gt;</span><span style="color:#E1E4E8;">SLS OpenTherm graphics привет</span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">title</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">script src </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js&quot;</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">script</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">script src </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;https://code.highcharts.com/highcharts.js&quot;</span><span style="color:#F97583;">&gt;&lt;/</span><span style="color:#E1E4E8;">script</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">head</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">div id </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;container&quot; </span><span style="color:#E1E4E8;">style </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;height: 100%; margin: 0 auto&quot;</span><span style="color:#F97583;">&gt;&lt;/</span><span style="color:#E1E4E8;">div</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">script language </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;JavaScript&quot;</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">         $(document).</span><span style="color:#79B8FF;">ready</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span></span>
<span class="line"><span style="color:#E1E4E8;">         var today </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> new </span><span style="color:#79B8FF;">Date</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  		 var dd </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">String</span><span style="color:#E1E4E8;">(today.</span><span style="color:#79B8FF;">getDate</span><span style="color:#E1E4E8;">()).</span><span style="color:#79B8FF;">padStart</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;0&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">		 var mm </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">String</span><span style="color:#E1E4E8;">(today.</span><span style="color:#79B8FF;">getMonth</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">).</span><span style="color:#79B8FF;">padStart</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;0&#39;</span><span style="color:#E1E4E8;">); </span><span style="color:#F97583;">//</span><span style="color:#E1E4E8;">January is </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">!</span></span>
<span class="line"><span style="color:#E1E4E8;">		 var yyyy </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> today.</span><span style="color:#79B8FF;">getFullYear</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      logfile </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;!log_&#39;</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">dd </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;_&#39; </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> mm </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;_&#39; </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> yyyy</span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;">&#39;.json&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      let xhr </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> new </span><span style="color:#79B8FF;">XMLHttpRequest</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      var filename</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;/api/storage?path=/sd/&#39;</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">logfile;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      xhr.</span><span style="color:#B392F0;">responseType</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;json&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      xhr.</span><span style="color:#79B8FF;">open</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;GET&#39;</span><span style="color:#E1E4E8;">, filename);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3.</span><span style="color:#E1E4E8;"> Отсылаем запрос</span></span>
<span class="line"><span style="color:#E1E4E8;">xhr.</span><span style="color:#79B8FF;">send</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">4.</span><span style="color:#E1E4E8;"> Этот код сработает после того, как мы получим ответ сервера</span></span>
<span class="line"><span style="color:#E1E4E8;">xhr.</span><span style="color:#B392F0;">onload</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (xhr.</span><span style="color:#B392F0;">status</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">) { </span><span style="color:#F97583;">//</span><span style="color:#E1E4E8;"> анализируем HTTP</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">статус ответа, если статус не </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">, то произошла ошибка</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">alert</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`Ошибка \${xhr.status}: \${xhr.statusText}\`</span><span style="color:#E1E4E8;">); </span><span style="color:#F97583;">//</span><span style="color:#E1E4E8;"> Например, </span><span style="color:#79B8FF;">404</span><span style="color:#E1E4E8;">: Not Found</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> { </span><span style="color:#F97583;">//</span><span style="color:#E1E4E8;"> если всё прошло гладко, выводим результат</span></span>
<span class="line"><span style="color:#F97583;">//</span><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">alert</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`good! \${xhr.response.length} байт\`</span><span style="color:#E1E4E8;">); </span><span style="color:#F97583;">//</span><span style="color:#E1E4E8;"> response </span><span style="color:#6A737D;">-- это ответ сервера</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">xhr.</span><span style="color:#B392F0;">onerror</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">alert</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;error&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  xhr.</span><span style="color:#B392F0;">onload</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  let responseObj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> xhr.</span><span style="color:#B392F0;">response</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  length </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> responseObj.</span><span style="color:#B392F0;">temp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    	    labels </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">			ul_ot </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">            new_ust </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">            new_ds18 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">            ul_bt </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">            new_dhwt </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">   			average_temp </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">            dhwt_status </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">            flame_status </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">            ctimesh </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span></span>
<span class="line"><span style="color:#E1E4E8;">          			</span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> length; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                ctimesh.</span><span style="color:#79B8FF;">push</span><span style="color:#E1E4E8;">(responseObj.</span><span style="color:#B392F0;">temp</span><span style="color:#E1E4E8;">[i].</span><span style="color:#B392F0;">ctimesh</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">                labels.</span><span style="color:#79B8FF;">push</span><span style="color:#E1E4E8;">(responseObj.</span><span style="color:#B392F0;">temp</span><span style="color:#E1E4E8;">[i].</span><span style="color:#B392F0;">datetime</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">				ul_ot.</span><span style="color:#79B8FF;">push</span><span style="color:#E1E4E8;">(responseObj.</span><span style="color:#B392F0;">temp</span><span style="color:#E1E4E8;">[i].</span><span style="color:#B392F0;">ul_ot</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">                new_ds18.</span><span style="color:#79B8FF;">push</span><span style="color:#E1E4E8;">(responseObj.</span><span style="color:#B392F0;">temp</span><span style="color:#E1E4E8;">[i].</span><span style="color:#B392F0;">new_ds18</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">                new_ust.</span><span style="color:#79B8FF;">push</span><span style="color:#E1E4E8;">(responseObj.</span><span style="color:#B392F0;">temp</span><span style="color:#E1E4E8;">[i].</span><span style="color:#B392F0;">new_ust</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">                new_dhwt.</span><span style="color:#79B8FF;">push</span><span style="color:#E1E4E8;">(responseObj.</span><span style="color:#B392F0;">temp</span><span style="color:#E1E4E8;">[i].</span><span style="color:#B392F0;">new_dhwt</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">                ul_bt.</span><span style="color:#79B8FF;">push</span><span style="color:#E1E4E8;">(responseObj.</span><span style="color:#B392F0;">temp</span><span style="color:#E1E4E8;">[i].</span><span style="color:#B392F0;">ul_bt</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">                average_temp.</span><span style="color:#79B8FF;">push</span><span style="color:#E1E4E8;">(responseObj.</span><span style="color:#B392F0;">temp</span><span style="color:#E1E4E8;">[i].</span><span style="color:#B392F0;">average_temp</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">                dhwt_status.</span><span style="color:#79B8FF;">push</span><span style="color:#E1E4E8;">(responseObj.</span><span style="color:#B392F0;">temp</span><span style="color:#E1E4E8;">[i].</span><span style="color:#B392F0;">dhwt_status</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">                flame_status.</span><span style="color:#79B8FF;">push</span><span style="color:#E1E4E8;">(responseObj.</span><span style="color:#B392F0;">temp</span><span style="color:#E1E4E8;">[i].</span><span style="color:#B392F0;">flame_status</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    	     	}</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    var title </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">               </span><span style="color:#B392F0;">text</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;SLS OpenTherm&#39;   </span></span>
<span class="line"><span style="color:#E1E4E8;">            };</span></span>
<span class="line"><span style="color:#E1E4E8;">            var subtitle </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">               </span><span style="color:#B392F0;">text</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;daily temp&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">            };</span></span>
<span class="line"><span style="color:#E1E4E8;">             </span></span>
<span class="line"><span style="color:#E1E4E8;">    var chart </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">             </span><span style="color:#B392F0;">zoomType</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;x&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">			};</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  var xAxis </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">categories</span><span style="color:#E1E4E8;">:</span><span style="color:#B392F0;">ctimesh</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;datetime&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#B392F0;">minRange</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">   };</span></span>
<span class="line"><span style="color:#E1E4E8;">            var yAxis </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">               </span><span style="color:#B392F0;">title</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  </span><span style="color:#B392F0;">text</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;Temperature (</span><span style="color:#79B8FF;">\\xB0</span><span style="color:#9ECBFF;">C)&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">               },</span></span>
<span class="line"><span style="color:#E1E4E8;">               </span><span style="color:#B392F0;">plotLines</span><span style="color:#E1E4E8;">: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">                  </span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  </span><span style="color:#B392F0;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  </span><span style="color:#B392F0;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;#808080&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">               }]</span></span>
<span class="line"><span style="color:#E1E4E8;">            };   </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            var tooltip </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">               </span><span style="color:#B392F0;">valueSuffix</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\xB0</span><span style="color:#9ECBFF;">C&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            var legend </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">//</span><span style="color:#E1E4E8;">               </span><span style="color:#B392F0;">layout</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;vertical&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">               </span><span style="color:#B392F0;">align</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;center&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">//</span><span style="color:#E1E4E8;">               </span><span style="color:#B392F0;">itemWidth</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">290</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">               </span><span style="color:#B392F0;">verticalAlign</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;top&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">               </span><span style="color:#B392F0;">borderWidth</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">            };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">				var series </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">  [{</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;Уличный ds18b2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">: new_ds18},</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span></span>
<span class="line"><span style="color:#E1E4E8;">               {</span></span>
<span class="line"><span style="color:#E1E4E8;">			 	</span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;Уличный термометр по OpenTherm&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">: ul_ot</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                   {</span></span>
<span class="line"><span style="color:#E1E4E8;">			 	</span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;Уставка отопления&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">: new_ust</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                   {</span></span>
<span class="line"><span style="color:#E1E4E8;">			 	</span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;Температура ГВС&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">: new_dhwt</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                   {</span></span>
<span class="line"><span style="color:#E1E4E8;">			 	</span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;Средняя температура в доме&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">: average_temp,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span></span>
<span class="line"><span style="color:#F97583;">//</span><span style="color:#E1E4E8;">                         {</span></span>
<span class="line"><span style="color:#F97583;">//</span><span style="color:#E1E4E8;">			 	</span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;dhwt_status&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#F97583;">//</span><span style="color:#E1E4E8;">				</span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">: dhwt_status</span></span>
<span class="line"><span style="color:#F97583;">//</span><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span></span>
<span class="line"><span style="color:#E1E4E8;">                          {</span></span>
<span class="line"><span style="color:#E1E4E8;">			 	</span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;Горелка&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">: flame_status,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;area&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;#FFCF73&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                   </span><span style="color:#B392F0;">step</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;left&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">			 	</span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;Температура теплоносителя&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">: ul_bt,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;areaspline&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            ];</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            var json </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#E1E4E8;">            json.</span><span style="color:#B392F0;">title</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> title;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">//</span><span style="color:#E1E4E8;">           json.</span><span style="color:#B392F0;">subtitle</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> subtitle;</span></span>
<span class="line"><span style="color:#E1E4E8;">            json.</span><span style="color:#B392F0;">xAxis</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> xAxis;</span></span>
<span class="line"><span style="color:#E1E4E8;">            json.</span><span style="color:#B392F0;">yAxis</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> yAxis;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">//</span><span style="color:#E1E4E8;">           json.</span><span style="color:#B392F0;">tooltip</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> tooltip;</span></span>
<span class="line"><span style="color:#E1E4E8;">            json.</span><span style="color:#B392F0;">legend</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> legend;</span></span>
<span class="line"><span style="color:#E1E4E8;">            json.</span><span style="color:#B392F0;">series</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> series;</span></span>
<span class="line"><span style="color:#E1E4E8;">            json.</span><span style="color:#B392F0;">chart</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">  chart;</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            $(</span><span style="color:#9ECBFF;">&#39;#container&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#79B8FF;">highcharts</span><span style="color:#E1E4E8;">(json);</span></span>
<span class="line"><span style="color:#E1E4E8;">               };</span></span>
<span class="line"><span style="color:#E1E4E8;">         });</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">         </span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">script</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">body</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span></span>
<span class="line"><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">html</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">&lt;html&gt;</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">meta http</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">equiv</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;Content-Type&quot; </span><span style="color:#24292E;">content</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;text/html; charset=utf-8&quot;</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">&lt;title&gt;</span><span style="color:#24292E;">SLS OpenTherm graphics привет</span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">title</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">script src </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js&quot;</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">script</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">script src </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;https://code.highcharts.com/highcharts.js&quot;</span><span style="color:#D73A49;">&gt;&lt;/</span><span style="color:#24292E;">script</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">head</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">   </span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">div id </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;container&quot; </span><span style="color:#24292E;">style </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;height: 100%; margin: 0 auto&quot;</span><span style="color:#D73A49;">&gt;&lt;/</span><span style="color:#24292E;">div</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">script language </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;JavaScript&quot;</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">         $(document).</span><span style="color:#005CC5;">ready</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">         </span></span>
<span class="line"><span style="color:#24292E;">         var today </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> new </span><span style="color:#005CC5;">Date</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  		 var dd </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">String</span><span style="color:#24292E;">(today.</span><span style="color:#005CC5;">getDate</span><span style="color:#24292E;">()).</span><span style="color:#005CC5;">padStart</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;0&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">		 var mm </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">String</span><span style="color:#24292E;">(today.</span><span style="color:#005CC5;">getMonth</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">).</span><span style="color:#005CC5;">padStart</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;0&#39;</span><span style="color:#24292E;">); </span><span style="color:#D73A49;">//</span><span style="color:#24292E;">January is </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">!</span></span>
<span class="line"><span style="color:#24292E;">		 var yyyy </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> today.</span><span style="color:#005CC5;">getFullYear</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      logfile </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;!log_&#39;</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">dd </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;_&#39; </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> mm </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;_&#39; </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> yyyy</span><span style="color:#D73A49;">+</span><span style="color:#032F62;">&#39;.json&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      let xhr </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> new </span><span style="color:#005CC5;">XMLHttpRequest</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">      </span></span>
<span class="line"><span style="color:#24292E;">      var filename</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;/api/storage?path=/sd/&#39;</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">logfile;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      xhr.</span><span style="color:#6F42C1;">responseType</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;json&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      xhr.</span><span style="color:#005CC5;">open</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;GET&#39;</span><span style="color:#24292E;">, filename);</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">//</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3.</span><span style="color:#24292E;"> Отсылаем запрос</span></span>
<span class="line"><span style="color:#24292E;">xhr.</span><span style="color:#005CC5;">send</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#D73A49;">//</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4.</span><span style="color:#24292E;"> Этот код сработает после того, как мы получим ответ сервера</span></span>
<span class="line"><span style="color:#24292E;">xhr.</span><span style="color:#6F42C1;">onload</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (xhr.</span><span style="color:#6F42C1;">status</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">) { </span><span style="color:#D73A49;">//</span><span style="color:#24292E;"> анализируем HTTP</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">статус ответа, если статус не </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">, то произошла ошибка</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">alert</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`Ошибка \${xhr.status}: \${xhr.statusText}\`</span><span style="color:#24292E;">); </span><span style="color:#D73A49;">//</span><span style="color:#24292E;"> Например, </span><span style="color:#005CC5;">404</span><span style="color:#24292E;">: Not Found</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> { </span><span style="color:#D73A49;">//</span><span style="color:#24292E;"> если всё прошло гладко, выводим результат</span></span>
<span class="line"><span style="color:#D73A49;">//</span><span style="color:#24292E;">    </span><span style="color:#005CC5;">alert</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`good! \${xhr.response.length} байт\`</span><span style="color:#24292E;">); </span><span style="color:#D73A49;">//</span><span style="color:#24292E;"> response </span><span style="color:#6A737D;">-- это ответ сервера</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">xhr.</span><span style="color:#6F42C1;">onerror</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">alert</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;error&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  xhr.</span><span style="color:#6F42C1;">onload</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  let responseObj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> xhr.</span><span style="color:#6F42C1;">response</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  length </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> responseObj.</span><span style="color:#6F42C1;">temp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">length</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    	    labels </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">			ul_ot </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">            new_ust </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">            new_ds18 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">            ul_bt </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">            new_dhwt </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">   			average_temp </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">            dhwt_status </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">            flame_status </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">            ctimesh </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">            </span></span>
<span class="line"><span style="color:#24292E;">          			</span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> length; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                ctimesh.</span><span style="color:#005CC5;">push</span><span style="color:#24292E;">(responseObj.</span><span style="color:#6F42C1;">temp</span><span style="color:#24292E;">[i].</span><span style="color:#6F42C1;">ctimesh</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">                labels.</span><span style="color:#005CC5;">push</span><span style="color:#24292E;">(responseObj.</span><span style="color:#6F42C1;">temp</span><span style="color:#24292E;">[i].</span><span style="color:#6F42C1;">datetime</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">				ul_ot.</span><span style="color:#005CC5;">push</span><span style="color:#24292E;">(responseObj.</span><span style="color:#6F42C1;">temp</span><span style="color:#24292E;">[i].</span><span style="color:#6F42C1;">ul_ot</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">                new_ds18.</span><span style="color:#005CC5;">push</span><span style="color:#24292E;">(responseObj.</span><span style="color:#6F42C1;">temp</span><span style="color:#24292E;">[i].</span><span style="color:#6F42C1;">new_ds18</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">                new_ust.</span><span style="color:#005CC5;">push</span><span style="color:#24292E;">(responseObj.</span><span style="color:#6F42C1;">temp</span><span style="color:#24292E;">[i].</span><span style="color:#6F42C1;">new_ust</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">                new_dhwt.</span><span style="color:#005CC5;">push</span><span style="color:#24292E;">(responseObj.</span><span style="color:#6F42C1;">temp</span><span style="color:#24292E;">[i].</span><span style="color:#6F42C1;">new_dhwt</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">                ul_bt.</span><span style="color:#005CC5;">push</span><span style="color:#24292E;">(responseObj.</span><span style="color:#6F42C1;">temp</span><span style="color:#24292E;">[i].</span><span style="color:#6F42C1;">ul_bt</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">                average_temp.</span><span style="color:#005CC5;">push</span><span style="color:#24292E;">(responseObj.</span><span style="color:#6F42C1;">temp</span><span style="color:#24292E;">[i].</span><span style="color:#6F42C1;">average_temp</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">                dhwt_status.</span><span style="color:#005CC5;">push</span><span style="color:#24292E;">(responseObj.</span><span style="color:#6F42C1;">temp</span><span style="color:#24292E;">[i].</span><span style="color:#6F42C1;">dhwt_status</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">                flame_status.</span><span style="color:#005CC5;">push</span><span style="color:#24292E;">(responseObj.</span><span style="color:#6F42C1;">temp</span><span style="color:#24292E;">[i].</span><span style="color:#6F42C1;">flame_status</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    	     	}</span></span>
<span class="line"><span style="color:#24292E;">            </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    var title </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">               </span><span style="color:#6F42C1;">text</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;SLS OpenTherm&#39;   </span></span>
<span class="line"><span style="color:#24292E;">            };</span></span>
<span class="line"><span style="color:#24292E;">            var subtitle </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">               </span><span style="color:#6F42C1;">text</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;daily temp&#39;</span></span>
<span class="line"><span style="color:#24292E;">            };</span></span>
<span class="line"><span style="color:#24292E;">             </span></span>
<span class="line"><span style="color:#24292E;">    var chart </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">             </span><span style="color:#6F42C1;">zoomType</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;x&#39;</span></span>
<span class="line"><span style="color:#24292E;">			};</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  var xAxis </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">categories</span><span style="color:#24292E;">:</span><span style="color:#6F42C1;">ctimesh</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;datetime&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#6F42C1;">minRange</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">   };</span></span>
<span class="line"><span style="color:#24292E;">            var yAxis </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">               </span><span style="color:#6F42C1;">title</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">                  </span><span style="color:#6F42C1;">text</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;Temperature (</span><span style="color:#005CC5;">\\xB0</span><span style="color:#032F62;">C)&#39;</span></span>
<span class="line"><span style="color:#24292E;">               },</span></span>
<span class="line"><span style="color:#24292E;">               </span><span style="color:#6F42C1;">plotLines</span><span style="color:#24292E;">: [{</span></span>
<span class="line"><span style="color:#24292E;">                  </span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  </span><span style="color:#6F42C1;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  </span><span style="color:#6F42C1;">color</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;#808080&#39;</span></span>
<span class="line"><span style="color:#24292E;">               }]</span></span>
<span class="line"><span style="color:#24292E;">            };   </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            var tooltip </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">               </span><span style="color:#6F42C1;">valueSuffix</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\xB0</span><span style="color:#032F62;">C&#39;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            var legend </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">//</span><span style="color:#24292E;">               </span><span style="color:#6F42C1;">layout</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;vertical&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">               </span><span style="color:#6F42C1;">align</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;center&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">//</span><span style="color:#24292E;">               </span><span style="color:#6F42C1;">itemWidth</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">290</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">               </span><span style="color:#6F42C1;">verticalAlign</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;top&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">               </span><span style="color:#6F42C1;">borderWidth</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">            };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">				var series </span><span style="color:#D73A49;">=</span><span style="color:#24292E;">  [{</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;Уличный ds18b2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">: new_ds18},</span></span>
<span class="line"><span style="color:#24292E;">                </span></span>
<span class="line"><span style="color:#24292E;">               {</span></span>
<span class="line"><span style="color:#24292E;">			 	</span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;Уличный термометр по OpenTherm&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">: ul_ot</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                   {</span></span>
<span class="line"><span style="color:#24292E;">			 	</span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;Уставка отопления&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">: new_ust</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                   {</span></span>
<span class="line"><span style="color:#24292E;">			 	</span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;Температура ГВС&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">: new_dhwt</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                   {</span></span>
<span class="line"><span style="color:#24292E;">			 	</span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;Средняя температура в доме&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">: average_temp,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                </span></span>
<span class="line"><span style="color:#D73A49;">//</span><span style="color:#24292E;">                         {</span></span>
<span class="line"><span style="color:#D73A49;">//</span><span style="color:#24292E;">			 	</span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;dhwt_status&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#D73A49;">//</span><span style="color:#24292E;">				</span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">: dhwt_status</span></span>
<span class="line"><span style="color:#D73A49;">//</span><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                </span></span>
<span class="line"><span style="color:#24292E;">                          {</span></span>
<span class="line"><span style="color:#24292E;">			 	</span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;Горелка&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">: flame_status,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;area&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">color</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;#FFCF73&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                   </span><span style="color:#6F42C1;">step</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;left&#39;</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">			 	</span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;Температура теплоносителя&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">: ul_bt,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;areaspline&#39;</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            ];</span></span>
<span class="line"><span style="color:#24292E;">          </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            var json </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {};</span></span>
<span class="line"><span style="color:#24292E;">            json.</span><span style="color:#6F42C1;">title</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> title;</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">//</span><span style="color:#24292E;">           json.</span><span style="color:#6F42C1;">subtitle</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> subtitle;</span></span>
<span class="line"><span style="color:#24292E;">            json.</span><span style="color:#6F42C1;">xAxis</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> xAxis;</span></span>
<span class="line"><span style="color:#24292E;">            json.</span><span style="color:#6F42C1;">yAxis</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> yAxis;</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">//</span><span style="color:#24292E;">           json.</span><span style="color:#6F42C1;">tooltip</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> tooltip;</span></span>
<span class="line"><span style="color:#24292E;">            json.</span><span style="color:#6F42C1;">legend</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> legend;</span></span>
<span class="line"><span style="color:#24292E;">            json.</span><span style="color:#6F42C1;">series</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> series;</span></span>
<span class="line"><span style="color:#24292E;">            json.</span><span style="color:#6F42C1;">chart</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;">  chart;</span></span>
<span class="line"><span style="color:#24292E;">         </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            $(</span><span style="color:#032F62;">&#39;#container&#39;</span><span style="color:#24292E;">).</span><span style="color:#005CC5;">highcharts</span><span style="color:#24292E;">(json);</span></span>
<span class="line"><span style="color:#24292E;">               };</span></span>
<span class="line"><span style="color:#24292E;">         });</span></span>
<span class="line"><span style="color:#24292E;">      </span></span>
<span class="line"><span style="color:#24292E;">         </span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">script</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">body</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">   </span></span>
<span class="line"><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">html</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div>`,10),c=[e];function E(r,y,i,F,C,u){return n(),a("div",null,c)}const d=s(t,[["render",E]]);export{h as __pageData,d as default};
