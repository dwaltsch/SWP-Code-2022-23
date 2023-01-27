import React, {Component} from 'react';

class BTC extends Component {
    render() {
        return (
            <div>
                <ul>
                    {fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
                        .then(response => response.json())
                        .then(data => {
                            return data.bpi.USD.rate;
                        })}
                    }
                </ul>
            </div>
        );
    }
}

export default BTC;