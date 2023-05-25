var urlAtual = window.location.href;
//document.getElementById('url_atual').value = urlAtual;
//document.getElementById('span-teste').value = "alkdjfsadf";


//input-hidden = '<input type="text" name="informacao_oculta" value="' . urlAtual . '">';

//var input_hidden = 'urlAtual';
var teste = 'teste';

var meuComponente = document.getElementById('hidden-url');
meuComponente.innerHTML = '<input type="hidden" name="url" value="' + urlAtual  + '">';