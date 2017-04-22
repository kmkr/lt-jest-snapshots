import React from 'react';
import HotBeverage from './hot-beverage.js'
import renderer from 'react-test-renderer';

describe('HotBeverage', () => {
    it('should render correctly', () => {
        const tree = renderer.create(
            <HotBeverage type="tea"/>
        ).toJSON();
        expect(tree).toMatchSnapshot();        
    });

});