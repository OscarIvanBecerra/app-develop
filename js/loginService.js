document.getElementById('LoginForm').addEventListener('submit' , function(e){
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let mensaje = ''
    let tipoAlerta = ''
    if(email === '' || password === ''){
        mensaje = 'Completa los campos'
        tipoAlerta = 'warning'
    }
    else if(email === 'test@test' && password === '123456'){
        mensaje = 'Login Accesfull'
        tipoAlerta = 'success'
    }
    else{
        mensaje = 'Error data'
        tipoAlerta = 'danger'
    }
    let alerta  = `
        <div class="alert alert-${tipoAlerta} alert-dismissible fade show" role="alert">
        ${mensaje}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `;
        document.getElementById('mensaje').innerHTML = alerta;
});