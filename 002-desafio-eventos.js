/*
 * Arquivo: 002-desafio-eventos.js
 * Autor: Paulo Alves
 * Descrição: solução do exercicio sobre o uso de eventos
 * Data: 17/12/2019
*/

new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta(){
            alert('Alerta Executado')
        },
        modificarValor(event){
            this.valor = event.target.value
        }
    },
})