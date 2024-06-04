// Vysvětlení kodu: Kód v této funkci se spustí, jakmile je celý HTML dokument načtenej
document.addEventListener('DOMContentLoaded', () => {
    const songTitleElement = document.getElementById('song-title');
    const generateButton = document.querySelector('.generate-button');
    const messageElement = document.createElement('div');
    messageElement.classList.add('zprava');
// Vysvětlení kodu: Písničky, které mohou být vybrány.
    const songs = [
        "Pilot",
        "Hvězdy (Ft. Calin)",
        "Jizvy",
        "Nevolej mi (Ft. Decky & Viktor Sheen)",
        "Cash Money (Ft. Zayo)",
        "Dominiku",
        "Od rána do rána (Ft. Kamil Hoffmann)",
        "Se svejma psama (Ft. Nerieš)",
        "Sid & Nancy (Ft. Viktor Sheen)",
        "Nekonečný příběh (Ft. Karlo)",
        "Sedm (Ft. Hasan)",
        "Vysoko míříš (Ft. Yzomandias)",
        "Mars (Ft. Yzomandias)",
        "Off",
        "BUDE LÍP (feat. Hasan & Kamil Hoffmann)",
        "CHTĚLY BY TO MÍT (feat. Kamil Hoffmann, Jickson, Hasan & Yzomandias)",
        "Demons (feat. Nik Tendo)",
        "HULILA HULILA (feat. Hasan, Karlo)",
        "13.Komnata",
        "Nezměníš"
    ];
// Vysvětlení kodu: Tlačítko, na které když kliknete, tak se vám zobrazí vygenerovaní písnička a následný nápis: Dobrý výběr! Doufám, že se ti písnička bude líbit!";
    generateButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * songs.length);
        const randomSong = songs[randomIndex];
        songTitleElement.textContent = randomSong;
        messageElement.textContent = "Dobrý výběr! Doufám, že se ti písnička bude líbit!";
        songTitleElement.parentNode.appendChild(messageElement);
    });
});
// Vysvětlení kodu: funkce, která se spustí po načtení celého HTML dokumentu.
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
   // Vysvětlení kodu: Přidání události kliknutí na menu (našel jsem si na internetu)
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
});