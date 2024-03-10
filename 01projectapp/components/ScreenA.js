import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, ImageBackground, ScrollView, Modal } from 'react-native'
import React, { useMemo, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Filter from './Filter';
import CookingButton from './CookingButton';
import RestaurantButton from './RestaurantButton';


const ScreenA = ({navigation}) => {
    const [selectedCategory, setSelectedCategory] = useState('restaurants');
    const [filterModalVisible, setFilterModalVisible] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState({
        diet: [],
        cuisines: [],
        proteins: [],
    });

    const [searchText, setSearchText] = useState('');

    const handleSearchTextChange = (text) => {
        setSearchText(text);
    };

    const renderCardContainer = useMemo(() => {
        if (selectedCategory === 'restaurants') {
          return (
            <RestaurantButton filters={selectedFilters} searchText={searchText}/>
          );
        } else if (selectedCategory === 'cooking') {
          return (
            <CookingButton filters={selectedFilters} searchText={searchText}/>
          );
        }
    }, [selectedCategory, selectedFilters, searchText]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setFilterModalVisible(false);
    };
    
    const handleFilterApply = (filters) => {
        setSelectedFilters(filters);
        setFilterModalVisible(false);
        setSearchText('')
    };
    
    const handleFilterClose = () => {
        setFilterModalVisible(false);
    };

    return (
      <View style={styles.bodyStyle}>
        <View style={styles.containerStyle}>
            <Text style={styles.textStyleOne}>Good Morning</Text>
            <Text style={styles.textStyleTwo}>Mr. Joe!</Text>
        </View>

        <View style={styles.inputContainer}>
            <Icon name='search' size={25} color='#043927'/>
            <TextInput 
                style={styles.input}
                placeholder='Search...'
                onChange={handleSearchTextChange}
                value={searchText}
            />
            <TouchableOpacity onPress={() => setFilterModalVisible(true)}>
                <Icon name="filter" size={25} color="#043927" />
            </TouchableOpacity>
        </View>

        <View style={styles.buttonStyle}>
            <TouchableOpacity onPress={() => setSelectedCategory('restaurants')}>
                <Text style={styles.button}>Restaurants</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedCategory('cooking')}>
                <Text style={styles.button}>Cooking</Text>
            </TouchableOpacity>

        </View>
        <View style={styles.bottomLine} />

        <View style={styles.MiddleSection}>
            <View>
                <Text style={styles.MiddleSectionOne}>Satify your craving</Text>
                <Text style={styles.MiddleSectionTwo}>Restaurants that suits to ypur palate</Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('ScreenB')}>
                    <Text style={styles.MiddleSectionThree}>View All</Text>
                </TouchableOpacity>
            </View>
        </View>

        {renderCardContainer}

        <Modal
            animationType="slide"
            transparent={true}
            visible={filterModalVisible}
            onRequestClose={() => setFilterModalVisible(false)}
        >
            <View style={styles.modalContainer}>
            <Filter 
                onCloseFilter={handleFilterClose}
                onApplyFilter={handleFilterApply}
                onCategoryChange={handleCategoryChange}
            />
            </View>
        </Modal>
        
      </View>

    )
  
}

const styles = StyleSheet.create({
    bodyStyle : {
        backgroundColor:'#cccccc',
    },
    containerStyle : {
        paddingHorizontal : 5,
        paddingVertical : 5,
        margin: 5,
    },
    textStyleOne : {
        fontSize: 25,
        color:'#043927',
        
    },
    textStyleTwo : {
        fontSize: 20,
        color:'#043927',
    },
    inputContainer : {
        flexDirection : 'row',
        alignItems: 'center',
        borderWidth : 2,
        borderColor : 'black',
        borderRadius : 5,
        paddingHorizontal : 10,
        marginVertical : 20,
        marginHorizontal: 10,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation:5,
    },
    input : {
        flex :1,
        padding : 4,
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        letterSpacing : 1.3,
        marginLeft: 5,
    },
    buttonStyle : {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        margin:15,
    },
    button : {
        fontSize : 25,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: 'gray',
        padding: 8,
        color: '#043927',
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation:5,

    },
    bottomLine : {
        height:1,
        backgroundColor: 'black',
        marginHorizontal:3,
    },
    MiddleSection : {
        flexDirection : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal : 3,
        marginVertical : 20,
        marginHorizontal: 10,
    },
    MiddleSectionOne : {
        fontSize: 27,
        color : '#043927',
    },
    MiddleSectionTwo : {
        color : '#043927',
    },
    MiddleSectionThree : {
        fontSize: 23,
        color : '#043927',
    },
});

export default ScreenA