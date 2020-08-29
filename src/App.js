import React, {Component} from 'react'
import Tabs from './Tabs'


class App extends Component {
  render() {
    const characters = [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]
    return (
      <div className="container">
        <Tabs characterData={characters}/>
      </div>
    )
  }
}

export default App
