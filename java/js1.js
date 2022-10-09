function CriarConta(){
    var nome = document.getElementsByid('i1-nome').value;
    var email = document.getElementsByid('i2-email').value;
    var senha = document.getElementsByid('i3-senha').value;
    if(nome=="1"){
        alert('foi')
    }
}function validaEmail(email) {
    const emailRegex =  /^([a-zA-Z][^<>\"!@[\]#$%¨&*()~^:;ç,\-´`=+{}º\|/\\?]{1,})@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return emailRegex.test(String(email).toLowerCase())
  }function validaSenha(senha) {
    const senhaRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/
    return senhaRegex.test(String(senha))
  }