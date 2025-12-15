import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';
import IMAGES from '../../assets/images';
import * as VectorIcons from '@expo/vector-icons';

const CategoryCard = ({ title, icon = 'dumbbell', color = COLORS.primary, size = 'small' }) => (
  <TouchableOpacity style={[styles.card, size === 'large' ? styles.cardLarge : styles.cardSmall]}>
    <View style={[styles.iconBox, {backgroundColor: color}]}> 
      <VectorIcons.MaterialCommunityIcons name={icon} size={40} color="white" />
    </View>
    <Text style={styles.cardTitle}>{title}</Text>
  </TouchableOpacity>
);

export default function WorkoutsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Boa forma</Text>
      <ScrollView contentContainerStyle={styles.scroll}>
        
        <Text style={styles.sectionTitle}>Mente vazia</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
      <CategoryCard title="Meditação" icon="spa" color="#8E24AA" />
      <CategoryCard title="Histórias" icon="book-open-variant" color="#3949AB" />
      <CategoryCard title="Relax" icon="beach" color="#29B6F6" />
    </ScrollView>

        <Text style={styles.sectionTitle}>Perda de peso</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
      <CategoryCard title="Aeróbico" icon="run" color="#FF7043" />
      <CategoryCard title="Kickboxing" icon="boxing-glove" color="#FF5252" />
      <CategoryCard title="Postura" icon="yoga" color="#66BB6A" />
    </ScrollView>

        <Text style={styles.sectionTitle}>Corrida</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
      <CategoryCard title="5km" icon="walk" color="#FFA726" />
      <CategoryCard title="10km" icon="run" color="#FB8C00" />
    </ScrollView>

      </ScrollView>
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
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';
import IMAGES from '../../constants/images';
import * as VectorIcons from '@expo/vector-icons';

const CategoryCard = ({ title, icon = 'dumbbell', color = COLORS.primary, size = 'small' }) => (
  <TouchableOpacity style={[styles.card, size === 'large' ? styles.cardLarge : styles.cardSmall]}>
    <View style={[styles.iconBox, {backgroundColor: color}]}> 
      <VectorIcons.MaterialCommunityIcons name={icon} size={40} color="white" />
    </View>
    <Text style={styles.cardTitle}>{title}</Text>
  </TouchableOpacity>
);

export default function WorkoutsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Boa forma</Text>
      <ScrollView contentContainerStyle={styles.scroll}>
        
        <Text style={styles.sectionTitle}>Mente vazia</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
      <CategoryCard title="Meditação" icon="spa" color="#8E24AA" />
      <CategoryCard title="Histórias" icon="book-open-variant" color="#3949AB" />
      <CategoryCard title="Relax" icon="beach" color="#29B6F6" />
    </ScrollView>

        <Text style={styles.sectionTitle}>Perda de peso</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
      <CategoryCard title="Aeróbico" icon="run" color="#FF7043" />
      <CategoryCard title="Kickboxing" icon="boxing-glove" color="#FF5252" />
      <CategoryCard title="Postura" icon="yoga" color="#66BB6A" />
    </ScrollView>

        <Text style={styles.sectionTitle}>Corrida</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
      <CategoryCard title="5km" icon="walk" color="#FFA726" />
      <CategoryCard title="10km" icon="run" color="#FB8C00" />
    </ScrollView>

      </ScrollView>
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