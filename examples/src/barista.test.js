import barista from './barista.js'

describe('the barista', () => {

    it('should make a coffee correctly', () => {
        const coffee = barista({
            type: 'coffee',
            centiliters: 50,
        });
        expect(coffee).toMatchSnapshot();        
    });

    it('should throw on too much content', () => {
        expect(() => {
            barista({
                centiliters: 150
            });
        }).toThrowErrorMatchingSnapshot();
    });

});