const rangeInput=document.querySelector(".example__scrollbar--input"),fatCatImg=document.querySelector(".example__fat-cat"),catBefore=document.querySelector(".example__scrollbar-before"),catAfter=document.querySelector(".example__scrollbar-after"),inputTrack=document.getElementsByClassName("example__scrollbar--input")[0],slideCats=()=>{const e=rangeInput.value;fatCatImg.style.width=`${e}%`;inputTrack.style.setProperty("--color",(()=>{if(e>=50){return`linear-gradient(\n        to left,\n        #ffffff 0%,\n        #ffffff ${100-e}%,\n        #68b738 ${100-e}%,\n        #68b738 100%\n        )`}if(e<50){return`linear-gradient(\n        to left,\n        #ffffff 0%,\n        #ffffff ${100-e}%,\n        #68b738 ${100-e}%,\n        #68b738 100%\n        )`}return""})())};rangeInput.oninput=slideCats,catBefore.onclick=()=>{rangeInput.value=0,fatCatImg.style.width="0%",inputTrack.style.setProperty("--color","linear-gradient(\n    to left,\n    #ffffff 0%,\n    #ffffff 100%,\n    #68b738 0%,\n    #68b738 0%\n    )")},catAfter.onclick=()=>{rangeInput.value=100,fatCatImg.style.width="100%",inputTrack.style.setProperty("--color","linear-gradient(\n    to left,\n    #ffffff 0%,\n    #ffffff 0%,\n    #68b738 0%,\n    #68b738 100%\n    )")};