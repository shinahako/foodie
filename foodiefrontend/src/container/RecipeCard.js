import React, {Component} from 'react';
import '../css/App.css';
import FoodTitle from "./recipeCard/FoodTitle";
import ProfilePictureOnCard from "./recipeCard/ProfilePictureOnCard";
import FoodDescription from "./recipeCard/FoodDescription";
import Rating from "./recipeCard/Rating";
import {bindActionCreators} from "redux";
import {openRelevantRecipe} from '../actions/mainActions'

class RecipeCard extends Component {
    constructor(props) {
        super(props);
    }

  openRelevantRecipe = ()=>  {
      debugger;
    this.props.openRelevantRecipe(this.props.id);
  };
    

    render() {
        return (
            <div className="RecipeCard" onClick={this.openRelevantRecipe}>
              <FoodTitle title={this.props.title}/>
              <Rating rating={this.props.rating}/>
              <ProfilePictureOnCard src={this.props.profileImg}/>
              <img className={"RecipeCardImg"} src={this.props.foodImg}/>
              <FoodDescription description={"Food description goes here"}/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    openRelevantRecipe
  }, dispatch)
};


export default RecipeCard;