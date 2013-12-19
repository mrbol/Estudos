/****************
 * Exemplo simples 
 * O elementos h3 são titulos do menu
 * div.exemplo são o corpo (conteudo)
 *
 * **************/
$(document).ready(function() {
    $("div.exemplo").hide();
    $("img").hide();
    $('h3').attr("title","Clique aqui para visualizar o conteudo");    
    $("h3").click(function() {
        //Oculta todos os elementos que tenha class div.exemplo
        $('img').hide();
        $('div.exemplo').hide();
        
        //Exibe todos elementos que tenha class div.exemplo que seja filho do mesmo pai do elemento que executou o evento click
        $('div.exemplo', this.parentElement).fadeIn("slow", function() {});
        $('h3', this.parentElement).attr("title","Clique na figura ao lado para fechar");
        $("img", this.parentElement).fadeIn("slow", function() {});
    });
    $("img").click(function() {
        $('div.exemplo').hide();
        $("img").hide();
        $('h3').attr("title","Clique aqui para visualizar o conteudo");    
    });
})