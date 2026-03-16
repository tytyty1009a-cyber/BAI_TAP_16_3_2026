import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function ScanScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80' }} style={styles.cameraBackground} />
      
      <SafeAreaView style={styles.overlay}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#5D5FEF" />
        </TouchableOpacity>

        {/* Scan Frame Marker (Giả lập khung quét) */}
        <View style={styles.scanFrame}>
           <View style={[styles.corner, styles.topLeft]} />
           <View style={[styles.corner, styles.topRight]} />
           <View style={[styles.corner, styles.bottomLeft]} />
           <View style={[styles.corner, styles.bottomRight]} />
        </View>

        <View style={styles.bottomCard}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=100&q=80' }} style={styles.thumb} />
          <View style={{ flex: 1, marginLeft: 15 }}>
            <Text style={{ fontSize: 12, color: '#888' }}>Lauren's</Text>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Orange Juice</Text>
          </View>
          <TouchableOpacity style={styles.addBtn}>
            <Ionicons name="add" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#EFE7DE' },
  cameraBackground: { position: 'absolute', width: '100%', height: '100%', resizeMode: 'cover', opacity: 0.9 },
  overlay: { flex: 1, justifyContent: 'space-between', padding: 20 },
  backBtn: { width: 45, height: 45, backgroundColor: '#fff', borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  scanFrame: { alignSelf: 'center', width: 250, height: 250, position: 'relative', marginTop: 50 },
  corner: { position: 'absolute', width: 40, height: 40, borderColor: '#fff' },
  topLeft: { top: 0, left: 0, borderTopWidth: 4, borderLeftWidth: 4, borderTopLeftRadius: 20 },
  topRight: { top: 0, right: 0, borderTopWidth: 4, borderRightWidth: 4, borderTopRightRadius: 20 },
  bottomLeft: { bottom: 0, left: 0, borderBottomWidth: 4, borderLeftWidth: 4, borderBottomLeftRadius: 20 },
  bottomRight: { bottom: 0, right: 0, borderBottomWidth: 4, borderRightWidth: 4, borderBottomRightRadius: 20 },
  bottomCard: { flexDirection: 'row', backgroundColor: '#fff', padding: 15, borderRadius: 20, alignItems: 'center', marginBottom: 20 },
  thumb: { width: 50, height: 50, borderRadius: 10 },
  addBtn: { width: 40, height: 40, backgroundColor: '#5D5FEF', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }
});