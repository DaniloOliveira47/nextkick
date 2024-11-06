import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground } from 'react-native';

function Cadastro() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert("Error", "Please enter both email and password.");
    } else {
      Alert.alert("Success", `Logged in as ${email}`);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/images/campo.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
       
        
        <View style={styles.form}>
        <Text style={styles.title}>Bem vindo de volta!, Continue com sua</Text>
        <Text style={styles.subtitle}>Sign In</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Started')}>
            <Text style={styles.forgotPassword}>Você está procurando um clube?</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Seu clube ainda não está cadastrado?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
    color: 'white'
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '600',
    color: 'white',
    marginBottom: 30,
    textAlign: 'center',
  },
  form: {
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', 
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    elevation: 3, 
    shadowColor: '#00',
    shadowOpacity:0.2,
    shadowRadius: 1.41
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderRadius: 15,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  loginButton: {
    width: '100%',
    padding: 12,
    borderRadius: 15,
    backgroundColor: 'green',
    alignItems: 'center',
    marginTop: 15,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: 'white',
    marginTop: 15,
    textDecorationLine: 'underline',
    fontSize: 14,
  },
});

export default Cadastro;