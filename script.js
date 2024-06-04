// Vysvětlení funkce kodu: Minimální a maximální věk uživatele, který je povolen pro vstup na web.
const MINIMUM_AGE = 15;
const MAXIMUM_AGE = 69;
// Vysvětlení funkce kodu: Objekt Date, získá aktuální datum, a následně ho zobrazí ve formátu "DD.MM.RRRR" pomocí window.alert.
const dneska = new Date();
const dnesni_datum = `${dneska.getDate()}.${dneska.getMonth() + 1}.${dneska.getFullYear()}`;
window.alert(`Dnešní datum: ${dnesni_datum}`);

// Tuhle funkci jsem hledal na Internetu - Vysvětlení funkce kodu: Funkce pro přesměrování na černou stránku:

function redirectToBlackPage() {
    document.body.style.backgroundColor = "black";
    document.body.innerHTML = "<h1 style='color:white; text-align:center;'>Nemáte oprávnění k přístupu.</h1>";
}

// Tuhle funkci jsem hledal na Internetu: - Vysvětlení funkce kodu: Funkce pro přesměrování na hlavní stránku:
function redirectToMainPage() {
    return;
}

let scriptAlreadyLoaded = false;
document.addEventListener("DOMContentLoaded", function() {
    if (scriptAlreadyLoaded) return;

    scriptAlreadyLoaded = true;
// Vysvětlení funkce kodu: Získání jména uživatele
    let jmenoUzivatele = window.prompt('Jak se jmenuješ?', 'Nik Tendo Fans');
    jmenoUzivatele = jmenoUzivatele.trim();
    // Vysvětlení funkce kodu: Získání emailu uživatele
    let emailUzivatele;
    do {
        emailUzivatele = window.prompt('Zadej svůj e-mail:');
    } while (!emailUzivatele.includes('@'));
// Vysvětlení funkce kodu: Získání hesla uživatele - heslo musí mít minimalně 6 znáku a musí obsahovat alespoň jedno číslo, jinak vás to nepustí dál!
    let hesloUzivatele;
    do {
        hesloUzivatele = window.prompt('Zadej heslo (minimálně 6 znaků a musí obsahovat alespoň jedno číslo):');
    } while (hesloUzivatele.length <= 6)
     // Vysvětlení funkce kodu: Získání a vypsaní data narození:
    const zadaniDatumu = window.prompt('Zadej své datum narození (DD.MM.RRRR)', '10.02.2007');
    const parts = zadaniDatumu.split('.');
    const zadaneDatum = new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]));
    // Vysvětlení funkce kodu: Výpočet rozdílu dní od narození:
    const rozdilDni = Math.floor((dneska - zadaneDatum) / (1000 * 60 * 60 * 24));

    window.alert(`Od tvého narození uběhlo již: ${rozdilDni} dní`);
    window.alert(`Nik Tendo je boss!, ${jmenoUzivatele}!`);
    // Vysvětlení funkce kodu: Kontrola, zda je uživatel fanouškem Nik Tenda:
    const jefanousekniktenda = window.confirm('Jsi fanoušek Nik Tenda? Klikni na OK pro Ano, nebo Storno pro Ne.');
    // Vysvětlení funkce kodu: Kontrola věku a oprávnění k přístupu, pokud uživatel neprojde bude přesměrován na černou stránku.:
    if (jefanousekniktenda) {
        let vekUzivatele = window.prompt('Tak a kolik ti je vlastně let?');
        console.log(vekUzivatele);

        if (!isNaN(Number(vekUzivatele))) {
            if (vekUzivatele >= MINIMUM_AGE && vekUzivatele <= MAXIMUM_AGE) {
                window.alert(`Gratuluji, splňuješ podmínku pro možnost vstupu na web!`);
                window.alert(`Vítej na mojí hře na počest Nik Tendovi!`);
                redirectToMainPage();
            } else {
                window.alert(`Omlouváme se, ale musí ti být nejméně ${MINIMUM_AGE} a nejvíce ${MAXIMUM_AGE} let. Omlouváme se za potíže.`);
                redirectToBlackPage();
            }
        } else {
            const novaSance = window.confirm('Vypadá to, že jsi nezadal(a) číslo. Chceš to zkusit znovu? Klikni na OK pro Ano, nebo Storno pro Ne.');
            if (novaSance) {
                vekUzivatele = window.prompt('Dáme ti ještě jednu šanci. Kolik ti je skutečně let?');
                if (!isNaN(Number(vekUzivatele)) && vekUzivatele >= MINIMUM_AGE && vekUzivatele <= MAXIMUM_AGE) {
                    redirectToMainPage();
                } else {
                    window.alert(`Omlouváme se, ale musí ti být nejméně ${MINIMUM_AGE} a nejvíce ${MAXIMUM_AGE} let. Pokud opět nezadáš platné číslo, nebude ti umožněn přístup.`);
                    redirectToBlackPage();
                }
            } else {
                window.alert(`POSLEDNÍ POKUS: Omlouváme se, ale musí ti být nejméně ${MINIMUM_AGE} a nejvíce ${MAXIMUM_AGE}`);
                redirectToBlackPage();
            }
        }
    } else {
        window.alert('Omlouváme se, ale nemůžeš pokračovat, nejsi fanoušek Milion Plus!');
        redirectToBlackPage();
    }
});
 // Vysvětlení funkce kodu: Přesměrování na kvíz:
document.getElementById('start-quiz').addEventListener('click', function() {
    window.location.href = 'kviz.html';
});
// Vysvětlení funkce kodu: Ovládání menu:
document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('nav-active');
    document.querySelector('.burger').classList.toggle('toggle');
});
