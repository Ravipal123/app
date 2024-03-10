import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import React, { Component } from 'react'

const RestaurantCard = ({ title, location, category, imageUri }) => {
    return (
      <View style={styles.cardContainer}>
        <ImageBackground
            source={{ uri: imageUri }}
            style={styles.backgroundImage}
            resizeMode="cover"
        >
        <View style={styles.cardBottom}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardText}>{location}</Text>
            <Text style={styles.cardText}>{category}</Text>
        </View>
        </ImageBackground>
      </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        width: 170,
        height: 200,
        borderRadius: 10,
        overflow: 'hidden', 
        elevation: 3, 
        margin: 4,
        shadowColor: 'rgba(0, 0, 2, 2)',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 7,
        shadowRadius: 3,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'flex-end', 
    },
    cardBottom : {
        margin:8,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    cardText: {
        fontSize:14,
        color: 'white',
    },
});
  
export default RestaurantCard