import { shallow } from 'enzyme'
import CounterApp from '../CounterApp'

describe('Prueba <CounterApp />', () => {

    let wrapper = shallow(<CounterApp />)

    beforeEach(()=>{
        wrapper = shallow(<CounterApp />)
    })

    test('debe mostrar <CounterApp /> correctamente con sus valores por defecto', () => {
        
        expect(wrapper).toMatchSnapshot()
    })

    test('debe mostrar el valor por defecto de 100', () => {
        
        const valor = 100
        const wrapper = shallow(<CounterApp value={valor}/>)
        const textoContador =  parseInt(wrapper.find('h2').text().trim()) 
        expect(textoContador).toBe(valor)
        

    })

    test('Debe incrementar con el boton +1', () => {

        wrapper.find('button').at(0).simulate('click');
        const textoContador =  parseInt(wrapper.find('h2').text().trim())
        expect(textoContador).toBe(11)

    })

    test('Debe decrementar con el boton -1', () => {

        wrapper.find('button').at(2).simulate('click');
        const textoContador =  parseInt(wrapper.find('h2').text().trim())
        expect(textoContador).toBe(9)

    })

    test('Debe decrementar con el boton -1', () => {

        wrapper.find('button').at(2).simulate('click');
        const textoContador =  parseInt(wrapper.find('h2').text().trim())
        expect(textoContador).toBe(9)

    })

    test('Debe colocar el valor por defecto con el boton reset', () => {
        const valor = 105
        const wrapper = shallow(<CounterApp value={valor}/>)
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const textoContador =  parseInt(wrapper.find('h2').text().trim())

        // console.log(textoContador)

        expect( textoContador ).toBe(valor)

    })
})