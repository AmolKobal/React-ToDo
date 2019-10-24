import React, { Component } from 'react';
import TodoList from './TodoList';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {text: '', key: ''},
    }
  }

  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if(newItem.text !== '') {
      console.log(newItem)
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { tex: '', key: ''},
      })
    }
  }

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }

  render() { 
    return (
      <div className="App">
          <TodoList 
            addItem={this.addItem} 
            inputElement={this.inputElement}
            handleInput={this.handleInput}
            currentItem={this.state.currentItem}
          />

      </div>
    );
  }
}

export default App;
