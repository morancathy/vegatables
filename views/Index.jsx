const React = require('react');
const DefaultLayout = require('./layouts/Default')

class Index extends React.Component {
  render(){
    const {veggies} = this.props;
    return(
      <DefaultLayout title={"Fruits Index Page"}>
        <h1>The Vegatable Index Page</h1>
        <nav>
          <a href="/veggies/new">Create a New Vegetable</a>
        </nav>
        <ul>
          {veggies.map((product, i) => {
            return(
              <li>
                The {' '}
                <a href={`/veggies/${veggie.id}`}>
                  {veggie.name}
                </a> {' '}
                is {veggie.color} <br/>
                {veggie.likeToEat ? 'I like to eat this veggie' : 'This veggie is NASTY!'}<br/>
              </li>
            )
          })}
        </ul>
      </DefaultLayout>
    )
  }
}

module.exports = Index;
