const h1 = document.createElement('h1');
h1.innerText = "Linda Rikkers";
document.body.appendChild(h1);

const enter = document.createElement('div');
enter.innerText = "Say 'friend' and enter";
enter.classList.add('enter');
document.body.appendChild(enter);

function oops () {
    alert('oops');
}

function hover () {
    this.classList.toggle('hover');
}
function leave(){
   this.classList.remove('hover');
}

h1.addEventListener('mouseover', hover);
h1.addEventListener('mouseleave', leave);

enter.addEventListener('mouseover', hover);
enter.addEventListener('mouseleave', leave);

enter.addEventListener('click', () => {
    enter.classList.toggle('friend');
    enter.innerText = "enter";
    setTimeout(() => {
        enter.innerText = "my friend";
    }, 3000);
    setTimeout(() => {
        enter.classList.add('aubergine');
    }, 12000);

});

h1.addEventListener('click', () => {
    const pic = document.querySelector('#pic');
const me = document.createElement('img');
me.src = 'https://4medbox.nl/wp-content/uploads/2021/02/IMG_20210211_2022284.jpg';
document.body.appendChild(me);

});
