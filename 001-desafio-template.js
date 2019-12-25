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
        imagem: 'https://images.pexels.com/photos/6945/sunset-summer-golden-hour-paul-filitchkin.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
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