

var pic = document.getElementById('gayflag');

var imageList = ['gay.jpeg','lesbian.jpeg','bisexual.jpeg','pansexual.jpeg','asexual.jpeg','transgender.jpeg'];

var index = 0;

function slideshow (){
  pic.setAttribute('src',imageList[index]);

  if (index == imageList.length-1){
    index = 0;
  }
  else{
    index++;
  }

}
setInterval(slideshow,2000);
