import React,{useEffect} from 'react'

import {View,Text,TouchableNativeFeedback} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {useSelector} from 'react-redux'

import {styles} from './Styles'
import {List} from '../../Components/Address/List'

const SelectAddressPage = props=>{
    const addressBook = useSelector(state => state.addressBook.addressBook)
    const addressCount = addressBook.length

    useEffect(()=>{
        props.navigation.setParams({length : addressCount})
    },[addressCount])

    return(
        <View style={styles.container}>
            <TouchableNativeFeedback testID="add-new-address" key="add-new-address" nativeID="add-new-address" accessibilityLabel="add-new-address" onPress={()=>props.navigation.navigate('AddressForm')}>
                <View style={styles.addButton} >
                    <Ionicons name='ios-add' size={40} color={'#A5CAD2'}/>
                    <Text style={styles.addButtonText}>Add new address</Text>
                </View>
                </TouchableNativeFeedback>
            <List data={addressBook} navigation={props.navigation}/>
        </View>  
    )
}

SelectAddressPage.navigationOptions = navData=>{
    const length = navData.navigation.getParam('length')
    const title = length?`Select Address(${length})` : 'Select Address'
    return{
        headerTitle : title
    }
}


export default SelectAddressPage