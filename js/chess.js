const MAIN = document.querySelector("main");
let obj = {
    "w-k": [[8, 5]],
    "w-q": [[8, 4]],
    "w-r": [[8, 1], [8, 8]],
    "w-b": [[8, 3], [8, 6]],
    "w-n": [[8, 2], [8, 7]],
    "w-p": [],

    
    "d-k": [[1, 5]],
    "d-q": [[1, 4]],
    "d-r": [[1, 1], [1, 8]],
    "d-b": [[1, 3], [1, 6]],
    "d-n": [[1, 2], [1, 7]],
    "d-p": [],
}
let pown = 0;
while(pown++ < 10){
    obj["w-p"].push([7, pown])
    obj["d-p"].push([2, pown])
}
let i = 0


const load = () => {
    while (i++ < 8){
        let j = 0
        MAIN.innerHTML += `<article class="hmm-${i%2}" id="${i}"></article>`
        while (j++ < 8){
            let o = ""
            for (objT in obj){
                obj[objT].forEach((x) => {
                    console.log()
                    if (i == x[0] && j == x[1]){
                        o = `<img draggable="true" src="../img/chess/${objT}.png" alt="${objT}">`;
                        return
                    }
                    // console.log(objT, x)
                })
                // for (objP in ){
                //     console.log(objP)
                // }
            }
            document.getElementById(`${i}`).innerHTML += `<section pos="${i} ${j}">${o}</section>`
        }
    }
}
load()

let hoverE = null


// for (i in document.querySelectorAll("img")){
//     if (i == Number(i)) {
//         document.querySelectorAll("img")[i].addEventListener("dragend", (e) => {
//             e.preventDefault()
//             console.log("drag", e)
//         });
//     }
// }

for (i in document.querySelectorAll("section")){
    if (i == Number(i)) {
        document.querySelectorAll("section")[i].addEventListener("hover", (e) => {
            hoverE = e
            console.log(e)
        });
    }
}