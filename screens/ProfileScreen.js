// screens/ProfileScreen.js
// Patient profile screen with user info and menu sections

import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';
import { userData } from '../data/mocData';

// ═══════════════════════════════════════════════════════
// LOCAL COMPONENTS
// ═══════════════════════════════════════════════════════

function MenuItem({ icon, title, subtitle, danger = false }) {
  return (
    <TouchableOpacity style={styles.menuItem}>
      <View style={[styles.menuIcon, danger && styles.menuIconDanger]}>
        <Text style={styles.menuIconEmoji}>{icon}</Text>
      </View>

      <View style={styles.menuContent}>
        <Text style={[styles.menuTitle, danger && styles.menuTitleDanger]}>{title}</Text>
        {subtitle && <Text style={styles.menuSubtitle}>{subtitle}</Text>}
      </View>

      <Text style={styles.menuArrow}>›</Text>
    </TouchableOpacity>
  );
}

function MenuSection({ children }) {
  return <View style={styles.menuSection}>{children}</View>;
}

// ═══════════════════════════════════════════════════════
// MAIN SCREEN
// ═══════════════════════════════════════════════════════

export default function ProfileScreen() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      {/* PROFILE HEADER */}
      <View style={styles.profileHeader}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{userData.initials}</Text>
        </View>
        <Text style={styles.profileName}>{userData.name}</Text>
        <Text style={styles.profileEmail}>{userData.email}</Text>
      </View>

      {/* SECTION 1: ACCOUNT */}
      <MenuSection>
        <MenuItem icon="👤" title="Informations personnelles" subtitle="Nom, email, téléphone" />
        <MenuItem icon="🏥" title="Informations médicales" subtitle="Antécédents, allergies" />
        <MenuItem icon="📄" title="Mes documents" subtitle="Ordonnances, analyses" />
      </MenuSection>

      {/* SECTION 2: SETTINGS */}
      <MenuSection>
        <MenuItem icon="🔔" title="Notifications" subtitle="Rappels, messages" />
        <MenuItem icon="🔒" title="Sécurité" subtitle="Mot de passe, 2FA" />
        <MenuItem icon="❓" title="Aide & Support" subtitle="FAQ, Contact" />
      </MenuSection>

      {/* SECTION 3: LOGOUT */}
      <MenuSection>
        <MenuItem icon="🚪" title="Déconnexion" danger />
      </MenuSection>
    </ScrollView>
  );
}

// ═══════════════════════════════════════════════════════
// STYLES
// ═══════════════════════════════════════════════════════

const styles = StyleSheet.create({
  // Layout
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    paddingBottom: 20,
  },

  // Profile header
  profileHeader: {
    backgroundColor: Colors.primary,
    paddingTop: 60,
    paddingBottom: 32,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.white,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.white,
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.85)',
  },

  // Menu section
  menuSection: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    marginHorizontal: 20,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },

  // Menu item
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: Colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  menuIconDanger: {
    backgroundColor: Colors.dangerBg,
  },
  menuIconEmoji: {
    fontSize: 20,
  },
  menuContent: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: 2,
  },
  menuTitleDanger: {
    color: Colors.danger,
  },
  menuSubtitle: {
    fontSize: 13,
    color: Colors.textSecondary,
  },
  menuArrow: {
    fontSize: 24,
    color: Colors.textLight,
    fontWeight: '300',
  },
});
