import React from 'react'

import {View,Text,TouchableNativeFeedback,Alert} from 'react-native'
import {useDispatch} from 'react-redux'

import {styles} from './Styles'
import {addOrder} from '../../Store/Actions/OrdersActions'

const PaymentPage = (props)=>{
    const productList = props.navigation.getParam('productList') 
    const totalPrice = props.navigation.getParam('totalPrice')
    const dispatch = useDispatch()

    return(
        <View style={styles.container}>
            <View style={styles.message}>
                <Text style={styles.messageText1}>Everything is free;).</Text>
                <Text style={styles.messageText2}>No need to pay a single penny.</Text>
            </View>
            <TouchableNativeFeedback
                onPress={()=>
                    {
                        dispatch(addOrder(productList,totalPrice))
                        Alert.alert(
                            'Success!',
                            'Your order has been processed, it will be delivered shortly.',
                            [
                                {
                                    text : 'Ok',
                                    onPress :()=>props.navigation.navigate('ShopPage')
                                }
                            ]
                        )
                    }
                }
            >
                <View style={styles.placeOrderButton}>
                    <Text style={styles.placeOrderButtonText}>PLACE ORDER</Text>
                </View>
            </TouchableNativeFeedback>
        </View>  
    )
}

export default PaymentPage