import { getImagen } from "../../base/11-async-await"

describe('Prueba 11-async-await.js y Fetch', () => { 

    test('getImagen() debe retornan la url de la imagen', async () => { 

        const url = await getImagen()

        // console.log(url)

        // expect(typeof url).toBe('string')
        expect(url.includes('https://')).toBe(true)
    })


}) 