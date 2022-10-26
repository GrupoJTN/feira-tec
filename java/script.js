let perguntas = [
{
	titulo: 'Quem descobriu o Brasil?',
	alternativas: ['Barão de Máua','Pedro Alvares Cabral','Dom Pedro I','Vasco da Gama'],
	correta: 1
},
{
	titulo: 'Quantos Lados tem um Octógono?',
	alternativas: ['8 Lados','16 Lados','24 Lados','4 Lados'],
	correta: 0
},
{
	titulo: 'Qual o Continente com mais Países',
	alternativas: ['Europa','África','América','Ásia'],
	correta: 3
},
{
	titulo: 'Qual o Maior Osso do Corpo Humano?',
	alternativas: ['Tíbia','Fíbula','Fêmur','Falanges'],
	correta: 2
},
{
	titulo: 'Qual a tradução de Home?',
	alternativas: ['Carro','Rua','Mesa','Casa'],
	correta: 3
},
{
	titulo: 'A Palavra Calor é:',
	alternativas: ['Substantivo Abstrato','Substantivo Composto','Substantivo Concreto','Substantivo Coletivo'],
	correta: 0
},
{
	titulo: 'Onde Foi Sediada a Copa do Mundo de 2014?',
	alternativas: ['França','Brasil','Japão','Rússia'],
	correta: 1
},
{
	titulo: 'Que Grande Evento Histórico Aconteceu em 1822 no Brasil?',
	alternativas: ['Descobrimento do Brasil','Ditadura Militar','Revolução de 1930','Independência do Brasil'],
	correta: 3
},
{
	titulo: 'O Que é um Tsunami?',
	alternativas: ['Um ciclone','Um tornado','Um maremoto','Um terremoto'],
	correta: 2
},
{
	titulo: 'Qual o Plural de Chapéu?',
	alternativas: ['Chapéis','Chapéus','Chapéuzes','Chapéizes'],
	correta: 1
},
{
	titulo: 'O Que os Pandas Comem?',
	alternativas: ['Bambu','Aves, ovos e peixe','Frutas e mel','Carnes'],
	correta: 0
},
{
	titulo: 'Qual a Tradução de Run?',
	alternativas: ['Rápido','Lento','Luz','Correr'],
	correta: 3
},
{
	titulo: 'Qual o Nome Popular do Cloreto de Sódio?',
	alternativas: ['Vinagre','Papel','Sal de Cozinha','Fermento'],
	correta: 2
},
{
	titulo: 'Em um Avião, Havia 4 Romanos e 1 Inglês. Qual o Nome da Aeromoça?',
	alternativas: ['Maria','Ivone','Beatriz','Cláudia'],
	correta: 1
}
]

let app = {
start: function(){

	this.Atualpos = 0;
	this.Totalpontos = 0;

	let alts = document.querySelectorAll('.alternativa');
	alts.forEach((element,index)=>{
		element.addEventListener('click', ()=>{
				this.checaResposta(index);
			})
		})
	this.atualizaPontos();
	app.mostraquestao(perguntas[this.Atualpos]);
},

mostraquestao: function(q){
	this.qatual = q;
	// mostrando o titulo
	let titleDiv = document.getElementById('titulo');
	titleDiv.textContent = q.titulo;
	//mostrando as alternativas
	let alts = document.querySelectorAll('.alternativa');
	alts.forEach(function(element,index){
		element.textContent = q.alternativas[index];
	})

},

Proximaperg: function(){
	this.Atualpos++;
	if(this.Atualpos == perguntas.length){
		this.Atualpos = 0;
	}
},

checaResposta: function(user){
	if(this.qatual.correta == user){
		console.log("Correta")
		this.Totalpontos++;
	var a = 1;
		this.mostraresposta(a);
	}
	else{
		console.log("Errada");
	var a = 0;
		this.mostraresposta(a);
	}
	this.atualizaPontos();
	this.Proximaperg();
	this.mostraquestao(perguntas[this.Atualpos]);
},

atualizaPontos: function(){
	let scoreDiv = document.getElementById('pontos');
scoreDiv.textContent = `Sua pontuacao e: ${this.Totalpontos}`;
},

mostraresposta: function(correto){
	let resultDiv = document.getElementById('result')
	let result = ''
	// formatar como a mensagem será exibida
	if(correto == true){
		result = 'Resposta Correta';
	}
	else{
		// obtendo a questão atual
		let pergunta = perguntas[this.Atualpos];
		// obtenha o indice da resposta correta da questão atual
		let cindice = pergunta.correta;
		// obtenha o texto da resposta correta da questão atual
		let ctexto = pergunta.alternativas[cindice];
		result = `Incorreto! Resposta Correta: ${ctexto}`; 
	}
	resultDiv.textContent = result;
}



}

app.start();

function alterar(){
	if ( document.body.style.fontFamily == "italic" ){
		document.body.style.fontFamily = "sans-serif";
	  } else {
		document.body.style.fontFamily = "italic" 
	  }
	};
function voltar(){
	window.location='entrada.html'
}function comecar(){
	window.location='quiz.html'
}function sb(){
	window.location='index.html'
}
	
