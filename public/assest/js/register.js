$(document).ready(() => {

    $('#insertUserCognito').on('click', async() => {
        let name = $('#inpNombre').val();
        let lastname = $('#inpApellido_p').val();
        let lastnameM = $('#inpApellido_m').val();
        let user = $('#inpEmail').val();
        let phone = $('#inpTelefono').val();
        let pass = $('#inpContrasenia').val();
        let passConfirm = $('#inpContraseniaConfirm').val();



        console.log('Register  JS');
    });
});