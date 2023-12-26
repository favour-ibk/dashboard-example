let menuiocn = document.querySelector(".menuicon"); 
let nav = document.querySelector(".navcontainer"); 
const moon=document.getElementById('moon');
const sun=document.getElementById('sun');
const cover=document.getElementById('cover');
const box1=document.getElementById('box1');
const box2=document.getElementById('box2');
const box3=document.getElementById('box3');
const box4=document.getElementById('box4');


menuicon.addEventListener("click", () => { 
	nav.classList.toggle("navclose"); 
})

function dark(){
	moon.style.display='none';
    sun.style.display='block';
	cover.style.backgroundColor='black';
    cover.style.color='black';
	box1.style.backgroundColor='rgb(203, 64, 87)';
	box2.style.backgroundColor='rgb(203, 64, 87)';
	box3.style.backgroundColor='rgb(203, 64, 87)';
	box4.style.backgroundColor='rgb(203, 64, 87)';
}

function light(){
	moon.style.display='block';
    sun.style.display='none';
	cover.style.backgroundColor='goldenrod';
    cover.style.color='black';
	box1.style.backgroundColor='black';
	box2.style.backgroundColor='black';
	box3.style.backgroundColor='black';
	box4.style.backgroundColor='black';
}
