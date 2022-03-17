import { getHeroeByIdAsync } from "../../base/09-promesas"
import heroes from "../../data/heroes"

describe('Prueba 09-promesas.js', () => { 

    test('getHeroeByIdAsync() debe retornar un heroe async', ( done ) => { 

        const id = 1

        getHeroeByIdAsync( id )
            .then(heroe => {
                expect(heroe).toBe(heroes[0])
                done()
            })

    })

    test('getHeroeByIdAsync() debe obtener un error si el heroe por id no existe', ( done ) => { 

        const id = 10 

        getHeroeByIdAsync(id)
            .catch( error => {
             
                expect('No se pudo encontrar el héroe').toBe(error)
                done()
                
            })

    })
    
})