import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Country({ country }) {
    return (
        <View style={styles.country}>
            <Image
                style={styles.image}
                source={{
                    uri: country.flags.png
                }}
            >
            </Image>
            <Text style={styles.text}>Name:{country.name.common}</Text>
            <Text style={styles.text}>Capital:{country.capital}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    country: {
        borderWidth: 2,
        borderRadius: 20,
        padding: 10,
        marginBottom: 10
    },
    image: {
        height: 200,
        width: "100%",
        borderRadius: 20,
        marginLeft: "auto",
        marginRight: "auto",
    },
    text: {
        textAlign: "center"
    }

})
