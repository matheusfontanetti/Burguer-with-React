import React, { Component } from "react";

import Aux from '../../hoc/Aux/Aux';
import Burguer from '../../components/Burguer/Burguer';
import BuildControls from '../../components/Burguer/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burguer/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurguerBuilder extends Component{
   // constructor(props){
  //      super(props);
   //     this.state ={}
   // }
   state = {
       ingredients:{
           salad: 0,
           bacon: 0,
           cheese: 0,
           meat: 0
       },
       totalPrice: 4,
       purchasable: false,
       purchasing: false

   }

   updatePurchase(ingredients){
       const sum = Object.keys(ingredients)
       .map(igKey => {
           return ingredients[igKey];
       })
       .reduce((sum,el) => {
           return sum + el;
       },0);
       this.setState({purchasable: sum > 0});
   }

   addIngredientHandler =(type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
        ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients :updatedIngredients});
    this.updatePurchase(updatedIngredients);

   }

   removeIngredientHandler =(type) => {
    const oldCount = this.state.ingredients[type];
    if(oldCount <=0){
        return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
        ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({totalPrice: newPrice, ingredients :updatedIngredients});
    this.updatePurchase(updatedIngredients);
}

purchaseHandler = () =>{
    this.setState({purchasing:true});

}

purchaseCancelHandler = () =>{
    this.setState({purchasing:false});
}

purchaseContinueHandler =() =>{
    alert('you continue');
}

    render(){
        const disabledInfo ={
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <=0

        }
        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary ingredients ={this.state.ingredients}
                    price={this.state.totalPrice}
                    purchaseCancelled ={this.purchaseCancelHandler}
                    purchaseContinued ={this.purchaseContinueHandler}
                    />
                </Modal>
                <div><Burguer ingredients ={this.state.ingredients}/></div>
                <BuildControls 
                ingredientAdded ={this.addIngredientHandler}
                ingredientRemoved ={this.removeIngredientHandler}
                disabled={disabledInfo}
                price={this.state.totalPrice}
                ordered={this.purchaseHandler}
                purchasable ={this.state.purchasable}
                />
            </Aux>
        );
    }
}

export default BurguerBuilder;