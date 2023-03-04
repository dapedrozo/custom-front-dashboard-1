const BtnToggle = document.querySelector('.ti-menu-alt');
const MainContentAdapt = document.querySelector('.main-content');

BtnToggle.addEventListener('click', function(){
    document.getElementById('sidebar-collapse').classList.toggle('active');
    document.getElementById('main-content-collapse').classList.toggle('active');
})

