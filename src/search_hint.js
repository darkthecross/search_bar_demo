import React from 'react';

class SearchHint extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { symbol: "EMS0", instrument: "S&P 500 E-Mini June 2020", market: "June" },
                { symbol: "SPY", instrument: "SPDR S&P 500 ETF", market: "ETF" },
                { symbol: "VOO", instrument: "Vanguard S&P 500 ETF", market: "ETF" },
                { symbol: "ETM0", instrument: "S&P 500 Micro June 2020", market: "June" },
            ],
            filter: "Any",
        };
    }

    findMatched() {
        let s = this.props.searchString.toLowerCase();
        if(s === "") {
            return [];
        }
        let f = this.state.filter;
        let market_filtered = this.state.data.filter(function(d) {
            if(f !== "Any") {
                return d.market === f;
            } else {
                return true;
            }
        });
        return market_filtered.filter(function(d) {
            return d.symbol.toLowerCase().indexOf(s) > -1 || d.instrument.toLowerCase().indexOf(s) > -1;
        });
    }

    updateFilter(e) {
        this.setState({filter:e.target.value});
    }

    updateSearch(v) {
        this.props.updateSearch(v);
    }

    render() {
        if (this.props.showHint) {
            let m = this.findMatched();
            return (
                <div id="search_hint" className="border p-2 rounded">
                    <div className="row">
                        <div className="col-5">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <label className="input-group-text" htmlFor="market_select">Market</label>
                                </div>
                                <select className="custom-select" id="market_select" defaultValue="Any" onChange={(e)=>this.updateFilter(e)}>
                                    <option value="Any">Any</option>
                                    <option value="June">June</option>
                                    <option value="ETF">ETF</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-7">
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-3">
                            Search Results
                        </div>
                        <div className="col-9">
                        </div>
                    </div>
                    <div>
                        <div className="list-group list-group-flush">
                            {m.map((value, index)=>{
                                return (<button type="button" className="list-group-item" key={index} onClick={()=>this.updateSearch(value)}><div className="row"><div className="col-4">{value.symbol}</div><div className="col-8">{value.instrument}</div></div></button>);
                            })}
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div id="search_hint" className="border p-2 rounded" style={{ display: "none" }}></div>
            );

        }
    }
}

export default SearchHint;