function chooserOpen(btn){
    let labelBtns = Array.from(document.getElementsByClassName("chooser-btn-label"))
    let inputBtns = Array.from(document.getElementsByClassName("chooser-btn"))
    if(btn.getAttribute("opened") === "1"){
        btn.innerHTML = "Hide all"
        btn.setAttribute("opened", "0")
        labelBtns.forEach((el) => {el.style.display = "block"})
    } else{
        btn.innerHTML = "Show all"
        btn.setAttribute("opened", "1")
        labelBtns.splice(4).forEach((el) => {el.style.display = "none"})
        for(let i = 0; i < inputBtns.length; i++){if(i > 4 && inputBtns[i].checked){inputBtns[0].checked = true}}
    }
}
