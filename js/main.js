const btn = document.getElementById('menuBar');
const sideBar = document.getElementById('sideBar');

btn.addEventListener('click', function(){
    sideBar.classList.toggle('open')
})