import React,{useEffect} from 'react'

import {View,Text,ScrollView,TouchableNativeFeedback} from 'react-native'
import {useSelector} from 'react-redux'

import {List} from '../../Components/Cart/List'
import {styles} from './Styles'

const CartPage = props =>{
    const CartItems = useSelector(state => state.cart.CartItems)
    const totalAmount = useSelector(state => state.cart.totalPrice)
    const totalItems = CartItems.length
    
    useEffect(()=>{
        props.navigation.setParams({totalItems : totalItems})
    },[totalItems])
    
    if(CartItems.length===0)
    {
        return(
            <View style={styles.message}>
                <Text style={styles.messageText1}>Your cart is empty.</Text>
                <Text style={styles.messageText2}>Fill er up!</Text>
            </View>
        )
    }
    
    return(
        <View style={styles.container}>
            <ScrollView>
                <List data={CartItems} navigation={props.navigation}/>
            </ScrollView>
            <View style={styles.priceInfoBar}>
                <Text key="total-order" testID = "total-order" nativeID="total-order" accessibilityLabel="total-order" style={styles.totalPriceText}>${totalAmount.toFixed(2)}</Text>
                <TouchableNativeFeedback key="place-order" testID = "place-order" nativeID="place-order" accessibilityLabel="place-order"
                    onPress={()=>props.navigation.navigate({
                        routeName : 'OrderSummary',
                        params:{
                            productList : [...CartItems]
                        }
                    })}
                >
                    <View style={styles.placeOrderButton}>
                        <Text style={styles.placeOrderButtonText}>Place Order</Text>
                    </View> 
                </TouchableNativeFeedback>
            </View>
        </View>
    )
}

export default CartPage