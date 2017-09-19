if (window.location.protocol == "http:") { window.location.href = "https" + window.location.href.slice(4); }
else { console.log("You are in HTTPS, Good Job!"); }
