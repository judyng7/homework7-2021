var video = document.querySelector("#player1")


window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.querySelector("#volume").innerHTML=video.volume *100 +"%"
});

	document.querySelector("#pause").addEventListener("click", function() {
		console.log("Pause Video");
		video.pause()

});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate *= .95;
	console.log("New speed is "+video.playbackRate );
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate /= .95;
	console.log("New speed is "+video.playbackRate );
});


document.querySelector("#slider").addEventListener("click", function() {
	console.log("Changing volume");
	console.log(this.value)
	video.volume = this.value /100;
	document.querySelector("#volume").innerHTML=video.volume *100 +"%"
});



document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Changing CSS");
	video.classList.add("oldSchool")

});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Changing CSS");
	video.classList.remove("oldSchool")

});


document.querySelector("#skip").addEventListener("click", function () {
	console.log("Skip Ahead");
	video.currentTime += 15;
	video.loop = true;
	console.log("Current time is " + video.currentTime);
	video.play();
});



document.querySelector("#mute").addEventListener("click", function() {

if(video.muted ==true){
	console.log("Unmuted");
	document.querySelector("#mute").innerHTML = "Mute";
	video.muted = false;
}

else if (video.muted ==false){
	console.log("Muted");
	video.muted = true;
	document.querySelector("#mute").innerHTML = "Unmute";
}
});
