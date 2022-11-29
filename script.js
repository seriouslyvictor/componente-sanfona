const sanfona = document.querySelectorAll('.c--sanfona');
console.log(sanfona);
const itemSanfona = document.querySelectorAll('.desc--sanfona');
const iconeSanfona = document.querySelectorAll('.i--sanfona')


for (let i = 0; i < sanfona.length; i++) {
    sanfona[i].addEventListener('click', abrirSanfona); 
    function abrirSanfona () {
        sanfona[i].classList.toggle('aberta')
    }    
}



