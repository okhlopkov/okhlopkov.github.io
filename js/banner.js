function randomBanner(){
  var banners = ["url('../img/banners/1.jpg')",
                  "url('../img/banners/2.jpg')",
                  "url('../img/banners/3.jpg')",
                  "url('../img/banners/4.jpg')",
                  "url('../img/banners/5.jpg')",
                ];

  setInterval(function() {
    var random = Math.floor(Math.random() * banners.length + 0);
    console.log(random);
    document.getElementById('banner').style.backgroundImage=banners[random];
  }, 5000)
}
