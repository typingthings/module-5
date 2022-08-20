var btn = document.querySelectorAll(".btn")
var currenthour = moment().hour()
for (var i = 9; i < 18; i++) {
    if (currenthour === i) {
        document.querySelector("#time-" + i).classList.add("present")
    }
    if (currenthour > i) {
        document.querySelector("#time-" + i).classList.add("past")
    }
    if (currenthour < i) {
        document.querySelector("#time-" + i).classList.add("future")
    }
    var text = document.querySelector("#time-"+i)
    text.value = localStorage.getItem("time-"+i)
}
function save() {
    var id = this.getAttribute("data-id")
    var text = document.querySelector("#" + id).value
localStorage.setItem(id,text)
}
for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", save)
}