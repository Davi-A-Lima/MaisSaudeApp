import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';
import IMAGES from '../../constants/images';
import * as VectorIcons from '@expo/vector-icons';

const InfoCard = ({ icon, title, value, meta, color }) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
    <VectorIcons.MaterialCommunityIcons name={icon} size={30} color={COLORS.textPrimary} />
      <View>
        <Text style={styles.cardValue}>{value}</Text>
        <Text style={styles.cardMeta}>{meta}</Text>
      </View>
    </View>
    <View style={{alignItems: 'flex-end'}}>
      <VectorIcons.MaterialCommunityIcons name={icon === "water" ? "water" : "chart-donut"} size={40} color={color || COLORS.textPrimary} />
    </View>
  </View>
);

const ActivityButton = ({ label, icon, onPress }) => (
    <TouchableOpacity style={styles.activityBtn} onPress={onPress}>
        <View style={styles.iconCircle}>
        <VectorIcons.MaterialCommunityIcons name={icon} size={24} color={COLORS.textPrimary} />
      </View>
        <Text style={styles.activityText}>{label}</Text>
    </TouchableOpacity>
)

import { useEffect, useState } from 'react';
import { getUserProfile } from '@/services/firestore';

export default function HomeScreen({ navigation }) {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    let mounted = true;
    (async () => {
      // try to get current user from auth
      try {
        const u = await getUserProfile((await import('@/firebase/config')).auth.currentUser?.uid);
        if (mounted) setProfile(u);
      } catch (e) {
        // ignore
      }
    })();
    return () => (mounted = false);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{profile?.name ? profile.name : '+Saúde'}</Text>
      <TouchableOpacity onPress={() => navigation.replace('Login')}>
        <VectorIcons.Ionicons name="log-out-outline" size={24} color="black" />
      </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{paddingBottom: 100, paddingHorizontal: SIZES.padding}}>
        <View style={styles.profileSummary}>
           <Image source={IMAGES.avatar} style={styles.avatar} />
          <View style={{marginLeft: 15, flex: 1}}>
             <Text style={{fontWeight: 'bold', fontSize: 16}}>Bob Esponja</Text>
             <Text style={{color: COLORS.textSecondary}}>25 anos</Text>
             <Text style={{color: COLORS.danger, fontWeight: 'bold', fontSize: 12}}>Data Nascimento: 15/01/2000</Text>
          </View>
           <VectorIcons.MaterialCommunityIcons name="heart-pulse" size={50} color="#4DB6AC"/>
        </View>

        <View style={styles.activitiesRow}>
            <ActivityButton label="Caminhada" icon="walk" onPress={() => navigation.navigate('ActivityTracker')} />
            <ActivityButton label="Corrida" icon="run" onPress={() => {}} />
            <ActivityButton label="Ciclismo" icon="bike" onPress={() => {}} />
            <ActivityButton label="Mais" icon="menu" onPress={() => {}} />
        </View>

        <View style={styles.statsContainer}>
            <InfoCard icon="food-apple" value="1.200 kcal" meta="Meta 3.220" />
            <InfoCard icon="bed-clock" value="6h 30m" meta="Meta 8 horas" />
            <InfoCard icon="water" value="1.250 mL" meta="Meta 2000mL" color="#2196F3"/>
            <InfoCard icon="shoe-print" value="4.502 passos" meta="Meta 10.000" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, paddingTop: 50 },
  header: { paddingHorizontal: SIZES.padding, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  headerTitle: { fontSize: 28, fontWeight: 'bold', color: COLORS.primary },
  profileSummary: { backgroundColor: COLORS.white, padding: 15, borderRadius: SIZES.radius, flexDirection: 'row', alignItems: 'center', elevation: 2, marginBottom: 25 },
  avatar: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#eee' },
  activitiesRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 25 },
  activityBtn: { alignItems: 'center', flex: 1 },
  iconCircle: { width: 50, height: 50, backgroundColor: COLO