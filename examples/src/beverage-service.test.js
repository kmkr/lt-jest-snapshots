import beverageService from './beverage-service.js'

describe('HotBeverage', () => {
    it('should render correctly', () => {
        const coffee = beverageService({
            type: 'coffee',
            centiliters: 50,
        });
        expect(coffee).toMatchSnapshot();        
    });

    it('should throw on too much content', () => {
        debugger;
        expect(() => {
            beverageService({
                centiliters: 150
            });
        }).toThrowError('Too much content');
    });

    it('should throw on too much content', () => {
        expect(() => {
            beverageService({
                centiliters: 150
            });
        }).toThrowErrorMatchingSnapshot();
    });
});