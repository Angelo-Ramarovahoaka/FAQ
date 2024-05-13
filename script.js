for(let i=0;i<=3;i++){
    let item=document.querySelector(`.item${i+1}`);
    let p=document.querySelector(`.p${i+1}`);
    let span=document.querySelector(`.span${i+1}`);
    item.addEventListener("click",()=>{
        p.style.display="block";
        span.style.backgroundImage="url('./assets/images/icon-minus.svg')"
        console.log(span);
    });
}
