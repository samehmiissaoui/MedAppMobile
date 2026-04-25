// screens/SearchScreen.js
// Écran de recherche des médecins

import React from 'react';
import { Text, View } from 'react-native';
import { Colors } from '../constants/colors';

export default function SearchScreen() {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Colors.background,
        }}>
            <Text style={{ color: Colors.textPrimary }}>Rechercher</Text>
        </View>
    );
}