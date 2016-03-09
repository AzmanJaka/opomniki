window.addEventListener('load', function() {
	//stran nalozena
	var izvediPrijavo = function(event){
			var uporabnik =document.querySelector("#uporabnisko_ime").value;
			document.getElementById("uporabnik").innerHTML =uporabnik;
			document.getElementsByClassName("pokrivalo").item(0).style.display = "none";
			
			
		}
	document.querySelector("#prijavniGumb").addEventListener('click', izvediPrijavo);
	
	var nastavi_vrednost = function(event){
		var ime = document.getElementById("naziv_opomnika").value;
		var cas = document.getElementById("cas_opomnika").value;
		
		document.getElementById("naziv_opomnika").value = "";
		document.getElementById("cas_opomnika").value = "";
		
		

    	document.getElementById("opomniki").innerHTML+= "<div class='opomnik rob senca'><div class='naziv_opomnika'>"+ime+"</div><div class='cas_opomnika'> Opomnik čez <span>"+cas+"</span> sekund.</div></div>"
		
	}
	document.querySelector("#dodajGumb").addEventListener('click', nastavi_vrednost);
	
	
	
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			if (cas > 0){
				casovnik.innerHTML = cas-1;
				
			}
			else{
				var nazivOpomnika = opomnik.querySelector(".naziv_opomnika").innerHTML;
				
				document.querySelector("#opomniki").removeChild(opomnik);
				window.alert("Opomnik je potekel!");
			}
			
			
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
});
