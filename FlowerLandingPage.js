import React from 'react';
import { View, Text, Image, Button, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

export default function FlowerlandingPage() {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.imageContainer}>
        <Image source={require('./assets/images/spring-blooming.avif')} style={styles.image} />
      {/* <Image source={{ uri: 'https://images.unsplash.com/photo-1463043254199-7a3efd782ad1?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.image} /> */}
      </View>

      <View style={styles.searchContainer}>
        <TextInput
        style={styles.textInput}
        placeholder='Search for flowers...'
        />
      </View>


      <View style={styles.header}>
        <Text style={styles.headerText}>Bllooming Flowers</Text>
        <Text style={styles.subHeaderText}>FfSresh and Beautiful Flowers Delivered to Your Doorstep</Text>
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
      fontSize: 38,
      fontWeight: 'bold',
    },
    subHeaderText: {
      fontSize: 27,
      color: '#555',
      fontStyle:'italic',
      color:'#f56c6c'
    },
    imageContainer: {
      alignItems: 'center',
      marginBottom: 10,
    },
    image: {
      width: '100%',
      height: 250,
      borderRadius: 5,
    },
    searchContainer: {
      marginBottom: 10,
    },
    textInput: {
      height: 90,
      borderColor: '#ddd',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      fontSize:25
    },
    featuredSection: {
      marginBottom: 10,
  
    },
    sectionTitle: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    flowerCard: {
      marginRight: 10,
      alignItems: 'center',
    },
    flowerImage: {
      width: 270,
      height: 210,
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
      fontSize:'30px'
    },
  });
