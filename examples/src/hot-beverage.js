import React, { PureComponent } from 'react';
import barista from './barista';

export default class HotBeverage extends PureComponent {
    constructor() {
        super();
        this.state = {
            beverage: null
        };

        this.pourTea = this.pourTea.bind(this);
    }

    pourTea() {
        this.setState({
            beverage: barista({
                type: 'tea',
                centiliters: 90
            })
        });
    }

    render() {
        const { beverage } = this.state;
        if (beverage && beverage.type) {
            return (
                <p>The beverage is a {beverage.cup} of {beverage.type}.</p>
            );
        }

        return (
            <div>
                <p>The beverage is empty.</p>

                <button onClick={this.pourTea}>
                    Pour in some tea
                </button>
            </div>
        );
    }
}
