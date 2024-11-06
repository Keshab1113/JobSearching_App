import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginForCompany from '../screens/jobposting/LoginForCompany';
import SignupForCompany from '../screens/jobposting/SignupForCompany';
const STACK = createStackNavigator();

const JobPostingNavigator = () => {
  return (
    <STACK.Navigator>
      <STACK.Screen name='LoginForCompany' component={LoginForCompany} options={{ headerShown: false }} />
      <STACK.Screen name='SignupForCompany' component={SignupForCompany} options={{ headerShown: false }} />
    </STACK.Navigator>
  )
}

export default JobPostingNavigator

const styles = StyleSheet.create({})