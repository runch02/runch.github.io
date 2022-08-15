class UI {

    constructor() {
        UI.setStyleToDOM()
    }

    static navigationHandler(element) {
        switch (element.target.innerText) {
            case "=":
                element.target.innerText = "X"
                document.querySelector("nav").style.left = 2 + "rem"
                break;

            case "X":
                element.target.innerText = "="
                document.querySelector("nav").style.left = -300 + "px"
                break;

            default:
                break;
        }
    }

    static themeHandler(element) {
        switch (element.target.innerText) {
            case "Dark":
                element.target.innerText = "Light"
                let darkTheme = { background: "#313131", color: "gray", buttonName: "Light" }
                localStorage.setItem("theme", JSON.stringify(darkTheme))

                UI.setStyleToDOM()
                break;

            case "Light":
                element.target.innerText = "Dark"
                let lightTheme = { background: "#eee", color: "black", buttonName: "Dark"}
                localStorage.setItem("theme", JSON.stringify(lightTheme))

                UI.setStyleToDOM()
                break;

            default:
                break;
        }
    }

    static setStyleToDOM() {
        if (localStorage.getItem("theme") === null) {
            return;
        } else {
            let fetchStyleFromLocalStorage = JSON.parse(localStorage.getItem("theme"))
            document.getElementById("theme").innerText = fetchStyleFromLocalStorage.buttonName
            document.body.style.background = fetchStyleFromLocalStorage.background
            document.body.style.color = fetchStyleFromLocalStorage.color
        }
    }

    static initialNumber = 0

    static showKalpbruh() {
        let runchName = "RUNCH"
        if (UI.initialNumber === runchName.length) {
            UI.initialNumber = 0
            document.querySelector("footer a h1").innerHTML = ""
        } else {
            document.querySelector("footer a h1").innerHTML += runchName[UI.initialNumber]
            UI.initialNumber += 1
        }
    } 

}

let firstObjectOfClassUI = new UI()

// function to handle navbar position
document.getElementById("navigation").addEventListener("click", element => UI.navigationHandler(element))

// function to handle theme status
document.getElementById("theme").addEventListener("click", element => UI.themeHandler(element))

let interval = setInterval(() => {
    UI.showKalpbruh()
}, 500)
