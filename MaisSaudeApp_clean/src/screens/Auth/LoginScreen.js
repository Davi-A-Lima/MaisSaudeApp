import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Image } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';
import IMAGES from '../../constants/images';
import * as VectorIcons from '@expo/vector-icons';
import { useAuth } from '@/contexts/AuthContext';

export default function LoginScreen({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signIn } = useAuth();

  const handleLogin = async () => {
    try {
      await signIn(email, password);
      navigation.replace('MainApp');
    } catch (e) {
      setError('Falha ao autenticar. Verifique email/senha.');
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
            <Image source={IMAGES.doctor} style={styles.doctorImage} />
            <Text style={styles.title}>+Saúde</Text>
            <View style={styles.badge}><Text style={styles.badgeText}>SAÚDE NÃO TEM PREÇO</Text></View>
        </View>

        <View style={styles.form}>
          <TextInput placeholder="Email" style={styles.input} placeholderTextColor={COLORS.textSecondary} value={email} onChangeText={setEmail} />
          
          <View style={styles.passwordContainer}>
            <TextInput placeholder="Senha" secureTextEntry={!showPassword} style={styles.passwordInput} placeholderTextColor={COLORS.textSecondary} value={password} onChangeText={setPassword} />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <VectorIcons.Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="gray" />
            </TouchableOpacity>
          </View>

          {error ? <Text style={{color: 'red', marginBottom: 8}}>{error}</Text> : null}

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <Text style={styles.orText}>OU</Text>

          <TouchableOpacity style={styles.facebookButton}>
            <VectorIcons.Ionicons name="logo-facebook" size={20} color="white" style={{marginRight: 10}} />
            <Text style={styles.facebookText}>Entrar com o Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.linkText}>Não tem uma conta? <Text style={{color: COLORS.primary, fontWeight:'bold'}}>Cadastre-se</Text></Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={[styles.linkText, {marginTop: 8}]}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  scrollContainer: { flexGrow: 1, justifyContent: 'center', padding: SIZES.padding },
  header: { alignItems: 'center', marginBottom: 30 },
  doctorImage: { width: 120, height: 120, borderRadius: 60, marginBottom: 15, backgroundColor: '#eee' },
  title: { fontSize: 40, fontWeight: 'bold', color: COLORS.primary },
  badge: { borderWidth: 1, borderColor: COLORS.textPrimary, paddingHorizontal: 10, paddingVertical: 5, marginTop: 10, borderRadius: 5 },
  badgeText: { fontWeight: 'bold', fontSize: 12 },
  form: { width: '100%' },
  input: { backgroundColor: COLORS.inputBg, padding: 15, borderRadius: SIZES.radius, marginBottom: 15, fontSize: 16 },
  passwordContainer: { flexDirection: 'row', alignItems: 'center', bac