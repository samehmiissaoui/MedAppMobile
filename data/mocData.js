// data/mockData.js
// Données simulées (mock) — remplaceront les appels API backend plus tard

// ─── Utilisateur connecté ───
export const userData = {
  name: 'sameh Martin',
  firstName: 'sameh',
  email: 'sarah.martin@email.com',
  initials: 'SM',
  phone: '06 12 34 56 78',
};

// ─── Rendez-vous à venir du patient ───
export const upcomingAppointments = [
  {
    id: 1,
    date: "Aujourd'hui",
    fullDate: '24 avril 2026',
    time: '14:00',
    doctor: 'Dr Amine Ben Ali',
    doctorInitials: 'AB',
    specialty: 'Cardiologie',
    location: '15 Avenue de Paris, 91300 Massy',
    status: 'confirmed',
    statusLabel: 'Confirmé',
  },
  {
    id: 2,
    date: 'Demain',
    fullDate: '25 avril 2026',
    time: '09:30',
    doctor: 'Dr Claire Moreau',
    doctorInitials: 'CM',
    specialty: 'Médecine générale',
    location: '8 Rue du Centre, 91300 Massy',
    status: 'confirmed',
    statusLabel: 'Confirmé',
  },
  {
    id: 3,
    date: '28 avril',
    fullDate: '28 avril 2026',
    time: '16:00',
    doctor: 'Dr Sami Haddad',
    doctorInitials: 'SH',
    specialty: 'Pédiatrie',
    location: "22 Bd de l'Europe, Massy",
    status: 'pending',
    statusLabel: 'En attente',
  },
  {
    id: 4,
    date: '30 avril',
    fullDate: '30 avril 2026',
    time: '11:00',
    doctor: 'Dr Marie Dubois',
    doctorInitials: 'MD',
    specialty: 'Dermatologie',
    location: '5 Rue de la Santé, Massy',
    status: 'confirmed',
    statusLabel: 'Confirmé',
  },
  {
    id: 5,
    date: '30 avril',
    fullDate: '30 avril 2026',
    time: '11:00',
    doctor: 'Dr Marie Dubois',
    doctorInitials: 'MD',
    specialty: 'Dermatologie',
    location: '5 Rue de la Santé, Massy',
    status: 'confirmed',
    statusLabel: 'Confirmé',
  },
  {
    id: 6,
    date: '30 avril',
    fullDate: '30 avril 2026',
    time: '11:00',
    doctor: 'Dr Marie Dubois',
    doctorInitials: 'MD',
    specialty: 'Dermatologie',
    location: '5 Rue de la Santé, Massy',
    status: 'confirmed',
    statusLabel: 'Confirmé',
  },
];

// ─── Liste des médecins disponibles ───
export const doctors = [
  {
    id: 1,
    name: 'Dr Amine Ben Ali',
    initials: 'AB',
    specialty: 'Cardiologie',
    location: 'Clinique Massy',
    rating: 4.8,
    reviews: 127,
    nextSlot: "Aujourd'hui 14:00",
  },
  {
    id: 2,
    name: 'Dr Claire Moreau',
    initials: 'CM',
    specialty: 'Médecine générale',
    location: 'Centre Médical Europe',
    rating: 4.9,
    reviews: 203,
    nextSlot: 'Demain 09:30',
  },
  {
    id: 3,
    name: 'Dr Sami Haddad',
    initials: 'SH',
    specialty: 'Pédiatrie',
    location: 'Clinique Horizon',
    rating: 4.7,
    reviews: 89,
    nextSlot: "Aujourd'hui 16:30",
  },
];

// ─── Statistiques du patient (pour le dashboard Home) ───
export const userStats = {
  upcomingCount: 3,
  consultationsCount: 8,
};
