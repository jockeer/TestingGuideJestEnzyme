import { getUser, getUsuarioActivo } from "../../base/05-funciones"


describe('Pruebas en 05-funciones.js', () => { 

    test('getUser Debe retornar un objeto', () => {  

        const user = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        //! toEqual analisa todas las propiedades de un objeto y los mismos valores
        expect(getUser()).toEqual(user)

    })

    test('getUsuarioActivo() retorna un objeto con el nombre enviado', () => {
        
        const name = 'Carlos'

        const user = {
            uid: 'ABC567',
            username: name
        }
        

        expect(getUsuarioActivo(name)).toEqual(user)
    })

})