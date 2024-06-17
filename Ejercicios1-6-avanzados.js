// ejercicio 1
const movies = [
  {
    title: 'Bracula: Condemor II',
    duration: 192,
    categories: ['comedia', 'aventura']
  },
  {
    title: 'Spider-Man: No Way Home',
    duration: 122,
    categories: ['aventura', 'acción']
  },
  {
    title: 'The Voices',
    duration: 223,
    categories: ['comedia', 'thriller']
  },
  {
    title: 'Shrek',
    duration: 111,
    categories: ['comedia', 'aventura', 'animación']
  }
]

const uniqueCategories = []

for (const movie of movies) {
  for (const category of movie.categories) {
    if (!uniqueCategories.includes(category)) {
      uniqueCategories.push(category)
    }
  }
}

console.log(uniqueCategories)
//ejercicio 2
const users = [
  {
    name: 'Alberto',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 50 },
      rain: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Antonio',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 30 },
      shower: { format: 'ogg', volume: 55 },
      train: { format: 'mp3', volume: 60 }
    }
  },
  {
    name: 'Santiago',
    favoritesSounds: {
      shower: { format: 'mp3', volume: 50 },
      train: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Laura',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 67 },
      wind: { format: 'ogg', volume: 35 },
      firecamp: { format: 'mp3', volume: 60 }
    }
  }
]

let totalVolume = 0
let count = 0

for (const user of users) {
  for (const sound in user.favoritesSounds) {
    totalVolume += user.favoritesSounds[sound].volume
    count++
  }
}

const averageVolume = totalVolume / count

console.log(
  `La media del volumen de todos los sonidos favoritos es: ${averageVolume}`
)
//ejercicio 3
const user3s = [
  {
    name: 'Alberto',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 50 },
      rain: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Antonio',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 30 },
      shower: { format: 'ogg', volume: 55 },
      train: { format: 'mp3', volume: 60 }
    }
  },
  {
    name: 'Santiago',
    favoritesSounds: {
      shower: { format: 'mp3', volume: 50 },
      train: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Laura',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 67 },
      wind: { format: 'ogg', volume: 35 },
      firecamp: { format: 'mp3', volume: 60 }
    }
  }
]

const soundCounts = {}

for (const user of users) {
  for (const sound in user.favoritesSounds) {
    if (soundCounts[sound]) {
      soundCounts[sound]++
    } else {
      soundCounts[sound] = 1
    }
  }
}

console.log(soundCounts)
//ejercicio 4
function findArrayIndex(array, text) {
  return array.indexOf(text)
}

const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]

// Ejemplos
console.log(findArrayIndex(mainCharacters, 'Luke')) // 0
console.log(findArrayIndex(mainCharacters, 'Leia')) // 1
console.log(findArrayIndex(mainCharacters, 'Han Solo')) // 2
console.log(findArrayIndex(mainCharacters, 'Chewbacca')) // 3
console.log(findArrayIndex(mainCharacters, 'Rey')) // 4
console.log(findArrayIndex(mainCharacters, 'Anakin')) // 5
console.log(findArrayIndex(mainCharacters, 'Obi-Wan')) // 6
console.log(findArrayIndex(mainCharacters, 'Yoda')) // -1 (no se encuentra en el array)
// Función findArrayIndex del ejercicio anterior
function findArrayIndex(array, text) {
  return array.indexOf(text)
}

// Nueva función removeItem
function removeItem(array, text) {
  const index = findArrayIndex(array, text)
  if (index !== -1) {
    array.splice(index, 1)
  }
  return array
}

// Ejemplos
console.log(removeItem(mainCharacters.slice(), 'Luke')) // ["Leia", "Han Solo", "Chewbacca", "Rey", "Anakin", "Obi-Wan"]
console.log(removeItem(mainCharacters.slice(), 'Leia')) // ["Luke", "Han Solo", "Chewbacca", "Rey", "Anakin", "Obi-Wan"]
console.log(removeItem(mainCharacters.slice(), 'Han Solo')) // ["Luke", "Leia", "Chewbacca", "Rey", "Anakin", "Obi-Wan"]
console.log(removeItem(mainCharacters.slice(), 'Chewbacca')) // ["Luke", "Leia", "Han Solo", "Rey", "Anakin", "Obi-Wan"]
console.log(removeItem(mainCharacters.slice(), 'Rey')) // ["Luke", "Leia", "Han Solo", "Chewbacca", "Anakin", "Obi-Wan"]
console.log(removeItem(mainCharacters.slice(), 'Anakin')) // ["Luke", "Leia", "Han Solo", "Chewbacca", "Rey", "Obi-Wan"]
console.log(removeItem(mainCharacters.slice(), 'Obi-Wan')) // ["Luke", "Leia", "Han Solo", "Chewbacca", "Rey", "Anakin"]
console.log(removeItem(mainCharacters.slice(), 'Yoda')) // ["Luke", "Leia", "Han Solo", "Chewbacca", "Rey", "Anakin", "Obi-Wan"]
//ejercicio 5
function rollDice(faces) {
  // Genera un número aleatorio entre 1 y el número de caras (faces)
  const result = Math.floor(Math.random() * faces) + 1
  return result
}

// Ejemplos de uso
console.log(rollDice(6)) // Simula una tirada de un dado de 6 caras
console.log(rollDice(20)) // Simula una tirada de un dado de 20 caras
console.log(rollDice(10)) // Simula una tirada de un dado de 10 caras
//ejercicio 6
function swap(array, index1, index2) {
  // Verificamos que los índices sean válidos
  if (
    index1 >= 0 &&
    index1 < array.length &&
    index2 >= 0 &&
    index2 < array.length
  ) {
    // Intercambiamos los elementos usando una variable temporal
    let temp = array[index1]
    array[index1] = array[index2]
    array[index2] = temp
  } else {
    console.error('Índices inválidos')
  }

  return array
}

const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]

// Ejemplo de uso
console.log(swap(fantasticFour, 0, 3)) // Intercambia "La antorcha humana" con "La cosa"
console.log(swap(fantasticFour, 1, 2)) // Intercambia "Mr. Fantástico" con "La mujer invisible"
console.log(swap(fantasticFour, -1, 3)) // Prueba con índices inválidos
console.log(swap(fantasticFour, 0, 5)) // Prueba con índices inválidos
