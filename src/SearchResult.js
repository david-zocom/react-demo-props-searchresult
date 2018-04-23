import React from 'react';

class SearchResult extends React.Component {
  render() {
	  let { title, url, description } = this.props.pasta;
    return (
      <div className="result">
        <h3>{title}</h3>
        <a href={url}>{url}</a>
        <p>{description}</p>
      </div>
    );
  }
}

export default SearchResult;
