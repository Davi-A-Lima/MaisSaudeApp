import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';
import IMAGES from '../../constants/images';
import * as VectorIcons from '@expo/vector-icons';

export default function SocialScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Juntos</Text>
                <View style={styles.userInfo}>
                    <Image source={IMAGES.avatar} style={styles.avatar} />
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>Novato</Text>
                        <Text>Nív. 1</Text>
                    </View>
                    <View style={styles.divider} />
                    <View>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Amigos</Text>
                        <Text style={{ textAlign: 'center' }}>0</Text>
                    </View>
                </View>
            </View>

            <TouchableOpacity style={styles.createBtn}>
                <Text style={styles.createBtnText}>Criar desafio</Text>
            </TouchableOpacity>

            <View style={styles.challengeCard}>
                <View>
                    <Text style={styles.challengeTitle}>Neve, dezembro</Text>
                    <Text style={styles.challengeSub}>Participem e fiquem em forma juntos.</Text>

                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.partLabel}>Participantes</Text>
                        <Text style={styles.partCount}>1.011.841</Text>
                    </View>

                    <TouchableOpacity style={styles.enterBtn}>
                        <Text style={{ fontWeight: 'bold' }}>Entrar</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.challengeImg, { justifyContent: 'center', alignItems: 'center' }]}>
                    <VectorIcons.MaterialCommunityIcons name="trophy" size={48} color={COLORS.primary} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: COLORS.background, padding: SIZES.padding, paddingTop: 50 },
    title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
    userInfo: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', backgroundColor: 'white', padding: 15, borderRadius: 12 },
    avatar: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#eee' },
    divider: { width: 1, height: 40, backgroundColor: '#ddd' },
    createBtn: { backgroundColor: 'white', padding: 15, borderRadius: 25, alignItems: 'center', marginTop: 30, borderWidth: 1, borderColor: '#eee' },
    createBtnText: { fontWeight: 'bold', fontSize: 16 },
    challengeCard: { backgroundColor: 'white', borderRadius: 20, padding: 20, marginTop: 30, flexDirection: 'row', justifyContent: 'space-between', elevation: 2 },
    challengeTitle: { fontWeight: 'bold', fontSize: 16 },
    challengeSub: { color: COLORS.textSecondary, fontSize: 12, width: 150 },
    partLabel: { fontSize: 12, color: COLORS.textSecondary },
    partCount: { fontWeight: 'bold', fontSize: 20 },
    enterBtn: { marginTop: 15, backgroundColor: '#eee', paddingHorizontal: 20, paddingVertical: 8, borderRadius: 20, alignSelf: 'flex-start' },
    challengeImg: { width: 100, height: 100, resizeMode: 'contain', backgroundColor: '#e0e0e0', borderRadius: 10 }
});
