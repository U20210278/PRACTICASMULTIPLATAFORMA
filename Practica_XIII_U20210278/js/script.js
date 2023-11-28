const songs = [
    { title: 'cover 1', artist: 'Desconocido', src: 'music/music1.mp3', cover: 'img/cover1.jpg' },
    { title: 'cover 2', artist: 'Desconocido', src: 'music/music2.mp3', cover: 'img/cover2.png' },
    { title: 'cover 3', artist: 'Desconocido', src: 'music/music3.mp3', cover: 'img/cover3.jpg' },
    { title: 'cover 4 ', artist: 'Desconocido', src: 'music/music4.mp3', cover: 'img/cover4.jpg' },
    { title: 'cover 5', artist: 'Desconocido', src: 'music/music5.mp3', cover: 'img/cover5.jpg' }

];

let currentSongIndex = 0;
let isPlaying = false;
let audio;

function playCurrentSong() {
    if (audio) {
        audio.stop();
    }


    audio = new Howl({
        src: [songs[currentSongIndex].src],
        autoplay: isPlaying,
        volume: volumeSlider.value,
        onend: function () {
            playNextSongs();
        }
    });
    updateSongInfo();
}



const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const volumeSlider = document.getElementById('volume');
const songTitle = document.getElementById('songTitle');
const songArtist = document.getElementById('songArtist');
const albumCover = document.querySelector('.card-img-top');


playButton.addEventListener('click',()=>{
    isPlaying = true;
    playCurrentSong();
});

pauseButton.addEventListener('click',()=>{
    isPlaying = false;
    audio.pause();
});

nextButton.addEventListener('click',()=>{
    playNextSongs();
});

prevButton.addEventListener('click',()=>{
   if (audio.seek()>5) {
    audio.seek(0);
   }else{
    currentSongIndex=(currentSongIndex-1+songs.length)%songs.length;
    playCurrentSong();
   }
});


volumeSlider.addEventListener('input',()=>{
    audio.volume(volumeSlider.value)
});

function updateSongInfo() {
    songTitle.textContent=songs[currentSongIndex].title;
    songArtist.textContent=songs[currentSongIndex].artist;
    albumCover.src=songs[currentSongIndex].cover;
}

function playNextSongs() {
    currentSongIndex=(currentSongIndex+1)%songs.length;
    playCurrentSong();
}

playCurrentSong();

