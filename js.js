const more =document.querySelector(".n11");
const moreitem  = document.querySelector(".outernavmore")
const hrule = document.querySelector(".hrule")
moreitem.style.display="none";
more.onclick = ()=>{
    if(moreitem.style.display==="none"){
        moreitem.style.display="flex";
        hrule.style.display="inline-block"
    }else{
        moreitem.style.display="none";
        hrule.style.display="none"
    }
    
}

const mainoptionbutton = document.querySelector(".n12");
mainoptionbutton.onclick = ()=>{
    if(moreitem.style.display==="none"){
        moreitem.style.display="flex";
        hrule.style.display="inline-block"
    }else{
        moreitem.style.display="none";
        hrule.style.display="none"
    }
}



const innermore =document.querySelector(".in19");
const innermoreitem  = document.querySelector(".innernavemore")


innermoreitem.style.display="none";
document.getElementById("optionimg").src="resource/optionwhite.svg"
innermore.onclick = ()=>{
    if(innermoreitem.style.display==="none"){
        innermoreitem.style.display="flex";
        document.getElementById("optionimg").src="resource/cross.svg"
        
    }else{
        innermoreitem.style.display="none"; 
        document.getElementById("optionimg").src="resource/optionwhite.svg"
   
        

    }
   
}

function myFunction(x) {
    if (x.matches) { // If media query matches
        
        if(innermoreitem.style.display==="none"){
           
            document.getElementById("optionimg").src="resource/optionwhite.svg"
            document.querySelector(".in0").style.display="flex";
            document.querySelector(".in1").style.display="flex";
            const optionicon = document.querySelector(".innernavitemoption")
            optionicon.style.bottom="50px"
        }else{

            document.getElementById("optionimg").src="resource/cross.svg"
            const optionicon = document.querySelector(".innernavitemoption")
            optionicon.style.bottom="0"
        }

       

    } else{
        document.querySelector(".in0").style.display="none";
        document.querySelector(".in1").style.display="none";
    }
  }
  
  var x = window.matchMedia("(max-width: 600px)")
  myFunction(x) // Call listener function at run time
  x.addEventListener("change",myFunction)



  const optionimgbutton=document.getElementById("optionimg")
  optionimg.onclick=()=>{
    if(optionimgbutton.getAttribute("src")==="resource/cross.svg"){
        innermoreitem.style.display="none";
        document.querySelector(".in0").style.display="flex";
        document.querySelector(".in1").style.display="flex";
        const optionicon = document.querySelector(".innernavitemoption")
        optionicon.style.bottom="50px"
        document.getElementById("optionimg").src="resource/optionwhite.svg"

    }else{
        innermoreitem.style.display="flex";
        document.querySelector(".in0").style.display="none";
        document.querySelector(".in1").style.display="none";
        const optionicon = document.querySelector(".innernavitemoption")
        optionicon.style.bottom="0"
        document.getElementById("optionimg").src="resource/cross.svg"
    }
  }
