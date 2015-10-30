//Funzione che valida le form di inserimento nuovo admin
function validaFormNewAdmin(){
	var User = document.getElementById("Username").value;
	var Pwd = document.getElementById("Password").value;
	var CPwd = document.getElementById("ConfermaPassword").value;
	var check = true;

//Svuoto gli errori dell'username
	var Form = document.getElementById('user').innerHTML;
		var Form = Form.replace('<span class="error"><span lang="en">Username<\/span> non corretto <\/span>', "<!-- errore_username -->");
		document.getElementById('user').innerHTML = Form;

//Svuoto gli errori della password
	var Form = document.getElementById('pwd').innerHTML;
		var Form = Form.replace('<span class="error"><span lang="en">Password<\/span> obbligatoria <\/span>', "<!-- errore_password -->");
		document.getElementById('pwd').innerHTML = Form;

//Svuoto gli errori della conferma password
	var Form = document.getElementById('cpwd').innerHTML;
		var Form = Form.replace('<span class="error"><span lang="en">Password<\/span> obbligatoria <\/span>', "<!-- errore_conferma_password -->");
		document.getElementById('cpwd').innerHTML = Form;

//Svuoto gli errori della conferma password2
	var Form = document.getElementById('cpwd').innerHTML;
		var Form = Form.replace('<span class="error"><span lang="en">Password<\/span> non corrispondono <\/span>', "<!-- errore_conferma_password -->");
		document.getElementById('cpwd').innerHTML = Form;

//Controllo se il campo username è definito e lo segnalo
	if(User == "" || User == "undefined"){
		var Form = document.getElementById('user').innerHTML;
		var Form = Form.replace("<!-- errore_username -->",'<span class="error"><span lang="en">Username<\/span> non corretto <\/span>');
		document.getElementById('user').innerHTML = Form;
		check = false;
	}
//Controllo se il campo password è definito e lo segnalo
	if(Pwd == "" || Pwd == "undefined"){
		var Form = document.getElementById('pwd').innerHTML;
		var Form = Form.replace("<!-- errore_password -->",'<span class="error"><span lang="en">Password<\/span> obbligatoria <\/span>');
		document.getElementById('pwd').innerHTML = Form;
		check = false;
	}
//Controllo se il campo conferma password è definito e lo segnalo
	if(CPwd == "" || CPwd == "undefined"){
		var Form = document.getElementById('cpwd').innerHTML;
		var Form = Form.replace("<!-- errore_conferma_password -->",'<span class="error"><span lang="en">Password<\/span> obbligatoria <\/span>');
		document.getElementById('cpwd').innerHTML = Form;
		check = false;
	}
//Controllo se il campo password sia uguale al campo conferma password e lo segnalo
	if(Pwd != CPwd){
		var Form = document.getElementById('cpwd').innerHTML;
		var Form = Form.replace("<!-- errore_conferma_password -->",'<span class="error"><span lang="en">Password<\/span> non corrispondono <\/span>');
		document.getElementById('cpwd').innerHTML = Form;
		check = false;
	}
	return check;
}

//Funzione che valida le form di login
function validaFormLogin(){
	var User = document.getElementById("Username").value;
	var Pwd = document.getElementById("Password").value;
	var check = true;

//Svuoto gli errori dell'username
		var Form = document.getElementById('user').innerHTML;
		var Form = Form.replace(/<span class="error" id="errore1">.*<\/span>/ , "<!-- errore_username -->");
		document.getElementById('user').innerHTML = Form;
//Svuoto gli errori della password
		var Form = document.getElementById('pwd').innerHTML;
		var Form = Form.replace('<span class="error"><span lang="en">Password<\/span> non corretto <\/span>', "<!-- errore_password -->");
		document.getElementById('pwd').innerHTML = Form;

//Controllo se il campo username è definito e lo segnalo
	if(User == "" || User == "undefined"){
		var Form = document.getElementById('user').innerHTML;
		var Form = Form.replace("<!-- errore_username -->",'<span class="error" id="errore1"><span lang="en">Username<\/span> non corretto <\/span>');
		document.getElementById('user').innerHTML = Form;
		check = false;
	}
//Controllo se il campo password è definito e lo segnalo
	if(Pwd == "" || Pwd == "undefined"){
		var Form = document.getElementById('pwd').innerHTML;
		var Form = Form.replace("<!-- errore_password -->",'<span class="error" id="errore2"><span lang="en">Password<\/span> non corretta <\/span>');
		document.getElementById('pwd').innerHTML = Form;
		check = false;
	}
	return check;
}

//Funzione che valida le form di inserimento nuovo commento
function validaFormNewCommento(){
	var Name = document.getElementById("Nome").value;
	var Mail = document.getElementById("Email").value;
	var Text = document.getElementById("Testo").value;
	var EmailRegExp = /([a-zA-Z0-9]+)(@[a-z]+).(it|com|net|org)/;
	var check = true;
//Svuoto gli errori del nome
		var Form = document.getElementById('name').innerHTML;
		var Form = Form.replace('<span class="error">Nome obbligatorio <\/span>', "<!-- errore_nome -->");
		document.getElementById('name').innerHTML = Form;

//Svuoto gli errori della mail
		var Form = document.getElementById('email').innerHTML;
		var Form = Form.replace('<span class="error"><span lang="en">Email<\/span> obbligatoria <\/span>', "<!-- errore_email -->");
		document.getElementById('email').innerHTML = Form;

//Svuoto gli errori della mail
		var Form = document.getElementById('email').innerHTML;
		var Form = Form.replace('<span class="error"><span lang="en">Email<\/span> non corretta <\/span>', "<!-- errore_REemail -->");
		document.getElementById('email').innerHTML = Form;

//Svuoto gli errori del testo
		var Form = document.getElementById('testo').innerHTML;
		var Form = Form.replace('<span class="error">Testo obbligatorio <\/span>', "<!-- errore_testo -->");
		document.getElementById('testo').innerHTML = Form;

	if(Name == "" || Name == "undefined"){
		var Form = document.getElementById('name').innerHTML;
		var Form = Form.replace("<!-- errore_nome -->",'<span class="error">Nome obbligatorio <\/span>');
		document.getElementById('name').innerHTML = Form;
		check = false;
	}	
	if(Mail == "" || Mail == "undefined"){
		var Form = document.getElementById('email').innerHTML;
		var Form = Form.replace("<!-- errore_email -->",'<span class="error"><span lang="en">Email<\/span> obbligatoria <\/span>');
		document.getElementById('email').innerHTML = Form;
		check = false;
	}
	else{
		if(!EmailRegExp.test(Mail)){
			var Form = document.getElementById('email').innerHTML;
			var Form = Form.replace("<!-- errore_REemail -->",'<span class="error"><span lang="en">Email<\/span> non corretta <\/span>');
			document.getElementById('email').innerHTML = Form;
			check = false;
		}
	}	
	if(Text == "" || Text == "undefined"){
		var Form = document.getElementById('testo').innerHTML;
		var Form = Form.replace("<!-- errore_testo -->",'<span class="error">Testo obbligatorio <\/span>');
		document.getElementById('testo').innerHTML = Form;
		check = false;
	}	
	return check;
}

//Funzione che valida le form di inserimento nuovo prodotto/servizio
function validaFormNewProdotto(){
		var Nome = document.getElementById("new_nome").value;
		var Desc = document.getElementById("new_descrizione").value;
		var Prezzo = document.getElementById("new_prezzo").value;
//Svuoto gli errori del nome
		var Form = document.getElementById('l_nome').innerHTML;
		var Form = Form.replace('<span class="error">Campo nome vuoto <\/span>', "<!-- errore_nuovo_nome -->");
		document.getElementById('l_nome').innerHTML = Form;

//Svuoto gli errori della descrizione
		var Form = document.getElementById('l_descrizione').innerHTML;
		var Form = Form.replace('<span class="error">Campo descrizione vuoto <\/span>', "<!-- errore_descrizione -->");
		document.getElementById('l_descrizione').innerHTML = Form;

//Svuoto gli errori del prezzo
		var Form = document.getElementById('l_prezzo').innerHTML;
		var Form = Form.replace('<span class="error">Campo prezzo vuoto', "<!-- errore_prezzo -->");
		document.getElementById('l_prezzo').innerHTML = Form;
	var check = true;
	if(Nome == "" || Nome == "undefined"){
		var Form = document.getElementById('l_nome').innerHTML;
		var Form = Form.replace("<!-- errore_nome -->",'<span class="error">Campo nome vuoto <\/span>');
		document.getElementById('l_nome').innerHTML = Form;
		check = false;
	}	
	if(Desc == "" || Desc == "undefined"){
		var Form = document.getElementById('l_descrizione').innerHTML;
		var Form = Form.replace("<!-- errore_descrizione -->",'<span class="error">Campo descrizione vuoto <\/span>');
		document.getElementById('l_descrizione').innerHTML = Form;
		check = false;
	}
	if(Prezzo == "" || Prezzo == "undefined"){
		var Form = document.getElementById('l_prezzo').innerHTML;
		var Form = Form.replace("<!-- errore_prezzo -->",'<span class="error">Campo prezzo vuoto');
		document.getElementById('l_prezzo').innerHTML = Form;
		check = false;
	}
	return check;
}		