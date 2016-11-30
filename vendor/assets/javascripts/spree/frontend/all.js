// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require spree/frontend

//= require_tree .
//= require spree/frontend/spree_auth
//= require spree/frontend/spree_social_products

function showTable(val){
var pin = [110001, 110003, 110004, 110005, 110007, 110008, 110010, 110011, 110012, 110014, 110015, 110016, 110017, 110018, 110019, 110021, 110022, 110023, 110024, 110025, 110026, 110027, 110028, 110029, 110048, 110049, 110055, 110057, 110058, 110059, 110063, 110064, 110065, 110067, 110069, 110070];
for (var i =0 ;i<pin.length ; i++){
         if( val == pin[i]){
           document.getElementById("show").style.display="block";
	   document.getElementById("notshow").style.display="none";
           break;
         } else{
           document.getElementById("notshow").style.display="block";
	   document.getElementById("show").style.display="none";
         }  
     }
}

