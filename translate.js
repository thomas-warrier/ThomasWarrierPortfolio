let currentLang = 'en'; // Langue par défaut

// Détecter la langue du navigateur
const userLang = navigator.language || navigator.userLanguage;
if (userLang.startsWith('fr')) {
    currentLang = 'fr';
} else {
    currentLang = 'en';
}

function loadTranslation(lang) {
    fetch(`./lang/${lang}.json`)
        .then(res => res.json())
        .then(data => {
            // Parcours tous les noeuds texte du DOM
            document.querySelectorAll("*").forEach(el => {
                el.childNodes.forEach(node => {
                    if (node.nodeType === 3) { // Node texte
                        node.nodeValue = node.nodeValue.replace(/\{\{(.*?)\}\}/g, (match, key) => {
                            const keys = key.trim().split('.');
                            let value = keys.reduce((obj, k) => obj?.[k], data);
                            return value || match;
                        });
                    }
                });
            });
        })
        .catch(err => console.error("Erreur traduction :", err));
}

// Charger la langue au démarrage
document.addEventListener('DOMContentLoaded', () => {
    loadTranslation(currentLang);
});

// Changer la langue à la volée
function switchLanguage(lang) {
    currentLang = lang;
    loadTranslation(currentLang);
}
