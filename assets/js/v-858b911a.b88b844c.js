"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[47926],{23738:(e,t,a)=>{a.r(t),a.d(t,{data:()=>i});const i={key:"v-858b911a",path:"/devices/HG06336.html",title:"Lidl HG06336 control via MQTT",lang:"en-US",frontmatter:{title:"Lidl HG06336 control via MQTT",description:"Integrate your Lidl HG06336 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2020-12-01T19:02:25.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Meaning of tamper",slug:"meaning-of-tamper",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Contact (binary)",slug:"contact-binary",children:[]},{level:3,title:"Battery_low (binary)",slug:"battery-low-binary",children:[]},{level:3,title:"Tamper (binary)",slug:"tamper-binary",children:[]},{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/HG06336.md",git:{updatedTime:1661964225e3}}},36420:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});const i=(0,a(66252).uE)('<h1 id="lidl-hg06336" tabindex="-1"><a class="header-anchor" href="#lidl-hg06336" aria-hidden="true">#</a> Lidl HG06336</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>HG06336</td></tr><tr><td>Vendor</td><td>Lidl</td></tr><tr><td>Description</td><td>Silvercrest smart window and door sensor</td></tr><tr><td>Exposes</td><td>contact, battery_low, tamper, battery, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/HG06336.jpg" alt="Lidl HG06336"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>The pinhole is a single hole (other side has 3).</p><p>To reset, use the pin tool (or any SIM removal tool) to hold down the pinhole for 5 seconds. When successful, the led will start flashing green slowly 6 times.</p><p>To get into pairing mode, use the pin tool to hold down the pinhole for 3 seconds. The led will start flashing quickly. When the led is on for 3 seconds, the pairing is successful. When pairing is not successful, keep the sensor close to the adapter.</p><h3 id="meaning-of-tamper" tabindex="-1"><a class="header-anchor" href="#meaning-of-tamper" aria-hidden="true">#</a> Meaning of tamper</h3><p>The tamper is triggered to <code>true</code> when a small black button underneath the battery compartment is no longer pressed down by the battery lid.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="contact-binary" tabindex="-1"><a class="header-anchor" href="#contact-binary" aria-hidden="true">#</a> Contact (binary)</h3><p>Indicates if the contact is closed (= true) or open (= false). Value can be found in the published state on the <code>contact</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>false</code> contact is ON, if <code>true</code> OFF.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery_low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery_low is ON, if <code>false</code> OFF.</p><h3 id="tamper-binary" tabindex="-1"><a class="header-anchor" href="#tamper-binary" aria-hidden="true">#</a> Tamper (binary)</h3><p>Indicates whether the device is tampered. Value can be found in the published state on the <code>tamper</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> tamper is ON, if <code>false</code> OFF.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',20),r={},d=(0,a(83744).Z)(r,[["render",function(e,t){return i}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,i]of t)e[a]=i;return e}}}]);