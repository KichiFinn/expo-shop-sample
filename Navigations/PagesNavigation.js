import React from 'react'

import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {Ionicons} from '@expo/vector-icons'

import ShopPage from '../Pages/ShopPage/ShopPage'
import ProductDetailPage from '../Pages/ProductDetailPage/ProductDetailPage'
import CartPage from '../Pages/Cart/CartPage'
import SellerProductsPage from '../Pages/SellerProductPage/SellerProductPage'
import EditSellerProductDetailPage from '../Pages/SellerProductDetailPage/SellerProductDetailPage'
import OrdersPage from '../Pages/OrdersPage/OrdersPage'
import OrderSummaryPage from '../Pages/OrderSummaryPage/OrderSummaryPage'
import SelectAddressPage from '../Pages/SelectAddressPage/SelectAddressPage'
import AddressForm from '../Pages/AddressForm/AddressForm'

const defaultHeaderConfiguration = {
    headerStyle :{
        height : 100,
        backgroundColor : '#FF007E',
    },
    headerTitleStyle:{
        color : '#fff',
        fontWeight :'700'
    },
}

const Navigation1 = createStackNavigator({
    ShopPage : ShopPage,
    ProductDetailPage : ProductDetailPage,
    CartPage : CartPage,
    OrderSummary : OrderSummaryPage,
    SelectAddress : SelectAddressPage,
    AddressForm : AddressForm
},{
    navigationOptions:{
        drawerIcon :(drawerConfig) =><Ionicons name='md-home' color={drawerConfig.activeTintColor} size={20} />
    },
    defaultNavigationOptions : ()=>{
        return{
        ...defaultHeaderConfiguration,
    }
}
})

const Navigation2 = createStackNavigator({
    OrdersPage : OrdersPage
},{
    defaultNavigationOptions : defaultHeaderConfiguration,
    navigationOptions:{
        drawerIcon :(drawerConfig) =><Ionicons name='md-list' color={drawerConfig.activeTintColor} size={20} />
    },
})

const Navigation3 = createStackNavigator({
    SellerProductsPage : SellerProductsPage,
    SellerProductDetailPage : EditSellerProductDetailPage
},{
    defaultNavigationOptions : defaultHeaderConfiguration
})

const RootNavigation = createDrawerNavigator({
    Home : Navigation1,
    MyOrders :{
        screen : Navigation2,
        navigationOptions:{
            title : 'My Orders'
        }
    } ,
    SellerPage : Navigation3,
},{
    contentOptions:{
        activeTintColor : 'black',
    },
})

export default createAppContainer(RootNavigation);