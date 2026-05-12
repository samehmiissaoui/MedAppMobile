// screens/AppointmentsScreen.js
// Écran de la liste des rendez-vous du patient

import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/colors';
import { upcomingAppointments } from '../data/mocData';
import AppointmentCard from '../components/AppointmentCard';

export default function AppointmentsScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      {/* ═══════════ HEADER ═══════════ */}
      <View
        style={{
          backgroundColor: Colors.white,
          paddingHorizontal: 20,
          paddingTop: 50,
          paddingBottom: 16,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.08,
          shadowRadius: 3,
          elevation: 2,
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: 'bold',
            color: Colors.textPrimary,
          }}
        >
          Mes rendez-vous
        </Text>
      </View>

      {/* ═══════════ CONTENU SCROLLABLE ═══════════ */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* SECTION HEADER : Titre + bouton Nouveau */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 16,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: Colors.textPrimary,
            }}
          >
            À venir ({upcomingAppointments.length})
          </Text>

          <TouchableOpacity>
            <Text
              style={{
                color: Colors.primary,
                fontWeight: '600',
                fontSize: 14,
              }}
            >
              + Nouveau
            </Text>
          </TouchableOpacity>
        </View>

        {/* LISTE COMPLÈTE DES RDV */}
        {upcomingAppointments.map((apt) => (
          <AppointmentCard key={apt.id} appointment={apt} />
        ))}
      </ScrollView>
    </View>
  );
}
