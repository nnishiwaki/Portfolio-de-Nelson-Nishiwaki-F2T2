// obter dados do formulário e adicionar dados na tabela

var btnSalvar = document.querySelector("#btnSalvar")

btnSalvar.addEventListener("click", function() {
    event.preventDefault();
    
    var frmContato = document.querySelector("#contato");
    console.log(frmContato.Nome.value);
    console.log(frmContato.email.value);
    console.log(frmContato.Assunto.value);
    console.log(frmContato.Mensagem.value)
})