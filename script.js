//console.log("hello")
//initialize the variables
let songIndex=0;
let audioEle=new Audio('1.mp3');
let masterPlay=document.getElementById("masterPlay");
let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById("gif");
let masterSongName=document.getElementById("masterSongName");
let songItems=Array.from(document.getElementsByClassName("songItem"));
let songs=[
    {songName:"Teri Nazar",filePath:"1.mp3",coverPath:"cover1.jpg"},
    {songName:"Jawamukhi(female version)",filePath:"2.mp3",coverPath:"cover1.jpg"},
    {songName:"O Aashiqa",filePath:"images/3.mp3",coverPath:"cover1.jpg"},
    {songName:"Jawalamukhi",filePath:"4.mp3",coverPath:"cover1.jpg"},
    {songName:"The Oracle",filePath:"5.mp3",coverPath:"cover1.jpg"},
    {songName:"Sofia",filePath:"6.mp3",coverPath:"cover1.jpg"},
    {songName:"Nayi-Nayi",filePath:"7.mp3",coverPath:"cover1.jpg"},
    {songName:"Humnawaa",filePath:"8.mp3",coverPath:"cover1.jpg"},
    {songName:"Sala-e-Ishq",filePath:"9.mp3",coverPath:"cover1.jpg"},
    {songName:"Sai-Shirdi-Sai",filePath:"10.mp3",coverPath:"cover1.jpg"},
]
songItems.forEach((element,i)=>{
   // console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

//audioEle.play();
//Handle play/pause click
masterPlay.addEventListener("click",()=>{
    if(audioEle.paused || audioEle.currentTime<=0){
        audioEle.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity=1;
    }else{
        audioEle.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity=0;

    }
})
//Listen to Events
audioEle.addEventListener("timeupdate",()=>{
    //Update Seekbar
    progress=parseInt((audioEle.currentTime/audioEle.duration)*100);//showing percentage of audio play
    myProgressBar.value=progress;
})
myProgressBar.addEventListener("change",()=>{
    audioEle.currentTime=myProgressBar.value*audioEle.duration/100;
})
const makeAllPlays=()=>{
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.classList.remove("fa-circle-pause");
    element.classList.add("fa-circle-play");
})
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
element.addEventListener("click",(e)=>{
  makeAllPlays();
  songIndex=parseInt(e.target.id);
//console.log(e.target);

e.target.classList.remove("fa-circle-play");
e.target.classList.add("fa-circle-pause");
audioEle.src=`${songIndex+1}.mp3`;
masterSongName.innerText=songs[songIndex].songName;
audioEle.currentTime=0;
audioEle.play();
gif.style.opacity=1;
masterPlay.classList.remove("fa-circle-play");
 masterPlay.classList.add("fa-circle-pause");
})
})
document.getElementById("next").addEventListener("click",()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioEle.src=`${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
audioEle.currentTime=0;
audioEle.play();
masterPlay.classList.remove("fa-circle-play");
 masterPlay.classList.add("fa-circle-pause");
});
document.getElementById("previous").addEventListener("click",()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioEle.src=`${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
audioEle.currentTime=0;
audioEle.play();

masterPlay.classList.remove("fa-circle-play");
 masterPlay.classList.add("fa-circle-pause");
});