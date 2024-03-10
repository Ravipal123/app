import { Text, View, StyleSheet, ScrollView, ImageBackground, } from 'react-native'
import React, { Component } from 'react'
import RestaurantCard from './RestaurantCard';

const RestaurantsButton = ({filters}) => {
    const restaurantsData = [
        {
            id:1,
            title:"Chicken Burgar",
            location :"Haber Field",
            category:"Non Vegetarian | Indian | Meat",
            imageUri: "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
            id:2,
            title:"Dal Rice",
            location:"Haber Field",
            category:"Vegetarian | Indian | Dal",
            imageUri:"https://images.pexels.com/photos/14882284/pexels-photo-14882284.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
            id:3,
            title:"Egg Rice",
            location:"Haber Field",
            category:"Non Vegetarian | Indian | Egg",
            imageUri:"https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
            id:4,
            title:"Beef Chettinad",
            location:"Haber Field",
            category:"Non Vegetarian | Indian | Beef",
            imageUri:"https://images.pexels.com/photos/1639563/pexels-photo-1639563.jpeg?auto=compress&cs=tinysrgb&w=400"
        }
    ];

    const filterData = () => {
        return restaurantsData.filter(item => {
          
            return restaurantsData.filter(item => {
                const itemCategories = item.category.split(' | ');
            
                return filters.diet.some(filter => itemCategories.includes(filter));
            });
        });
    };
    
    return (
        <View style={styles.cardContainerAll}>
           <ScrollView horizontal={true} showsVerticalScrollIndicator={false}>
            
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

export default RestaurantsButton