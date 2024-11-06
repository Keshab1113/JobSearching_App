import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { BG_COLOR, TEXT_COLOR } from '../../utils/Colors'
import { moderateScale, moderateVerticalScale, verticalScale, scale } from 'react-native-size-matters'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const SelectUser = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>What you are looking for?</Text>
      <TouchableOpacity onPress={() => { navigation.navigate("JobPostingNavigator")}} style={styles.wantToHire}>
        <Text style={styles.btnTxt1}>Want to Hire Candidate</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { navigation.navigate("JobSearchingNavigator") }} style={styles.wantToJob}>
        <Text style={styles.btnTxt2}>Want to Get Job</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SelectUser

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BG_COLOR
  },
  title: {
    fontSize: moderateScale(20),
    fontWeight: '600',
    
  },
  wantToHire: {
    width: verticalScale(250),
    height: verticalScale(45),
    backgroundColor: TEXT_COLOR,
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:moderateVerticalScale(20),
  },
  btnTxt1: {
    color: BG_COLOR,
    fontSize: moderateScale(16),
    fontWeight:'500',
  },
  wantToJob: {
    width: verticalScale(250),
    height: verticalScale(45),
    borderColor: TEXT_COLOR,
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateVerticalScale(20),
    borderWidth:1,
  },
  btnTxt2: {
    color: TEXT_COLOR,
    fontSize: moderateScale(16),
    fontWeight:'500',
  },
  logo: {
    width: scale(150),
    height: verticalScale(100),

  },
})