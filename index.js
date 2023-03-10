function getCharacters(done){
    const results = fetch ("https://rickandmortyapi.com/api/character");
    
    results
        .then(response => response.json())
        .then(data => (
            done(data)
        ));
}

getCharacters(data=>{
    //console.log(data);
    data.results.forEach(personaje => {
        const article = document.createRange().createContextualFragment(`
            <article>
                <div class="image-container">
                   <img src="${personaje.image}" alt="Personaje">
                </div>
                <h2>${personaje.name}</h2>
                <span>${personaje.status}</span>
                <p>${personaje.species}</p>
                <p>${personaje.gender}</p>
                <p>${personaje.origin.name}</p>
            </article>        
        `);
        //Mostras en pantalla.
        const main = document.querySelector("main");
        main.append(article);
    });
});

