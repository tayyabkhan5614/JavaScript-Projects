const sadness= document.querySelector(".sadness");
// const pessimism= document.querySelector(".pessimism");
// const past= document.querySelector(".past");
// const joy= document.querySelector(".joy");
// const feel= document.querySelector(".feel");
// const punish= document.querySelector(".punish");
// const disgust= document.querySelector(".disgust");
// const self= document.querySelector(".self");
// const suicidal= document.querySelector(".suicidal");
// const weep= document.querySelector(".weep");
// const agitation= document.querySelector(".agitation");
// const loss= document.querySelector(".loss");
// const inde= document.querySelector(".inde");
// const worthy= document.querySelector(".worthy");
// const energy= document.querySelector(".energy");
// const sleep= document.querySelector(".sleep");
// const fatigue= document.querySelector(".fatigue");
// const change= document.querySelector(".change");
// const weight= document.querySelector(".weight"); 
const s1 = document.getElementById("1");
const s2 = document.getElementById("2");
const s3 = document.getElementById("3");
const s4 = document.getElementById("4");


function result()
        {
            var value = document.getElementById("1").value;
            alert(value);
            let firstname = document.getElementById("1").value;
                // alert(firstname);
            localStorage.setItem("Sad", firstname);
          //   return false;
        //   var sad = [s1, s2, s3, s4];
        //  localStorage.setItem("myValue", sad);
         window.location.href="result.html";
        }

