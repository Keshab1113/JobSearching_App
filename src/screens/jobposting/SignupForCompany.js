import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { BG_COLOR, TEXT_COLOR } from '../../utils/Colors';
import { moderateVerticalScale, scale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

const SignupForCompany = () => {
  // State variables to handle input fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSignup = () => {
    // Handle the signup logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Contact No:', contactNo);
    console.log('Company Name:', companyName);
    console.log('Password:', password);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../../assets/logo.png')} style={styles.logo} />

      <Text style={styles.heading}>Create Account</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputHeading}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="#888"
          value={name}
          onChangeText={setName}
        />

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

        <Text style={styles.inputHeading}>Contact No</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your contact number"
          placeholderTextColor="#888"
          value={contactNo}
          onChangeText={setContactNo}
          keyboardType="numeric"
        />

        <Text style={styles.inputHeading}>Company Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your company name"
          placeholderTextColor="#888"
          value={companyName}
          onChangeText={setCompanyName}
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

        <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.alreadyAccountButton} onPress={() => navigation.navigate('LoginForCompany')}>
          <Text style={styles.alreadyAccountButtonText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignupForCompany;

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
    marginVertical: moderateVerticalScale(20),
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
  signupButton: {
    backgroundColor: TEXT_COLOR,
    paddingVertical: moderateVerticalScale(12),
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  signupButtonText: {
    color: BG_COLOR,
    fontSize: scale(16),
    fontWeight: '600',
  },
  alreadyAccountButton: {
    marginTop: moderateVerticalScale(20),
    alignSelf: 'flex-start',
  },
  alreadyAccountButtonText: {
    color: TEXT_COLOR,
    fontSize: scale(16),
    fontWeight: '600',
  },
});
