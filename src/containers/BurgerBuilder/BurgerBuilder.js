import React, { Component } from "react";
import {connect} from 'react-redux';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
//import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as burgerBuilderActions from '../../store/actions/index';
// const INGREDIENT_PRICES = {
//     salad: 0.5,
//     cheese: 0.4,
//     meat: 1.3,
//     bacon: 0.7
// };

class BurgerBuilder extends Component {
    // constructor(props){
    //      super(props);
    //     this.state ={}
    // }
    state = {
        //ingredients : null,
        // ingredients: {
        //     salad: 0,
        //     bacon: 0,
        //     cheese: 0,
        //     meat: 0
        // },
        // totalPrice: 4,
        // purchasable: false,
        purchasing: false,
    }
/**
 * Metodo para obter dados do banco firebase comentado
 * @param {} ingredients 
 */
  // componentDidMount(){
     //   axios.get('https://react-my-burguer.firebaseio.com/ingredients')
      //  .then(response => {
      //      this.setState({ingredients: response.data});
      //  }).catch(error => {
     //       this.setState({error: true});
      //  });
      //this.props.onInitIngredients();
   // }

    updatePurchase(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        // this.setState({ purchasable: sum > 0 });
        return sum > 0;
    }

    // addIngredientHandler = (type) => {
    //     const oldCount = this.state.ingredients[type];
    //     const updatedCount = oldCount + 1;
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     };
    //     updatedIngredients[type] = updatedCount;
    //     const priceAddition = INGREDIENT_PRICES[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = oldPrice + priceAddition;
    //     this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    //     this.updatePurchase(updatedIngredients);

    // }

    // removeIngredientHandler = (type) => {
    //     const oldCount = this.state.ingredients[type];
    //     if (oldCount <= 0) {
    //         return;
    //     }
    //     const updatedCount = oldCount - 1;
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     };
    //     updatedIngredients[type] = updatedCount;
    //     const priceDeduction = INGREDIENT_PRICES[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = oldPrice - priceDeduction;
    //     this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    //     this.updatePurchase(updatedIngredients);
    // }

    purchaseHandler = () => {
        if(this.props.isAuthenticated){
            this.setState({ purchasing: true });
        } else{
            this.props.onSetAuthRedirectPath('/checkout');
            this.props.history.push('/auth');
        }

    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinueHandler = () => {
        // alert('You continue!');
        // this.setState( { loading: true } );
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalPrice,
        //     customer: {
        //         name: 'Max Schwarzmüller',
        //         address: {
        //             street: 'Teststreet 1',
        //             zipCode: '41351',
        //             country: 'Germany'
        //         },
        //         email: 'test@test.com'
        //     },
        //     deliveryMethod: 'fastest'
        // }
        // axios.post( '/orders.json', order )
        //     .then( response => {
        //         this.setState( { loading: false, purchasing: false } );
        //     } )
        //     .catch( error => {
        //         this.setState( { loading: false, purchasing: false } );
        //     } );

        // const queryParams = [];
        // for (let i in this.state.ingredients) {
        //     queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        // }
        // const queryString = queryParams.join('&');
        // this.props.history.push({
        //     pathname: '/checkout',
        //     search: '?' + queryString
        // });
        this.props.onInitPurchase();
        this.props.history.push('/checkout');
    }

    render() {
    //     const disabledInfo = {
    //         ...this.state.ingredients
    //     }
    //     for (let key in disabledInfo) {
    //         disabledInfo[key] = disabledInfo[key] <= 0

    //     }
    //     let orderSummary = null;
    //     let burger = this.props.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

    //     if ( this.state.ingredients ) {
    //         burger = (
    //             <Aux>
    //                 <Burguer ingredients={this.state.ingredients} />
    //                 <BuildControls
    //                     ingredientAdded={this.addIngredientHandler}
    //                     ingredientRemoved={this.removeIngredientHandler}
    //                     disabled={disabledInfo}
    //                     purchasable={this.state.purchasable}
    //                     ordered={this.purchaseHandler}
    //                     price={this.state.totalPrice} />
    //             </Aux>
    //         );
    //         orderSummary = <OrderSummary
    //             ingredients={this.state.ingredients}
    //             price={this.state.totalPrice}
    //             purchaseCancelled={this.purchaseCancelHandler}
    //             purchaseContinued={this.purchaseContinueHandler} />;
    //     }
    //   if ( this.state.loading ) {
    //     orderSummary = <Spinner />;
    // }

    //     let burguer = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner/>
    //    if(this.state.ingredients){
    //         burguer =(
    //             <Aux>
    //                 <div><Burguer ingredients={this.state.ingredients} /></div>
    //             <BuildControls
    //                 ingredientAdded={this.addIngredientHandler}
    //                 ingredientRemoved={this.removeIngredientHandler}
    //                 disabled={disabledInfo}
    //                 price={this.state.totalPrice}
    //                 ordered={this.purchaseHandler}
    //                purchasable={this.state.purchasable}
    //             />
    //             </Aux>
    //         );
    //         orderSummary = <OrderSummary
    //         ingredients={this.state.ingredients}
    //         price={this.state.totalPrice}
    //         purchaseCancelled={this.purchaseCancelHandler}
    //         purchaseContinued={this.purchaseContinueHandler}
    //     />
    //     }
    //     if (this.state.loading) {
    //         orderSummary = <Spinner />
    //   }

    //     return (
    //         <Aux>
    //             <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
    //                 {orderSummary}
    //             </Modal>
    //      <Burguer ingredients={this.state.ingredients} />
    //             <BuildControls
    //                 ingredientAdded={this.addIngredientHandler}
    //                 ingredientRemoved={this.removeIngredientHandler}
    //                 disabled={disabledInfo}
    //                 purchasable={this.state.purchasable}
    //                 ordered={this.purchaseHandler}
    //                 price={this.state.totalPrice} />
    //         </Aux>
    //     );
    const disabledInfo = {
        // ...this.state.ingredients
        ...this.props.ings
    };
    for ( let key in disabledInfo ) {
        disabledInfo[key] = disabledInfo[key] <= 0
    }
    let orderSummary = <OrderSummary
        ingredients={/*this.state.ingredients*/this.props.ings}
         price={/*this.state.totalPrice*/this.props.price}
        purchaseCancelled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler} />;
    // if ( this.state.loading ) {
    //     orderSummary = <Spinner />;
    // }
    // {salad: true, meat: false, ...}
    return (
        <Aux>
            <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                {orderSummary}
            </Modal>
            <Burger ingredients={/*this.state.ingredients*/this.props.ings} />
            <BuildControls
                ingredientAdded={this.props.onIngredientAdded}
                ingredientRemoved={this.props.onIngredientRemoved}
                disabled={disabledInfo}
                purchasable={this.updatePurchase(this.props.ings)}
                ordered={this.purchaseHandler}
                isAuth={this.props.isAuthenticated}
                price={/*this.state.totalPrice*/this.props.price} />
        </Aux>
    );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuthenticated: state.auth.token !== null
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(burgerBuilderActions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(burgerBuilderActions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(burgerBuilderActions.initIngredients),
        onInitPurchase: ()=> dispatch(burgerBuilderActions.purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(burgerBuilderActions.setAuthRedirectPath(path))
    }

}

export default connect(mapStateToProps,mapDispatchToProps) (BurgerBuilder);