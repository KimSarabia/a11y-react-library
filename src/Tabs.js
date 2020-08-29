import React, {Component} from 'react'

const TabList = (props) => {
  const tabs = props.characterData.map((tab, index) => {
    return (
      <button key={index}>{tab.name}</button>
    )
  })

  return <div>{tabs}</div>
}

const TabPanel = () => {
  return (
    <div>
      <h3>Name</h3>
    </div>
  )
}

class Tabs extends Component {
  render() {
    const {characterData} = this.props
    return (
      <table>
        <TabList characterData={characterData} />
        <TabPanel />
      </table>
    )
  }
}

export default Tabs
