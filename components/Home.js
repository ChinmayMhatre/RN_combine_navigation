import React from 'react'
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Login')
            }}>
                <Text>Click here to go back to Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}) 

export default Home
