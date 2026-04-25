// screens/ProfileScreen.js
// Écran du profil utilisateur

import React from 'react';
import { Text, View } from 'react-native';
import { Colors } from '../constants/colors';

export default function ProfileScreen() {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Colors.background,
        }}>
            <Text style={{ color: Colors.textPrimary }}>Profil</Text>
        </View>
    );
}