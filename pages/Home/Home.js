import React, { useState } from 'react';
import {
    Text,
    SafeAreaView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './HomeStyle';

const Home = () => {
    return(
        <LinearGradient colors={['#9C51FD', '#2B1240']} style={styles.container}>
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>HOME PET'S</Text>
            </SafeAreaView>
        </LinearGradient>
    )
}

export {Home};