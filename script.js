  let inPut = document.querySelector(".in_put");
  let outPut = document.querySelector(".out_put");
  let button = document.querySelectorAll("#buttons");

  button.forEach(function(keys){
keys.addEventListener("click",calcuLator)
  });

  function calcuLator(e){
    let buttonInnertext = this.innerText;
    if(buttonInnertext =="C" ){
      inPut.innerText ="";
      outPut.innerText ="0";
      inPut.style.animation =""
outPut.style.animation =""
    }
    else if(buttonInnertext == "BC"){
      inPut.textContent=inPut.textContent.slice(0,inPut.textContent.length-1);

    } 
    else if(buttonInnertext == "="){
outPut.innerText = eval(inPut.innerText);
inPut.style.animation ="small 0.4s ease-in-out"
outPut.style.animation ="big 0.4s ease-in-out"
inPut.style.animationFillMode = "forwards"
outPut.style.animationFillMode = "forwards"

    }
    else{
      inPut.innerText += buttonInnertext;
      
    }
  };
