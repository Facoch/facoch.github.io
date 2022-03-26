$( document ).ready(function(){
  let messagetextarea = $("#message")[0];
  setTextareaHeight(messagetextarea);


})

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function setTextareaHeight(textareaEl){
  textareaEl.style.height = "";
  let emi =window.getComputedStyle(textareaEl).fontSize.match(/\d+/)[0];
  textareaEl.style.height = (textareaEl.scrollHeight - 2*emi)+ "px";
}

$("#submitRSVP").click(function(event){
  event.preventDefault(); // cancel default behavior
  $('#nameError').hide();
  $('#name').removeClass('error');
  $('#personeError').hide();
  $('#persone').removeClass('error');
  $('#mailError').hide();
  $('#mail').removeClass('error');

  //collect data
  var data = $('#rsvpForm').serializeArray().reduce(function(obj, item) {
      obj[item.name] = item.value;
      return obj;
  }, {});
  //check errors
  var error = false;
  if (data["name"]=="") {
    $('#nameError').show();
    $('#name').addClass('error');
    error=true;
  }
  if (!validateEmail(data["mail"])) {
    $('#mailError').show();
    $('#mail').addClass('error');
    error=true;
  }
  if (! (onlyDigits(data["persone"])) ) {
    $('#personeError').show();
    $('#persone').addClass('error');
    error=true;
  }
  if(error){
    return;
  }
  //console.log(data);


  // Show loading thingy
  $('#loading').show();
  $('#submitRSVP').val("Loading...");
  $('#submitRSVP').prop("disabled",true);

  // console.log("returning");
  // $('#erroreServer').show();
  // $('#serverErrorText').text("TODO Devo ancora abilitare questa cosa! - Facoch");
  // return;
  // Send to server
  $.post( "https://us-central1-matrimonio-303209.cloudfunctions.net/collect-vs", data, function(res) {
    if (res=="SUCCESS"){
      console.log( "success" );
      $('#rsvpForm').hide();
      $('#sticker').hide();
      $('#successo').show();
      window.scrollTo(0, 0);
    }
    console.log( "error" );
    $('#erroreServer').show();
    $('#serverErrorText').text("Compila i campi Nome e Numero di Persone");
  }).fail(function(res) {
      console.log( "problema" );
      $('#erroreServer').show();
      $('#serverErrorText').text("Ricarica la pagina e prova più tardi. Se il problema persiste, contatta gli sposi!");
      console.log(res);
    })
    .always(function() {
      // Hide loading thingy
      $('#loading').hide();
      $('#submitRSVP').val("Invia")
      $('#submitRSVP').prop("disabled",false);

      //console.log( "finished" );
    });
});


function onlyDigits(value) {
        return /^\d+$/.test(value);
    }
