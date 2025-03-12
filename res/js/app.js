// GENERAL
// -------------
let isDebug = true;
let pageId = document.body.getAttribute("data-pageId");

let ENV_D = 30; // durata cookie in giorni

document.addEventListener('DOMContentLoaded', function() {
    updatesGuiFav(); 
});

window.addEventListener('load', function () {
    console.log('\n\n Page:' + pageId + ' | All resources loaded!');
    console.log('🚀 Welcome By Giuseppe Cappadonna | Aco Web Solutions \n\n');
});

// BTN LOGIC
// -------------
let cards = document.querySelectorAll(".card");

cards.forEach(card => {
    let favBtn = card.querySelector('.favorite-btn');
    favBtn.addEventListener('click', function() {
        if (!card.classList.contains('added')) {
            addFavorites(this.closest('.card'));
        } else {
            removeFavorites(this.closest('.card'));
        }
        updatesGuiFav();
    });
});

// COOKIE LOGIC
// -------------

// funzione che aggiorna la GUI
function updatesGuiFav() {
    printFavorites();
    printLog("aggiorno la GUI");
    let cards = document.querySelectorAll(".card");
    let favorites = getCookieFavorites();
    cards.forEach(card => {
        let cardFavId = card.getAttribute('data-id');
        if (favorites.includes(cardFavId) && !card.classList.contains('added')) {
            card.classList.add('added');
            printLog("accendo GUI: " + cardFavId);      
        } else if (!favorites.includes(cardFavId) && card.classList.contains('added')) {
            card.classList.remove('added');
            printLog("spengo GUI: " + cardFavId);    
        }
    });
}

// aggiungi id
function addFavorites(card) {
    let favId = card.getAttribute('data-id');
    let favorites = getCookieFavorites();
    printLog("Favorites: " + favorites);
    if (!favorites.includes(favId)) {
        favorites.push(favId);
        printLog("Inserisco: " + favId);
    }
    setFavorites(favorites);
}

// togli id
function removeFavorites(card) {
    let favId = card.getAttribute('data-id');
    let favorites = getCookieFavorites();
    printLog("Favorites prima: " + favorites);
    
    if (favorites.includes(favId)) {
        printLog("rimuovo: " + favId);
        favorites = favorites.filter(id => id !== favId);
        printLog("Favorites dopo: " + favorites);
    }
    setFavorites(favorites);
}

// funzione che scrive effettivamente il cookie
function setFavorites(cookieFav) {
    printLog("Scrivo il cookie");
    let expires = new Date();
    expires.setTime(expires.getTime() + (ENV_D * 24 * 60 * 60 * 1000)); 
    document.cookie = `favorites=${encodeURIComponent(JSON.stringify(cookieFav))}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
}

// ottiene array con tutti gli id dei preferiti se non esiste allora torna null
function getCookieFavorites() {
    let cookies = document.cookie.split('; ').find(row => row.startsWith('favorites='));
    if (cookies) {
        try {
            let favorites = JSON.parse(decodeURIComponent(cookies.split('=')[1]));
            return Array.isArray(favorites) ? favorites : [];
        } catch (e) {
            console.error("Errore nel parsing del cookie favorites", e);
            return [];
        }
    }
    return [];
}

// funzione per stampare tutti gli ID salvati nei cookie
function printFavorites() {
    let favorites = getCookieFavorites();
    console.log("ID salvati nei preferiti:", favorites);
}

// funzione che elimina il cookie
function deleteFavorites() {
    document.cookie = "favorites=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax";
}

// debug logic
// -----------
function printLog(info) {
    if (isDebug) {
        console.log(info);
    }
}

document.querySelectorAll(".deleteCookie").forEach(btn => {
    btn.addEventListener('click', function(event) {
        console.log("## Elimino il cookie");
        event.preventDefault();
        deleteFavorites();
        updatesGuiFav();
    });
});