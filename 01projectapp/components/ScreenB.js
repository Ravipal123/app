import { Text, View, StyleSheet, ImageBackground, ScrollView } from 'react-native'
import React, { Component } from 'react'
import RestaurantCard from './RestaurantCard';

const ScreenB = () => {
    return (
        <View style={styles.screenContainer}>
            
            <View style={styles.header} >
                <Text style={styles.title}>Satisfy your Cravings</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={true}>
            <View style={styles.rowStyle}> 
                <RestaurantCard  
                    title="Coffee"
                    location="Haber Field"
                    category="Indian | Drink"
                    imageUri="https://images.pexels.com/photos/20523374/pexels-photo-20523374/free-photo-of-ramadan-mubarak.jpeg?auto=compress&cs=tinysrgb&w=400"
                />
                <RestaurantCard  
                    title="Coffee"
                    location="Haber Field"
                    category="Indian | Drink"
                    imageUri="https://images.pexels.com/photos/20523374/pexels-photo-20523374/free-photo-of-ramadan-mubarak.jpeg?auto=compress&cs=tinysrgb&w=400"
                />
            </View>
            <View style={styles.rowStyle}> 
                <RestaurantCard  
                    title="Coffee"
                    location="Haber Field"
                    category="Indian | Drink"
                    imageUri="https://images.pexels.com/photos/20523374/pexels-photo-20523374/free-photo-of-ramadan-mubarak.jpeg?auto=compress&cs=tinysrgb&w=400"
                />
                <RestaurantCard  
                    title="Coffee"
                    location="Haber Field"
                    category="Indian | Drink"
                    imageUri="https://images.pexels.com/photos/20523374/pexels-photo-20523374/free-photo-of-ramadan-mubarak.jpeg?auto=compress&cs=tinysrgb&w=400"
                />
            </View>
            <View style={styles.rowStyle}> 
                <RestaurantCard  
                    title="Coffee"
                    location="Haber Field"
                    category="Indian | Drink"
                    imageUri="https://images.pexels.com/photos/20523374/pexels-photo-20523374/free-photo-of-ramadan-mubarak.jpeg?auto=compress&cs=tinysrgb&w=400"
                />
                <RestaurantCard  
                    title="Coffee"
                    location="Haber Field"
                    category="Indian | Drink"
                    imageUri="https://images.pexels.com/photos/20523374/pexels-photo-20523374/free-photo-of-ramadan-mubarak.jpeg?auto=compress&cs=tinysrgb&w=400"
                />
            </View>
            <View style={styles.rowStyle}> 
                <RestaurantCard  
                    title="Coffee"
                    location="Haber Field"
                    category="Indian | Drink"
                    imageUri="https://images.pexels.com/photos/20523374/pexels-photo-20523374/free-photo-of-ramadan-mubarak.jpeg?auto=compress&cs=tinysrgb&w=400"
                />
                <RestaurantCard  
                    title="Coffee"
                    location="Haber Field"
                    category="Indian | Drink"
                    imageUri="https://images.pexels.com/photos/20523374/pexels-photo-20523374/free-photo-of-ramadan-mubarak.jpeg?auto=compress&cs=tinysrgb&w=400"
                />
            </View>
            <View style={styles.rowStyle}> 
                <RestaurantCard  
                    title="Coffee"
                    location="Haber Field"
                    category="Indian | Drink"
                    imageUri="https://images.pexels.com/photos/20523374/pexels-photo-20523374/free-photo-of-ramadan-mubarak.jpeg?auto=compress&cs=tinysrgb&w=400"
                />
                <RestaurantCard  
                    title="Coffee"
                    location="Haber Field"
                    category="Indian | Drink"
                    imageUri="https://images.pexels.com/photos/20523374/pexels-photo-20523374/free-photo-of-ramadan-mubarak.jpeg?auto=compress&cs=tinysrgb&w=400"
                />
            </View>
            <View style={styles.rowStyle}> 
                <RestaurantCard  
                    title="Coffee"
                    location="Haber Field"
                    category="Indian | Drink"
                    imageUri="https://images.pexels.com/photos/20523374/pexels-photo-20523374/free-photo-of-ramadan-mubarak.jpeg?auto=compress&cs=tinysrgb&w=400"
                />
                <RestaurantCard  
                    title="Coffee"
                    location="Haber Field"
                    category="Indian | Drink"
                    imageUri="https://images.pexels.com/photos/20523374/pexels-photo-20523374/free-photo-of-ramadan-mubarak.jpeg?auto=compress&cs=tinysrgb&w=400"
                />
            </View>
            <View style={styles.rowStyle}> 
                <RestaurantCard  
                    title="Coffee"
                    location="Haber Field"
                    category="Indian | Drink"
                    imageUri="https://images.pexels.com/photos/20523374/pexels-photo-20523374/free-photo-of-ramadan-mubarak.jpeg?auto=compress&cs=tinysrgb&w=400"
                />
                <RestaurantCard  
                    title="Coffee"
                    location="Haber Field"
                    category="Indian | Drink"
                    imageUri="https://images.pexels.com/photos/20523374/pexels-photo-20523374/free-photo-of-ramadan-mubarak.jpeg?auto=compress&cs=tinysrgb&w=400"
                />
            </View>
            </ScrollView>     
        </View>
    )
};

const styles = StyleSheet.create({
    rowStyle:{
        flexDirection: 'row',
    },
    screenContainer: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      padding: 20,
      backgroundColor: '#f0f0f0',
      alignItems: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
});

export default ScreenB