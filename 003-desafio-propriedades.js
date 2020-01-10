/*
 * Arquivo: 003-desafio-propriedades.js
 * Autor: Paulo Alves
 * Descrição: solução do exercicio sobre o uso de propriedades
 * Data: 10/01/2020
*/

new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed: {
        resultado(){
            return this.valor == 37 ? 'Valor Igual' : 'Valor Diferente'
        }
    },
    watch: {
        resultado(){
            setTimeout(() => {
                this.valor = 0
            }, 5000)
        }
    },
});