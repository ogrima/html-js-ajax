
  function btn4_click(){          
    console.log('submit');
    pessoa.nome = $('#txtnome').val();
    pessoa.email = $('#txtemail').val();
    pessoa.obs = $('#txtobs').val();

    var json = JSON.stringify(pessoa);
    console.log(json);
    $('#payload').html('<span>Payload: ' + json + '</span>');
}

// Roteiro de execucao do BT1
function btn1_click(){

setTimeout(function(){
    $.ajax({url: "http://localhost:8080/api/cliente/1", success: function(result){
                
        console.log(JSON.stringify(result));
        $("#div1").html(JSON.stringify(result));
        
        const obj = result;
        $("#div1").html('Nome: ' + obj.full_name);
        
    }});
    $('#load').hide();
    hierarchy();
    formatInfo('div1');
},3000);

}

// Roteiro de execucao do BT2
function btn2_click(){
clear();
setTimeout(function(){
    $.ajax({url: "demo_test.txt", success: function(result){    
        console.log(JSON.stringify(result));
        const obj = result;
        $("#div2").html('');
        $("#div2").html(JSON.stringify(result));
        $('#load').hide();
        formatAlert('div2');
 }});

}, 3000);

}


//Teste de escopo x valores
 function hierarchy( ){
    let a=234;
    $("#div1").append('<h3>Escopo das variaveis.</h3>');
    $("#div1").append('<span>Variavel declarada fora (this) '+ this.a +'</span>');
    $('#div1').append('<br/>');
    $("#div1").append ('<span>Variavel declarada dentro (sem o this) '+ a +'</span>');
}

function clear(){
    console.log("clear =>")
    $("#div1").html('');
    $("#div2").html('');
    $('#formulario').html('');
    removeAllAlerts(); 
}

function clearMesages(){
    $( '#result' ).fadeOut( "slow", function() {
        $('#result').hide();
    });
}

function formatAlert(field){
    var selector = '#'+field
    $(selector).addClass("alert alert-success");
    $(selector).attr('role','alert');
}


function formatInfo(field){
    var selector = '#'+field
    $(selector).addClass("alert alert-secondary");
    $(selector).attr('role','alert');
}

function removeFormatAlert(field){
    var selector = '#'+field;
    $(selector).html('');
    $('.alert').removeAttr("role");
    $('.alert').removeAttr("class");
    //$(selector).hide();
    
}

function removeAllAlerts(){
    $('.alert').removeAttr("role");
    $('.alert').removeAttr("class");
    
}

//setTimeout(function(){},3000);