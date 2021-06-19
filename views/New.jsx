const React = require('react');

const inputStyle = {
  marginBottom: '10px'
}


class New extends React.Component {
  render(){
    return(
      <div>
        <h1>New Fruit Page</h1>
        <form action="/fruits" method="POST">
          Name: <input style={inputStyle} type="text" name="name" /><br/>
          Color: <input style={inputStyle} type= "text" name="color"/><br/>
          Like To Eat: <input style={inputStyle} type= "checkbox" name="likeToEat"/><br/>
          <input type="submit" name="" value="Creat Veggie" />
        </form>
      </div>
    )
  }
}

module.exports = New;
