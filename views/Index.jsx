const React = require('react');

class Index extends React.Component {
  render(){
    const {veggies} = this.props;
    return(
      <div>
        <h1>The Vegatable Index Page</h1>
        <nav>
          <a href="/veggies/new">Create a New Vegetable</a>
        </nav>
        <ul>
          {veggies.map((veggie, i) => {
            return(
              <li>
                The {' '}
                <a href={`/veggies/${i}`}>
                  {veggie.name}
                </a> {' '}
                is {veggie.color} <br/>
                {veggie.likeToEat ? 'I like to eat this veggie' : 'This veggie is NASTY!'}<br/>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

module.exports = Index;
