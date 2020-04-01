import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <input className="form-control my-2" id="search_box" type="search" placeholder="Search symbols or instrument names..." aria-label="Search" onFocus={()=>this.props.onFocus()} onChange={()=>this.props.onChange()}/>
        );
    }
}

export default SearchBar;
