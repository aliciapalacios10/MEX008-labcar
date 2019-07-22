/*BUTTONS*/

const tripButtonMobile = document.getElementById('new-trip-mobile');
const tripButtonDesktop = document.getElementById('new-trip-desktop')

const driveButtonMobile = document.getElementById('drive-btn-mobile');
const driveButtonDesktop = document.getElementById('drive-btn-desktop');
const driverButton = document.getElementById('driver-button');

const loginButtonDesktop = document.getElementById('login-btn-mobile');
const loginButtonMobile = document.getElementById('login-btn-desktop');

/**HIDE Y SHOW*/

const hideSection = id => document.getElementById(id).classList.add('hide');
const showSection = id => document.getElementById(id).classList.remove('hide');

/*CLOSE*/

const closeModalNewUser = document.getElementById('close-new-user');
const closeModalCheckIn = document.getElementById('close-check-in');
const closeModalDriver = document.getElementById('close-become-drive');

/*MODAL 1*/
const openModalNewUser = ()=>{
    showSection ('account');
}


loginMobile.addEventListener('click', openModalNewUser);
loginDesktop.addEventListener('click', openModalNewUser);

const closeModalRegister = () => {
    hideSection ('account');
}


/*MODAL 2*/
