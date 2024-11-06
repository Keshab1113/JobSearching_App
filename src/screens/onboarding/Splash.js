import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useEffect } from 'react'
import { BG_COLOR, TEXT_COLOR } from '../../utils/Colors'
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('SelectUser');
        }, 3000);
    }, []);
  return (
    <View style={styles.container}>
          <Image source={require('../../../assets/logo.png')} style={styles.logo} />
          <Text style={styles.name}>FindMyJob</Text>
          <Text style={styles.slogan}>Find & Post Job Anywhere in India</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:BG_COLOR
    },
    logo: {
        width: scale(150),
        height: verticalScale(100),
        
    },
    name: {
        fontSize: moderateScale(35),
        fontWeight: '600',
        marginTop: moderateVerticalScale(10),
        color:TEXT_COLOR,
    },
    slogan: {
        fontSize: moderateScale(16),
        fontStyle: 'italic',
        position: 'absolute',
        bottom: moderateVerticalScale(60),
        fontWeight: '600',
        color: TEXT_COLOR,
    }
})