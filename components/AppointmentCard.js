// components/AppointmentCard.js
// Carte de rendez-vous réutilisable (HomeScreen + AppointmentsScreen)

import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/colors';

export default function AppointmentCard({ appointment }) {
  // Détermine les couleurs du badge selon le statut
  const isConfirmed = appointment.status === 'confirmed';
  const badgeStyle = {
    backgroundColor: isConfirmed ? Colors.successBg : Colors.warningBg,
    color: isConfirmed ? Colors.success : Colors.warning,
  };

  return (
    <View
      style={{
        backgroundColor: Colors.white,
        borderRadius: 16,
        padding: 16,
        marginBottom: 12,
        borderLeftWidth: 4,
        borderLeftColor: Colors.primary,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
      }}
    >
      {/* ─── LIGNE 1 : Date + Badge statut ─── */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: 12,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: Colors.primary,
              marginBottom: 4,
            }}
          >
            {appointment.date}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: Colors.textSecondary,
            }}
          >
            ⏰ {appointment.time}
          </Text>
        </View>

        {/* Badge statut (Confirmé / En attente) */}
        <View
          style={{
            backgroundColor: badgeStyle.backgroundColor,
            paddingHorizontal: 12,
            paddingVertical: 6,
            borderRadius: 12,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              color: badgeStyle.color,
            }}
          >
            {appointment.statusLabel}
          </Text>
        </View>
      </View>

      {/* ─── LIGNE 2 : Avatar + Infos médecin ─── */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 12,
        }}
      >
        {/* Avatar avec initiales */}
        <View
          style={{
            width: 48,
            height: 48,
            borderRadius: 24,
            backgroundColor: Colors.primaryLight,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 12,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: Colors.primary,
            }}
          >
            {appointment.doctorInitials}
          </Text>
        </View>

        {/* Nom + spécialité */}
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: Colors.textPrimary,
              marginBottom: 2,
            }}
          >
            {appointment.doctor}
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: Colors.primary,
              fontWeight: '600',
            }}
          >
            {appointment.specialty}
          </Text>
        </View>
      </View>

      {/* ─── LIGNE 3 : Localisation ─── */}
      <Text
        style={{
          fontSize: 13,
          color: Colors.textSecondary,
          marginBottom: 12,
        }}
      >
        📍 {appointment.location}
      </Text>

      {/* ─── LIGNE 4 : Boutons d'action ─── */}
      <View
        style={{
          flexDirection: 'row',
          gap: 8,
        }}
      >
        {/* Bouton primaire (Itinéraire) */}
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: Colors.primary,
            paddingVertical: 12,
            borderRadius: 12,
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: Colors.white,
              fontWeight: 'bold',
              fontSize: 15,
            }}
          >
            📍 Itinéraire
          </Text>
        </TouchableOpacity>

        {/* Bouton secondaire (Modifier) */}
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: Colors.divider,
            paddingVertical: 12,
            borderRadius: 12,
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: Colors.textMuted,
              fontWeight: 'bold',
              fontSize: 15,
            }}
          >
            🗓️ Modifier
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
