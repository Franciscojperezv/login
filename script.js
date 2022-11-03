function seePassword(){
    let myPassword = document.getElementById("password");
    
    if(myPassword.type == 'password'){
        myPassword.type = 'text';
    }
    else{
        myPassword.type = 'password'
    }
    return;
}
function submitButton(){
    let username = document.getElementById('username').innerText;
    let password = document.getElementById('password').innerText;
    let errorText = document.getElementById('error_text').innerText;
    

        if(username.toLowerCase() === 'stradivariuskane' && password.toLowerCase() === 'lacuchacara'){
            errorText = '';
            window.open('https://es.wikipedia.org/wiki/Agua');
            return;
        }
        else{
            errorText = '';
            setTimeout(() => {errorText = 'Usuario o contraseña incorrectos';}, 300);
        }
        return;

}
function clean(){
        errorText = '';
        return;
}