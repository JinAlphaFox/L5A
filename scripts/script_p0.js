function pageUp(pageactuelle) {
    let fond = document.querySelector("main")
    pageactuelle++
    switch(pageactuelle) {
        case 1:
            console.log("1")
            fond.style.backgroundImage = "url(images/20q2.jpg)"
        break;
        case 2:
            console.log("2")
            fond.style.backgroundImage = "url(images/20q3.jpg)"
        break;
        case 3:
            console.log("3")
            fond.style.backgroundImage = "url(images/20q4.jpg)"
        break;
        default:
            console.log("0")
            fond.style.backgroundImage = "url(images/20q1.jpg)"
    }
    return pageactuelle
}

let page = 0
let buttonSuivant = document.getElementById("buttonSuivant")

buttonSuivant.addEventListener("click", () => {
    page = pageUp(page)
    console.log(page)

})