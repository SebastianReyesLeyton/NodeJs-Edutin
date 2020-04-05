/* 
https://nodejs.org/api/process.html#process_process_stdin
https://nodejs.org/api/process.html#process_process_stdout
*/

'use strict'

let stdin = process.stdin,
    stdout = process.stdout,
    person = {
        name: null,
        age: 0
    }

function saveAge(age) {
    person.age = age

    if (person.age >= 18) {
        stdout.write(`${person.name} es mayor de edad, tiene ${person.age} años\n`)
    } else {
        stdout.write(`${person.name} es menor de edad, tiene ${person.age} años\n`)
    }

    process.exit()
}

function saveName(name) {
    person.name = name

    // Vuevo a preguntar
    let question = `Hola ${person.name} ¿Cuántos años tienes? `
    quiz(question, saveAge)
}

function quiz(question, callback) {

    stdin.resume()
    stdout.write(question + ': ')

    stdin.once('data', (ans) => {
        callback(ans.toString().trim())
    })
}


stdin.setEncoding('utf8')
quiz('Como te llamas', saveName)