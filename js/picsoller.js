	
var imgs = document.getElementsByClassName("img1");
	var  index = 0;
	setInterval(qyn_carousel,10000);
	function qyn_carousel(){
		imgs[index].style.display="none";
		index= ++index==imgs.length?0:index;
		imgs[index].style.display="block";
	}