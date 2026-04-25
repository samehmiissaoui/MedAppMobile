// screens/MessagesScreen.js
// Écran de la messagerie patient-médecin

import React from 'react';
import { Text, View } from 'react-native';
import { Colors } from '../constants/colors';

export default function MessagesScreen() {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Colors.background,
        }}>
            <Text style={{ color: Colors.textPrimary }}>Messages</Text>
        </View>
    );
}