let aa: number = 1;
console.log(aa);
console.log(aa+10);

let element = document.getElementById("welcome");
element?.addEventListener("mouseover", ()=>{
    element?.classList.toggle('big');
    element?.classList.toggle('small');
    console.log(aa)
});