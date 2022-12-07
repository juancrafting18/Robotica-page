let mobileMenuDropdown = document.querySelector('.mobile-menu-dropdown');
let mobileMenuIcon = document.querySelector('.mobile-menu-icon');
let faBarsSP = document.querySelector('.fa-solid');

mobileMenuIcon.addEventListener('click', openMenuDropdown);

function openMenuDropdown(){
    let menuDpClosed = mobileMenuDropdown.classList.contains('closed'); 
    let menuDpOpen = mobileMenuDropdown.classList.contains('open');
    if(menuDpClosed){
        mobileMenuDropdown.classList.remove('inactive');
        mobileMenuDropdown.classList.remove('closed');
        mobileMenuDropdown.classList.add('open');
        faBarsSP.classList.remove('fa-bars'); 
        faBarsSP.classList.add('fa-xmark');
    }
    if(menuDpOpen){
        mobileMenuDropdown.classList.add('inactive');
        mobileMenuDropdown.classList.remove('open'); 
        mobileMenuDropdown.classList.add('closed');
        faBarsSP.classList.remove('fa-xmark'); 
        faBarsSP.classList.add('fa-bars');
    }
}
