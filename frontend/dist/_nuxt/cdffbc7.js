(window.webpackJsonp=window.webpackJsonp||[]).push([[6,7],{274:function(A,e,t){"use strict";t.r(e);t(278),t(44),t(9),t(37),t(26),t(64);var o={props:["value"],computed:{format:function(){var A=parseFloat(Math.abs(this.value));if(0==A)return{value:parseFloat(this.value),symbol:""};if(A>0&&A<1)return{value:parseFloat(this.value).toFixed(1),symbol:""};var e=[{value:1,symbol:""},{value:1e3,symbol:"e3"},{value:1e6,symbol:"e6"},{value:1e9,symbol:"e9"},{value:1e12,symbol:"e12"},{value:1e15,symbol:"e15"},{value:1e18,symbol:"e18"},{value:1e21,symbol:"e21"},{value:1e24,symbol:"e24"},{value:1e27,symbol:"e27"},{value:1e30,symbol:"e30"},{value:1e33,symbol:"e33"},{value:1e36,symbol:"e36"},{value:1e39,symbol:"e39"},{value:1e42,symbol:"e42"},{value:1e45,symbol:"e45"},{value:1e48,symbol:"e48"},{value:1e51,symbol:"e51"},{value:1e54,symbol:"e54"},{value:1e57,symbol:"e57"},{value:1e60,symbol:"e60"},{value:1e63,symbol:"e63"},{value:1e66,symbol:"e66"},{value:1e69,symbol:"e69"},{value:1e72,symbol:"e72"},{value:1e75,symbol:"e75"},{value:1e78,symbol:"e78"},{value:1e81,symbol:"e81"},{value:1e84,symbol:"e84"},{value:1e87,symbol:"e87"},{value:1e90,symbol:"e90"},{value:1e93,symbol:"e93"},{value:1e96,symbol:"e96"},{value:1e99,symbol:"e99"},{value:1e102,symbol:"e102"},{value:1e105,symbol:"e105"},{value:1e108,symbol:"e108"},{value:1e111,symbol:"e111"},{value:1e114,symbol:"e114"},{value:1e117,symbol:"e117"},{value:1e120,symbol:"e120"},{value:1e123,symbol:"e123"}].slice().reverse().find((function(e){return A>=e.value}));return this.value<0&&(A*=-1),{value:e?(A/e.value).toPrecision(4).replace(/\.0+$|(\.[0-9]*[1-9])0+$/,"$1"):"0",symbol:e?e.symbol:null}}}},r=t(62),component=Object(r.a)(o,(function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("span",[A._v(A._s(A.format.value.toLocaleString())),A.format.symbol?t("small",{staticClass:"text-muted",staticStyle:{"font-size":".75em"}},[A._v(" "+A._s(A.format.symbol))]):A._e()])}),[],!1,null,null,null);e.default=component.exports},275:function(A,e,t){A.exports=t.p+"img/darkmatter.987fbfb.png"},276:function(A,e){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAL4SURBVEiJnZRLaFxlFIC/88+9d16ZkkeTMdOaUsGFRoqPIUoWNsQXKiiCrpRuxFhSENyIuKkILkQoLU1VxE03Ii58QCsqqAlqEFzYFoqVYJu2aTuTVAmd5s6dmTv3uEgmjHPn1Rz4F/85937fPfd/iKrSNCb3PEBV3kXIAjlEThBfO8g3C6Wru2971i14M57rZYwx1Xgy9mcyaT8+dD6fb8RIU8HEnidBvgKc/xd09trF5S+v51YPV/2q1FecqF3ePpQaaZSYEDybtUFmwnAAmfCK5SONcIByqeK4rv91Yz4sSJTuAu4Iw2tNtKxQXPPu7SyIREZaI9qHX/FDXYcF+Oe2Koglo8udBbNn/wYWtiKIxmPfdRaoKsr+W4XbUduPWubtzgKAudM/ghzsFh6xItrf3/d0ejF3oTsBwOypd0Beo+2+gUjEaF+6d2r40pXvm9VbC9YlR1F9Cag0K9uO5Q8M9z23czH3SStEewHA3JlPEZ4B1urTsbhT7BvsH8tcyIUO160JAH46/S1G94JeA0ik4iv923t2Zxav/NHxXVXtZoiqog/fc3v+zsz7Z0dHnS7fQ3YdXzqm6CMACp4In00P5z+cTp97U1VeNDCgUEX0mPjOoZ77Xljppun8/EdD6fH9yzJy/HJol7yx4/zVfYNLmca8gBu4N+bFr9xc/yDxAt+81zsxfar+ucIvR3/Hc7PixC5Zzey/FXoz+waXwr8TElIpP0qpWBMScZxJIL0J/3XmJJ6bBaBS3tl0kasauo1bhmDKdfBDFNeeqs0D2znTtIMWsSrwltr2LowMrHckXiDOYYDC/AevUHRf3xRblncz8B/rWiBwA+SvAPnHYLZt5DCB/0Th5yPTlEqjm4deBJNIPT88NnW9a4HCCOgPplKmtgYb+XDEkx8nxqZOQouDJtL2+mkfTmwhNX7g1dq0qeDBntWtwwP7/vqUJTCnsHdjXooInz+07d8vRHQyULlbYAfrI9UUaoxiWStYzonU+IGXG8v/AfTRQzS8jv8TAAAAAElFTkSuQmCC"},277:function(A,e,t){A.exports=t.p+"img/credit.8096104.png"},278:function(A,e,t){"use strict";var o=t(3),r=t(0),l=t(4),n=t(63),d=t(279),c=t(191),m=t(6),f=r.RangeError,y=r.String,B=Math.floor,v=l(c),C=l("".slice),h=l(1..toFixed),x=function(A,e,t){return 0===e?t:e%2==1?x(A,e-1,t*A):x(A*A,e/2,t)},I=function(data,A,e){for(var t=-1,o=e;++t<6;)o+=A*data[t],data[t]=o%1e7,o=B(o/1e7)},S=function(data,A){for(var e=6,t=0;--e>=0;)t+=data[e],data[e]=B(t/A),t=t%A*1e7},O=function(data){for(var A=6,s="";--A>=0;)if(""!==s||0===A||0!==data[A]){var e=y(data[A]);s=""===s?e:s+v("0",7-e.length)+e}return s};o({target:"Number",proto:!0,forced:m((function(){return"0.000"!==h(8e-5,3)||"1"!==h(.9,0)||"1.25"!==h(1.255,2)||"1000000000000000128"!==h(0xde0b6b3a7640080,0)}))||!m((function(){h({})}))},{toFixed:function(A){var e,t,o,r,l=d(this),c=n(A),data=[0,0,0,0,0,0],m="",B="0";if(c<0||c>20)throw f("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return y(l);if(l<0&&(m="-",l=-l),l>1e-21)if(t=(e=function(A){for(var e=0,t=A;t>=4096;)e+=12,t/=4096;for(;t>=2;)e+=1,t/=2;return e}(l*x(2,69,1))-69)<0?l*x(2,-e,1):l/x(2,e,1),t*=4503599627370496,(e=52-e)>0){for(I(data,0,t),o=c;o>=7;)I(data,1e7,0),o-=7;for(I(data,x(10,o,1),0),o=e-1;o>=23;)S(data,1<<23),o-=23;S(data,1<<o),I(data,1,1),S(data,2),B=O(data)}else I(data,0,t),I(data,1<<-e,0),B=O(data)+v("0",c);return B=c>0?m+((r=B.length)<=c?"0."+v("0",c-r)+B:C(B,0,r-c)+"."+C(B,r-c)):m+B}})},279:function(A,e,t){var o=t(4);A.exports=o(1..valueOf)},280:function(A,e,t){var map={"./about.png":283,"./credit.png":277,"./damage.png":289,"./darkmatter.png":275,"./discord.png":281,"./donating.png":276,"./freddec.png":290,"./galaxy0.png":291,"./galaxy0shipT0.png":292,"./galaxy0shipT1.png":293,"./galaxy0shipT2.png":294,"./galaxy0shipT3.png":295,"./galaxy0shipT4.png":296,"./galaxy0shipT5.png":297,"./galaxy0shipT6.png":298,"./galaxy0shipT7.png":299,"./galaxy0shipT8.png":300,"./galaxy0shipT9.png":301,"./kofi.png":284,"./logo.png":285,"./options.png":282,"./patreon.png":286,"./paypal.png":287,"./shipAll.png":288};function o(A){var e=r(A);return t(e)}function r(A){if(!t.o(map,A)){var e=new Error("Cannot find module '"+A+"'");throw e.code="MODULE_NOT_FOUND",e}return map[A]}o.keys=function(){return Object.keys(map)},o.resolve=r,A.exports=o,o.id=280},281:function(A,e,t){A.exports=t.p+"img/discord.3932ea5.png"},282:function(A,e){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAK9SURBVEiJtZNPSFRRFMZ/582MOv4hFMwCE4MWkmXOOBqENGkRtTA3lbRrUbSwRogWtVAsDVolCi4CoW0EES6sVskkmZiSFEGh4D9IhYgCHWecefe2eI5N0zwV02917r3fOd/5zjtPiGO4pQEIgC4HYsAg8ICqtiDr4D2cMOA2cAxwAGNAZwU8BRCL1dKF1jdS5CtEB6hs705VfBSuA52Akfwm0OWFJrE610/WadIEh4+q1rHEyxHwCgwDDpc7m+jyIgCuzGyiISvWcNEAAskVM93pFBUVxI8OMBtTdNhovcHB89co9tez13ucw5eacLmz45yAc3XmiAiFhbtZXFymaF8B4chKYjVPCmfl8WB28BXF/noQYe7DwJobwOPE+qCAkJOTRX5+LqFQmImJ2T+lVJzzl4OYXo3TcnJBBLQmPSc3kRYzsLYFrRXj4zPMzX1nfHwG01SJ5QaTBTS8i8f5JR6+jQaZDPayq+gALndWvIm3wnCzH3hNik1YxRJOVarN2gKEXhZ/5OFM93+sPrcQg09Alk2eEqgxqGoLIjoAmCmLa2nAe38a4TKwB1OlYao7R2BSQwOwlCLPBAJeeGN1XdneDQ4f0IMwCjKElg6cqpSj9/osvzo9YUBuAB/0GXAI6ACGgFGBHoGKCugGcK7lWHt+1cauLTwwBdy0e7eb+7ZhxwWcG1NSwIzV6uDzeUQvIMY0YnwF6ZfquhfJ1K050MpBbKWAaLSMlUgdkeVbREJ9eqD3UTLV1oEe6S8B1QYyQzitFcIbCyt1ZtMCiHqI5ixoyIicQsv8xgpakm/sR6QYTjiVAac3FvgX9gK+2rtAM6BtOf8jICJafCfb0XIBCG27wJpQZe0zDMMPem5HBADEWzOC8HIrApv+0R5/MTOiSjPw2X5d9+cp15YFrgQjCwpg6pctR9xZP5PvfgNcIeGJYD0DyQAAAABJRU5ErkJggg=="},283:function(A,e){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJqSURBVEiJtZYxTBRBFIa/mZ2FPVggHiai0Uih0Ur0DLGQRGJLpBPo7Ek0WmhCgQ0JtlbUlqidhpZgAgVBVCgIMTHGCjUkxvPu9ri9nbFYPBe42bug/MkWO/P2/997++a9EcYYbBAL9OBE10DkMOIqmFzrt/wJlLOtpdg0QixJmN0Zbl+3ctQTEAsoHD2BYRJwk3ve1s8D9lHGnQ87/SEzSLmhgFikD62fAZfreVRPAEArGURey53qUOZlcl3uIX+jx9F6xUaeBlnVGbdQftHyujBbV0As0ofgKftSkkRWwdl2adsGwCmFo2ouuF3jNcbEOZfpno+fFDw8LdgONO9/VLn3tmgV0UoGle6urBmkHLvj6Ik08lYJd08JXBG/544pOpSwCsiqzrj5whyAFAv07FaLFRUN38OEh0Cxai9vACcIb7a+Kl6ScZ3b8w5ggEefNUt5QzkyzHwso1Ppa46MKRC5JmxZ/gWjmwZvK9+MOQDCmOtq94RajTISpnv/5vvC+U4AHqwW+FJMj0Nqc1GBSY1ACjjnCa748ftWKRbLtsiGAlSj4+lFDRQjGP/UTMYtDoJ4d+ivG0E52xJhVo+KX0uxKcEcWQRxO4+cZSBsaH0ISJiVZpCvCKZsRh0OTJ452Bam+tpSyaOMO78z3L4eV1EknwAf6hkqAb2eYKMEGyWITPz4Kb1IKxmEnf4QJAbO7qBZoUHbsA2cJELfG/kzeGrnwAywhuE+//g/ojb3eXKq7Tlo5oacQcp+LOlKg1YyCH1vpHLLH0uuHzjJZoA1tOxH8Jgmo4ky7nyluyu7fx6D5VZR2/wP15bfZs/vrWDrPhYAAAAASUVORK5CYII="},284:function(A,e,t){A.exports=t.p+"img/kofi.21015ad.png"},285:function(A,e,t){A.exports=t.p+"img/logo.c52e94a.png"},286:function(A,e,t){A.exports=t.p+"img/patreon.4f0a993.png"},287:function(A,e){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAwpJREFUWIWtls1rlFcUxn/nvpOMSZx82CDSlklMIJqYCGKtWNKttLjoTiiCIH6tRFy0S5PsFANdFv8GKV10V4pdKhQUFJSitoZuikISGtA6M+/7uJiEzDu592Yy47Obe897nh/n3nPmGjFN3/wMaRZnBoBk4Op7JpFJYMIk5KoYa6B/+P/NQ54v/BfNvS4L7ozd2kuvlszY1UqiRkmqAXcxu8Xj73+LxbrgTk96pB1zADMrmNlJk35l5sZtmAv6hAEsOdCOeTOJ4S4x0zu/cwCygx0DbEh8x8Ti8A4B6LwC6zKzXXRnX+0UYPJDAdSlMd9qwRs78sOgUdnnTaNMvFsVyjbghQT1Tt3oqgwMXAKuCIWiAdXWAUrVScz8LVp9IyprjZXzxTVV1sSxz8tcV8JpSyOBG1K4/FkluBWWjCNTF1lZ+ok55Tz9ANJUGMBbybj6+lKGP3JmfMMnL89uD4CFWzBtA2D6YH0k1C3PbA9g/haUMqE0PL59ck4cO9rwTf54twJMzXWDjXqTZTUR+//w6YvjqQ0MbPoof/G3AljPuFmgO7LajrwZ319j9kSSX9Srxl9bjUzh82+1AyRxeLrGqZOJJUlzxR7FAeQmg0Xe/gKK8qc1Zk9g+0e7vBFmv8cB0FTwmLtcxuhYhnOsTz/R1S1Ku429wzBSNusv+Y0BSW9xyc9xAHOhISTOfYsNDfrvR0uyH7lYXm5cabqEMgjcgVKfOjEXPCN5O9+8ngeYWBw1s15vhqFSu95I+hvZ11yYXIsDJGm4A9oAkFQRuk3qjnJ55IUvJl9SF3mERAAk3gHPgQpoBXgB3KdQ/YXzE69jkE1n6iIA/ZE07ksul/+IGQW/zP2KDaE9fgBJy+2abwUIvQO7uzJ6iqHx9Kxd8zzA2I0BA+8zjKF+gi8k+LMTgM07kBZNVP5FGsyHmNhTSgyKgRxPPwzA0rVV4GNv1JWX14EFfwr3pBOA2LN8U8oib8RqRxVoDcC5cd+ypGXuPvirE4DWZnumqzI7lF9MwQr3uHM69X/Umt4DeCXiYGXUohcAAAAASUVORK5CYII="},288:function(A,e,t){A.exports=t.p+"img/shipAll.37f8908.png"},289:function(A,e,t){A.exports=t.p+"img/damage.5710deb.png"},290:function(A,e,t){A.exports=t.p+"img/freddec.b4c5f95.png"},291:function(A,e,t){A.exports=t.p+"img/galaxy0.8777034.png"},292:function(A,e){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMtSURBVEiJlZRfaBxlFMV/d2azM0nK5o/dSuOfIOYhUJBKWgJFX/pUfbFSH8SA2CrZohZKMaWlFgdpbY22UKxiJKKCIBUfpIogCCKCII2oIJJiTKRpU5q0a9Mmq7OZ+a4Pm92dnVmTzXmb8517zr3z3RkhhpEx/R64lNsiA/GzleC9rX8AG5mj3fMkKPOpuFCUN8RiYS3mAAJnFe6ImgNYceGSUgxDgji/GkKDETBxPhGQsjgnNh+tNcASTiu84nnq1vjFhWLxohpu13XZffiJ9My0Vfz6408TdTavakDW8+TfFSdQZb1YdCbM9xzZBXJOhE/SOwYeTwSEXLEtphKTJYwUT5Wjsc6zqI4u6y0LeX/dI7uzUYkRjobgrRrQUqC3OUV/bXs8C7RXe6CjyNKeqKS1QH9bht5VAwrNDP9T5KXaqayH4zpBHoo+Lzazff42j8V1NZfsfasphB3A5Si/PtPRXSm45aOqAPddq221H6ULeLe2kRhGf9BOv43iC5uk8rG9/t38bHtrJgtw9ccSt+D/Pffmgc4N8foVJwB4bpvk49yH33x2HcgCyPQNwjAE5fpq5nUD9MQ7fdj2TTmY+7PMdTnjCApAizvLUggYuBit6xu6HyMd8vPwWNSv5hXpyZF7UTMG3ESsrXIoNw9wZXzvbFfGlNbyp5L26qKZ63pydAOAbt7fju1cANqwUn1y4fh0/QnUvLb8KrKoGQJe1qln3J6zbXlFsgDO5RlUQdC8frXPkUff8rHdg6A9AIThceDpsmVlTdX7wAXdWZ1NB3Rm8AhO+q8bBXEn8xaTeYvJecPULUPeV5fQn9IvBoeApyJ1u7Rnn5MIwCncDdJanUa6MXIMuNNJaaWgDNcSF9hIwDBod+SohUzrPckASTXHPISgdJxOkY4HNJW5ILHpIFrxSv6L6iA0EsY5E5Lg6qGhgGJAMcEZTXBrD1he/qKRhJkfih/V/B+qa5penMB3t9QeNwFL3LUu0FO9/s7NHcEhGX9Afl0onDhzbeJzxAh2E2jsHhx/otpjg9Avc4OojvDbg4Dm5PDz7zVS19AdlFqxzwO/IPo7tp5vtOw/wb0cfsYC6HYAAAAASUVORK5CYII="},293:function(A,e,t){A.exports=t.p+"img/galaxy0shipT1.d529c3b.png"},294:function(A,e,t){A.exports=t.p+"img/galaxy0shipT2.ab5af6e.png"},295:function(A,e,t){A.exports=t.p+"img/galaxy0shipT3.56bf588.png"},296:function(A,e,t){A.exports=t.p+"img/galaxy0shipT4.4ad0ea5.png"},297:function(A,e){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAALOSURBVEiJtZTNb1RlFMZ/533vnWGmTNNMP2NDSY3GNWFJF7DEqBij3TRqoDCL+m8YYsAEE0IxgjtR01XHWremMZgYF12giRspSCliOzj2Y9r78b6HRWtTaKd3COFsbnLzPM/vvO+550KLVatHE/88arjaf9Hyypoba9XXYvj61w9ra1pbjnS5kepyI9WVNVdpxStZgno9Phr75FdEJJ/P7TSsWrWvtbXJwn5+kwVIcRdUkcDap7s56I0/neXPBIAcATB2t9SrnshyB1kC533bvfn7fHVjgjR1AIRBwOiZEQYG+vufG2BA1CtxkhBtRJudH8ijqoCEWf7MIS8+asReNTxQyCG75X+2F4NXMhp8sfXCAU1nUJnSIt6d8Bo3bWI9pf3sZPp6KbY/XhqW9b00e5orU8mQendb4XtVbDNAI6ZbhOmVvLs9Wk2OtQQYm9Y+72US6G0W/HQJ9AlSHZvWvkxAmrorAp2thu+AdMbOfbEvoFJN31N451nDtyHKm2cn03f3BIxOaFnh8n4BNxcMPz/Y/8MTYfz0D9q9C2By7jMy7v23mnBrKXM3u4PEffoE4Nx36UmE97Ocz1AfnKumbwEEZ6paQt3nAOVew8GyoBvKwl8e51pLC0PoHbSEVll6oKzUFWC8MqEzxuLOAwM2hGKnUCxAV4/Q81LrS95z2CI56CgJL79qsJub069597EBRgAKRUEBu3XFhcLmM/KbL9TvDl7c2l0TbPkEjIFcbntOI0bhW6Dpf/WTX0LuL64yv7CEV8WrcufuQ/6YW+TL2b09+n+W8o25fioYCyNb6uo3H+4UtXfIdGBtGbFlF0cz0UYMCigkSQppMmOMLQfWloOQv3d6Dw2aoTCypWtvBx8FAOPDsnrxjv7kHS5x2DDAi3Dz6hvyL8BVOD47O9eByBTgjfOnjh4ZrG+fck5vxY4+VTCG+bCT38eHZRXgMXWJHSqawo19AAAAAElFTkSuQmCC"},298:function(A,e){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAACmAAAApgHdff84AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAX1QTFRF////ZmZmzGYA220AYGBg34AAzGYAyG0AzGYAz3AA0YAAyG8AhYVc0HEA/64AyG0AdWpFUlJSK1eHQkJC0nsA03oA55IAIk17J1qS0noAyWwA4Z0LyWsAJ1yQQkJCQ0NDH0t8QkJCyWkAQUFB14oF0XoA46IU46QUJ1yRclUrS0tLTU1NHUp7QkJCjFgdMVN1k3Am0XkAJ1uSx2UA0YUJrHQXG0h3IklypmoTQkJCRU9aUlJSf1klumMHkFocL1V7xmIAznUAGUVzQkxW0HkBHkdzxmMAGEJwGkNvKFuRKVuPQEpUQkJCRlJeRm+aRnCcR1JfS2h6UICuUIGxUlJSUlNUU1RWVFxkVVlPV2JrZXF8ZnN+ZpC5Z5K8bJrFbZzJeZGmgLfqhHRKiKjEkKqmkZJwk8LtmXY3nMjvop14o6N/pII+q405rLqrsY9Lt8GtuKl9vq5+v34RwH4RxF8AxmMAz3YA0XoA0YkV0axF0q1F1owW4bZI/q4B/64A08CyHwAAAEd0Uk5TAAUFBwgICg4PEBYXGRspKjAyNTo+RUtZW2BtcHeIiIqWm5ygpaqzs7W3vsTHyMnS3OHi4+jp6urs8PT29/j5+vv7/P39/v6gzauNAAABHElEQVQokWNgIBkoCmMTFVZk8JGDcVhVjTlhbDkfJAnR8hIZZAl5QZgOC1sOKFNQHiihZc0I5erqQhmM1lpACe0QFgiXz8BUDMJiCdFGSPCo1dWVl5sIIEsISchqGOXUVqZkVpQXOZnpKIiDJaxCvDw9PQPrqhLT0hIryiPc3d09QpyBEr4hQcHBwal1uclR0ckF5dn+/v5+Id5AiYCQuPj4+Ky6/ITQsITC8rzY2NgYsATMqJqM8MiMaiSjQJbr2wMtr0lKry4vdnI1h1oOcq6yJQOPOtS5lspI/tC0YwN6UFoF6EEmGz2oBDBIuFxKlWDBJ1lWwg8JEmAgMhu6ScEkRBwd2CGBCAp2Jl5EHHGzoccHMgBK4IxakgEAXIZLS/GXixEAAAAASUVORK5CYII="},299:function(A,e){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANTSURBVEiJnZQ9bFxFFIW/O+/P+zawu9iJwZZMJIsCWSAFCYgwKBKCgNzSIAWBRJUuLYoQUFDxU0BJS5WCAkhIDBSQWCCjQINwY5mNLELiCBu/9f5435s3l8J47cT7dgO3Gt1z7jlz586MMCS+X9GHIuPOOuSFpCPjAJWS3jTopa6Yd08clfqgeikCVNUsXnMfZk7OiIjEJkNxqIIRQ9sFAC4Q98ETR80bIqL/yeDL3/QXTzg2WU4Zj1r4xt2GW2dYS2P+2IoQWJybkeP9dEy/5IUlfbMScawWdpksbR0QB/CNY3KkSS1MuSfiySu/66t31cHHyxo9nHO9FtnRB8tJj+Ccw2YWBIIgQGSv9FqrQle9jWpHHpiZkXRgBxNbvO57jI5FnZ54bnOSpEGz1aLZbLGZJNg879WMRh2cyn0bEc8OPSI1POcZKPtZL9dqt8htTiNp0Ega5Dan3Wr38EO7XOHAHPrN4PBGW1XYuRSqirU5adrFWou1lm43Jd/XgaCst9GNFi/eKeYfkBeSaoQ4FYwoIoIxBj8IEdkGIAx8xOzNwCGMxiog3w3vQFnoWGE73/OOSyV836Naq1KtVfF8n3ik1MO3rQ8IAr8ONUgNnzS7dP7KRnq5MAqJyzEigohQLseEUdjD17MRRMg7cH6owalH5e8czq21Qm3v6yLwg77rdu7TtCEl337x/LQkQw0Abh3idCvVJWvTzd1c0ZMPRIk9u66+/0o/vPCrqNfrVZu5z8MgeCSOSzV1ymays8FqpYLxenub9wLv5VqtttlPp9AAQFVlZXnlNWPM22LMRJZm4b8GznjmJxX9aGxs7FzRRzfU4LaOlurHM2N/BBgJosenpqeu3k1d3xnsxvzFb68uLiyeBuia3NvNp2kaAsxfmH9n4fIPA40GdjD/1TebR44cllK5tIFyP8LO3VW2EW6u3bg17nuezJ54qlSkcfAl7wtVpdvtbqVpugqs3olbm93re16h+HADq8uNJLl4cu7kW/3wS+e/PpulWy8N0ig8ooVVnTApcb3BxKnH5HI/zqc/6zPTFW64kPbTU/JnP07hkNUym8OcUd4r4vjwfg5zapkdwOkfDtZEcJNVsiLOZJVM4bqBW0WcoXFlRT/7P9hu/AMOGFxrBe3cSwAAAABJRU5ErkJggg=="},300:function(A,e){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAM5SURBVEiJpZVPaFxVFMZ/5857byaTSSZDk6ZOaw2dioWCSiqCaaETbIWALlqIGCokm7rWgkKxiO4EtyKkbqVBXLioJYsijaCx+CcLNypJaW2n2CGpaZxO3rw3895x0ZlJ4vzJhJ7Vufec73znO/fd+4QOTaemYvj+xfv5cEScteFds7P/doKzOiXA8y4Bp3xXccLe34G9ncBMq4COjyfr/pkzrwKnamvfI732yhsf1tb/HNnI7YhAJyYOY1nXdWws+mhDJ/6fUynrJMDN7FSsFDXX/z46cXgnCi4Ah0ilJgGCePeLDQTG3gsQ9dxJ4JCqvt+sUKszOFnt/ARwcenCJw9rgVu5PAC2ZVX49guQai56oiMF1bHsqi73tWigboKkq+7AYm2k7RTceu8zKae7PAmCqPFLCWZm2hL8cf5couLYqG2X7L+WhdnZ9gQMDRHKWhSgEu9e306Bl0rWcmIMDTXEO7oHu1MxW1EAImYQACMS6QTb8h7UTFVjtiUHHMvgWIYghCCEcqDO6qr2PTZBoei/A3Q1jfnFS49F0BO3B0X4qFXcLVXG9j/Rn9kxgW0ZBpIOyW5rCLBbgVXBRCL9maf2kEw0Fbn1kFXVFIr+ByINn3NbCwIl1ddLbLe5qqqjIlJpqqBQ9N8V4fyOqm+ykh8ey+WLX2/ek5qjqs5D119B6WkGLpfL2LbN3WUX112nqyvelMQY0YTVm0inZR02jehBqZS21DQtfu3KZa58OcPwS0f5eX6efO42z40c5823G9+3MFTRSOF5YH4LQTkWW7Fc//XmBN98rKoHFn78Iczn7hiAPxd+Kse7zKfN8r1uc6Pm1wkGciMBfnQVJ7qApxbiP8tq4Tt54dfyW6dPvwxkVBXbcYYfIfTe/sHec/rLEZtCz3F85zdUKkS9YaJe/Xe6cQZL2YNEWCTkJEIfwlf4DMgzcyvNuqzjrmX7UZYRxoEHKFcRnpbRuaUtCtoWuZndA3yP6FmWACOfIxyT0bl722E3CDRYg8g0hhwS3kfNNEnHBaCChUWGQLqJAEqmjvUdF9ufxoQ3CI0LTBMJ1hpG1FbBYnYfFncIeY3bgHIZ4UkZnctth/0P5OQpep8vudIAAAAASUVORK5CYII="},301:function(A,e){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKTSURBVEiJvZXNSxRxGMc/z8zqrpq2FmskhahQVJdyCUKL6h+wLtu93JVWiU4REcHUqWMHg14hii5FeSro1AtWRCEUbEG0rZaiLZqui2zqzDwdSlj3hUajntvv+3yf72d+M7+ZETyWxnqOO4576ntmrnredR5t6L8Z8TInnsKj8T0gzxbXQ+MZ/P6KeOO9G5f+NGt4AYB05K9qAhU49sJBL5MeAfiX4EQAw1/GuyLAimtZgPThbtJdR/8eoENWm6asYKE+19zMXFNTsT9lBXXIavMMQNxODKcVIJGIVE5u1b2FFjskTYlEpPJXitOKuJ3eAb9r4MuRxpm6+se5kO4v7DlBaZ6pXfPi+eeu4i15AaR0ZruB7w1Ke/lxDRs+8/VnN7OznMNXShwmG/5m5k6LLu37h1OgRfbQF3O2L6W594DlCfBdcjvQ4l7D9SsATBToipij5DaXyvr/74HGejdJ1q1cXNsYJJ2iE8uUG8DVvE+ZrYbGejeVBahlGRqNd6M6aPyQKoC0W4010867hVARYNytwcp2kHarABBEUH2rsfhJjUTMJQDtPtbKSPoxyGWgZrGZtIN8derKbn/YqSNp1+dLAVTOszo0oNGeLQA+jfZswXUGgUDZpMVa9/u5Z/7o3AUMarSnzYdQj3oIB9j963bwMevFHUCoL3lMy5an39PS+ufH1IcaY4jezRedCu0AVi0nSEUdRO4XiGM+udaXAg7l6y/PxF6BNC4H4JgsyNWLhwr1ks9AxDi74YlxrtLOhmtXJ6i2Z3kYXvOhYcEQgEx4rZgV5uYTyQTbJqepydnTkwfMCyWzyl2RxnrvoBoB+DQ6xaqAb9/6/ltPAfRIvAVDkgDZ3DwT07mRlge3N5bK+Qky/uXmroPt2QAAAABJRU5ErkJggg=="},312:function(A,e,t){"use strict";t.r(e);t(17),t(14),t(18),t(9),t(24),t(16),t(25);var o=t(7),r=t(75);function l(object,A){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);A&&(t=t.filter((function(A){return Object.getOwnPropertyDescriptor(object,A).enumerable}))),e.push.apply(e,t)}return e}function n(A){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(A,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(source,e))}))}return A}var d={props:["upgrade"],computed:n(n({},Object(r.c)({currentGalaxyId:"currentGalaxyId",galaxyById:"galaxy/byId"})),{},{currentGalaxyCreditCount:function(){return this.galaxyById(this.currentGalaxyId).creditCount}}),methods:n(n({},Object(r.d)({galaxyApplyModifier:"galaxy/applyModifier",galaxySetCreditCount:"galaxy/setCreditCount",shipApplyModifier:"ship/applyModifier",upgradeSetCount:"upgrade/setCount"})),{},{onBuy:function(){this.upgradeSetCount({upgradeId:this.upgrade.id,value:1}),this.galaxySetCreditCount({galaxyId:this.currentGalaxyId,value:this.currentGalaxyCreditCount-this.upgrade.cost}),"darkmatter"==this.upgrade.modifier.type?this.galaxyApplyModifier(this.upgrade.modifier):this.shipApplyModifier(this.upgrade.modifier)}})},c=t(62),component=Object(c.a)(d,(function(){var A=this,e=A.$createElement,o=A._self._c||e;return A.upgrade.count<1?o("div",{staticClass:"col-12"},[o("div",{staticClass:"bg-secondary p-1 rounded-1"},[o("div",{staticClass:"row g-1 align-items-center"},[o("div",{staticClass:"col-auto"},[o("div",{staticClass:"bg-dark p-1 rounded-1 d-flex align-items-center justify-content-center",staticStyle:{width:"50px",height:"40px"}},["darkmatter"==A.upgrade.modifier.type?o("img",{attrs:{src:t(275),width:"24",height:"24"}}):A._e(),A._v(" "),"darkmatter"!=A.upgrade.modifier.type&&1==A.upgrade.modifier.shipIds.length?o("img",{attrs:{src:t(280)("./"+A.upgrade.modifier.shipIds[0]+".png"),width:"24",height:"24"}}):A._e(),A._v(" "),"darkmatter"!=A.upgrade.modifier.type&&A.upgrade.modifier.shipIds.length>1?o("img",{attrs:{src:t(288),width:"24",height:"24"}}):A._e()])]),A._v(" "),o("div",{staticClass:"col px-2"},["darkmatter"==A.upgrade.modifier.type?o("div",{staticClass:"text-light"},[A._v(A._s(A.$t("antimatter")))]):A._e(),A._v(" "),"darkmatter"!=A.upgrade.modifier.type&&1==A.upgrade.modifier.shipIds.length?o("div",{staticClass:"text-light"},[A._v(A._s(A.$t("shipName_"+A.upgrade.modifier.shipIds[0])))]):A._e(),A._v(" "),"darkmatter"!=A.upgrade.modifier.type&&A.upgrade.modifier.shipIds.length>1?o("div",{staticClass:"text-light"},[A._v(A._s(A.$t("shipName_shipAll")))]):A._e(),A._v(" "),o("div",{staticClass:"text-light small"},[A._v(A._s(A.$t("modifierType_"+A.upgrade.modifier.type)))])]),A._v(" "),o("div",{staticClass:"col-auto px-2"},["damage"==A.upgrade.modifier.type?o("span",[o("small",{staticClass:"text-muted"},[A._v("x")]),A._v(" "+A._s(A.upgrade.modifier.coeff))]):A._e(),A._v(" "),"darkmatter"==A.upgrade.modifier.type?o("span",{staticClass:"text-success"},[o("small",{staticClass:"text-muted"},[A._v("+")]),A._v(" "+A._s(A.upgrade.modifier.coeff)+"%")]):A._e(),A._v(" "),"count"==A.upgrade.modifier.type?o("span",[o("small",{staticClass:"text-muted"},[A._v("+")]),A._v(" "+A._s(A.upgrade.modifier.coeff))]):A._e()]),A._v(" "),o("div",{staticClass:"col-auto"},[o("button",{staticClass:"btn btn-primary py-1",class:{disabled:0==A.upgrade.canBuy},staticStyle:{width:"85px"},attrs:{type:"button"},on:{click:function(e){return A.onBuy()}}},[o("div",[o("span",{staticClass:"text-muted"},[A._v(A._s(A.$t("btnName_buy")))])]),A._v(" "),o("div",{staticClass:"d-flex align-items-center justify-content-center small"},[o("img",{attrs:{src:t(277),width:"10",height:"10"}}),A._v(" "),o("FormatNumber",{staticClass:"ms-1",attrs:{value:A.upgrade.cost}})],1)])])])])]):A._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FormatNumber:t(274).default})}}]);