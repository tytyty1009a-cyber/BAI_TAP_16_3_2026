import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function PaymentScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('credit');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#2DD38D" />
        </TouchableOpacity>

        <View style={styles.headerRow}>
          <Text style={styles.pageTitle}>Checkout 💳</Text>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={styles.totalAmount}>₹ 1,527</Text>
            <Text style={{ fontSize: 10, color: '#888' }}>Including GST (18%)</Text>
          </View>
        </View>

        {/* Custom Tab Switcher */}
        <View style={styles.tabContainer}>
          <TouchableOpacity 
            style={[styles.tabBtn, activeTab === 'credit' && styles.tabActive]}
            onPress={() => setActiveTab('credit')}
          >
            <Ionicons name="card" size={20} color={activeTab === 'credit' ? '#fff' : '#333'} />
            <Text style={[styles.tabText, activeTab === 'credit' && { color: '#fff' }]}> Credit card</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tabBtn, activeTab === 'apple' && styles.tabActive]}
            onPress={() => setActiveTab('apple')}
          >
            <Ionicons name="logo-apple" size={20} color={activeTab === 'apple' ? '#fff' : '#333'} />
            <Text style={[styles.tabText, activeTab === 'apple' && { color: '#fff' }]}> Apple Pay</Text>
          </TouchableOpacity>
        </View>

        {/* Forms */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Card number</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} value="5281  4141  0151  8472" />
            <Ionicons name="scan-outline" size={24} color="#888" />
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Cardholder name</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} value="Christie Doe" />
          </View>
        </View>

        <View style={{ flexDirection: 'row', gap: 15 }}>
          <View style={[styles.formGroup, { flex: 1 }]}>
            <Text style={styles.label}>Expiry date</Text>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} value="06  /  2024" />
            </View>
          </View>
          <View style={[styles.formGroup, { flex: 1 }]}>
            <Text style={styles.label}>CVV / CVC</Text>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} value="915" secureTextEntry />
            </View>
          </View>
        </View>

        <Text style={styles.noteText}>We will send you an order details to your email after the successful payment.</Text>

        <TouchableOpacity 
          style={styles.payBtn} 
          onPress={() => navigation.navigate('Success')}
        >
          <Ionicons name="lock-closed" size={18} color="#fff" />
          <Text style={styles.payBtnText}> Pay for the order</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA', paddingHorizontal: 20, paddingTop: 10 },
  backBtn: { width: 45, height: 45, backgroundColor: '#fff', borderRadius: 12, alignItems: 'center', justifyContent: 'center', elevation: 1, marginBottom: 20 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 },
  pageTitle: { fontSize: 22, fontWeight: 'bold', color: '#333' },
  totalAmount: { fontSize: 20, fontWeight: 'bold', color: '#2DD38D' },
  tabContainer: { flexDirection: 'row', backgroundColor: '#fff', borderRadius: 15, padding: 5, marginBottom: 30, elevation: 1 },
  tabBtn: { flex: 1, flexDirection: 'row', paddingVertical: 12, alignItems: 'center', justifyContent: 'center', borderRadius: 12 },
  tabActive: { backgroundColor: '#2DD38D' },
  tabText: { fontWeight: 'bold', color: '#333' },
  formGroup: { marginBottom: 20 },
  label: { fontSize: 12, color: '#333', fontWeight: 'bold', marginBottom: 8 },
  inputContainer: { flexDirection: 'row', backgroundColor: '#F4F5F7', borderRadius: 12, paddingHorizontal: 15, alignItems: 'center', height: 55 },
  input: { flex: 1, color: '#555', fontSize: 14, fontWeight: '600' },
  noteText: { fontSize: 12, color: '#888', textAlign: 'center', marginVertical: 20, paddingHorizontal: 10, lineHeight: 18 },
  payBtn: { backgroundColor: '#2DD38D', flexDirection: 'row', paddingVertical: 18, borderRadius: 15, alignItems: 'center', justifyContent: 'center', marginBottom: 30 },
  payBtnText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});