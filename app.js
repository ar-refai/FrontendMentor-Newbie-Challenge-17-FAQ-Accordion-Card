// const btn = document.querySelector('.btn');
// console.log(btn);
function accordion (btn) {

    let btnClass = btn.classList[1];
    let para = document.querySelector("."+ btnClass + "+ p");
    let arrow = document.querySelector("."+ btnClass + "> img");
    if(para.style.display == "block") {
        para.style.display = "none";
        arrow.style.transform = "rotate(0)";
    }
    else {
        arrow.style.transform = "rotate(180deg)";
        para.style.display = "block";
        document.querySelector("." + btn.classList[1] + " + h2").style.fontWeight = "900";
        
    }
}
