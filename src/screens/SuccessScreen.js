import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function SuccessScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.navigate('Main')}>
        <Ionicons name="chevron-back" size={24} color="#5D5FEF" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Image 
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/9133/9133069.png' }} 
          style={styles.image} 
        />
        
        <Text style={styles.title}>Payment Success, Yayy!</Text>
        <Text style={styles.subtitle}>
          We will send order details and invoice in your contact no. and registered email.
        </Text>

        <TouchableOpacity style={styles.checkBtn}>
          <Text style={styles.checkBtnText}>Check Details </Text>
          <Ionicons name="arrow-forward" size={16} color="#5D5FEF" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={styles.downloadBtn}
        onPress={() => navigation.navigate('Main')} // Trở về trang chủ
      >
        <Text style={styles.downloadBtnText}>Download Invoice</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA', padding: 20, justifyContent: 'space-between' },
  backBtn: { width: 45, height: 45, backgroundColor: '#fff', borderRadius: 12, alignItems: 'center', justifyContent: 'center', elevation: 1, marginTop: 10 },
  content: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 10 },
  image: { width: 200, height: 200, resizeMode: 'contain', marginBottom: 30 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#333', marginBottom: 15 },
  subtitle: { fontSize: 14, color: '#888', textAlign: 'center', lineHeight: 22, marginBottom: 30 },
  checkBtn: { flexDirection: 'row', alignItems: 'center' },
  checkBtnText: { color: '#5D5FEF', fontWeight: 'bold', fontSize: 14 },
  downloadBtn: { backgroundColor: '#5D5FEF', paddingVertical: 18, borderRadius: 15, alignItems: 'center', marginBottom: 20 },
  downloadBtnText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});