const arrImages = [
    {
        File: 'agaeta01.jpeg',
        Title: 'Agaeta by',
    },
    {
        File: 'agaeta02.jpeg',
        Title: 'Agaeta Natural Pool',
    },
    {
        File: 'confital01.jpeg',
        Title: 'Confital Beach',
    },
    {
        File: 'dessert01.jpeg',
        Title: 'Playa Del Ingles',
    },
    {
        File: 'laaldea01.jpeg',
        Title: 'La Aldea',
    },
    {
        File: 'laaldea02.jpeg',
        Title: 'la Aldea Cave',
    },
    {
        File: 'lascanteras01.jpeg',
        Title: 'Las Casteras',
    },
    {
        File: 'lascanteras02.jpeg',
        Title: 'Las Casteras Beach',
    },
    {
        File: 'laspalmas01.jpeg',
        Title: 'Las Palmas',
    },
    {
        File: 'mogan01.jpeg',
        Title: 'Mogan Canal',
    },
    {
        File: 'mogan02.jpeg',
        Title: 'Mogan Beach',
    },
    {
        File: 'mountains01.jpeg',
        Title: 'Mountains of Gran Canaria 1',
    },
    {
        File: 'mountains02.jpeg',
        Title: 'Mountains of Gran Canaria 2',
    },
    {
        File: 'mountains03.jpeg',
        Title: 'Mountains of Gran Canaria 3',
    },
    {
        File: 'mountains04.jpeg',
        Title: 'Mountains of Gran Canaria 4',
    },
    {
        File: 'mountains05.jpeg',
        Title: 'Mountains of Gran Canaria 5',
    },
]



const displayImages = () => {
    for(let item of arrImages){
        const div = document.createElement('div');
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        const caption = document.createElement('caption');
        caption.innerText = item.Title;
        img.src = `images/gallery/small/${item.File}`
        img.alt = ` ${item.Title}`;


        figure.appendChild(img);
        figure.appendChild(caption);
        div.appendChild(figure);
        
        document.getElementById('gallery').appendChild(div);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const lightBox = document.createElement('div');
    lightBox.classList.add('lightbox');
    document.body.appendChild(lightBox);

});

displayImages();