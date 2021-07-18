import React,{useEffect} from 'react'

import {View,Text} from 'react-native'
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import {useSelector} from 'react-redux'

import HeaderButton from '../../Components/HeaderButton'
import {List} from '../../Components/ShopPage/List'
import {styles} from './Styles' 
import PRODUCTS from '../../Data/Products'


const ShopPage = props =>{
    const CartItems = useSelector(state => state.cart.CartItems)
    const totalItems = CartItems.length

    useEffect(()=>{
        props.navigation.setParams({totalItems : totalItems})
    },[totalItems])

    return(
        <View style={styles.container}>
            <List data={PRODUCTS} navigation={props.navigation}/>
        </View> 
    )
}

ShopPage.navigationOptions = navData =>{
    const totalItems = navData.navigation.getParam('totalItems')
    return {
        headerTitle : 'All Products',
        headerRight : ()=>{
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <View nativeID="cart" accessibilityLabel="cart" style={styles.cartIconContainer}>
                        <Item
                            title='Menu' 
                            iconName='md-cart'
                            onPress={()=> navData.navigation.navigate('CartPage')}
                            iconSize={25}                        
                        />
                        {
                            totalItems!==0?
                            <View style={styles.itemCountContainer}>
                                <Text nativeID="cart-count" accessibilityLabel="cart-count" style={styles.itemCountText}>{totalItems}</Text>
                            </View>
                            :null
                        }
                    </View>
                </HeaderButtons>
            )
        },
}}


export default ShopPage