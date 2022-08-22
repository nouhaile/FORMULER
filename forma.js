var date = new Date();
d = document.getElementById("time").innerHTML = "<p>Bonjour la date de Aujourd'hui: " + date.toLocaleDateString()+"</p>";
  

    
function validpass() {

    var code = document.getElementById("pasword").value;
    if (code.length < 8) {
      document.getElementById("message").innerHTML = "veuillez entre un password composé 8 caraquter maximum";
    }
    else {
      document.getElementById("message").innerHTML=" ";
      }
 }
 //fonction pour verification de (verifier le mot de passe ):
function validepassword(){
    motvp = document.getElementById("verf").value;
    code = document.getElementById("pasword").value;
    if ( motvp == "" || code != motvp ){
        document.getElementById("mess").innerHTML = "ce n'est pas le même mot de passe";
    }
    else{
        document.getElementById("mess").innerHTML = "valider";
    }
}

function clique(){
     //pour verifier le nom:
    n = document.getElementById("nom").value;
    if ( n.length < 3 ){
        document.getElementById("vnom").innerHTML = "non valide";
    }
    else{
        document.getElementById("vnom").innerHTML = "valide";
    }
    d = document.getElementById("ans").value;
    dd = new Date().getFullYear() - new Date(d).getFullYear();
     //pour verifier la date:
      if ( dd < 18 ){
            document.getElementById("vans").innerHTML = "votre age doit être plus que 18";
      }
      else {
        document.getElementById("vans").innerHTML = " ";
      }
       //pour verifier le prenom:
      p = document.getElementById("per").value;
      if ( p.length < 3 ){
          document.getElementById("vper").innerHTML = "non valide";
      }
      else{
          document.getElementById("vper").innerHTML = "valide";
      }
      //pour verifier le code postal:
      cdp = document.getElementById("code").value;
      if ( cdp.length < 3 ){
          document.getElementById("vcod").innerHTML = "non valider";
      }
      else{
          document.getElementById("vcod").innerHTML = "valider";
      }
      em = document.getElementById("mail").value;
      regEmail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');
      testemail = regEmail.test(em);
      if(!testemail){
          document.getElementById("xmail").innerHTML = "non valider";
      }
      else{
          document.getElementById("xmail").innerHTML = "valider";
      }
      telp = document.getElementById("tele").value;
      regtel = new RegExp('^[0-9]{10}$','i');
      testetel = regtel.test(telp);
      
      if(!testetel){
          document.getElementById("xtele").innerHTML = "non valider";
         
        }
      else{
          document.getElementById("xtele").innerHTML = "valider";
      }
      p = document.getElementById("py").value;
      if (p == "séléctioné un Pays"){
          document.getElementById("validp").innerHTML = "non valider";
      }
      else{
          document.getElementById("validp").innerHTML = "valider";
      }
    }  if ( document.getElementById("fem").checked == false && document.getElementById("mas").checked == false){
        document.getElementById("validg").innerHTML = "entrez votre genre";
    }
    else{
        document.getElementById("validg").innerHTML = "valider";
    }
