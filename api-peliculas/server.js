const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

// Datos de ejemplo (simulando una base de datos)
let peliculas = [{
    id: '1',
    titulo: 'Titanic',
    año: 1997,
    directores: ['James Cameron'],
    actores: ['Leonardo DiCaprio', 'Kate Winslet'],
    sinopsis: 'Una historia de amor épica en el contexto del desastre del Titanic.',
    duracion: 195
  },
  {
    id: '2',
    titulo: 'El Padrino',
    año: 1972,
    directores: ['Francis Ford Coppola'],
    actores: ['Marlon Brando', 'Al Pacino'],
    sinopsis: 'La historia de una poderosa familia criminal italoamericana dirigida por Don Vito Corleone.',
    duracion: 175
  },
  {
    id: '3',
    titulo: 'La lista de Schindler',
    año: 1993,
    directores: ['Steven Spielberg'],
    actores: ['Liam Neeson', 'Ben Kingsley'],
    sinopsis: 'La historia real de Oskar Schindler, un empresario que salva a más de mil judíos durante el Holocausto.',
    duracion: 195
  },
  {
    id: '4',
    titulo: 'Forrest Gump',
    año: 1994,
    directores: ['Robert Zemeckis'],
    actores: ['Tom Hanks', 'Robin Wright'],
    sinopsis: 'La vida de Forrest Gump, un hombre con un coeficiente intelectual bajo pero una gran determinación.',
    duracion: 142
  },
  {
    id: '5',
    titulo: 'El Señor de los Anillos: La Comunidad del Anillo',
    año: 2001,
    directores: ['Peter Jackson'],
    actores: ['Elijah Wood', 'Ian McKellen'],
    sinopsis: 'Un hobbit llamado Frodo Baggins emprende un viaje para destruir un anillo maligno y salvar a su mundo de la oscuridad.',
    duracion: 178
  },
  {
    id: '6',
    titulo: 'El Silencio de los Corderos',
    año: 1991,
    directores: ['Jonathan Demme'],
    actores: ['Jodie Foster', 'Anthony Hopkins'],
    sinopsis: 'Una agente del FBI busca la ayuda de un asesino en serie encarcelado para atrapar a otro asesino en serie que está suelto.',
    duracion: 118
  },
  {
    id: '7',
    titulo: 'Pulp Fiction',
    año: 1994,
    directores: ['Quentin Tarantino'],
    actores: ['John Travolta', 'Uma Thurman'],
    sinopsis: 'Una serie de historias interconectadas que involucran a criminales, boxeadores, gánsteres y drogadictos.',
    duracion: 154
  },
  {
    id: '8',
    titulo: 'Cadena Perpetua',
    año: 1994,
    directores: ['Frank Darabont'],
    actores: ['Tim Robbins', 'Morgan Freeman'],
    sinopsis: 'Un hombre inocente es sentenciado a cadena perpetua en una prisión brutal, donde forma una amistad inquebrantable con otro recluso.',
    duracion: 142
  },
  {
    id: '9',
    titulo: 'Gladiador',
    año: 2000,
    directores: ['Ridley Scott'],
    actores: ['Russell Crowe', 'Joaquin Phoenix'],
    sinopsis: 'La historia de un general romano traicionado que busca venganza contra el emperador que mató a su familia y lo envió al exilio.',
    duracion: 155
  },
  {
    id: '10',
    titulo: 'La Vida es Bella',
    año: 1997,
    directores: ['Roberto Benigni'],
    actores: ['Roberto Benigni', 'Nicoletta Braschi'],
    sinopsis: 'Un padre judío usa su imaginación para proteger a su hijo del horror de un campo de concentración nazi.',
    duracion: 116
  
}];

// Rutas
// Obtener todas las películas
app.get('/peliculas', (req, res) => {
  res.json(peliculas);
});

// Obtener una película por su id
app.get('/peliculas/:id', (req, res) => {
  const id = req.params.id;
  const pelicula = peliculas.find(p => p.id === id);
  if (!pelicula) {
    return res.status(404).json({ message: 'Película no encontrada' });
  }
  res.json(pelicula);
});

// Crear una nueva película
app.post('/peliculas', (req, res) => {
  const { titulo, año, directores, actores, sinopsis, duracion } = req.body;
  const id = Date.now().toString(); // Generamos un ID único basado en la fecha y hora actual
  const nuevaPelicula = { id, titulo, año, directores, actores, sinopsis, duracion };
  peliculas.push(nuevaPelicula);
  res.status(201).json(nuevaPelicula);
});

// Actualizar una película existente
app.put('/peliculas/:id', (req, res) => {
  const id = req.params.id;
  const { titulo, año, directores, actores, sinopsis, duracion } = req.body;
  const index = peliculas.findIndex(p => p.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Película no encontrada' });
  }
  peliculas[index] = { id, titulo, año, directores, actores, sinopsis, duracion };
  res.json(peliculas[index]);
});

// Eliminar una película
app.delete('/peliculas/:id', (req, res) => {
  const id = req.params.id;
  const index = peliculas.findIndex(p => p.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Película no encontrada' });
  }
  peliculas.splice(index, 1);
  res.status(204).send();
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});