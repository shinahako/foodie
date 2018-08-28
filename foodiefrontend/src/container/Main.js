import React, {Component} from 'react';
import {connect} from 'react-redux'
import '../css/App.css';
import RecipeCard from "./RecipeCard";
import NavigationBar from "./NavigationBar";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.initialState);
    return (
        <div className="Main2">
          <NavigationBar/>
          {/*         <div>
            <p>{this.props.count}</p>
            <button onClick={this.props.increment}>+</button>
            <button  onClick={this.props.decrement}>-</button>
          </div>*/}

          {
            this.props.recipes.map(recipe =>
                <RecipeCard
                    id={recipe.id}
                    title={recipe.title}
                    rating={recipe.rating}
                    foodImg={recipe.foodImg}
                    profileImg={recipe.profileImg}
                />
            )}
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.mainReducer.data.recipes
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);