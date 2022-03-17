import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";


describe('Prueba 08-imp-exp.js',()=>{
    
    test('getHeroeById() Debe retornar un heroe por Id', () => { 

        const id = 1;
        const heroe = getHeroeById(id)

        const heroeData = heroes.find( h => h.id === id )

        expect(heroe).toEqual(heroeData)


    })

    test('getHeroeById() Debe retornar undefined si Heroe no existe', () => { 

        const id = 10;
        const heroe = getHeroeById(id)


        expect(heroe).toBe(undefined)


    })

    test('getHeroesByOwner() debe retornar un arreglo con los heroes de DC', () => {

        const owner = 'DC'

        const heroesDC = heroes.filter( h => h.owner === owner )

        expect(getHeroesByOwner(owner)).toEqual(heroesDC)
        
    })
    test('getHeroesByOwner() debe retornar un arreglo con los heroes de DC', () => {

        const owner = 'Marvel'

        const heroesM = heroes.filter( h => h.owner === owner )

        expect(getHeroesByOwner(owner)).toEqual(heroesM)

        expect(getHeroesByOwner(owner).length).toBe(2)

        
        
    })

})
