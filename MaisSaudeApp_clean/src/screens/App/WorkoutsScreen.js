import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';
import IMAGES from '../../constants/images';
import * as VectorIcons from '@expo/vector-icons';
import { fetchWorkouts } from '../../services/firestore';
import { useNavigation } from '@react-navigation/native';

const CategoryCard = ({ title, icon = 'dumbbell', color = COLORS.primary, size = 'small', onPress }) => (
  <TouchableOpacity style={[styles.card, size === 'large' ? styles.cardLarge : styles.cardSmall]} onPress={onPress}>
    <View style={[styles.iconBox, { backgroundColor: color }]}> 
      <VectorIcons.MaterialCommunityIcons name={icon} size={40} color="white" />
    </View>
    <Text style={styles.cardTitle}>{title}</Text>
  </TouchableOpacity>
);

export default function WorkoutsScreen() {
  const [workouts, setWorkouts] = useState([]);
  const nav = useNavigation();

  useEffect(() => {
    let mounted = true;
    fetchWorkouts().then(items => { if (mounted) setWorkouts(items); }).catch(() => {});
    return () => { mounted = false; };
  }, []);

  const renderRecent = ({ item }) => (
    <View style={styles.recentCard}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <VectorIcons.MaterialCommunityIcons name="run" size={28} color={COLORS.primary} />
        <View style={{ marginLeft: 12 }}>
          <Text style={{ fontWeight: 'bold' }}>{item.type || 'Treino'}</Text>
          <Text style={{ color: COLORS.textSecondary }}>{(item.duration ? Math.round(item.duration) + 's' : '')}</Text>
        </View>
      </View>
    </View>
  );

  const categories = [
    { id: 'corrida', title: 'Corrida', icon: 'run', color: '#FF7043', type: 'Corrida' },
    { id: 'caminhada', title: 'Caminhada', icon: 'walk', color: '#29B6F6', type: 'Caminhada' },
    { id: 'forca', title: 'Força', icon: 'dumbbell', color: '#66BB6A', type: 'Força' },
  ];

  const renderCategory = ({ item }) => (
    <CategoryCard title={item.title} icon={item.icon} color={item.color} onPress={() => nav.navigate('WorkoutTracker', { type: item.type })} />
  );

  const ListHeader = () => (
    <View>
      <Text style={styles.header}>Boa forma</Text>
      <Text style={styles.sectionTitle}>Iniciar treino</Text>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={c => c.id}
        renderItem={renderCategory}
        contentContainerStyle={styles.horizontalScroll}
      />
      <Text style={styles.sectionTitle}>Atividades recentes</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={workouts}
        keyExtractor={w => w.id}
        renderItem={renderRecent}
        ListHeaderComponent={ListHeader}
        contentContainerStyle={styles.scroll}
        ListEmptyComponent={<Text style={{ textAlign: 'center', color: '#777', marginTop: 20 }}>Nenhum treino registrado.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, paddingTop: 50 },
  header: { fontSize: 28, fontWeight: 'bold', paddingHorizontal: SIZES.padding, marginBottom: 10 },
  scroll: { paddingBottom: 100 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginLeft: SIZES.padding, marginTop: 20, marginBottom: 10 },
  horizontalScroll: { paddingLeft: SIZES.padding },
  card: { marginRight: 15, borderRadius: 12 },
  cardSmall: { width: 120, height: 120 },
  cardLarge: { width: 200, height: 120 },
  cardImage: { width: '100%', height: '100%', justifyContent: 'flex-end', padding: 10, backgroundColor: '#ccc' },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: 12 },
  iconBox: { width: '100%', height: 84, borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginBottom: 8 },
  cardTitle: { color: COLORS.textPrimary, fontWeight: 'bold', fontSize: 14, textAlign: 'center' }
});
