import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello 👋</Text>
            <Text style={styles.name}>Christie Doe</Text>
          </View>
          <Image source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }} style={styles.avatar} />
        </View>

        <Text style={styles.sectionTitle}>Your Insights</Text>

        {/* Grid Insights */}
        <View style={styles.grid}>
          <TouchableOpacity style={[styles.card, { backgroundColor: '#F4F3FF' }]} onPress={() => navigation.navigate('Scan')}>
            <View style={[styles.iconBox, { backgroundColor: '#E0DEFF' }]}>
              <Ionicons name="scan" size={24} color="#5D5FEF" />
            </View>
            <Text style={styles.cardTitle}>Scan new</Text>
            <Text style={styles.cardSub}>Scanned 483</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.card, { backgroundColor: '#FFF4ED' }]}>
            <View style={[styles.iconBox, { backgroundColor: '#FFE2CE' }]}>
              <Ionicons name="warning" size={24} color="#F48B60" />
            </View>
            <Text style={styles.cardTitle}>Counterfeits</Text>
            <Text style={styles.cardSub}>Counterfeited 32</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.card, { backgroundColor: '#E8FAFA' }]}>
            <View style={[styles.iconBox, { backgroundColor: '#C8F3F4' }]}>
              <Ionicons name="checkmark-circle" size={24} color="#2DD38D" />
            </View>
            <Text style={styles.cardTitle}>Success</Text>
            <Text style={styles.cardSub}>Checkouts 8</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.card, { backgroundColor: '#fff', borderWidth: 2, borderColor: '#5D5FEF' }]}>
            <View style={[styles.iconBox, { backgroundColor: '#E6F4FF' }]}>
              <Ionicons name="calendar" size={24} color="#40A9FF" />
            </View>
            <Text style={styles.cardTitle}>Directory</Text>
            <Text style={styles.cardSub}>History 26</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.exploreHeader}>
          <Text style={styles.sectionTitle}>Explore More</Text>
          <Ionicons name="arrow-forward" size={24} color="#333" />
        </View>
        
        {/* Dummy Explore Images */}
        <View style={{ flexDirection: 'row', gap: 15 }}>
            <View style={{ width: 120, height: 120, backgroundColor: '#ddd', borderRadius: 15 }} />
            <View style={{ width: 120, height: 120, backgroundColor: '#ccc', borderRadius: 15 }} />
            <View style={{ width: 120, height: 120, backgroundColor: '#bbb', borderRadius: 15 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA', paddingHorizontal: 20, paddingTop: 10 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 },
  greeting: { fontSize: 22, fontWeight: 'bold', color: '#333' },
  name: { fontSize: 14, color: '#888', marginTop: 4 },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 15, color: '#333' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 15, marginBottom: 30 },
  card: { width: '47%', padding: 20, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  iconBox: { width: 50, height: 50, borderRadius: 15, alignItems: 'center', justifyContent: 'center', marginBottom: 15 },
  cardTitle: { fontSize: 14, fontWeight: 'bold', color: '#333' },
  cardSub: { fontSize: 12, color: '#888', marginTop: 5 },
  exploreHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 }
});