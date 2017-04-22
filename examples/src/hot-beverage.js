import React, { PureComponent } from 'react';
import barista from './barista';

export default class HotBeverage extends PureComponent {

    getBeverage() {
        const { type } = this.props;
        return barista({
            type,
            centiliters: 90
        });
    }

    render() {
        const beverage = this.getBeverage();

        return (
            <div>
                <h1>Hot beverage</h1>
                <p>
                    The beverage is a {beverage.cup} of {beverage.type}.
                </p>
            </div>
        );
    }
}
