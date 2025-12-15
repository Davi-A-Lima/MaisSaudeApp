import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../constants/theme';
import * as ImagePicker from 'expo-image-picker';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { getUserProfile, createUserProfile, ensureUserProfileExists } from '@/services/firestore';
import { uploadUri } from '@/services/storage';

export default function ProfileScreen() {
  const { user } = useAuth();
  const navigation = useNavigation();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      if (!user) return;
      const p = await getUserProfile(user.uid);
      if (p) {
        if (mounted) setProfile(p);
        return;
      }
      // seed a lightweight profile for quick testing
      const defaults = { name: user.email ? user.email.split('@')[0] : 'Usuário' };
      const seeded = await ensureUserProfileExists(user.uid, defaults);
      if (mounted) setProfile(seeded);
    })();
    return () => (mounted = false);
  }, [user]);

  const pickAvatar = async () => {
    const res = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images, quality: 0.8 });
    if (!res.cancelled) {
      const url = await uploadUri(`avatars/${user.uid}/${Date.now()}.jpg`, res.uri);
      await createUserProfile(user.uid, { avatar: url });
      setProfile(prev => ({ ...prev, avatar: url }));
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
      <Text style={styles.header}>Meu perfil</Text>

      <View style={styles.profileCard}>
        <TouchableOpacity onPress={pickAvatar}>
          {profile?.avatar ? (
            <Image source={{ uri: profile.avatar }} style={styles.avatar} />
          ) : (
            <View style={[styles.avatar, { justifyContent: 'center', alignItems: 'center' }]}>
              <Ionicons name="person" size={40} color="#777" />
            </View>
          )}
        </TouchableOpacity>
        <Text style={styles.name}>{profile?.name || 'Seu nome'}</Text>
        <TouchableOpacity style={styles.editBtn} onPress={() => navigation.navigate('EditProfile')}>
          <Text style={{ fontSize: 12 }}>Editar</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuTitle}>Conquistas</Text>
        <Text style={{ color: COLORS.textSecondary }}>Nenhuma conquista</Text>
      </TouchableOpacity>

      <View style={styles.summaryCard}>
        <Text style={styles.summaryTitle}>Resumo semanal</Text>
        <Text style={styles.summaryDate}>17 - 23 de dezembro</Text>

        <View style={styles.row}>
          <Text>Tempo ativo médio</Text>
          <Text style={{ fontWeight: 'bold' }}>48min</Text>