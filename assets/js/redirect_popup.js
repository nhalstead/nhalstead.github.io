/* You are not meant to understand this */ 

var lists['whitelist'] = [ "https://github.com/nhalstead/*", "https://podcast-connects.com/*" ];

var elements = document.getElementsByTagName('a');
for(var i = 0, len = elements.length; i < len; i++) {
	if (elements[i].href.match("http*") && elements[i].hasAttribute("metaE")){
		elements[i].setAttribute("tlink", elements[i].href);
		
		if (elements[i].addEventListener)
			elements[i].addEventListener('click', linkclick, false);
		else
			elements[i].attachEvent('onclick', linkclick);
		
		/*
		 elements[i].onclick = function (evt) { 
			 swal({ 
				 title: "Are you sure you want to go?", 
				 text: "You are about to leave the current domain!", 
				 icon: "warning", 
				 buttons: true, 
				 dangerMode: true, 
			 }) 
			 .then((willDelete) => { 
				 if (willDelete) { 
					 window.location.href = evt.getAttribute("tlink");  
				 } 
				 else { 
					 console.log("No Redirect");  
				 } 
			 }) 
		 }
		*/		 
		elements[i].removeAttribute("href");
	}
}


function linkclick (e) {
	var e = window.e || e;
	e.preventDefault();
	var anchor = e.target.closest("a"); 
	swal({
		title: "Are you sure you want to go?",
		text: "You are about to leave the current domain!",
		icon: "warning",
		buttons: true,
		dangerMode: true,
	})
	.then((willDelete) => {
		if (willDelete) {
			console.log(anchor.getAttribute("tlink"));
			window.location.href = anchor.getAttribute("tlink");					  
		}
		else {
			console.log("No Redirect"); 
		}
	})
}