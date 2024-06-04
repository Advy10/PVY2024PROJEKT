// Vysvětlení funkce kodu: Vybere HTML element s třídou 'gallery-container'
document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.querySelector('.gallery-container');
    const images = [
        //Vysvětlení funkce kodu: Definuje pole objektů, (src (url odkaz) alt(název obrázku))
        {
            src: "https://i.pinimg.com/736x/e2/04/b8/e204b8a774fbed76cd853e63322c3345.jpg",
            alt: "Nik Tendo 1"
        },
        {
            src: "https://refstatic.sk/article/5f2367e885b83f50f4eb.jpg?is=1200x2000&s=33a4b5233a40bec6ea58a0e6b163084df0bd9c283dc630e34cd277e8e8ee0a2a",
            alt: "Nik Tendo 2"
        },
        {
            src: "https://img.redbull.com/images/c_crop,x_754,y_0,h_1707,w_1281/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2019/11/11/19c9225b-4c65-4995-9b0f-e8342bb57432/nik-tendo-fatamorgana-making-of-video-foto",
            alt: "Nik Tendo 3"
        },
        {
            src: "https://www.footshop.cz/blog/wp-content/uploads/2019/11/Bdiktendo.jpg",
            alt: "Nik Tendo 4"
        },
        {
            src: "https://goout.net/cdn-cgi/image/format=auto,width=250/i/125/1257881-250.jpg",
            alt: "Nik Tendo 5"
        },
        {
            src: "https://goout.net/cdn-cgi/image/format=auto,width=250/i/108/1080533-250.jpg",
            alt: "Nik Tendo 6"
        }
    ];
// Vysvětlení funkce kodu: Pro každý objekt v poli 'images' se vytvoří nové HTML elementy, dále se vytvoří nový 'img' element a nastaví jeho 'src' a 'alt' atributy, pak se přidá 'img' element, jako podřízený element do 'div' elementu a pak se přidá 'div' element jako podřízený element do 'gallery-container'
    images.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;

        galleryItem.appendChild(img);
        galleryContainer.appendChild(galleryItem);
    });
});