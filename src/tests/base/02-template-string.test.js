import { getSaludo } from "../../base/02-template-string"

describe('Pruebas en 02-template-string.js', () => { 

    test('getSaludo() debe retornar Hola Daniel', () => { 
        
        const nombre = 'Daniel'
        expect(getSaludo(nombre)).toBe(`Hola ${nombre}`)
        
    })

    test('getSaludo() debe retornar Hola Carlos si no se manda ningun argumento', () => { 
      
        expect(getSaludo()).toBe('Hola Carlos')
    })
})