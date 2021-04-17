var varPatient = document.getElementById("patient");
varPatient.addEventListener("click", colorPatient);
var vardocteur = document.getElementById("docteur");
vardocteur.addEventListener("click", colordocteur);

function colorPatient(event){
    var btnpatient=event.target;
    var divtag=btnpatient.parentElement;
    var btndoctor=divtag.querySelector("#docteur")
    console.log(btndoctor)
    if (btnpatient.style.background != "#166AB5"){
        btnpatient.style.background="#166AB5";
        btndoctor.style.background="initial";
    }else{
        btnpatient.style.background="#166AB5";
        btndoctor.style.background="initial";
    }
}
function colordocteur(event){
    var btndoctor1=event.target;
    var divtag1=btndoctor1.parentElement;
    var btnpatient1=divtag1.querySelector("#patient");
    if(btndoctor1.style.background!="#166AB5"){
        btndoctor1.style.background="#166AB5";
        btnpatient1.style.background="initial";
    }else{
        btndoctor1.style.background="#166AB5";
        btnpatient1.style.background="initial";
    }
}