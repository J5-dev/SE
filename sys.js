let favicon=document.querySelector("link[rel~='icon']");if(!favicon){favicon=document.createElement('link');favicon.rel='icon';favicon.href='favicon.ico';document.getElementsByTagName('head')[0].appendChild(favicon)}let focusXDS=camera.focus.toLowerCase();let rh=document.getElementById("e");let fps_mkl=document.getElementById("fps");let brightness=document.getElementById("brgt");let menusx=document.getElementById("menu-img");let menu=document.getElementById("menu");let menu_u=document.getElementById("menu_button");let pltcon=document.getElementById("pltcon");let spl=document.getElementById("focusXDS");let ctx_menu=document.getElementById("context-menu");let gt5=document.getElementsByClassName("menu-page");let ck=document.getElementsByClassName("loc");let statx=document.getElementsByClassName("game-stat");let cmenx=document.getElementsByClassName("tx");let ctx=document.getElementsByTagName("li2");let body=document.getElementById("body");let orbil=document.getElementById("orbit-line");let otyr=orbil.ckecked;let fff=false;let frs=1;if(window.localStorage.getItem("visited")==null){window.localStorage.setItem("visited",true);window.localStorage.setItem("brightness",1);window.localStorage.setItem("fps",10);window.localStorage.setItem("chkbx","[true,true,true]")}else{brightness.value=window.localStorage.getItem("brightness");fps_mkl.value=window.localStorage.getItem("fps");zc=JSON.parse(window.localStorage.getItem("chkbx"));if(zc[0]==true)orbil.checked=true;else orbil.checked=false;if(zc[1]==true)ck[1].checked=true;else ck[1].checked=false;if(zc[2]==true)ck[2].checked=true;else ck[2].checked=false;init_app()}gt5[0].style.display="block";let button=document.getElementsByClassName("ctrl-io");let inosx=null;controls.style.left=window.innerWidth/2-50+"px";controls.style.top=window.innerHeight-66+"px";let mouseP=false;let mxv=false;let focusRite="";let dhwu=20;let R3={add:function(){camera.zoom+=hjh()*1.5},sub:function(){camera.zoom-=hjh()*1.5},left:function(){camera.x-=dhwu},right:function(){camera.x+=dhwu},up:function(){camera.y-=dhwu},down:function(){camera.y+=dhwu},speed:function(n){if(frs==1)drs(10,n);else if(frs==10)drs(100,n);else if(frs==100)drs(1000,n);else if(frs==1000)drs(10000,n);else if(frs==10000)drs(100000,n);else if(frs==100000)drs(1000000,n);else if(frs==1000000)drs(10000000,n);else if(frs==10000000)drs(10000000,n)},move:function(){mxv=true},exit:function(){controls.style.display="none"}};function drs(spd,ty){if(ty=="+"){frs=frs*10;for(let i=0;i<planets.length;i++)planets[i].orbit_speed=planets[i].orbit_speed*10;for(let i=0;i<sattelites.length;i++)sattelites[i].orbit_speed=sattelites[i].orbit_speed*10}if(ty=="-"){frs=frs/10;for(let i=0;i<planets.length;i++)planets[i].orbit_speed=planets[i].orbit_speed/10;for(let i=0;i<sattelites.length;i++)sattelites[i].orbit_speed=sattelites[i].orbit_speed/10}if(frs<=1)frs=1;else if(frs>=10000000)frs=10000000}let ctrls=[R3.add,R3.up,R3.sub,R3.left,R3.down,R3.right];function getPlanet(name){for(let i=0;i<planets.length;i++){if(planets[i].name==name)return planets[i]}}for(let i=0;i<planets.length;i++)planets[i].orbit_speed=planets[i].orbit_speed/30000;let k=0;let cnv=J5.createCanvas(window.innerWidth,window.innerHeight);let g=cnv.graphics;g.textAlign("center");g.imageAlign("center","center");g.textSize(13);FPS(10);let you9=0;let uiuou=setInterval(function(){g.background("black");g.fill("grey");you9++;if(you9>9)you9=0;g.translate(cnv.width/2,cnv.height/2);g.text("Loading...",0,0);for(let i=0;i<10;i++){let x=J5.math.sin(i/1.6);let y=J5.math.sin(i/1.6-1.57079632679);if(you9==i)g.fill("white");else g.fill("#000050");g.circle(x*60,y*60,20)}g.translate(-cnv.width/2,-cnv.height/2)},100);window.onload=function(){setTimeout(function(){clearInterval(uiuou);draw=function(){if(inosx!=null)ctrls[inosx]();rh.innerHTML="x:"+Math.trunc(camera.x)+" ,y:"+Math.trunc(camera.y)+" ,zoom: "+Math.trunc(camera.zoom);if(mouseP==true){if(cnv.mouseX()> cnv.width/2)camera.x+=J5.math.dist(cnv.width/2,0,mouseX,0);else camera.x-=J5.math.dist(cnv.width/2,0,mouseX,0);if(cnv.mouseY()> cnv.height/2)camera.y+=J5.math.dist(cnv.height/2,0,mouseY,0);else camera.y-=J5.math.dist(cnv.height/2,0,mouseY,0)}g.background("black");g.stroke("#00000000");for(let i=0;i<stars.length;i++)starx(stars[i]);if(ck[1].checked==true){g.stroke("white");g.strokeWeight(0.6);g.shadow(1,1,0,"black");g.line(cnv.width/2-13,cnv.height/2,cnv.width/2+13,cnv.height/2);g.line(cnv.width/2,cnv.height/2-13,cnv.width/2,cnv.height/2+13);}g.strokeWeight(0.5);}},2000)};function planetx(p,st){p.rp+=p.orbit_speed/40;p.x=J5.math.sin(p.rp);p.y=J5.math.sin(p.rp-(1.570796326794896557998981734272092580795).toPrecision(41));let xaq=st.x+Math.trunc((p.x*p.orbit_height)/camera.zoom);let yaq=st.y+Math.trunc((p.y*p.orbit_height)/camera.zoom);for(let i=0;i<sattelites.length;i++)if(sattelites[i].parent==p.name)sat({ p:p,m:[xaq,yaq]},sattelites[i]);if(otyr==true){g.stroke("#eeeeee");g.shadow(0,0,0,"#00000000");g.strokeCircle(st.x,st.y,(p.orbit_height/camera.zoom)*2)}g.fill(p.terrain_color);if(p.atmosphere_height!="none")g.shadow(0,0,p.atmosphere_height/camera.zoom,p.atmosphere_color);if(p.image){let z=p.image;g.image(z.src,xaq,yaq,(p.radius+z.w)/camera.zoom,(p.radius+z.h)/camera.zoom)}else g.fillCircle(xaq,yaq,p.radius/camera.zoom);g.fill("white");g.shadow(0,0,0,"#00000000");g.stroke("black");g.text(p.name,xaq,yaq+15);if(focusXDS==p.name.toLowerCase()){mcam(xaq+camera.x,yaq+camera.y);rh.innerHTML="x:"+Math.trunc(camera.x)+" ,y:"+Math.trunc(camera.y)+" ,zoom: "+Math.trunc(camera.zoom)+",focus: "+p.name;g.fill("#00000000");g.stroke("white");g.shadow(0,0,0,"#00000000");g.rect(xaq-7,yaq-7,14,14)}else g.fill("#00000000");g.stroke("#00000000")}function sat(p,dd){let vb=p.m;p=p.p;dd.rp+=dd.orbit_speed/40;dd.x=J5.math.sin(dd.rp);dd.y=J5.math.sin(dd.rp-1.57079632679489655);let xaq=vb[0]+Math.trunc((dd.x*dd.orbit_height)/camera.zoom);let yaq=vb[1]+Math.trunc((dd.y*dd.orbit_height)/camera.zoom);if(otyr==true){g.stroke("#eeeeee");g.shadow(0,0,0,"#00000000");g.strokeCircle(vb[0],vb[1],(dd.orbit_height/camera.zoom)*2)}g.fill(dd.terrain_color);if(dd.atmosphere_height!="none")g.shadow(0,0,dd.atmosphere_height/camera.zoom,dd.atmosphere_color);if(dd.image){let z=dd.image;g.image(z.src,xaq,yaq,(dd.radius+z.w)/camera.zoom,(dd.radius+z.h)/camera.zoom)}else g.fillCircle(xaq,yaq,dd.radius/camera.zoom);if(camera.zoom<100000){g.fill("white");g.shadow(0,0,0,"#00000000");g.stroke("black");g.text(dd.name,xaq,yaq+15)}if(focusXDS==dd.name.toLowerCase()){mcam(xaq+camera.x,yaq+camera.y);rh.innerHTML="x:"+Math.trunc(camera.x)+" ,y:"+Math.trunc(camera.y)+" ,zoom:"+Math.trunc(camera.zoom)+",focus:"+dd.name;g.fill("#00000000");g.stroke("white");g.shadow(0,0,0,"#00000000");g.rect(xaq-7,yaq-7,14,14)}else g.fill("#00000000");g.stroke("#00000000")}function starx(p){let xaq=p.x/camera.zoom-camera.x;let yaq=p.y/camera.zoom-camera.y;g.fill(p.terrain_color);if(p.atmosphere_color!="none")g.shadow(0,0,p.atmosphere_height/camera.zoom,p.atmosphere_color);g.circle(xaq,yaq,p.radius/camera.zoom);g.fill("white");g.shadow(0,0,0,"#00000000");g.stroke("black");g.text(p.name,xaq,yaq+10);if(focusXDS==p.name.toLowerCase()){rh.innerHTML="x:"+Math.trunc(camera.x)+" ,y:"+Math.trunc(camera.y)+" ,zoom:"+Math.trunc(camera.zoom)+",focus:"+p.name;mcam(xaq+camera.x,yaq+camera.y);g.stroke("white");g.shadow(0,0,0,"#00000000");g.fill("#00000000");g.rect(xaq-7,yaq-7,14,14)}for(let i=0;i<planets.length;i++){if(planets[i].parent==p.name)planetx(planets[i],{x:xaq,y:yaq})}}document.onkeydown=function(e){xls(e.key,e)};function mcam(x,y){camera.x=x-cnv.width/2;camera.y=y-cnv.height/2}document.addEventListener("contextmenu",function(e){fff=true;e.preventDefault();e.stopPropagation();ctx_menu.style.display="block";fgz();if(event.clientY>window.innerHeight-261)ctx_menu.style.top=event.clientY-261+"px";else ctx_menu.style.top=event.clientY+1+"px";if(event.clientX>window.innerWidth-200)ctx_menu.style.left=event.clientX-201+"px";else ctx_menu.style.left=event.clientX+1+"px"});ctx_menu.onmouseout=function(){fff=false};ctx_menu.onmouseenter=function(){fff=true};function xls(op,e){let key=op;key=key.toLowerCase();if(key=="arrowup"){focusRite="";camera.zoom+=hjh()}else if(key=="arrowdown"){if(camera.zoom<0.2)camera.zoom=0.2;focusRite="";camera.zoom-=hjh()}if(event.ctrlKey){if(key==" "){menuF();ssl(0);e.preventDefault();e.stopPropagation()}else if(key=="x"){focusXDS="";e.preventDefault();e.stopPropagation()}else if(key=="y"){R3.speed("+");e.preventDefault();e.stopPropagation()}else if(key=="b"){R3.speed("-");e.preventDefault();e.stopPropagation()}}}cnv.html.addEventListener("mousedown",function(){mouseP=true;setTimeout(function(){if((fff==false)&(ctx_menu.style.display=="block")){ctx_menu.style.display="none";fgz()}},100);mouseP=true});document.addEventListener("mouseup",function(){mouseP=false});function hjh(){let u=1;if(camera.zoom>100){u=10;if(camera.zoom>1000){u=100;if(camera.zoom>5000){u=500;if(camera.zoom>10000){u=1000;if(camera.zoom>30000){u=3000;if(camera.zoom>60000){u=6000;if(camera.zoom>90000){u=9000;if(camera.zoom>150000){u=15000;if(camera.zoom>200000){u=20000;if(camera.zoom>300000){u=30000;if(camera.zoom>400000){u=40000;if(camera.zoom>500000){u=50000;if(camera.zoom>600000){u=60000}}}}}}}}}}}}}if(camera.zoom<100)u=1;if(camera.zoom<10)u=0.1;if(u<0.1)u=0.1;return u}J5.event.mouseMoved=function(){if(mxv==true){controls.style.left=mouseX-115+"px";controls.style.top=mouseY-3+"px"}};J5.event.mouseReleased=function(){if(mxv==true){mxv=false;controls.style.left=J5.math.constrain(mouseX-115,3,window.innerWidth-127)+"px";controls.style.top=J5.math.constrain(mouseY-3,3,window.innerHeight-60)+"px"}};for(let i=0;i<button.length;i++){button[i].onmousedown=function(){inosx=i};button[i].onmouseup=button[i].onmouseout=function(){inosx=null}}let ionoscv;function menuF(){statx[0].innerHTML=Math.trunc(camera.x);statx[1].innerHTML=Math.trunc(camera.y);statx[2].innerHTML=camera.zoom;statx[3].innerHTML=planets.length;statx[4].innerHTML=stars.length;if(focus==true)statx[5].innerHTML=focusXDS;else statx[5].innerHTML="none";if(menu.style.display=="none"){menusx.src="i/exit.svg";menu_u.style.background="#ff0000aa";menu.style.display="block";noLoop()}else{clearInterval(ionoscv);loop();menusx.src="i/menu.svg";menu_u.style.background="#3030aa20";menu.style.display="none"}}function ssl(n){if(n==0){clearInterval(ionoscv);gt5[0].style.display="block";gt5[1].style.display="none";gt5[2].style.display="none";gt5[3].style.display="none"}else if(n==1){ionoscv=setInterval(function(){let gg=parseInt(fps_mkl.value);let uu=parseInt(brightness.value);statx[6].innerHTML=fps_mkl.value;statx[7].innerHTML=brightness.value;if(gg<10){statx[6].style.color="#30ff30";if(gg<5){statx[6].style.color="#00ff00"}}else if(gg>10){statx[6].style.color="#ff3030";if(gg>15){statx[6].style.color="#ff2020";if(gg>20){statx[6].style.color="#ff1010";if(gg>25){statx[6].style.color="#ff0000"}}}}else if(gg==10)statx[6].style.color="#ffff00";if(uu<50){statx[7].style.color="#bbff00";if(uu<40){statx[7].style.color="#90ff00";if(uu<30){statx[7].style.color="#45ff00";if(uu<20){statx[7].style.color="#00ff00"}}}}else if(uu>50){statx[7].style.color="#ffbb00";if(uu>60){statx[7].style.color="#ff9000";if(uu>70){statx[7].style.color="#ff4500";if(uu>80){statx[7].style.color="#ff2500";if(uu>90){statx[7].style.color="#ff0000"}}}}}else statx[7].style.color="#ffff00"},0.1);gt5[0].style.display="none";gt5[1].style.display="block";gt5[2].style.display="none";gt5[3].style.display="none"}else if(n==2){clearInterval(ionoscv);gt5[0].style.display="none";gt5[1].style.display="none";gt5[2].style.display="block";gt5[3].style.display="none"}else if(n==3){clearInterval(ionoscv);gt5[0].style.display="none";gt5[1].style.display="none";gt5[2].style.display="none";gt5[3].style.display="block"}}function apply(){init_app();window.localStorage.setItem("chkbx",JSON.stringify([ck[0].checked,ck[1].checked,ck[2].checked]));window.localStorage.setItem("brightness",brightness.value);window.localStorage.setItem("fps",fps_mkl.value);if(ck[2].checked==true)controls.style.display="block";else controls.style.display="none";}function init_app(){FPS(parseInt(fps_mkl.value));otyr=orbil.checked;body.style="filter:brightness("+brightness.value/50+");"};function speed(f){if(f=="+"){for(let i=0;i<planets.length;i++){planets[i].orbit_speed+=0.001}}else for(let i=0;i<planets.length;i++){planets[i].orbit_speed+=0.001}}function clear_locale(){let co=confirm("Do you want to reset all your files.This includes:\n> Settings\n> More will be added");if(co==true){window.localStorage.clear();alert("To apply new settings,refresh the page.")}}let sitrx=[function(){fgz(0)},];let frty=[function(){let itm=0;if(cmenx[itm].style.display=="none"){fgz(itm);cmenx[itm].innerHTML=rpl()}else cmenx[itm].style.display="none"},];for(let i=0;i<ctx.length;i++){ctx[i].onclick=frty[i]}function fgz(y){for(let i=0;i<cmenx.length;i++)cmenx[i].style.display="none";if(y!=undefined)cmenx[y].style.display="block"}function rpl(){let html="";for(let s=0;s<stars.length;s++){html+='<cs onclick="focusOn(`'+stars[s].name+'`,`'+stars[s].ico+'`,`str`);">'+stars[s].name+"</cs>";for(let p=0;p<planets.length;p++){if(planets[p].parent==stars[s].name)html+='<ps onclick="focusOn(`'+planets[p].name+'`,`'+planets[p].ico+'`,`plt`);">'+planets[p].name+"</ps>";for(let m=0;m<sattelites.length;m++){if(sattelites[m].parent==planets[p].name)html+='<ms onclick="focusOn(`'+sattelites[m].name+'`,`'+sattelites[m].ico+'`,`sat`);">'+sattelites[m].name+"</ms>"}}}return '<ghh id="none" onclick="focusOn(`none`,-1);">None <sup k>ctrl + x</sup></ghh>'+html}function focusOn(name,n,t){focusXDS=name.toLowerCase();ctx_menu.style.display="none";f_img(n,t)}spl.onchange=function(){focusXDS=spl.value;setTimeout(function(){spl.innerHTML="<option>"+focusXDS+"</option>";spl.value=focusXDS;focusXDS=focusXDS.toLowerCase()},100)};spl.onclick=function(){let html="";for(let s=0;s<stars.length;s++){html+='<option class="o-star">'+stars[s].name+"</option>";for(let p=0;p<planets.length;p++){if(planets[p].parent==stars[s].name)html+='<option class="o-planet">'+planets[p].name+"</option>";for(let m=0;m<sattelites.length;m++){if(sattelites[m].parent==planets[p].name)html+='<option class="o-sattelite">'+sattelites[m].name+"</option>"}}}spl.innerHTML=html};function noFocus(){focusXDS="";favicon.href="favicon.ico"}function f_img(ic,ty){let r=0;for(let i=0;i<stars.length;i++)if(stars[i].ico==ic){favicon.href="ICO/"+ic+".ico";r++}for(let i=0;i<planets.length;i++)if(planets[i].ico==ic){favicon.h+ic+".ico";r++}for(let i=0;i<sattelites.length;i++){if(sattelites[i].ico==ic)favicon.href="ICO/"+ic+".ico";r++}if(r==0)favicon.href="favicon.ico"}apply();ref="ICO/"
