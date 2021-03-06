// funcitonality for thumbnail buttons
let thumbnails = Array.from(document.querySelectorAll('#product span')),
    productImage = document.querySelector('.main-image img')

let nikeThumbnails = Array.from(document.querySelectorAll('#nike-thumbnail span')),
    nikeProductImage = document.querySelector('.black-border img')

let addidasThumbnails = Array.from(document.querySelectorAll('#addidas-thumbnail span')),
    addidasProductImage = document.querySelector('.blue-border img')

let imageSrc = ['./images/image-product-1.jpg', './images/image-product-2.jpg', './images/image-product-3.jpg', './images/image-product-4.jpg'],
    nikeImageSrc = ['./images/nike-product-1.jpg', './images/nike-product-2.jpg', './images/nike-product-3.jpg', './images/nike-product-4.jpg'],
    addidasImageSrc = ['./images/addidas-product-1.jpg', './images/addidas-product-2.jpg', './images/addidas-product-3.jpg', './images/addidas-product-4.jpg']

let mainProductImage = document.querySelector('.main-image img')
    productCarousel = document.querySelector('#product-carousel')
    closeCarousel = document.querySelectorAll('.close-btn')
    carouselThumbnails = Array.from(document.querySelectorAll('#carousel-product span'))
    carouselProductImage = document.querySelectorAll('#carousel-item div')

let nikeCarousel = document.querySelector('#nike-carousel'),
    nikeCarouselThumbnails = document.querySelectorAll('#nike-carousel-product span'),
    nikeCarouselImage = document.querySelectorAll('#nike-carousel-item div')

let addidasCarousel = document.querySelector('#addidas-carousel'),
    addidasCarouselThumbnails = document.querySelectorAll('#addidas-carousel-product span'),
    addidasCarouselImage = document.querySelectorAll('#addidas-carousel-item div')


        //function for getting sibliing elements
    let getSiblings = function (e) {
        // for collecting siblings
        let siblings = []; 
        // if no parent, return no sibling
        if(!e.parentNode) {
            return siblings;
        }
        // first child of the parent node
        let sibling  = e.parentNode.firstChild;
        
        // collecting siblings
        while (sibling) {
            if (sibling.nodeType === 1 && sibling !== e) {
                siblings.push(sibling);
            }
            sibling = sibling.nextSibling;
        }
        return siblings;
    };
    
    // functionality for changing product image
for (let i = 0; i < thumbnails.length; i++) {
    const element = thumbnails[i]
    element.addEventListener('click', () => {
        productImage.setAttribute('src', imageSrc[i])
        element.classList.add('active-thumbnail') 
        getSiblings(element).forEach(e => {
            e.classList.remove('active-thumbnail')
        });
    })
}

for (let i = 0; i < nikeThumbnails.length; i++) {
    const element = nikeThumbnails[i]
    element.addEventListener('click', () => {
        nikeProductImage.setAttribute('src', nikeImageSrc[i])
        element.classList.add('active-thumbnail-black') 
        getSiblings(element).forEach(e => {
            e.classList.remove('active-thumbnail-black')
        });
    })
}

for (let i = 0; i < addidasThumbnails.length; i++) {
    const element = addidasThumbnails[i]
    element.addEventListener('click', () => {
        addidasProductImage.setAttribute('src', addidasImageSrc[i])
        element.classList.add('active-thumbnail-blue') 
        getSiblings(element).forEach(e => {
            e.classList.remove('active-thumbnail-blue')
        });
    })
}

let decreaseNumOne = document.querySelector('#neg-1'),
    decreaseNumTwo = document.querySelector('#neg-2'),
    decreaseNumThree = document.querySelector('#neg-3'),
    increaseNumOne = document.querySelector('#pos-1'),
    increaseNumTwo = document.querySelector('#pos-2'),
    increaseNumThree = document.querySelector('#pos-3'),
    numOfOrderOne = document.querySelector('#num-1'),
    numOfOrderTwo = document.querySelector('#num-2'),
    numOfOrderThree = document.querySelector('#num-3'),
    addToCart1 = document.querySelector('#add-to-cart1'),
    addToCart2 = document.querySelector('#add-to-cart2'),
    addToCart3 = document.querySelector('#add-to-cart3')



decreaseNumOne.addEventListener('click', () => {
  
    if (numOfOrderOne.textContent == 1 || numOfOrderOne.textContent == 0) {
        decreaseNumOne.style.opacity = '.4'
        numOfOrderOne.textContent = '0'
        if(numOfOrderOne.textContent == '0'){
            addToCart1.style.opacity = '0.6'
            addToCart1.style.pointerEvents = 'none'
        } else{
            addToCart1.style.opacity = '1'
            addToCart1.style.pointerEvents = 'all'
        }
    }else{
        decreaseNumOne.style.opacity = '1'
        numOfOrderOne.textContent--
    }
})

increaseNumOne.addEventListener('click', (e) => {
    decreaseNumOne.style.opacity = '1'
    numOfOrderOne.textContent++
    if(numOfOrderOne.textContent == '0'){
        addToCart1.style.opacity = '0.6'
        addToCart1.style.pointerEvents = 'none'
        console.log(true);
    } else{
        addToCart1.style.opacity = '1'
        addToCart1.style.pointerEvents = 'all'
    }
})


decreaseNumTwo.addEventListener('click', () => {
    
    if (numOfOrderTwo.textContent == 1 || numOfOrderTwo.textContent == 0) {
        decreaseNumTwo.style.opacity = '.4'
        numOfOrderTwo.textContent = '0'
        if(numOfOrderTwo.textContent == '0'){
            addToCart2.style.opacity = '0.6'
            addToCart2.style.pointerEvents = 'none'
        } else{
            addToCart2.style.opacity = '1'
            addToCart2.style.pointerEvents = 'all'
        }
    }else{
        decreaseNumTwo.style.opacity = '1'
        numOfOrderTwo.textContent--
    }
})

increaseNumTwo.addEventListener('click', () => {
    decreaseNumTwo.style.opacity = '1'
    numOfOrderTwo.textContent++
    if(numOfOrderTwo.textContent == '0'){
        addToCart2.style.opacity = '0.6'
        addToCart2.style.pointerEvents = 'none'
    } else{
        addToCart2.style.opacity = '1'
        addToCart2.style.pointerEvents = 'all'
    }
})


decreaseNumThree.addEventListener('click', () => {
    
    if (numOfOrderThree.textContent == 1 || numOfOrderThree.textContent == 0) {
        decreaseNumThree.style.opacity = '.4'
        numOfOrderThree.textContent = '0'
        if(numOfOrderThree.textContent == '0'){
            addToCart3.style.opacity = '0.6'
            addToCart3.style.pointerEvents = 'none'
        } else{
            addToCart3.style.opacity = '1'
            addToCart3.style.pointerEvents = 'all'
        }
    }else{
        decreaseNumThree.style.opacity = '1'
        numOfOrderThree.textContent--
    }
})

increaseNumThree.addEventListener('click', () => {
    decreaseNumThree.style.opacity = '1'
    numOfOrderThree.textContent++
    if(numOfOrderThree.textContent == '0'){
        addToCart3.style.opacity = '0.6'
        addToCart3.style.pointerEvents = 'none'
    } else{
        addToCart3.style.opacity = '1'
        addToCart3.style.pointerEvents = 'all'
    }
})

// functionality for carousel

// initializing product image to show carousel on click
mainProductImage.addEventListener('click', (e) => {
    productCarousel.classList.remove('carousel-closed')
    productCarousel.classList.remove('hidden')
    productCarousel.classList.add('carousel-open')
    document.body.style.overflowY = 'hidden'
})

nikeProductImage.addEventListener('click', (e) => {
    nikeCarousel.classList.remove('carousel-closed')
    nikeCarousel.classList.remove('hidden')
    nikeCarousel.classList.add('carousel-open')
    document.body.style.overflowY = 'hidden'
})

addidasProductImage.addEventListener('click', (e) => {
    addidasCarousel.classList.remove('carousel-closed')
    addidasCarousel.classList.remove('hidden')
    addidasCarousel.classList.add('carousel-open')
    document.body.style.overflowY = 'hidden'
})

closeCarousel.forEach(btn =>{
    btn.addEventListener('click', (e) => { 
        productCarousel.classList.add('carousel-closed')
        productCarousel.classList.remove('carousel-open')
        nikeCarousel.classList.add('carousel-closed')
        nikeCarousel.classList.remove('carousel-open')
        addidasCarousel.classList.add('carousel-closed')
        addidasCarousel.classList.remove('carousel-open')
        document.body.style.overflowY = 'auto'
    })
})

// functionality for changing product image
// product image
for (let i = 0; i < carouselThumbnails.length; i++) {
    const element = carouselThumbnails[i]
    element.addEventListener('click', () => {
        carouselProductImage.forEach(image =>{
            if(image.classList.contains('active')){
                image.firstElementChild.setAttribute('src', imageSrc[i])
            }
        })
        element.classList.add('active-thumbnail') 
        getSiblings(element).forEach(e => {
            e.classList.remove('active-thumbnail')
        });
    })
}

for (let i = 0; i < nikeCarouselThumbnails.length; i++) {
    const element = nikeCarouselThumbnails[i]
    element.addEventListener('click', () => {
        nikeCarouselImage.forEach(image =>{
            if(image.classList.contains('active')){
                image.firstElementChild.setAttribute('src', nikeImageSrc[i])
            }
        })
        element.classList.add('active-thumbnail') 
        getSiblings(element).forEach(e => {
            e.classList.remove('active-thumbnail')
        });
    })
}
   
for (let i = 0; i < addidasCarouselThumbnails.length; i++) {
    const element = addidasCarouselThumbnails[i]
    element.addEventListener('click', () => {
       addidasCarouselImage.forEach(image =>{
            if(image.classList.contains('active')){
                image.firstElementChild.setAttribute('src', addidasImageSrc[i])
            }
        })
        element.classList.add('active-thumbnail') 
        getSiblings(element).forEach(e => {
            e.classList.remove('active-thumbnail')
        });
    })
}