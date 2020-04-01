import React from 'react';
import SearchBar from './search_bar';
import SearchHint from './search_hint';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      showHint: false,
    };
  }

  SearchBarFocus() {
    this.setState({showHint:true});
  }

  CloseHint() {
    this.setState({showHint:false});
  }

  SearchBarChange() {
    this.setState({searchString:document.getElementById("search_box").value});
  }

  UpdateSearch(s) {
    this.setState({searchString:s.symbol, showHint:false});
    document.getElementById("search_box").value = s.symbol;
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
            </div>
            <div className="col-5">
              <SearchBar onFocus={()=>this.SearchBarFocus()} onChange={()=>this.SearchBarChange()} />
            </div>
            <div className="col-1">
              <button className="btn btn-outline-success my-2" id="search_button" onClick={()=>this.CloseHint()}>Search</button>
            </div>
            <div className="col-3">
            </div>
          </div>
          <div className="row">
            <div className="col-3">
            </div>
            <div className="col-5 px-3" >
              <SearchHint showHint={this.state.showHint} searchString={this.state.searchString} updateSearch={(s)=>this.UpdateSearch(s)}/>
            </div>
            <div className="col-4">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
