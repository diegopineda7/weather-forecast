(this["webpackJsonpweather-forecast"]=this["webpackJsonpweather-forecast"]||[]).push([[0],{12:function(e,a,t){e.exports=t(27)},26:function(e,a,t){},27:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),l=t(8),r=t.n(l),s=t(2),i=t(10),m=t(9);function o(){return n.a.createElement(m.a,{icon:i.a,style:{marginRight:5}})}function d(e){var a=e.cityName;return n.a.createElement("div",{className:"app__banner"},n.a.createElement("div",{className:"city-name"},n.a.createElement(o,null)," ",a))}var p="d9808b61d1fc7e7235bb8e197bc5a6ac",E=function(e,a){var t=new XMLHttpRequest,c="http://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&units=metric&appid=").concat(p);t.open("GET",c),t.send(),t.onreadystatechange=function(){if(4===this.readyState&&200===this.status){var e=JSON.parse(t.responseText);a(e)}}},u=function(e){return"http://openweathermap.org/img/w/".concat(e,".png")};function v(e){var a=e.weather,t=e.country,c=a.weather[0].icon,l=a.main,r=l.temp,s=l.humidity,i=a.wind,m=i.speed,o=i.deg,d=a.name;return n.a.createElement("div",{className:"city shadow"},n.a.createElement("div",{className:"city__top"},n.a.createElement("div",{className:"city__icon"},n.a.createElement("img",{src:u(c),alt:a})),n.a.createElement("div",{className:"city__info"},n.a.createElement("div",{className:"city__temp"},n.a.createElement("p",null,parseInt(r)),n.a.createElement("p",{className:"degrees"},"\xbaC")),n.a.createElement("div",{className:"city__name"},n.a.createElement("p",{className:"city__city"},d.split(" ").pop()),n.a.createElement("p",{className:"city__country"},t)))),n.a.createElement("div",{className:"city__weather"},n.a.createElement("p",null,"Humidity: ",s,"%"),n.a.createElement("p",null,o),n.a.createElement("p",null,m,"km/h")))}function _(e){var a=e.paris,t=e.city;return n.a.createElement("div",{className:"cities"},n.a.createElement(v,{weather:t,country:"France"}),n.a.createElement(v,{weather:a,country:"France"}),n.a.createElement("div",{className:"city cities--location"},n.a.createElement("div",{className:"cities__button"},n.a.createElement("button",{className:"add-location"},"Add Locations")),n.a.createElement("div",{className:"location__img"})))}t(22);var N=t(11),y=t.n(N);function h(e){var a=e.dayForecast,t=e.next,c=a.dt,l=a.temp,r=l.min,s=l.max,i=a.weather[0],m=i.icon,o=i.main,d=t?"day__temps--next":"";return n.a.createElement("div",{className:"day shadow"},n.a.createElement("div",{className:"day__icon"},n.a.createElement("img",{src:u(m),alt:o})),n.a.createElement("div",{className:"day__weather"},n.a.createElement("p",{className:"day__week-day"},n.a.createElement(y.a,{date:new Date(1e3*c),format:"dddd"})),n.a.createElement("p",{className:"day__weather-day"},o)),n.a.createElement("div",{className:"day__temps ".concat(d)},n.a.createElement("p",null,parseInt(s)),n.a.createElement("p",{className:"degrees"},"\xba"),n.a.createElement("pre",null," / "),n.a.createElement("p",null,parseInt(r)),n.a.createElement("p",{className:"degrees"},"\xba")))}function w(e){var a=e.forecast;return n.a.createElement("div",{className:"days"},n.a.createElement("div",{className:"header"},n.a.createElement("b",null,"3 Days")," Forecast"),n.a.createElement("div",{className:"content--days"},n.a.createElement(h,{dayForecast:a.daily[1],next:!0}),n.a.createElement(h,{dayForecast:a.daily[2]}),n.a.createElement(h,{dayForecast:a.daily[3]})))}function f(e){var a=e.icon,t=e.weather,c=e.temp;return n.a.createElement("div",{className:"current shadow--bold"},n.a.createElement("div",{className:"current__icon"},n.a.createElement("img",{src:u(a),alt:t,className:"res-icon"}),n.a.createElement("p",null,t)),n.a.createElement("div",{className:"current__temp"},n.a.createElement("article",{className:"fixed__temp"},n.a.createElement("p",null,n.a.createElement("b",null,c)),n.a.createElement("p",{className:"degrees"},"\xbaC"))))}var b=t(3),g=t.n(b);function S(){return n.a.createElement("div",{className:"reviews"},n.a.createElement("div",{className:"reviews__header"},n.a.createElement("p",null,"+"),n.a.createElement("p",null,"Top Reviews")),n.a.createElement("div",{className:"reviews__photos"},n.a.createElement("div",{className:"reviews__item"},n.a.createElement("img",{src:g.a,alt:"Review",className:"review__photo"})),n.a.createElement("div",{className:"reviews__item"},n.a.createElement("img",{src:g.a,alt:"Review",className:"review__photo"})),n.a.createElement("div",{className:"reviews__item"},n.a.createElement("img",{src:g.a,alt:"Review",className:"review__photo"})),n.a.createElement("div",{className:"reviews__item reviews__item--count"},n.a.createElement("p",null,"9+"))))}function O(e){var a=e.place1,t=e.city,c=e.place2,l=e.place3;return n.a.createElement("div",{className:"visit"},n.a.createElement("div",{className:"visit__header"},n.a.createElement("p",null,n.a.createElement("b",null,"Place to")," visit"),n.a.createElement(S,null)),n.a.createElement("div",{className:"content--visit"},n.a.createElement("div",{className:"visit__city shadow"},n.a.createElement("article",{className:"visit__location"},n.a.createElement(o,null),n.a.createElement("article",{className:"visit__name"},n.a.createElement("p",null,a),n.a.createElement("p",null,t)))),n.a.createElement("div",{className:"visit__secondary"},n.a.createElement("div",{className:"visit__place visit__place--place2"},n.a.createElement("article",{className:"visit__location"},n.a.createElement(o,null),n.a.createElement("p",{className:"visit__name"},c))),n.a.createElement("div",{className:"visit__place visit__place--place3"},n.a.createElement("article",{className:"visit__location"},n.a.createElement(o,null),n.a.createElement("p",{className:"visit__name"},l)),n.a.createElement("button",{className:"visit__plus"},"+")))))}t(26);var x=function(){var e=Object(c.useState)(void 0),a=Object(s.a)(e,2),t=a[0],l=a[1],r=Object(c.useState)(void 0),i=Object(s.a)(r,2),m=i[0],o=i[1],u=Object(c.useState)(void 0),v=Object(s.a)(u,2),N=v[0],y=v[1],h=Object(c.useState)(void 0),b=Object(s.a)(h,2),g=b[0],S=b[1];Object(c.useEffect)((function(){m?function(e,a,t){var c="",n=new XMLHttpRequest,l="https://api.openweathermap.org/data/2.5/onecall?lat=".concat(e,"&lon=").concat(a,"&exclude=current,minutely,hourly,alerts&units=metric&appid=").concat(p);n.open("GET",l),n.send(),n.onreadystatechange=function(){4===this.readyState&&200===this.status&&(c=JSON.parse(n.responseText),t(c))}}(m.coord.lat,m.coord.lon,l):x()}),[m]);var x=function(){E("bogota",o),E("paris",y),E("lyon",S)};return n.a.createElement(n.a.Fragment,null,m&&N&&g&&n.a.createElement(n.a.Fragment,null,n.a.createElement(f,{icon:m.weather[0].icon,temp:m.main.temp,weather:m.weather[0].main}),n.a.createElement("div",{className:"app"},n.a.createElement(d,{cityName:m.name}),n.a.createElement("div",{className:"app__secondary"},t&&n.a.createElement(w,{forecast:t}),n.a.createElement(O,{place1:"Arab Street",place2:"Art Science Museum",place3:"Fountain of Wealth",city:"Singapore"}),n.a.createElement(_,{paris:N,city:g})))))};r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(x,null)),document.getElementById("root"))},3:function(e,a,t){e.exports=t.p+"static/media/person.b08e37b1.png"}},[[12,1,2]]]);
//# sourceMappingURL=main.eee64801.chunk.js.map