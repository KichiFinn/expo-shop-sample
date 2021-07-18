import React,{useState,useEffect} from 'react'

import {View,Text,ScrollView,TextInput, TouchableNativeFeedback} from 'react-native'
import {useDispatch,useSelector} from 'react-redux'

import {styles} from './Styles'
import {addNewAddrress,updateAddress} from '../../Store/Actions/AddressActions'
import Address from '../../Models/Address'

const AddressForm = props=>{
    const addressBook = useSelector(state=>state.addressBook.addressBook)
    const selectedAddressId = props.navigation.getParam('id')
    const selectedAddress = addressBook.find(item=>item.id===selectedAddressId)   
    
    const [pincode,setPincode] = useState(selectedAddress ? selectedAddress.address.pinCode : '')
    const [houseInfo,setHouseInfo] = useState(selectedAddress ? selectedAddress.address.houseInfo : '')
    const [streetInfo,setStreetInfo] = useState(selectedAddress ? selectedAddress.address.streetInfo : '')
    const [city,setCity] = useState(selectedAddress ? selectedAddress.address.city : '')
    const [userName,setUserName] = useState(selectedAddress ? selectedAddress.address.userName : '')
    const [mobileNumber,setMobileNumber] = useState(selectedAddress ? selectedAddress.address.mobileNumber : '')    

    const dispatch = useDispatch()

    const saveAddressHandler = ()=>{
        const newAddress = new Address(
            pincode,
            houseInfo,
            streetInfo,
            city,  
            userName,
            mobileNumber,
        )
        dispatch(addNewAddrress(newAddress))
        props.navigation.goBack()
    }

    const updateAddressHandler = ()=>{
        const newAddress = new Address(
            pincode,
            houseInfo,
            streetInfo,
            city,
            userName,
            mobileNumber,
        )
        dispatch(updateAddress(newAddress,selectedAddressId))
        props.navigation.goBack()
    }

    useEffect(()=>{
        props.navigation.setParams({selectedAddress : selectedAddress})
    },[selectedAddress])

    return(
        <View style={styles.container}>
            
                <ScrollView>
                    <View style={styles.addressInfo}> 
                        <TextInput nativeID="name" accessibilityLabel="name" placeholder='Name*' style={styles.textInput} value={userName} onChangeText={text=>setUserName(text)}/> 
                        <TextInput nativeID="mobile-number" accessibilityLabel="mobile-number" placeholder='Mobile Number*' style={styles.textInput} keyboardType={"number-pad"} value={mobileNumber} onChangeText={text=>setMobileNumber(text)}/>
                        <TextInput nativeID="pincode" accessibilityLabel="pincode" placeholder='Pincode*' style={styles.textInput} keyboardType={"number-pad"} value={pincode} onChangeText={text=>setPincode(text)}/>
                        <TextInput nativeID="house-no" accessibilityLabel="house-no" placeholder='House No.,Building Name*' style={styles.textInput} value={houseInfo} onChangeText={text=>setHouseInfo(text)}/>    
                        <TextInput nativeID="road-name" accessibilityLabel="road-name" placeholder='Road Name, Area, Colony*' style={styles.textInput} value={streetInfo} onChangeText={text=>setStreetInfo(text)}/>    
                        <TextInput nativeID="city" accessibilityLabel="city" placeholder='City*' style={styles.textInput} value={city} onChangeText={text=>setCity(text)}/>    
                    </View>
                    <View nativeID="save-update-address" accessibilityLabel="save-update-address" style={styles.saveButtonBox}>
                        <TouchableNativeFeedback
                                onPress={selectedAddress? updateAddressHandler:saveAddressHandler}
                        >
                            <View style={styles.saveButton}>
                                <Text style={styles.saveButtonText}>{selectedAddress?'UPDATE':'SAVE'}</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </ScrollView>
           
        </View>
    )
}


AddressForm.navigationOptions = navData=>{
    const selectedAddress = navData.navigation.getParam('selectedAddress')
    const title = selectedAddress ? 'Edit address' : 'Add a new address'
    return{
        headerTitle : title
    }
}


export default AddressForm