const body = document.body;

function main() {
body.classList.add('main');
body.classList.remove('guilds');
body.classList.remove('mobs');
body.classList.remove('achievements');
body.classList.remove('music');
body.classList.remove('rest');
}
function guilds() {
body.classList.remove('main');
body.classList.add('guilds');
body.classList.remove('mobs');
body.classList.remove('achievements');
body.classList.remove('music');
body.classList.remove('rest');
}
function achievements() {
body.classList.remove('main');
body.classList.remove('guilds');
body.classList.remove('mobs');
body.classList.add('achievements');
body.classList.remove('music');
body.classList.remove('rest');
}
function music() {
body.classList.remove('main');
body.classList.remove('guilds');
body.classList.remove('mobs');
body.classList.remove('achievements');
body.classList.add('music');
body.classList.remove('rest');
}
function rest() {
body.classList.remove('main');
body.classList.remove('guilds');
body.classList.remove('mobs');
body.classList.remove('achievements');
body.classList.remove('music');
body.classList.add('rest');
}
function roll() {
body.classList.toggle('hidden')
}
  
document.getElementById('main').addEventListener('click', main);
document.getElementById('guilds').addEventListener('click', guilds);
document.getElementById('mobs').addEventListener('click', function mobs() {
body.classList.remove('main');
body.classList.remove('guilds');
body.classList.add('mobs');
body.classList.remove('achievements');
body.classList.remove('music');
body.classList.remove('rest');
})
document.getElementById('achievements').addEventListener('click', achievements);
document.getElementById('music').addEventListener('click', music);
document.getElementById('rest').addEventListener('click', rest);
document.getElementById('roll').addEventListener('click', roll);


function easy() {
body.classList.add('easy');
body.classList.remove('medium');
body.classList.remove('hard');
}

function medium() {
body.classList.remove('easy');
body.classList.add('medium');
body.classList.remove('hard');
}

function hard() {
body.classList.remove('easy');
body.classList.remove('medium');
body.classList.add('hard');
}

document.getElementById('easy').addEventListener('click', easy);
document.getElementById('medium').addEventListener('click', medium);
document.getElementById('hard').addEventListener('click', hard);


function guild() {
const num = this.id.replace('g', '');
for (let i = 1; i <= 13; i++) {
    body.classList.remove('g' + i);
}
body.classList.add(`g${num}`)
}

for (var i = 1; i <= 13; i++) {
document.getElementById('g' + i).addEventListener('click', guild);
}


function mobs() {
const num = this.id.replace('m', '');
for (let i = 1; i <= 46; i++) {
    body.classList.remove('m' + i);
}
body.classList.add(`m${num}`)
}

for (let i = 1; i <= 46; i++) {
document.getElementById('m' + i).addEventListener('click', mobs);
}