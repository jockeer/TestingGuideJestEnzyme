import { render } from "@testing-library/react"
import PrimeraApp from "../PrimeraApp"
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'

describe('Pruebas en <PrimeraApp />', () => { 

    // test('debe mostrar el mensaje "Hola, soy Goku"', () => { 
        // const saludo = "Hola, soy Goku"
        // const wrapper = render(<PrimeraApp saludo={saludo}/>)
        // expect(wrapper.getByText(saludo)).toBeInTheDocument() 
    // })

    test('debe mostrar <PrimeraApp /> correctamente', () => {
        const saludo = "Hola, soy Goku"
        const wrapper = shallow( <PrimeraApp saludo={saludo}/>)
        
        expect(wrapper).toMatchSnapshot();
    })
    
    test('Debe mostrar el subtitulo enviado por props', () => {
        const saludo = "Hola, soy Goku"
        const subtitulo = "soy un subtitulo"
        const wrapper = shallow( 
            <PrimeraApp 
                saludo={saludo}
                subtitulo={subtitulo}
            />
        )
    
        const textoparrafo = wrapper.find('p').text()

        expect(textoparrafo).toBe(subtitulo)
        
    })

})