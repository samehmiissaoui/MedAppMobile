// screens/MessagesScreen.js
// Patient messaging screen (currently empty state)

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';

export default function MessagesScreen() {
    return (
        <View style={styles.screen}>
            {/* HEADER */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Messages</Text>
            </View>

            {/* EMPTY STATE */}
            <View style={styles.emptyState}>
                <Text style={styles.emptyIcon}>💬</Text>
                <Text style={styles.emptyTitle}>Aucun message</Text>
                <Text style={styles.emptyText}>
                    Vous n'avez pas encore de conversation avec vos praticiens
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    // Layout
    screen: {
        flex: 1,
        backgroundColor: Colors.background,
    },

    // Header
    header: {
        backgroundColor: Colors.white,
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 3,
        elevation: 2,
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.textPrimary,
    },

    // Empty state
    emptyState: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
    },
    emptyIcon: {
        fontSize: 64,
        marginBottom: 16,
    },
    emptyTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.textPrimary,
        marginBottom: 8,
    },
    emptyText: {
        fontSize: 14,
        color: Colors.textSecondary,
        textAlign: 'center',
        lineHeight: 20,
    },
});