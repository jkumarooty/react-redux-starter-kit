import React from 'react';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class SearchPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      search: {text: ''}
    };
    
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onSearchChange(event) {
    const search = this.state.search;
    search.text = event.target.value;
    this.setState({search: search});
  }

  onClickSave(event) {
    console.log(this.state.search.text);
  }

  render() {
    return (
      <div>
        <h1>Search</h1>
        <input
          type="text"
          onChange={this.onSearchChange}
          value={this.state.search.text}
        />
        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave}
        />
      </div>
    );
  }
}

SearchPage.propTypes = {
};

export default SearchPage;