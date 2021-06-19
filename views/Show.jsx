const React = require('react')
class Show extends React.Component {
  render () {
    const veggie = this.props.veggie
    return (
      <div>
      <h1>This is the Veggie Show Page</h1>
      The {veggie.name} is {veggie.color}.<br/>
      {veggie.likeToEat? 'I like eating this veggie.' : 'This veggie is NASTY!'}
      </div>
    )
  }
}

module.exports = Show;
