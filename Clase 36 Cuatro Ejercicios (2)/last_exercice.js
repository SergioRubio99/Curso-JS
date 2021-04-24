// 27) Programa una clase llamada Pelicula.

// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios.
//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
//      7 restantes números.
//   - Valida que el título no rebase los 100 caracteres.
//   - Valida que el director no rebase los 50 caracteres.
//   - Valida que el año de estreno sea un número entero de 4 dígitos.
//   - Valida que el país o paises sea introducidos en forma de arreglo.
//   - Valida que los géneros sean introducidos en forma de arreglo.
//   - Valida que los géneros introducidos esten dentro de los géneros 
//      aceptados*.
//   - Crea un método estático que devuelva los géneros aceptados*.
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
//     decimal de una posición.
//   - Crea un método que devuelva toda la ficha técnica de la película.
//   - Apartir de un arreglo con la información de 3 películas genera 3 
//     instancias de la clase de forma automatizada e imprime la ficha técnica 
//     de cada película.

// * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.



class Movie {
    constructor(IMDb_id, title, director, year, country, genre, calification) {
        this.IMDb_id = IMDb_id
        this.title = title
        this.director = director
        this.year = year
        this.country = country
        this.genre = genre
        this.calification = calification


        this.check_title_length(title);
        this.check_director(director);
        this.nothing_missing(IMDb_id, title, director, year, country, genre, calification);
        this.no_empty();
        this.check_IMDb();
        this.check_Year(year);
        this.Arr_Country_And_Genres(country, genre);
        this.check_genres();
        this.check_calification(calification);
        this.data_sheet();


    }

    static show_genres(genres) {
        console.log(`These are the valid genres: ${genres}`)
    }


    data_sheet() {
        console.log(`The data sheet of this film is the following: 
        
        IMDb_ID: ${this.IMDb_id}. Title: ${this.title}. Director: ${this.director}. Year: ${this.year}. Country: ${this.country}. Genre: ${this.genre}. Calification: ${this.calification}`);
    }

    check_title_length() {
        if (this.title.length > 100) {
            console.warn("The title is too long.");
        }
    }

    check_director() {
        if (this.director.length > 50) {
            console.warn("The director's name can't be so long.");
        }
    }

    nothing_missing() {

        let obj2arr = [this.IMDb_id, this.title, this.director, this.year, this.country, this.genre, this.calification];

        // console.log(obj2arr);

        //Al encontrarme dentro de una función, no puedo declarar el bucle así como así. Deberé declarar primero la variable i, para que pueda funcionar.

        let i = 0;
        for (i = 0; i < obj2arr.length; i++) {

            if (obj2arr[i] === undefined) {
                console.warn('You did not input one of the main elements of the film.');

            }

        }

    }

    get arr() {
        obj2arr
    }

    no_empty() {

        let obj2arr = [this.IMDb_id, this.title, this.director, this.year, this.country, this.genre, this.calification];

        let i = 0;
        for (i = 0; i < obj2arr.length; i++) {

            if (obj2arr[i] === '' || obj2arr[i] === ' ') {
                console.warn('Do not input empty spaces');
            }
        }

    }

    check_IMDb() {

        let obj2arr = [this.IMDb_id, this.title, this.director, this.year, this.country, this.genre, this.calification];

        const IMDb_id_array = obj2arr[0].split('');
        // console.log(IMDb_id_array);
        let regexpNum = /[0-9]/
        let regexpChar = /[a-zA-Z]/



        if (IMDb_id_array.length != 9) {
            console.warn('The IMDb_ID must contain 9 characters');
        }

        if (regexpChar.test(IMDb_id_array[0]) === false || regexpChar.test(IMDb_id_array[1]) === false || regexpNum.test(IMDb_id_array[2]) === false || regexpNum.test(IMDb_id_array[3]) === false || regexpNum.test(IMDb_id_array[4]) === false || regexpNum.test(IMDb_id_array[5]) === false || regexpNum.test(IMDb_id_array[6]) === false || regexpNum.test(IMDb_id_array[7]) === false || regexpNum.test(IMDb_id_array[8]) === false) {
            console.warn("The IMDb_ID must contain 2 letters from the start, and 7 letters after those 2 numbers.");
        }

        // console.log(IMDb_id_array[2]);

    }


    check_Year() {
        let obj2arr = [this.IMDb_id, this.title, this.director, this.year, this.country, this.genre, this.calification];
        let i = 0;
        for (i = 0; i < obj2arr[3].length; i++) {
            if (isNaN(obj2arr[3][i])) {
                console.log('The year must be a number');
            }
        }



        function splitToDigit(n) {
            return [...n + ''].map(Number);
        }
        const year_arr = splitToDigit(obj2arr[3])

        // console.log(year_arr);


        if (year_arr.length != 4) {
            console.warn('The year must be a four digits number')
        }


    }

    Arr_Country_And_Genres() {

        let obj2arr = [this.IMDb_id, this.title, this.director, this.year, this.country, this.genre, this.calification];


        if (!Array.isArray(obj2arr[4])) {
            console.warn('The country or countries where the movie was filmed, must be written in the form of an array.')
        }

        if (!Array.isArray(obj2arr[5])) {
            console.warn('The genre or genres of the movie, must be written in the form of an array.')
        }

    }

    check_genres() {

        let ValidGenres = ['Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Film Noir', 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western'];

        let x = 0;
        let obj2arr = [this.IMDb_id, this.title, this.director, this.year, this.country, this.genre, this.calification];
        let i = 0;
        let z = 0;


        for (i = 0; i < obj2arr[5].length; i++) {

            for (z = 0; z < ValidGenres.length; z++) {
                // console.log(ValidGenres[z])
                if (obj2arr[5][i] === ValidGenres[z]) {
                    x++
                }
            }
        }


        if (x != obj2arr[5].length) {
            console.warn("The genres you associated with the movie are invalid.");
        }



    }

    check_calification() {

        let obj2arr = [this.IMDb_id, this.title, this.director, this.year, this.country, this.genre, this.calification];

        //Vamos a comprobar que la calificación haya sido válidamente introducida. Deberá estar formada por un númedo de 0 a 10 con un decimal como mucho.

        //Para medir la longitud del decimal, pasamos el número a string y medimos su longitud:
        let cal2Str = obj2arr[6].toString();
        // console.log(cal2Str.length);


        if (isNaN(obj2arr[6])) {
            console.warn(`The calification must be a number.`);
        }

        if (obj2arr[6] > 10) {
            console.warn(`The calification can't be superior to 10`)
        }
        //(el método isNaN() también funciona con números dentro de strings.).


        if (Math.sign(obj2arr[6]) == -1 || cal2Str.length > 3) {
            console.warn('The calification must be a number without decimals or a number only with one decimal. Negative numbers are not allowed either.');
            console.log(cal2Str.length)
        }






    }







}
//Para mostrar la ficha técnica de la película: 

//PARTE FINAL DEL EJERCICIO.



const ValidGenres = ['Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Film Noir', 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western'];

const first_Movie = new Movie('tt1798709', 'Her', 'Spike Jonze', 2013, ['United States', 'Canada'], ['Drama', 'Sci-Fi', 'Romance'], 8);

Movie.show_genres(ValidGenres);



let threeMovies = [

    {

        IMDb_id: 'tt0075148',
        title: 'Rocky',
        director: 'John G. Avildsen',
        year: 1976,
        country: ['United States'],
        genre: ['Drama', 'Sport'],
        calification: "8.1"

    },

    {

        IMDb_id: 'tt0172495',
        title: 'Gladiator',
        director: 'Ridley Scott',
        year: 2000,
        country: [' United States'],
        genre: ['Action', 'Adventure', 'Drama'],
        calification: 10

    },

    {

        IMDb_id: 'tt0311113',
        title: 'Master and Commander: The Far Side of the World',
        director: 'Peter Weir',
        year: 2003,
        country: ['United States', 'Armenia'],
        genre: ['Action', 'Adventure', 'Drama'],
        calification: 7.4

    }

]

//Necesitamos aplicar esta fórmula, pero metiendo los datos de cada objeto del array threeMovies:  


//const first_Movie = new Movie('tt1798709', 'Her', 'Spike Jonze', 2013, ['United States', 'Canada'], ['Drama', 'Sci-Fi', 'Romance'], 8);

for (i = 0; i < threeMovies.length; i++) {
    let a = Object.values(threeMovies[i]);

    //Aunque "a" es un array, vamos a crear otro llamado obj2arr, para que  
    const obj2arr = [a[0], a[1], a[2], a[3], a[4], a[5], a[6]];
    let object = new Movie(obj2arr[0], obj2arr[1], obj2arr[2], obj2arr[3], obj2arr[4], obj2arr[5], obj2arr[6]);



    // console.log(obj2arr);

    // console.log(a)
    console.log(object);



}



// const b = new Movie(Object.values(threeMovies[0]));
// console.log(Object.values(threeMovies[0]));



//Vamos a medir el tiempo que toma procesar estas 906 películas. Primero declaramos al principio del ejercicio la variable t0. Luego la t1, al terminar el ejercicio. 

// var t0 = performance.now()


// var t1 = performance.now()
// console.log("Executing this took " + t1 + " milliseconds.");