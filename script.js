<script>

        var app = new Vue({
            el: "#app",
            data: {
                nome: '',
                termo: false,
                imc: null,
                tabela: false,
            },
            methods: {
                calculaIMC() {
                    this.imc = (this.peso / (this.altura * this.altura)).toFixed(2)
                    this.tabela = true
                },
            },
        })
    </script>