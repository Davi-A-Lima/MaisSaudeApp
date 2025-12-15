import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';
import * as VectorIcons from '@expo/vector-icons';
import { useAuth } from '@/contexts/AuthContext';
import { createUserProfile } from '@/services/firestore';

export default function RegisterScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { signUp } = useAuth();

    const handleRegister = async () => {
        try {
            const userCred = await signUp(email, password);
            const uid = userCred.user.uid;
            await createUserProfile(uid, { email, name: '', createdAt: new Date() });
            navigation.replace('MainApp');
        } catch (e) {
            setError('Erro ao cadastrar. Verifique os dados e tente novamente.');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <VectorIcons.Ionicons name="arrow-back" size={28} color="black" />
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.welcomeBox}>
                    <Text style={styles.welcomeTitle}>Olá, seja Bem-vindo!</Text>
                    <Text style={styles.welcomeSub}>Para continuar seu registro insira seus dados abaixo:</Text>
                </View>

                <View style={styles.form}>
                    <TextInput placeholder="Nome completo:" style={styles.input} />
                    <TextInput placeholder="Data nascimento:" style={styles.input} />
                    <TextInput placeholder="Número de telefone:" keyboardType="phone-pad" style={styles.input} />
                    <TextInput placeholder="Cpf:" keyboardType="numeric" style={styles.input} />
                    <TextInput placeholder="Email:" keyboardType="email-address" style={styles.input} value={email} onChangeText={setEmail} />
                    <TextInput placeholder="Senha:" secureTextEntry style={styles.input} value={password} onChangeText={setPassword} />

                    {error ? <Text style={{color: 'red', marginBottom: 8}}>{error}</Text> : null}

                    <TouchableOpacity style={styles.button} onPress={handleRegister}>
                        <Text style={styles.buttonText}>Cadastre-se</Text>
