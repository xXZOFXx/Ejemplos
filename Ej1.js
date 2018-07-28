let palabra = 'hola'
let cadena = [ 'perro', 'gato', 'delfin',  'olah', 'laho', 'ahol']

function rotaciones(palabra1) {
    let rotacion = []
    for (let i = 0; i < palabra1.length; i++) {
        let p1 = palabra1.substring(i)
        let p2 = palabra1.substring(0, i)
        rotacion.push(p1 + p2)
    }
    return rotacion
}

function contain_all_rots(palabra, cadena) {
    let rotacion = rotaciones(palabra)
    console.log(rotacion)
    for (let j = 0; j < rotacion.length; j++) {
        if (!cadena.includes(rotacion[j])) {
            console.log(rotacion[j])
            return false
        }

    }
    return true
}
console.log(contain_all_rots(palabra, cadena))
