import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function CartScreen({ navigation }) {
  const items = [
    { 
      id: 1, 
      brand: "Lauren's", 
      name: "Orange Juice", 
      price: "149", 
      qty: 2, 
      img: require('../../assets/pc1.jpg') // Đã đổi sang ảnh local
    },
    { 
      id: 2, 
      brand: "Baskin's", 
      name: "Skimmed Milk", 
      price: "129", 
      qty: 2, 
      img: require('../../assets/pc2.jpg') // Đã đổi sang ảnh local
    },
    { 
      id: 3, 
      brand: "Marley's", 
      name: "Aloe Vera Lotion", 
      price: "1249", 
      qty: 3, 
      img: require('../../assets/pc3.jpg') // Đã đổi sang ảnh local
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#F48B60" />
        </TouchableOpacity>
      </View>
      
      <Text style={styles.pageTitle}>Your Cart 🛍️</Text>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 150 }}>
        {items.map(item => (
          <View key={item.id} style={styles.cartItem}>
            {/* Cập nhật lại thẻ Image: Bỏ { uri: ... } đi vì đây là ảnh local */}
            <Image source={item.img} style={styles.itemImg} />
            
            <View style={{ flex: 1, marginLeft: 15 }}>
              <Text style={styles.itemBrand}>{item.brand}</Text>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>₹ {item.price}</Text>
            </View>
            <View style={styles.qtyBox}>
              <TouchableOpacity><Text style={styles.qtyBtn}>-</Text></TouchableOpacity>
              <Text style={styles.qtyText}>{item.qty}</Text>
              <TouchableOpacity><Text style={styles.qtyBtn}>+</Text></TouchableOpacity>
            </View>
          </View>
        ))}

        <View style={styles.totalRow}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333' }}>Total</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#F48B60' }}>₹ 1,527</Text>
        </View>

        <TouchableOpacity 
          style={styles.checkoutBtn} 
          onPress={() => navigation.navigate('Payment')}
        >
          <Text style={styles.checkoutBtnText}>Proceed to checkout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA', paddingHorizontal: 20, paddingTop: 10 },
  header: { marginBottom: 20 },
  backBtn: { width: 45, height: 45, backgroundColor: '#fff', borderRadius: 12, alignItems: 'center', justifyContent: 'center', elevation: 2 },
  pageTitle: { fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 25 },
  cartItem: { flexDirection: 'row', backgroundColor: '#fff', padding: 15, borderRadius: 20, alignItems: 'center', marginBottom: 15, elevation: 1 },
  itemImg: { width: 60, height: 60, borderRadius: 12 },
  itemBrand: { fontSize: 12, color: '#888' },
  itemName: { fontSize: 14, fontWeight: 'bold', color: '#333', marginVertical: 4 },
  itemPrice: { fontSize: 14, fontWeight: 'bold', color: '#F48B60' },
  qtyBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8F9FA', borderRadius: 8, paddingHorizontal: 10, paddingVertical: 5 },
  qtyBtn: { fontSize: 18, color: '#F48B60', paddingHorizontal: 8 },
  qtyText: { fontSize: 14, fontWeight: 'bold', marginHorizontal: 5 },
  totalRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, marginBottom: 20 },
  checkoutBtn: { backgroundColor: '#F48B60', paddingVertical: 18, borderRadius: 15, alignItems: 'center' },
  checkoutBtnText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});