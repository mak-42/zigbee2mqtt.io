"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[62787],{7457:(e,t,a)=>{a.r(t),a.d(t,{data:()=>i});const i={key:"v-0428fa99",path:"/devices/AB3257001NJ.html",title:"OSRAM AB3257001NJ control via MQTT",lang:"en-US",frontmatter:{title:"OSRAM AB3257001NJ control via MQTT",description:"Integrate your OSRAM AB3257001NJ via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2019-07-22T20:08:17.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Caveats",slug:"caveats",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/AB3257001NJ.md",git:{updatedTime:1661964225e3}}},66729:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var i=a(66252);const d=(0,i.uE)('<h1 id="osram-ab3257001nj" tabindex="-1"><a class="header-anchor" href="#osram-ab3257001nj" aria-hidden="true">#</a> OSRAM AB3257001NJ</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>AB3257001NJ</td></tr><tr><td>Vendor</td><td>OSRAM</td></tr><tr><td>Description</td><td>Smart+ plug</td></tr><tr><td>Exposes</td><td>switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/AB3257001NJ.jpg" alt="OSRAM AB3257001NJ"></td></tr><tr><td>White-label</td><td>LEDVANCE AB3257001NJ, LEDVANCE AC03360</td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>For the OSRAM Smart+ plug (AB3257001NJ) hold the on/off button until your hear a click (+- 10 seconds).</p><h3 id="caveats" tabindex="-1"><a class="header-anchor" href="#caveats" aria-hidden="true">#</a> Caveats</h3><p>Does not pass every attribute when acting as the routing parent for some end devices which send messages right after each other.</p>',7),o=(0,i.Uk)("See also "),r={href:"https://github.com/Koenkk/zigbee2mqtt/issues/2274",target:"_blank",rel:"noopener noreferrer"},s=(0,i.Uk)("#2274"),h=(0,i.Uk)(", note that the no occupancy for the Xiaomi RTCGQ11LM has been fixed."),n=(0,i._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,i.Uk)(" OTA updates")],-1),c=(0,i.Uk)("This device supports OTA updates, for more information see "),u=(0,i.Uk)("OTA updates"),l=(0,i.Uk)("."),p=(0,i.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',5),g={},m=(0,a(83744).Z)(g,[["render",function(e,t){const a=(0,i.up)("OutboundLink"),g=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[d,(0,i._)("p",null,[o,(0,i._)("a",r,[s,(0,i.Wm)(a)]),h]),n,(0,i._)("p",null,[c,(0,i.Wm)(g,{to:"/guide/usage/ota_updates.html"},{default:(0,i.w5)((()=>[u])),_:1}),l]),p],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,i]of t)e[a]=i;return e}}}]);