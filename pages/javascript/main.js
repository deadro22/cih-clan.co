$(function(){
  var date = new Date();
  $("#cp_rt").text("© " +date.getFullYear()+ " CIH All Rights Reserved");
  $(window).on("scroll",function(){
    var height = $(window).scrollTop()
    if(height > 50){
    $("#navbar_mn").css("background-color","#0f0f0f");
  }else{
    $("#navbar_mn").css("background-color","");
  }
  });
  function ch_req(pass){
    if($("#username").val() == "" || $("#email").val() == "" || $("#message").val() == ""){
      pass.preventDefault();
      $("#er_mn").text("all fields are required !").hide().toggle(500);
    }
  }
  $(".fr_cont").on("submit",ch_req);

  function generateft(id,image,name,uname,games){
    var id_wid =  '<div class="col-md-3">'+
       '<div class="thumbnail" id="id_bg">'+
         '<img src="/images/skins/'+image+'" alt="creativecommons.org" style="width:150px" id="id_ig">'+
          '<div class="caption">'+
            '<p class="id_name">'+name+'</p>'+
            '<div class="info_mn">'+
             '<p style="text-shadow:2px 2px 2px black;" id="cp_mn">username: '+uname+'</p>'+
             '<p style="text-shadow:2px 2px 2px black;" id="cp_mn">Game: '+games+'</p>'+
           '</div>'+
         '</div>'+
      '</div>'+
    '</div>';
    $(id).append(id_wid);
    $("#gn_bg").append(id_wid);
  }
  function genGr(gameName,gameImg,href){
    var gr_wid = '<div class="col-md-4">'+
   '<a href="'+href+'" class="mn_a"><div class="thumbnail">'+
      '<img src="'+gameImg+'" alt="game image" style="width:100%" class="mn_img">'+
       '<div class="caption">'+
         '<p>'+gameName+'</p>'+
       '</div>'+
    '</div></a>'+
   '</div>'+
  '</div>';
  $("#gr_mn").append(gr_wid);
  }

  genGr("Fortnite","/images/es1.jpg","/fortnite");
  genGr("Apex legends","/images/es3.jpg","/ApexLegends");
  genGr("League of legends","/images/es2.jpg","/LeagueOfLegends");

  //fortnite
  generateft("#fr_bg","pc.PNG","Oussama rifi","Deadro","Fortnite");
  generateft("#fr_bg","iconp.jpg","Adam toumi","Bring","Fortnite");
  generateft("#fr_bg","pc.PNG","Youssef rifi","tagernit","Fortnite");
  generateft("#fr_bg","ps4.PNG","Wissem derouich","wissem494","Fortnite");
  generateft("#fr_bg","ps4.PNG","Med salim ben amer","kill4u","Fortnite");

  //apex

  generateft("#ap_bg","pc.PNG","Adam toumi","Bring","Apex legends");
  generateft("#ap_bg","pc.PNG","Med salim ben amer","kill4u","Apex legends");
  generateft("#ap_bg","ps4.PNG","Oussama rifi","Deadro","Apex legends");
  generateft("#ap_bg","ps4.PNG","Wissem derouich","wissem494","Apex legends");
  generateft("#ap_bg","ps4.PNG","testing","tagernit","Apex legends");
  //League
  generateft("#lol_bg","pc.PNG","Oussama rifi","Deadro","League of legends");
  generateft("#lol_bg","pc.PNG","Adam toumi","Bring","League of legends");
  generateft("#lol_bg","pc.PNG","Wissem derouich","wissem494","League of legends");
  generateft("#lol_bg","pc.PNG","Med salim ben amer","kill4u","League of legends");
  generateft("#lol_bg","pc.PNG","Youssef rifi","tagernit","League of legends");
  //
  $(".thumbnail").on("click",function(event){
    $(this).find(".info_mn").toggle(300);
  });
  $(".thumbnail").on("mouseleave",function(event ){
    $(this).find(".info_mn").hide(300);
  });
});
