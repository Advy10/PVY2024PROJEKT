    // Vysvětlení funkce kodu: Vybere element s ID okno.
document.addEventListener('DOMContentLoaded', () => {
    const textoveOkno = document.querySelector('#okno');
     // Vysvětlení funkce kodu: Nastaví šířku a výšku textoveho okna.
    textoveOkno.style.width = '100%';
    textoveOkno.style.height = '150px';
// Vysvětlení funkce kodu: Pole, které obsahuje nejčastější hate komentáře, co Nik Tendo dostává.
    const troll = [
        'neumíš rapovat', 'zní to strašně', 'tohle není rap, to je jen mumlání', 
        'tvoje texty jsou prázdné jako tvůj talent', 'máš víc autotune než skutečných slov', 
        'tvoje flow je jako zapomenutý refrén', 'tvoje rýmy jsou méně relevantní než tvoje image', 
        'tvoje verše jsou méně přesvědčivé než tvůj Instagram', 
        'tvoje slova jsou stejně bezvýznamná jako tvůj beat', 
        'tohle není rap, to je jen módní trend', 'tvoje rapové schopnosti jsou jako zapomenutá minulost'
    ];
// Vysvětlení funkce kodu: Jediné povolené znaky, které mužeme vypsat.
    const povoleneZnaky = ['Space', 'KeyT', 'KeyR', 'KeyO', 'KeyL', 'Backspace'];
    // Vysvětlení funkce kodu: Event listener, reaguje na stisknutí klávesy v tom textovém poli, zkontruje povolené znaky a následně vybere náhodnou zprávu z pole 'troll'.
    textoveOkno.addEventListener('keydown', (event) => {
        if (!povoleneZnaky.includes(event.code)) {
            event.preventDefault();
            const nahodnyTroll = troll[Math.floor(Math.random() * troll.length)] + ', ';
            textoveOkno.value += nahodnyTroll;
        }
    });
});
