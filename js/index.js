function chooserOpen(btn){
    let btnText = document.getElementById("chooser-open_btn-text")
    let labelBtns = Array.from(document.getElementsByClassName("chooser-btn-label"))
    let inputBtns = Array.from(document.getElementsByClassName("chooser-btn"))
    if(btn.getAttribute("opened") === "1"){
        btnText.innerHTML = "Hide all"
        btnText.nextElementSibling.style.transform = "rotate(180deg)"
        btn.setAttribute("opened", "0")
        labelBtns.forEach((el) => {el.style.display = "block"})
    } else{
        btnText.innerHTML = "Show all"
        btnText.nextElementSibling.style.transform = "rotate(0deg)"
        btn.setAttribute("opened", "1")
        labelBtns.splice(4).forEach((el) => {el.style.display = "none"})
        for(let i = 0; i < inputBtns.length; i++){if(i > 4 && inputBtns[i].checked){inputBtns[0].checked = true}}
    }
}
