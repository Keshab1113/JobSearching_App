import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { BG_COLOR, TEXT_COLOR } from '../../utils/Colors';
import { moderateVerticalScale, scale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

const LoginForCompany = () => {
  // State variables to handle input fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Handle the login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
    console.log('Forgot Password Pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../../assets/logo.png')} style={styles.logo} />

      <Text style={styles.heading}>Login</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputHeading}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.inputHeading}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#888"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.SignUpButton} onPress={() => navigation.navigate("SignupForCompany")}>
          <Text style={styles.SignUpButtonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginForCompany;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_COLOR,
  },
  logo: {
    width: scale(100),
    height: scale(100),
    alignSelf: 'center',
    marginTop: moderateVerticalScale(20),
  },
  heading: {
    fontSize: scale(28),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: moderateVerticalScale(30),
    color: TEXT_COLOR,
  },
  inputContainer: {
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  inputHeading: {
    width: '100%',
    fontSize: scale(14),
    color: TEXT_COLOR,
    marginBottom: moderateVerticalScale(5),
    fontWeight: '500',
  },
  input: {
    width: '100%',
    height: moderateVerticalScale(45),
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: scale(10),
    marginBottom: moderateVerticalScale(15),
    color: TEXT_COLOR,
  },
  forgotPasswordText: {
    color: TEXT_COLOR,
    fontSize: scale(14),
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: moderateVerticalScale(15),
  },
  loginButton: {
    backgroundColor: TEXT_COLOR,
    paddingVertical: moderateVerticalScale(12),
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  SignUpButton: {
    borderColor: TEXT_COLOR,
    paddingVertical: moderateVerticalScale(12),
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
    marginTop: moderateVerticalScale(20),
  },
  loginButtonText: {
    color: BG_COLOR,
    fontSize: scale(16),
    fontWeight: '600',
  },
  SignUpButtonText: {
    color: TEXT_COLOR,
    fontSize: scale(16),
    fontWeight: '600',
  },
});
