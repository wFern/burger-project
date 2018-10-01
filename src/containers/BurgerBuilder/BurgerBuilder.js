import React, {Component} from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 2,
      bacon: 1,
      cheese: 2,
      meat: 1
    }
  };

  render(){
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <div>Controllers</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;