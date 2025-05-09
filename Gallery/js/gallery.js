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

let currentIndex = null; // Holder styr på aktuelt billede i modal

const displayImages = () => {
    for (let item of arrImages) {
        const div = document.createElement('div');
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        const caption = document.createElement('caption');
        caption.innerText = item.Title;
        img.src = `images/gallery/small/${item.File}`;
        img.alt = `${item.Title}`;

        figure.appendChild(img);
        figure.appendChild(caption);
        div.appendChild(figure);

        document.getElementById('gallery').appendChild(div);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const imgElements = Array.from(document.querySelectorAll('img'));

    const modalDiv = document.createElement('div');
    modalDiv.classList.add('lightbox');
    document.body.appendChild(modalDiv);

    const updateModalImage = index => {
        const img = document.createElement('img');
        img.src = `images/gallery/small/${arrImages[index].File}`;
        img.alt = arrImages[index].Title;
        modalDiv.innerHTML = '';
        modalDiv.appendChild(img);
    };

    const openModal = index => {
        currentIndex = index;
        updateModalImage(currentIndex);
        modalDiv.classList.add('active');
    };

    const closeModal = () => {
        modalDiv.classList.remove('active');
        currentIndex = null;
    };

    const showNextImage = () => {
        if (currentIndex !== null) {
            currentIndex = (currentIndex + 1) % arrImages.length;
            updateModalImage(currentIndex);
        }
    };

    const showPreviousImage = () => {
        if (currentIndex !== null) {
            currentIndex = (currentIndex - 1 + arrImages.length) % arrImages.length;
            updateModalImage(currentIndex);
        }
    };

    imgElements.forEach((img, index) => {
        img.addEventListener('click', () => openModal(index));
    });

    modalDiv.addEventListener('click', () => closeModal());

    document.addEventListener('keydown', e => {
        if (modalDiv.classList.contains('active')) {
            if (e.key === 'ArrowRight') {
                showNextImage();
            } else if (e.key === 'ArrowLeft') {
                showPreviousImage();
            } else if (e.key === 'Escape') {
                closeModal();
            }
        }
    });
});

displayImages();
