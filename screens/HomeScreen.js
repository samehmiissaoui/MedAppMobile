// screens/HomeScreen.js
import React from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { Colors } from '../constants/colors';
import { userData, userStats, upcomingAppointments } from '../data/mocData';
import AppointmentCard from '../components/AppointmentCard';

// ═══════════ COMPOSANTS LOCAUX ═══════════

function QuickAction({ emoji, label }) {
    return (
        <TouchableOpacity style={styles.quickAction}>
            <View style={styles.quickActionIcon}>
                <Text style={styles.emoji24}>{emoji}</Text>
            </View>
            <Text style={styles.quickActionLabel}>{label}</Text>
        </TouchableOpacity>
    );
}

function StatCard({ emoji, value, label }) {
    return (
        <View style={styles.statCard}>
            <View style={styles.statIcon}>
                <Text style={styles.emoji24}>{emoji}</Text>
            </View>
            <Text style={styles.statValue}>{value}</Text>
            <Text style={styles.statLabel}>{label}</Text>
        </View>
    );
}

function AlertBanner({ icon, title, message }) {
    return (
        <View style={styles.alertBanner}>
            <Text style={styles.alertIcon}>{icon}</Text>
            <View style={styles.alertContent}>
                <Text style={styles.alertTitle}>{title}</Text>
                <Text style={styles.alertMessage}>{message}</Text>
            </View>
        </View>
    );
}

// ═══════════ ÉCRAN PRINCIPAL ═══════════

export default function HomeScreen() {
    return (
        <View style={styles.screen}>
            {/* HEADER */}
            <View style={styles.header}>
                <View style={styles.headerRow}>
                    <View>
                        <Text style={styles.greeting}>Bonjour,</Text>
                        <Text style={styles.userName}>{userData.firstName} 👋</Text>
                    </View>

                    <TouchableOpacity style={styles.notifButton}>
                        <Text style={styles.emoji20}>🔔</Text>
                        <View style={styles.notifDot} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* CONTENU SCROLLABLE */}
            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* SEARCH BAR */}
                <View style={styles.searchBar}>
                    <Text style={styles.emoji20}>🔍</Text>
                    <Text style={styles.searchPlaceholder}>Rechercher un médecin...</Text>
                </View>

                {/* QUICK ACTIONS */}
                <View style={styles.row}>
                    <QuickAction emoji="🏥" label="Médecins" />
                    <QuickAction emoji="📅" label="Mes RDV" />
                    <QuickAction emoji="📄" label="Documents" />
                    <QuickAction emoji="👤" label="Profil" />
                </View>

                {/* STATS GRID */}
                <View style={[styles.row, styles.statsGrid]}>
                    <StatCard
                        emoji="📅"
                        value={userStats.upcomingCount}
                        label="RDV à venir"
                    />
                    <StatCard
                        emoji="📋"
                        value={userStats.consultationsCount}
                        label="Consultations"
                    />
                </View>

                {/* ALERT BANNER */}
                <AlertBanner
                    icon="⏰"
                    title="Rappel de rendez-vous"
                    message="Vous avez un RDV aujourd'hui à 14:00 avec Dr Ben Ali"
                />

                {/* SECTION HEADER */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Prochains RDV</Text>
                    <TouchableOpacity>
                        <Text style={styles.sectionLink}>Voir tous</Text>
                    </TouchableOpacity>
                </View>

                {/* LISTE DES 2 PROCHAINS RDV */}
                {upcomingAppointments.slice(0, 2).map((apt) => (
                    <AppointmentCard key={apt.id} appointment={apt} />
                ))}
            </ScrollView>
        </View>
    );
}

// ═══════════ STYLES ═══════════

const styles = StyleSheet.create({
    // Layout
    screen: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    scroll: {
        flex: 1,
    },
    scrollContent: {
        padding: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24,
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
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    greeting: {
        fontSize: 14,
        color: Colors.textSecondary,
        marginBottom: 4,
    },
    userName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.textPrimary,
    },

    // Notification button
    notifButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colors.background,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    notifDot: {
        position: 'absolute',
        top: 4,
        right: 4,
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#ef4444',
        borderWidth: 2,
        borderColor: Colors.white,
    },

    // Search bar
    searchBar: {
        backgroundColor: Colors.white,
        padding: 15,
        borderRadius: 12,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 3,
        elevation: 1,
    },
    searchPlaceholder: {
        color: Colors.textLight,
        fontSize: 16,
        marginLeft: 10,
    },

    // Quick Action
    quickAction: {
        backgroundColor: Colors.white,
        borderRadius: 16,
        padding: 16,
        alignItems: 'center',
        width: '22%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 3,
        elevation: 2,
    },
    quickActionIcon: {
        width: 48,
        height: 48,
        borderRadius: 12,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    quickActionLabel: {
        fontSize: 12,
        fontWeight: '600',
        color: Colors.textMuted,
    },

    // Stats
    statsGrid: {
        // Hérite de "row"
    },
    statCard: {
        backgroundColor: Colors.white,
        borderRadius: 16,
        padding: 20,
        alignItems: 'center',
        width: '48%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 3,
        elevation: 2,
    },
    statIcon: {
        width: 48,
        height: 48,
        borderRadius: 12,
        backgroundColor: Colors.primaryLight,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    statValue: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.primary,
        marginBottom: 4,
    },
    statLabel: {
        fontSize: 13,
        color: Colors.textSecondary,
        fontWeight: '600',
    },

    // Alert banner
    alertBanner: {
        backgroundColor: Colors.warningBg,
        borderRadius: 16,
        padding: 16,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    alertIcon: {
        fontSize: 24,
        marginRight: 12,
    },
    alertContent: {
        flex: 1,
    },
    alertTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.warning,
        marginBottom: 4,
    },
    alertMessage: {
        fontSize: 13,
        color: '#b45309',
        lineHeight: 18,
    },

    // Section header
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.textPrimary,
    },
    sectionLink: {
        color: Colors.primary,
        fontWeight: '600',
        fontSize: 14,
    },

    // Emojis (réutilisés)
    emoji20: { fontSize: 20 },
    emoji24: { fontSize: 24 },
});