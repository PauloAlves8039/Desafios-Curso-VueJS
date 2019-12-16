  
/*
 * Arquivo: desafio-template.js
 * Autor: Paulo Alves
 * Descrição: solução de exercicios sobre template para interação com o DOM usando VueJS
 * Data: 16/12/2019
*/

new Vue({
    el: '#desafio',
    data:{
        nome: 'Paulo',
        idade: 25,
        imagem: 'https://cdn.pixabay.com/photo/2014/08/15/11/29/sea-418742_960_720.jpg'
    },
    methods: {
        multiplicarIdade(){
            return this.idade * 3
        },
        valorRandomico(){
            return Math.random()
        }
    },
})