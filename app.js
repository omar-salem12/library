var g = G$("omar","salem");
g.greet().setLang('es').greet(true).log();

$('#login').click(function() {

    var loginGrtr = G$('Omar','Salem');
    $('#logindiv').hide();
    loginGrtr.setLang($('#lang').val()).HTMLgreeting('#greeting',true).log();

})