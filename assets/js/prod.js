$(document).ready(function(){$(".dropbtn").click(function(){console.log(!0),$(".dropdown-content").removeClass("show"),$(".dropbtn").css("color","white"),$(this).css("color","#333333"),$(this).next().toggleClass("show")}),window.onclick=function(e){$(e.target).hasClass("dropbtn")||($(".dropbtn").css("color","white"),$(".dropdown-content").removeClass("show"))},$("#nav-icon").click(function(){$(this).toggleClass("open"),$("#nav-icon").hasClass("open")?$(".menu-down").addClass("show"):$(".menu-down").removeClass("show")}),$(window).on("resize",function(){var e=$(window).width();1024>=e&&e>=767?$(".dropdown-content:last").addClass("move"):$(".dropdown-content:last").removeClass("move")}).trigger("resize")}),function(e){"use strict";function t(){var t={zoom:13,panControl:!1,rotateControl:!1,scaleControl:!1,mapTypeControl:!1,streetViewControl:!1,scrollwheel:!1,zoomControl:!0,styles:[{featureType:"administrative.country",elementType:"geometry.stroke",stylers:[{lightness:"40"},{visibility:"on"}]},{featureType:"administrative.country",elementType:"labels",stylers:[{visibility:"simplified"}]},{featureType:"administrative.province",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"administrative.province",elementType:"labels",stylers:[{visibility:"simplified"},{lightness:"10"}]},{featureType:"administrative.locality",elementType:"geometry.stroke",stylers:[{visibility:"on"}]},{featureType:"administrative.locality",elementType:"labels",stylers:[{visibility:"simplified"},{lightness:"25"}]},{featureType:"administrative.neighborhood",elementType:"labels.text.fill",stylers:[{color:"#243c64"}]},{featureType:"landscape",elementType:"all",stylers:[{hue:"#ff8800"},{saturation:"19"},{lightness:"11"},{gamma:1}]},{featureType:"poi",elementType:"all",stylers:[{saturation:-1.0989010989011234},{lightness:11.200000000000017},{gamma:1}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#576377"},{lightness:"31"},{saturation:"-30"}]},{featureType:"road",elementType:"geometry",stylers:[{visibility:"on"},{lightness:"30"}]},{featureType:"road",elementType:"labels.text",stylers:[{weight:"1"},{saturation:"0"},{lightness:"10"},{gamma:"1"},{visibility:"on"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#243c64"},{lightness:"-32"},{saturation:"43"}]},{featureType:"road.highway",elementType:"all",stylers:[{hue:"#ff8800"},{saturation:-61.8},{lightness:"81"},{gamma:1}]},{featureType:"road.arterial",elementType:"all",stylers:[{hue:"#ff0300"},{saturation:-100},{lightness:51.19999999999999},{gamma:1}]},{featureType:"road.local",elementType:"all",stylers:[{hue:"#FF0300"},{saturation:-100},{lightness:52},{gamma:1}]},{featureType:"water",elementType:"all",stylers:[{hue:"#0080ff"},{saturation:"-7"},{lightness:"7"},{gamma:1}]},{featureType:"water",elementType:"labels",stylers:[{visibility:"off"},{lightness:"30"}]}]};a=new google.maps.LatLng(i,o),e("#map").length>0&&(s=new google.maps.Map(document.getElementById("map"),t),s.setCenter(a));var n="http://autare.notyet.live/wp-content/themes/autare/assets/images/pin.png";l=new google.maps.Marker({position:new google.maps.LatLng(i,o),map:s,icon:n,title:""})}var s,a,l,i="54.679176",o="25.276102";e("#map").hasClass("exh")&&(i=e("#map").data("lat"),o=e("#map").data("lng")),e("#map").length>0&&google.maps.event.addDomListener(window,"load",t)}(jQuery),jQuery(document).ready(function(){jQuery("img.svg").each(function(){var e=jQuery(this),t=e.attr("id"),s=e.attr("class"),a=e.attr("src");jQuery.get(a,function(a){var l=jQuery(a).find("svg");"undefined"!=typeof t&&(l=l.attr("id",t)),"undefined"!=typeof s&&(l=l.attr("class",s+" replaced-svg")),l=l.removeAttr("xmlns:a"),!l.attr("viewBox")&&l.attr("height")&&l.attr("width")&&l.attr("viewBox","0 0 "+l.attr("height")+" "+l.attr("width")),e.replaceWith(l)},"xml")})});
//# sourceMappingURL=prod.js.map
