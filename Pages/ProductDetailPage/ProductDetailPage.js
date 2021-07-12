import React,{useState,useEffect} from 'react'

import {View,Text,ScrollView, ImageBackground, TouchableNativeFeedback} from 'react-native'
import {useDispatch,useSelector} from 'react-redux'
import {HeaderButtons,Item} from 'react-navigation-header-buttons'

import HeaderButton from '../../Components/HeaderButton'
import {addToCart} from '../../Store/Actions/CartActions'
import Rating from '../../Components/Rating'
import {styles} from './Styles'
import PRODUCTS from '../../Data/Products'

const ProductDetailPage = props =>{
    const dispatch = useDispatch();
    const selectedProductId = props.navigation.getParam('productId')
    const selectedProduct = PRODUCTS.find(product => product.productId===selectedProductId)
    const CartItems = useSelector(state => state.cart.CartItems)
    const totalItems = CartItems.length

    useEffect(()=>{
        props.navigation.setParams({totalItems : totalItems})
    },[totalItems])

    return(
        <View style={styles.mainDisplay}>
            <ScrollView style={{backgroundColor : 'white'}}>
                <View style={styles.container1}>
                    <ImageBackground style={styles.imageContainer} imageStyle={styles.image} source={{uri : selectedProduct.imageUrl}}>
                    </ImageBackground>
                    <View style={styles.details}>
                        <Text style={styles.name}>{selectedProduct.name}</Text>
                        <Text style={styles.description}>{selectedProduct.description}</Text>
                        <Text style={styles.price}>${selectedProduct.price}</Text>
                        <Rating>{selectedProduct.rating}</Rating>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.container2}>
                <TouchableNativeFeedback
                    onPress={()=>dispatch(addToCart(selectedProduct.productId))}
                >
                    <View style={styles.addToCart}>
                        <Text style={styles.addToCartText}>ADD TO CART</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={()=>props.navigation.navigate({
                        routeName : 'OrderSummary',
                        params :{
                            productList : [{item: selectedProduct , quantity : 1}]
                        }
                    })}
                >
                    <View style={styles.buyNow}>
                        <Text style={styles.buyNowText}>BUY NOW</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>
    )
}

ProductDetailPage.navigationOptions = navData=>{
    const totalItems = navData.navigation.getParam('totalItems')
    return{
        headerTitle : 'Product Details',
        headerRight : ()=>{
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <View style={styles.cartIconContainer}>
                        <Item
                            title='Menu' 
                            iconName='md-cart'
                            onPress={()=> navData.navigation.navigate('CartPage')}
                            iconSize={25}                        
                        />
                        {
                            totalItems!==0?
                            <View style={styles.itemCountContainer}>
                                <Text style={styles.itemCountText}>{totalItems}</Text>
                            </View>
                            :null
                        }
                    </View>
                </HeaderButtons>
            )
        },
    }
}

export default ProductDetailPage