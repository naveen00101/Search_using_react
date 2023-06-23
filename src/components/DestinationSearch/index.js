// Write your code here

import {Component} from 'react'
import DestinationItem from '../DestinationItem/index'
import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChange = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    console.log(destinationsList)
    const searchResults = destinationsList.filter(eachUser =>
      eachUser.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-box">
          <input
            type="search"
            placeholder="  Search"
            onChange={this.onChange}
          />
          <img
            className="icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="Search icon"
          />
        </div>
        <div>
          <ul className="list-container">
            {searchResults.map(eachUser => (
              <DestinationItem
                img={eachUser.imgUrl}
                name={eachUser.name}
                key={eachUser.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
