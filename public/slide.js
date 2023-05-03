// Slider

const precedentBtn = document.querySelector('.after-before .before')
const suivantBtn = document.querySelector('.after-before .after')
const avisSlider = document.querySelectorAll('.avis-ctn-slide-bar .block-avis')
const getMobileAvis = document.querySelectorAll('.block-avis.active>div')
const checkPresence = document.querySelector('.avis-ctn-slide-bar div.hide-for-mobile')

const getSize = avisSlider.length

const getSizeMobileAvis  = getMobileAvis.length

function removeActiveClass() {
    for (let i = 0; i < getSize; i++) {
        avisSlider[i].classList.remove('active')
    }
}

function removeActiveClassMobile() {
    for (let i = 0; i < getSizeMobileAvis; i++) {
        getMobileAvis[i].classList.remove('active')
    }
}

function gestionDuSlide(avis, sizeAvis) {
    let progression = 0

    suivantBtn.addEventListener("click", function() {
        progression++
        if (progression >= sizeAvis) {
            progression = 0
        }
        removeActiveClassMobile()
        if (window.innerWidth>700) {
            removeActiveClass()
        }
        avis[progression].classList.add('active')
        return progression
    })
    
    precedentBtn.addEventListener("click", function() {
        progression--
        if (progression < 0) {
            progression = sizeAvis - 1
        }
        removeActiveClassMobile()
        if (window.innerWidth>700) {
            removeActiveClass()
        }
        avis[progression].classList.add('active')
    })
    
    setInterval(function() {
            progression++
            if (progression >= sizeAvis) {
                progression = 0
            }
            removeActiveClassMobile()
            if (window.innerWidth>700) {
                removeActiveClass()
            }
            avis[progression].classList.add('active')
            return progression
        }, 3000)
}

let largeur = window.innerWidth

if (largeur<=700) {
    gestionDuSlide(getMobileAvis, getSizeMobileAvis)
}else{
    gestionDuSlide(avisSlider, getSize)
}