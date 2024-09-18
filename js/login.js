document.getElementById('login-btn')
    .addEventListener('click', function (event) {
        event.preventDefault()//this is used for stop reload page, the function preventDefault()
        const phoneNumber = document.getElementById('phone-number').value;
        const pinNumber = document.getElementById('pin-number').value;

        if(phoneNumber === '5' && pinNumber === '1234'){
            console.log('you are logged in');
            window.location.href = './homepage.html'; //to jump on another file onclick
        }
        else{
            alert('wrong Phone number or Pin')
        }


})