import { Text, View, StyleSheet, ScrollView, ImageBackground, } from 'react-native'
import React, { Component } from 'react'
import RestaurantCard from './RestaurantCard';

const CookingButton = ({filters}) => {

    const cookingData = [
        {
            id:1,
            title:"Coffee",
            location :"Haber Field",
            category:"Indian | Drink",
            imageUri: "https://images.pexels.com/photos/20523374/pexels-photo-20523374/free-photo-of-ramadan-mubarak.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
            id:2,
            title:"Chicken Noodle",
            location:"Haber Field",
            category:"Non Vegetarian | Indian | Meat",
            imageUri:"https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
            id:3,
            title:"Chap",
            location:"Haber Field",
            category:"Vegetarian | Indian | Fast Food",
            imageUri:"https://images.pexels.com/photos/1833349/pexels-photo-1833349.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
            id:4,
            title:"ChFrench Fryap",
            location:"Haber Field",
            category:"Vegetarian | Indian | Fast Food",
            imageUri:"https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=400"
        }
    ];

    const filterData = () => {
        return cookingData.filter(item => {
          
            return cookingData.filter(item => {
                const itemCategories = item.category.split(' | ');
            
                return filters.diet.some(filter => itemCategories.includes(filter));
            });
        });
    };

    return (
        <View style={styles.cardContainerAll}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {
                filterData().map(item => (
                    <RestaurantCard 
                        key={item.id} 
                        title={item.title}                        
                        location={item.location}
                        category={item.category}
                        imageUri={item.imageUri}
                    />
                ))
            }
            
            </ScrollView>
        </View>
    )
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

export default CookingButton