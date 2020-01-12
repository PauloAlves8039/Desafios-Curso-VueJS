/*
 * Arquivo: 005-desafio-listas.js
 * Autor: Paulo Alves
 * Descrição: solução do exercicio sobre o uso de listas
 * Data: 12/01/2020
*/

new Vue({
	el: '#desafio',
	data: {
        expressao: true,
        nomes: ['Pedro', 'Bia', 'Ana', 'Rebeca'],
		livro: {
			titulo: 'O Senhor dos Anéis',
			autor: 'J.R.R. Tolkiens',
			volume: '3'
		},
		aluno: {
			id: 10,
			nome: 'Maria',
			notas: [7.67, 8.33, 6.98, 9.21]
		}
	}
})