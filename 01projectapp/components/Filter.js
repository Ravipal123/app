import { Text, View, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Filter = ({ onCloseFilter, onApplyFilter, onCategoryChange }) => {
    const [selectedFilters, setSelectedFilters] = useState({
        diet: [],
        cuisines: [],
        proteins: [],
    });

    const handleFilterSelection = (category, value) => {
        setSelectedFilters((prevFilters) => ({
          ...prevFilters,
          [category]: [...prevFilters[category], value],
        }));
    };
    
    const handleFilterDeselection = (category, value) => {
        setSelectedFilters((prevFilters) => ({
          ...prevFilters,
          [category]: prevFilters[category].filter((filter) => filter !== value),
        }));
    };

    return (

    <View style={styles.container}>
      <Text style={styles.header}>Filters</Text>
      <View style={styles.bottomLine} />
      {/* Filter Sections */}
      <View>
        <Text style={styles.sectionHeader}>Diet</Text>
        <View style={styles.optionRow}>
            <Button onPress={() => handleFilterSelection('diet', 'vegetarian')}
                title="Vegetarian"
            />
            <Button onPress={() => handleFilterSelection('diet', 'non-vegetarian')}
                title="Non-Vegetarian"
            />
            <Button title="Vegan" onPress={() => handleFilterSelection('diet', 'vegan')} />
        </View>
        </View>

        <View>
        <Text style={styles.sectionHeader}>Cuisines</Text>
        <View style={styles.optionRow}>
            <Button onPress={() => handleFilterSelection('cuisines', 'indian')}
                title="Indian"
            />
            <Button onPress={() => handleFilterSelection('cuisines', 'mediterranean')}
                title="Mediterranean"
            />
        </View>
        </View>

        <View>
        <Text style={styles.sectionHeader}>Proteins</Text>
        <View style={styles.optionRow}>
            <Button onPress={() => handleFilterSelection('proteins', 'chicken')}
                title="Chicken" 
            />
            <Button onPress={() => handleFilterSelection('proteins', 'beef')}
                title="Beef"
            />
        </View>
        </View>

        <View style={styles.bottomLine} />

        <View style={styles.buttonRow}>

            <Button title="Cancel"  onPress={onCloseFilter}/>
            <Button title="Apply Filters"  onPress={() => onApplyFilter(selectedFilters)}/>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#cccccc',
    },
    header: {
      fontSize: 30,
      fontWeight: 'bold',
      color:'#043927',
    },
    sectionHeader: {
      fontSize: 25,
      marginBottom: 8,
      marginTop: 20,
      color:'#043927'
    },
    optionRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: 16,
      borderRadius: 4,
      gap:9,
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical:20,
    },
    bottomLine : {
        marginVertical:7,
        height:1,
        backgroundColor: 'black',
        marginHorizontal:2,
    },
});

export default Filter