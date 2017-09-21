if (window.location.protocol == "http:") { window.location.href = "https" + window.location.href.slice(4); }
else { console.log("You are in HTTPS, Good Job!"); }

//var loc = window.location.href+'';
//if (loc.indexOf('http://')==0){ window.location.href = loc.replace('http://','https://'); }
