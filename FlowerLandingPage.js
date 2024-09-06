import React from 'react';
import { View, Text, Image, Button, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

export default function FlowerlandingPage() {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Blooming Flowers</Text>
        <Text style={styles.subHeaderText}>Fresh and Beautiful Flowers Delivered to Your Doorstep</Text>
      </View>      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subHeaderText: {
    fontSize: 16,
    color: '#555',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 5,
  },
  searchContainer: {
    marginBottom: 10,
  },
  textInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  featuredSection: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  flowerCard: {
    marginRight: 10,
    alignItems: 'center',
  },
  flowerImage: {
    width: 120,
    height: 80,
    borderRadius: 5,
  },
  flowerTitle: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#f56c6c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});