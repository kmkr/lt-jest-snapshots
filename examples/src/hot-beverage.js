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
        return (
            <div>
                <p>
                    The beverage contains {this.state.beverage ? this.state.beverage.type : 'nothing'}
                </p>

                <button onClick={this.pourTea}>
                    Pour in some tea
                </button>
            </div>
        );
    }
}
