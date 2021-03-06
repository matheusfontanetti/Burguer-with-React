import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transfomedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return[...Array(props.ingredients[igKey])].map((_,i) =>{
          return  <BurgerIngredient key={igKey +i} type={igKey}/>
        });
    }).reduce((arr,el)=>{
        return arr.concat(el);
    },[]);
    if(transfomedIngredients.length ===0){
        transfomedIngredients =<p>Please start adding  ingredients!</p>
    }
    return(
        <div className={classes.Burguer}>
            <BurgerIngredient type="bread-top"/>
            {transfomedIngredients}
            <BurgerIngredient type="bread-bottom"/>

        </div>

    );
};

export default burger;