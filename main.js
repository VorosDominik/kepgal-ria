window.addEventListener("load", v1)


function v1() {
    var sec = document.querySelector("section img");
    let arti = document.querySelector("article");
    let currentIndex=0
    const kep = ["kép/DSC7025.jpg", "kép/DSC7365.jpg", "kép/DSC73711.jpg"];
    gomb(kep, sec)
    alsokepek(kep, arti);
    const keplista = document.querySelectorAll("article div img")
    for (let index = 0; index < keplista.length; index++) {
        keplista[index].addEventListener("click", function () { kepkatintas(index, keplista) })

    }
    nagykepdolog(kep,sec)

}


function alsokepek(tomb, arti) {
    console.log(arti);
    for (let index = 0; index < tomb.length; index++) {
        arti.innerHTML += `<div><img src="${tomb[index]}" alt="kep"></img></div>`
    }

}


function gomb(tomb, sec) {
    console.log(sec);
    sec.src = tomb[0]
}


function kepkatintas(index, keplista) {
    console.log(event.target.src);
    let asd = event.target.src
    const nagykep = document.querySelectorAll("section div img");
    console.log(nagykep)
    nagykep[0].src = asd;
}


function nagykepdolog(tomb, arti) {
    console.log(arti);

        arti.innerHTML = `<div><img src="${tomb[currentIndex]}" alt="kep"></img></div>`
    

}

function jobbgomb() {
    currentIndex--;
  if (currentIndex < 0) {
    currentIndex = maxIndex;
  }
  currentImage.src = images[currentIndex];
}

function balgomb() {
    currentIndex--;
  if (currentIndex < 0) {
    currentIndex = maxIndex;
  }
  currentImage.src = images[currentIndex];
}
