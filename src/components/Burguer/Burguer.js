import React from 'react';
import classes from './Burguer.css';
import BurguerIngredient from './BurguerIngredient/BurguerIngredient';

const burguer = (props) => {
    let transfomedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return[...Array(props.ingredients[igKey])].map((_,i) =>{
          return  <BurguerIngredient key={igKey +i} type={igKey}/>
        });
    }).reduce((arr,el)=>{
        return arr.concat(el);
    },[]);
    if(transfomedIngredients.length ===0){
        transfomedIngredients =<p>Please start adding  ingredients!</p>
    }
    return(
        <div className={classes.Burguer}>
            <BurguerIngredient type="bread-top"/>
            {transfomedIngredients}
            <BurguerIngredient type="bread-bottom"/>

        </div>

    );
};

export default burguer;