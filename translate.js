let currentLang = navigator.language.startsWith("fr") ? "fr" : "en";

function loadTranslation(lang) {
    return fetch(`./lang/${lang}.json`)
        .then(res => res.json())
        .then(data => {
            document.querySelectorAll("*").forEach(el => {
                el.childNodes.forEach(node => {
                    if (node.nodeType === 3) {
                        node.nodeValue = node.nodeValue.replace(/\{\{(.*?)\}\}/g, (match, key) => {
                            const keys = key.trim().split('.');
                            let value = keys.reduce((obj, k) => obj?.[k], data);
                            return value || match;
                        });
                    }
                });
            });
        });
}

document.addEventListener("DOMContentLoaded", () => {
    loadTranslation(currentLang).then(() => {
        document.documentElement.classList.remove("hidden-before-translate");
    });
});

// Changer la langue à la volée
function switchLanguage(lang) {
    currentLang = lang;
    loadTranslation(currentLang);
}
