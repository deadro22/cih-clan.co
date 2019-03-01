$(function(){
  //lang control -s

  //french
  $("#mn_fr_ch").on("click",function(){
    var lng = $("#mn_fr_ch").text();
    $("#mn_lng").text(lng);
    translator.lang("fr");
  });
  //English
  $("#mn_eng_ch").on("click",function(){
    var lng = $("#mn_eng_ch").text();
    $("#mn_lng").text(lng);
    translator.lang("en");
  });

  var dict = {
  "Home": {
    fr: "Accueil",
    en: "Home"
  },
  "members": {
    fr: "membres",
    en: "members"
  },
  "tournaments":{
    fr: "tournois",
    en: "tournaments"
  },
  "about":{
    fr: "à propos",
    en: "about"
  },
  "Teams":{
    fr: "Les équipes",
    en: "Teams"
  },
  "Media":{
    fr: "Médias",
    en: "Media"
  },
   "welcome to CIH AKA close in t'head. CIH is a tunisian clan looking for pro gamers. Well it's just a simple clan for now but with your":{
     fr:"bienvenue à CIH AKA tout près en tête. CIH est un clan tunisien à la recherche de joueurs professionnels. Eh bien, c’est juste un simple clan pour l’instant mais avec votre",
     en:"welcome to CIH AKA close in t'head. CIH is a tunisian clan looking for pro gamers. Well it's just a simple clan for now but with your",
   },
   "help we can achive our goals by making this community and this clan bigger giving us the chance to be a part of the esports. We all have":{
     fr:"aide nous pouvons atteindre nos objectifs en élargissant la communauté et le clan en nous donnant la chance de faire partie de l’esports. Nous avons tous",
     en:"help we can achive our goals by making this community and this clan bigger giving us the chance to be a part of the esports. We all have",
   },
   "the same passion so let's play together and dream big.And if you want to join the clan all you have to do is contact us by joining":{
     fr:"même passion alors jouons ensemble et rêvons grand. Et si vous voulez rejoindre le clan, il vous suffit de nous contacter en nous joignant",
     en:"the same passion so let's play together and dream big.And if you want to join the clan all you have to do is contact us by joining",
   },
   "our discord and of course you can join us on instagram ,facebook and twitter as well just to keep in touch!":{
     fr:"notre discorde et bien sûr vous pouvez nous rejoindre sur instagram, facebook et twitter ainsi juste pour rester en contact!",
     en:"our discord and of course you can join us on instagram ,facebook and twitter as well just to keep in touch!",
   },
   "coming soon!":{
     fr:"arrive bientôt!",
     en:"coming soon!"
   },
   "our website is under construction and our team is growing slowly":{
     fr:"notre site est en construction et notre équipe grandit lentement",
     en:"our website is under construction and our team is growing slowly"
   },
   "so please be patient":{
     fr:"alors s'il vous plait soyez patient",
     en:"so please be patient"
   },
   "All Members:":{
     fr:"Tous les membres:",
     en:"All Members:"
   },
   "please put a valid email address so that we can respond to it":{
     fr:"veuillez indiquer une adresse e-mail valide afin que nous puissions y répondre",
     en:"please put a valid email address so that we can respond to it"
   },
   "Contact us":{
     fr:"Contactez nous",
     en:"Contact us"
   },
   "username":{
     fr:"Nom d'utilisateur",
     en:"username"
   },
   "Email address":{
     fr:"Adresse électronique",
     en:"Email address"
   },
   "Submit":{
     fr:"Soumettre",
     en:"Submit"
   },
   "all fields are required !":{
     fr:"Tous les champs sont requis !",
     en:"all fields are required !"
   },
   "Fortnite Players":{
     fr:"Joueurs Fortnite",
     en:"Fortnite Players"
   },
   "League of legends Players":{
     fr:"Joueurs League of legends",
     en:"League of legends Players"
   },
   "Apex legends Players":{
     fr:"Joueurs Apex legends",
     en:"Apex legends Players"
   },
   "oops something went wrong":{
     fr:"oups quelque chose a mal tourné",
     en:"oops something went wrong"
   },
   "Return home":{
     fr:"Retour à l'accueil",
     en:"Return home"
   },
   "cool, we got your message.Thank you for contacting us!":{
     fr:"cool, nous avons reçu votre message. Merci de nous contacter!",
     en:"cool, we got your message.Thank you for contacting us!"
   },
}
   var translator = $('body').translate({lang: "en", t: dict});


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
    var email = $("#email");
    if($("#username").val() == "" || $("#email").val() == "" || $("#message").val() == ""){
        pass.preventDefault();
        $("#er_mn").text("all fields are required !").hide().toggle(500);
    }
  }
  $(".fr_cont").on("submit",ch_req);

  function generateft(id,image,name,uname,games){
    var id_wid =  '<div class="col-md-3">'+
       '<div class="thumbnail" id="id_bg">'+
         '<img src="/images/Skins/'+image+'" alt="creativecommons.org" style="width:150px" id="id_ig">'+
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
  generateft("#fr_bg","pc.png","Oussama rifi","Deadro","Fortnite");
  generateft("#fr_bg","pc.png","Adam toumi","Bring","Fortnite");
  generateft("#fr_bg","pc.png","Med salim ben amer","killu4","Fortnite");
  generateft("#fr_bg","ps4.png","Wissem derouich","wissem494","Fortnite");
  generateft("#fr_bg","ps4.png","Amine ammari","R3kt_By_Am1ne","Fortnite");
  //apex


  //League

  //
  $(".thumbnail").on("click",function(event){
    $(this).find(".info_mn").toggle(300);
  });
  $(".thumbnail").on("mouseleave",function(event ){
    $(this).find(".info_mn").hide(300);
  });
});
