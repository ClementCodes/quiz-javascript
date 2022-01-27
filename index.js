
const form = document.querySelector('.form-quizz ')
let tableauResults = []

const reponses = ["c","a","b","a","c"]
const emojis = ['✔️', '✨', '👀', '😭', '👎'];
const titreResultat = document.querySelector(".resultats h2")
const noteResultat = document.querySelector(".note")
const aideResultat = document.querySelector(".aide")
const touteLesQuestions = document.querySelectorAll(".question-block")
let verifTableau =[]

form.addEventListener("submit", (e) => { 
    
    e.preventDefault();
    for (let index = 1; index < 6; index++) {
        tableauResults.push(document.querySelector(`input[name="q${index}"]:checked`).value)
        console.log (tableauResults)
    }

    verifFunc(tableauResults)
    tableauResults = []
})
 
function verifFunc(tabResulats) {
    

for (let index = 0; index < 5; index++) {
    if (tabResulats[index] === reponses[index]) {
        verifTableau.push(true)
    } else {
        verifTableau.push(false)
    }
    
}
couleurFonction(verifTableau)

    afficherResultats(verifTableau)
    verifTableau= []
}

function afficherResultats(tabCheck) {
    


    const nbDeFautes = tabCheck.filter(el => el !== true).length
    // console.log(nbDeFautes);

    switch(nbDeFautes) {

        case 0:
            titreResultat.innerText = `✔️ Bravo, c'est un sans faute ! ✔️`
            aideResultat.innerText = ''
            noteResultat.innerText = '5/5'
            break;
        case 1:
            titreResultat.innerText = `✨ Vous y êtes presque ! ✨`
            aideResultat.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !'
            noteResultat.innerText = '4/5'
            break;
        case 2:
            titreResultat.innerText = `✨ Encore un effort ... 👀`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '3/5'
            break;
        case 3:
            titreResultat.innerText = `👀 Il reste quelques erreurs. 😭`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '2/5'
            break;
        case 4:
            titreResultat.innerText = `😭 Peux mieux faire ! 😭`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '1/5'
            break;
        case 5:
            titreResultat.innerText = `👎 Peux mieux faire ! 👎`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '0/5'
        break;

        default:
            'Woops, cas inatendu.';

    }


}


function couleurFonction(tabValBool) {
    
    for (let index = 0; index < tabValBool.length; index++) {
        
        if (tabValBool[index] === true) {
            touteLesQuestions[index].style.background='lightgreen'
        } else {
            touteLesQuestions[index].style.background='#ffb8b8'
            touteLesQuestions[index].classList.add('echec')
        }
        setTimeout(() => {
            
touteLesQuestions[index].classList.remove("echec")
        },500)
    };
}


touteLesQuestions.forEach(item =>
    
    item.addEventListener('click', () => {
        
        item.style.background="white"
    })
    
    )