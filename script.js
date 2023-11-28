console.log("Welcome to Spotify");

//initialize the variables
let songIndex = 0;
let audioElement = new Audio('let-me-love-you.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems =Array.from( document.getElementsByClassName("song-item"));
let timeStamp = document.getElementsByClassName("timeStamp");

let song = [
  {
    songName: "Let Me Love You",
    filePath: "let-me-love-you.mp3",
    coverPath: "coverImg.jpg",
  },
  {
    songName: "You & Me",
    filePath: "songs/you-and-me.mp3",
    coverPath: "covers/you-and-me.jpg",
  },
  {
    songName: "MONEY",
    filePath: "songs/money.mp3",
    coverPath: "covers/money.jpg",
  },
  {
    songName: "Whistle",
    filePath: "songs/whistle.mp3",
    coverPath: "covers/whistle.jpg",
  },
  {
    songName: "Popular",
    filePath: "songs/popular.mp3",
    coverPath: "covers/popular.jpg",
  },
  {
    songName: "Typa Girl",
    filePath: "songs/typa-girl.mp3",
    coverPath: "covers/typa-girl.jpg",
  },
  {
    songName: "Talk To Me Nice",
    filePath: "songs/Talk to me nice.mp3",
    coverPath: "covers/talk-to-me-nice.jpg",
  },
  {
    songName: "Shutdown",
    filePath: "songs/shutdown.mp3",
    coverPath: "covers/shutdown.jpg",
  },
  {
    songName: "Lets Kill This Love",
    filePath: "songs/kill-this-love.mp3",
    coverPath: "covers/kill.png",
  },
  {
    songName: "We Don't Talk Anymore",
    filePath: "songs/puth.mp3",
    coverPath: "covers/we-dont-talk-anymore.jpg",
  },
];

//functions

playPause = () => {
      if (audioElement.paused) {
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
      } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
      }
}

// Listen to the timeupdate event of the audio element
audioElement.addEventListener('timeupdate', () => {
    // Calculate the current time in minutes and seconds
    const currentTime = Math.floor(audioElement.currentTime);
    const minutes = Math.floor(currentTime / 60);
    const seconds = currentTime % 60;

    // Format the time as mm:ss
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // Update the text content of the timeStamp element
    timeStamp.innerText = formattedTime;
});

// songItems.forEach((element, i) => {
//   element.getElementsByTagName("img")[0].src = song[i].coverPath
//   element.getElementsByClassName("songName")[0].innerText = song[i].songName;
// });
// // audioElement.play();
//handle play pause click
masterPlay.addEventListener('click' , () => {
    if(audioElement.paused || audioElement.ended){
        audioElement.play()
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
})
//listen to events
// Listen to events
audioElement.addEventListener('timeupdate', () => {
    // Update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;

    // Update the time display (timestamp)

});
myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = ()=> {
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
    gif.style.opacity = 1
  })
}

// Array.from(document.getElementsByClassName("songItemPlay")).forEach(
//   (element) => {
//     element.addEventListener("click", (e) => {
//       makeAllPlays();
//       songIndex = parseInt(e.target.id);
//       const isPlaying = !audioElement.paused;

//       if (isPlaying && songIndex === currentSongIndex) {
//         audioElement.pause();
//       } else {
//         audioElement.src = song[songIndex].filePath;
//         audioElement.currentTime = 0;
//         audioElement.play();
//       }

//       // Update the UI elements accordingly
//       if (isPlaying) {
//         e.target.classList.remove("fa-circle-pause");
//         e.target.classList.add("fa-circle-play");
//         masterPlay.classList.remove("fa-circle-pause");
//         masterPlay.classList.add("fa-circle-play");
//         gif.style.opacity = 0;
//       } else {
//         e.target.classList.remove("fa-circle-play");
//         e.target.classList.add("fa-circle-pause");
//         masterPlay.classList.remove("fa-circle-play");
//         masterPlay.classList.add("fa-circle-pause");
//         gif.style.opacity = 1;
//       }

//       masterSongName.innerText = song[songIndex].songName;
//       currentSongIndex = songIndex;
//     });
//   }
// );

// Define a variable to track the current playing song
let currentSongIndex = -1;

// Function to play or pause the audio
function playPause() {
  if (audioElement.paused || audioElement.ended) {
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
  } else {
    audioElement.pause();
    audioElement.currentTime = 0; // Rewind to the beginning
    gif.style.opacity = 0;
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
  }
}

// Function to handle clicks on "songItemPlay" elements
function handleSongItemClick(e) {
  const clickedSongIndex = parseInt(e.target.id);

  if (currentSongIndex === clickedSongIndex) {
    // If the clicked song is the same as the currently playing song, toggle play/pause
    playPause();
  } else {
    // Otherwise, start playing the new song
    songIndex = clickedSongIndex;
    audioElement.src = song[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    currentSongIndex = clickedSongIndex;
  }

  // Update the UI of the clicked "songItemPlay" element
  Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.classList.remove("fa-circle-pause");
    element.classList.add("fa-circle-play");
  });
  e.target.classList.remove("fa-circle-play");
  e.target.classList.add("fa-circle-pause");
}

// Add click event listeners to "songItemPlay" elements
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
  element.addEventListener("click", handleSongItemClick);
});
Array.from(document.getElementsByClassName("masterPlay")).forEach((element) => {
  element.addEventListener("click", handleSongItemClick);
});

// Add a click event listener to the "masterPlay" element



document.getElementById("next").addEventListener("click" , () => {
  if (songIndex >= song.length){
    songIndex = 0
  }
  else {
    songIndex += 1;
}
      audioElement.src = song[songIndex].filePath; // Use the correct file path
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
      masterSongName.innerText = song[songIndex].songName;
})
document.getElementById("previous").addEventListener("click" , () => {
  if (songIndex <= 0){
    songIndex = 0
  }
  else {
    songIndex -= 1;
}
      audioElement.src = song[songIndex].filePath; // Use the correct file path
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
      masterSongName.innerText = song[songIndex].songName;
})


// Add an event listener to the audio element to update the timestamp
// Add an event listener to the audio element to update the timestamp
audioElement.addEventListener("timeupdate", function () {
  const currentTime = formatTime(audioElement.currentTime);
  const duration = formatTime(audioElement.duration);
  const timestamp = `${currentTime} / ${duration}`;

  // Get the "timeStamp" element for the currently playing song
  const currentSongTimeStamp = document.getElementById(currentSongIndex);
  if (currentSongTimeStamp) {
    currentSongTimeStamp.innerText = timestamp;
  }
});

// Function to handle viewport width changes
function handleViewportWidthChange() {
  // Get the viewport width
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  // Get the element you want to modify
  const element = document.getElementsByClassName("to-make-smaller"); // Change 'yourElementId' to the actual ID of the element

  if (viewportWidth <= 679) {
    // Remove a class from the element
    element.classList.remove("fa-3x"); // Change 'yourClassName' to the class you want to remove
  } else {
    // Add the class back to the element (if needed)
    element.classList.add("fa-3x"); // Change 'yourClassName' to the class you want to add
  }
}

// Listen for viewport width changes
window.addEventListener('resize', handleViewportWidthChange);

// Call the function on page load
window.addEventListener('load', handleViewportWidthChange);

//change the name od the song on bottom

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {

    element.addEventListener("click", (e) =>{
          makeAllPlays();
          songIndex = parseInt(e.target.id);
      masterSongName.innerText = song[songIndex].songName;
    })
  })