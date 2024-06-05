let email_acesso = 'victor@email.com';
let email_cadastro = 'VICTOR@email.com';

if(email_acesso.toLowerCase() == email_cadastro.toLowerCase()){
    console.log("Foi enviado um email para ativação do cadastro.")
} else{
    console.log("Email não consta na base de dados")
}