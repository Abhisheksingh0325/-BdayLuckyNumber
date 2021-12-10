var date = document.querySelector("#date")
var num = document.querySelector("#num")
var btn = document.querySelector(".btn")
var ans = document.querySelector("#ans")


function handler() {
    var temp = parseInt((date.value).replaceAll('-', ''))
    var sum = 0, rem = 0;
    while (temp != 0) {
        rem = parseInt(temp % 10)
        sum = sum + rem
        temp = parseInt(temp / 10)
    }

    if (sum % num.value === 0) {
        ans.innerText = "Your birthday is Lucky"
    }
    else {
        ans.innerText = "your birthday is NOT lucky, so sad"
    }
}

btn.addEventListener("click", handler)