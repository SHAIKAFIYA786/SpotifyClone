let audioelement = new Audio('songs/1Nightchanges.mp3');   
let masterplay = document.getElementById('masterplay');
let gif = document.getElementById('gif');
let rangebar = document.getElementById('rangebar');
let songitem = Array.from(document.getElementsByClassName('songitem'));
let songname=Array.from(document.getElementsByClassName('songname'));
let index=0;
let i=0;
let songs = [ 
    { songname: "Night Changes", filepath: "songs/1Nightchanges.mp3", coverpath: "covers/1nightchages.png" },
    { songname: "Shakira", filepath: "songs/2Shakira.mp3", coverpath: "covers/2wakawaka.png" },
    { songname: "Who says", filepath: "songs/3Who says.mp3", coverpath: "covers/3whosays.png" },
    { songname: "Wavin Flag", filepath: "songs/4Wavin.mp3", coverpath: "covers/4wavinnflag.png" },
    { songname: "Kabhi Aditi", filepath: "songs/5Kabhi Aditi .mp3", coverpath: "covers/5Kabhi Aditi.png" },
    { songname: "Ankho me dubh jane do", filepath: "songs/6Aakho me Dub Jane Ko.mp3", coverpath:  "covers/6justin.png" },
    { songname: "Yaadpiyaki", filepath: "songs/7yaadpiaki.mp3", coverpath: "covers/7yaadpiyaki.png" },
];
songitem.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
}); 

masterplay.addEventListener('click', () => {  
    if(audioelement.paused || audioelement.currentTime == 0){
        audioelement.play(); 
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioelement.pause();
        masterplay.classList.add('fa-circle-play');
        masterplay.classList.remove('fa-pause-circle');
        gif.style.opacity = 0;
    }
});

audioelement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    let progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
    console.log(progress);
    rangebar.value = progress;
});

rangebar.addEventListener('change', () => {
    audioelement.currentTime = (rangebar.value * audioelement.duration) / 100;
});
const makeallplay = () => {
    Array.from(document.getElementsByClassName('play')).forEach(element => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-circle-play'); 
    });
};

Array.from(document.getElementsByClassName('play')).forEach((element,index) => {
    element.addEventListener('click', (e) => {
        makeallplay();
        let target = e.target; 
        console.log(target);
        target.classList.remove('fa-circle-play');
        target.classList.add('fa-pause-circle');
        audioelement.src = songs[index].filepath; 
        audioelement.currentTime=0;
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-pause-circle');
    });
});
document.getElementById("next").addEventListener('click',()=>{
    if(index>7){
        index=0
    }
    else{
        index=index+1;
    }
    audioelement.src = songs[index].filepath; 
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-pause-circle');
});
document.getElementById("previous").addEventListener('click',()=>{
    if(index<=0){
        index=0
    }
    else{
        index=index-1;
    }
    audioelement.src = songs[index].filepath; 
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-pause-circle');
});