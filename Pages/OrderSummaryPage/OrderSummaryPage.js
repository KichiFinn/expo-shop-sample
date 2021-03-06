import React,{useEffect} from 'react'

import {View,ScrollView,TouchableNativeFeedback,Text,Alert} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {HeaderButtons,Item} from 'react-navigation-header-buttons'

import HeaderButton from '../../Components/HeaderButton'
import {addOrder} from '../../Store/Actions/OrdersActions'
import {List} from '../../Components/OrderSummaryPage/List'
import {styles} from './Styles'

const OrderSummaryPage = props=>{
    const addressBook = useSelector(state=>state.addressBook.addressBook)
    const selectedAddressId = useSelector(state=>state.addressBook.selectedAddressId)
    const selectedAddress = addressBook.find(item=>item.id === selectedAddressId)
    const productList = props.navigation.getParam('productList')
    let totalPrice = 0
    const CartItems = useSelector(state => state.cart.CartItems)
    const totalItems = CartItems.length
    const dispatch = useDispatch()

    for(let index in productList)
        totalPrice += productList[index].item.price *  productList[index].quantity
        
    const onContinueHandler = ()=>{
            if(!selectedAddress)
            {
                Alert.alert(
                    'Warning!!!',
                    'Please add a valid address.',
                    [
                        {
                            text : 'Ok',
                            style : 'default'
                        }
                    ]
                )
                return
            }
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

    useEffect(()=>{
        props.navigation.setParams({totalItems : totalItems})
    },[totalItems])

    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.deliveryAddressBar}>
                    {
                        selectedAddress&&
                        <View style={styles.deliveryAddress}>
                        <View style={styles.userName}>
                            <Text style={styles.userNameText}>{selectedAddress.address.userName}</Text>
                            <View style={styles.addressType}>
                                <Text style={styles.addressTypeText}>{selectedAddress.address.homeAddress?'HOME':'WORK'}</Text>
                            </View>
                        </View>
                        <View>
                            <Text numberOfLines={1}>{selectedAddress.address.houseInfo}, {selectedAddress.address.streetInfo}, {selectedAddress.address.landMark}</Text>
                            <Text>{selectedAddress.address.city}, {selectedAddress.address.state} - {selectedAddress.address.pinCode}</Text>
                        </View>
                        <View>
                            <Text>{selectedAddress.address.mobileNumber}</Text>
                        </View>
                        </View>
                    }
                    <TouchableNativeFeedback key="add-select-address" testID="add-select-address" nativeID="add-select-address" accessibilityLabel="add-select-address"
                        onPress={()=>props.navigation.navigate('SelectAddress')}
                        background={TouchableNativeFeedback.Ripple('#A5CAD2')}
                    >
                        <View style={styles.changeAddressButton}>
                            <Text style={styles.changeAddressButtonText}>{selectedAddress?'CHANGE' : '+  ADDRESS'}</Text>
                        </View> 
                    </TouchableNativeFeedback>
                </View>
                <List data={productList}/>
            </ScrollView>
            <View style={styles.priceInfoBar}>
                    <Text style={styles.totalPriceText}>${totalPrice.toFixed(2)}</Text>
                    <TouchableNativeFeedback key="place-order" testID="place-order" nativeID="place-order"  accessibilityLabel="place-order"
                        onPress={onContinueHandler}>
                        <View style={styles.placeOrderButton}>
                            <Text style={styles.placeOrderButtonText}>PLACE ORDER</Text>
                        </View> 
                    </TouchableNativeFeedback>
                </View>
        </View>  
    )
}

OrderSummaryPage.navigationOptions = navData=>{
    const totalItems = navData.navigation.getParam('totalItems')

    return{
        headerTitle:'Order Summary',
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

export default OrderSummaryPage