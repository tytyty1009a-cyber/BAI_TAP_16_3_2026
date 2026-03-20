import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SplashScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity 
        style={styles.content} 
        activeOpacity={0.9} 
        onPress={() => navigation.replace('Main')} // Chuyển sang Home Tab
      >
        <View style={styles.imageContainer}>
          <Image 
            source={require('../../assets/pc7.jpg')} 
            style={styles.image} 
          />
        </View>
        
        <Text style={styles.title}>Scan, Pay & Enjoy!</Text>
        <Text style={styles.subtitle}>
          Scan products you want to buy at your favorite store and pay by your phone & enjoy happy, friendly Shopping!
        </Text>

        <View style={styles.dots}>
          <View style={[styles.dot, { backgroundColor: '#FFD3C4' }]} />
          <View style={[styles.dot, { backgroundColor: '#FFD3C4' }]} />
          <View style={[styles.dot, { backgroundColor: '#5D5FEF' }]} />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF5F3' },
  content: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30 },
  // Giữ nguyên style vòng tròn
  imageContainer: { width: 300, height: 300, backgroundColor: '#FFEBE4', borderRadius: 150, alignItems: 'center', justifyContent: 'center', marginBottom: 40, overflow: 'hidden' }, // Thêm overflow để bo tròn ảnh nếu lớn hơn
  // Điều chỉnh style ảnh để lấp đầy vòng tròn và tự thu nhỏ
  image: { width: '100%', height: '100%', resizeMode: 'contain' }, 
  title: { fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 15 },
  subtitle: { fontSize: 14, color: '#888', textAlign: 'center', lineHeight: 22, marginBottom: 40 },
  dots: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  dot: { width: 8, height: 8, borderRadius: 4, marginHorizontal: 5 }
});