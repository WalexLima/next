const filter = document.querySelector('.display-grid')
const about = document.querySelector('#about')
const features = document.querySelector('.feature-card-block')

const constructionGrid =()=>{
    for (let cont =0; cont < 9; cont++) {
        const carro = document.createElement('div')
        carro.classList.add('display-grid')
        carro.innerHTML += `
        <div class="card">
            <img src="img/car-card.png" alt="Car" />
            <div class="card-content">
            <h3>Audi Supra TT</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus.
            </p>
            <button type="button" class="buttonBlack">I want this!</button>
        </div>
        `
        filter.appendChild(carro)
    }
}

const constructionAbout = ()=> {
    const sobre = document.createElement('div')
    sobre.classList.add('container')
    sobre.innerHTML = `
        <div class="title-wrapper-about">
            <p>Know about us</p>
            <h3>About</h3>
        </div>
        <div class="about-contener">
            <div class="left">
                <img src="img/about.png" alt="About" />
            </div>
            <div class="right">
                <h3>Join technology and mobility</h3>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae ut inventore magni repellendus ab ad itaque facere. A
                tenetur quam, nobis tempore illum laborum ipsa fuga, itaque
                possimus repellat ad perspiciatis, velit reiciendis eos facilis
                sapiente blanditiis quas officia hic beatae quibusdam! Quod
                eligendi porro possimus voluptatum ad ipsum sapiente soluta,
                maiores nobis tenetur adipisci officiis nisi illum quae natus
                nostrum tempora accusantium blanditiis? Rem nesciunt illum
                dolorum, perferendis quos consequatur suscipit cumque fugiat alias
                sint repellat qui adipisci error est distinctio doloribus labore
                sunt modi eos odio quibusdam dicta. Dignissimos voluptate illum
                possimus quo. Ducimus repellat doloribus quisquam quidem?
                </p>
            </div> 
        </div>
    `
    about.appendChild(sobre)
}

const contructionFeatures =()=>{

    for (let number = 0; number < 6; number++) {
        const figuras = document.createElement('div')
        figuras.classList.add('feature-card-item')
        figuras.innerHTML += `
            <img src="img/feature-planet.png" alt="Feature" />
            <div class="feature-text-content">
                <h3>Title</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
        `
        features.appendChild(figuras)
    }
}

contructionFeatures()
constructionGrid()
constructionAbout()