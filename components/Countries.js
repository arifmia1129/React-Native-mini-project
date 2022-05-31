import { View, Text, ScrollView, StyleSheet, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import Country from './Country';

export default function Countries() {
    const [countries, setCountries] = useState([]);
    const [searched, setSearched] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => {
                setSearched(data);
                setCountries(data)
            })
    }, [])

    const handleChange = text => {
        const searchText = text;
        const filtered = countries.filter(country => country.name.common.includes(searchText));
        setSearched(filtered);
    }
    return (
        <View style={styles.countries}>
            <Text style={styles.header}>250 Countries Here</Text>
            <TextInput
                style={styles.input}
                onChangeText={handleChange}
                placeholder="Enter country name"
            />
            <ScrollView>
                {
                    searched.map((country, index) => <Country
                        key={index}
                        country={country}
                    />)
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    countries: {
        marginTop: 50
    },
    header: {
        color: "green",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "800",
        marginBottom: 10
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    }
})