
 

 var hotsearch = document.getElementsByClassName('qyn_index_hotsearch').item(0);

var a = document.createElement("a");

var search = '{ "sites" : [' +
	    '{ "name":"" , "a":"" },' +
	    '{ "name":"" , "a":"" },' +
	    '{ "name":"" , "a":"" } ,'+
	    '{ "name":"" , "a":"" }, '+
	    ' { "name":"" , "a":"" },'+'{ "name":"" , "a":"" },'+
	    '{ "name":"" , "a":"" },'+'{ "name":"" , "a":"" },'+
	    '{ "name":"" , "a":"" },'+'{ "name":"" , "a":"" },'+
	    '{ "name":"" , "a":"" },'+'{ "name":"" , "a":"" },'+
	    '{ "name":"" , "a":"" },'+'{ "name":"" , "a":"" },'+
	    '{ "name":"" , "a":"" },'+'{ "name":"" , "a":"" },'+
	    '{ "name":"" , "a":"" },'+'{ "name":"" , "a":"" },'+
	    '{ "name":"" , "a":"" },'+'{ "name":"" , "a":"" },'+
	    '{ "name":"" , "a":"" },'+'{ "name":"" , "a":"" },'+
	    '{ "name":"" , "a":"" },'+'{ "name":"" , "a":"" },'+
	    '{ "name":"" , "a":"" },'+'{ "name":"" , "a":"" },'+
	    '{ "name":"" , "a":"" },'+'{ "name":"" , "a":"" },'+
	    '{ "name":"" , "a":"" },'+'{ "name":"" , "a":"" },'+
	    '{ "name":"" , "a":"" },'+'{ "name":"" , "a":"" },'+
	    '{ "name":"" , "a":"" },'+'{ "name":"" , "a":"" },'+
	    '{ "name":"" , "a":"" },'+'{ "name":"" , "a":"" },'+
	    '{ "name":"" , "a":"" },'+'{ "name":"" , "a":"" },'+
	    '{ "name":"" , "a":"" },'+'{ "name":"" , "a":"" },'+
	    '{ "name":"" , "a":"" },'+'{ "name":"" , "a":"" },'+
	    '{ "name":"" , "a":"" },'+'{ "name":"" , "a":"" },'+
	    '{ "name":"" , "a":"" },'+'{ "name":"" , "a":"" },'+
	    '{ "name":"" , "a":"" },'+'{ "name":"" , "a":"" },'+'{ "name":"" , "a":"" },'+
	    '{ "name":"" , "a":"" },'+'{ "name":"" , "a":"" },'+'{ "name":"" , "a":"" },'+
	    '{ "name":"" , "a":"" },'+'{ "name":"" , "a":"" },'+'{ "name":"" , "a":"" },'+
	    '{ "name":"" , "a":"" }]}';
 // var search='{ "name":"qyn_index_hotsearch"}';
   searchText=JSON.parse(search); 
 var li = hotsearch.getElementsByTagName("dd");
 for(var i = 0;i<li.length;i++){

     li[i].innerHTML = "<a href="+searchText.sites[i].a+">"+searchText.sites[i].name+"</a>";
 }







    


	
		

	