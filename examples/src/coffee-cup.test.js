import React from 'react';
import CoffeeCup from './coffee-cup.js'
import renderer from 'react-test-renderer';

describe('CoffeeCup', () => {
    it('should render correctly', () => {
        const tree = renderer.create(
            <CoffeeCup/>
        ).toJSON();
        expect(tree).toMatchSnapshot();        
    });
});