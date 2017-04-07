import React from 'react';
import HotBeverage from './hot-beverage.js'
import renderer from 'react-test-renderer';

describe('HotBeverage', () => {
    it('should render correctly', () => {
        const tree = renderer.create(
            <HotBeverage/>
        ).toJSON();
        expect(tree).toMatchSnapshot();        
    });

    it('should render correctly when pouring in tea', () => {
        const component = renderer.create(<HotBeverage/>);
        const tree = component.toJSON();
        tree.children[1].props.onClick();
        expect(component.toJSON()).toMatchSnapshot();        
    });
});