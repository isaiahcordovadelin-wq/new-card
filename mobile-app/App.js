import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const profileOptions = [
  {
    name: 'Isaiah Joseph C. Delin',
    initials: 'IJD',
    description: 'I’m an IT graduate from the Philippines with a passion for technology, problem-solving, and creating practical digital solutions.',
    location: 'From the Philippines',
    accent: '#ddff63',
  },
  {
    name: 'Mika Santos',
    initials: 'MS',
    description: 'A sample designer profile who enjoys turning ideas into simple digital experiences.',
    location: 'Cebu, Philippines',
    accent: '#f5a18a',
  },
  {
    name: 'Noah Reyes',
    initials: 'NR',
    description: 'A sample IT student profile interested in coding, technology, and solving everyday problems.',
    location: 'Manila, Philippines',
    accent: '#cbd5ff',
  },
  {
    name: 'Ari Cruz',
    initials: 'AC',
    description: 'A sample creative profile who enjoys learning new tools and sharing ideas.',
    location: 'Davao, Philippines',
    accent: '#bfe2dc',
  },
];

export default function App() {
  const [profiles, setProfiles] = useState([]);

  function addProfile() {
    setProfiles((currentProfiles) => {
      const lastProfile = currentProfiles[currentProfiles.length - 1];
      const availableProfiles = profileOptions.filter((profile) => profile.name !== lastProfile?.name);
      const randomIndex = Math.floor(Math.random() * availableProfiles.length);
      const profile = availableProfiles[randomIndex];

      return [...currentProfiles, { ...profile, id: currentProfiles.length + 1 }];
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <View style={styles.header}>
            <View style={styles.brand}>
              <View style={styles.brandMark}><Text style={styles.brandMarkText}>PI</Text></View>
              <View>
                <Text style={styles.brandName}>PEOPLE INDEX</Text>
                <Text style={styles.brandSubtitle}>PROFILE GENERATOR</Text>
              </View>
            </View>
            <Text style={styles.headerLocation}>PHILIPPINES</Text>
          </View>

          <View style={styles.hero}>
            <Text style={styles.eyebrow}>A RANDOM PROFILE GENERATOR</Text>
            <Text style={styles.title}>New faces.{'\n'}<Text style={styles.titleAccent}>Fresh perspectives.</Text></Text>
            <Text style={styles.intro}>A growing collection of people, ideas, and places from the Philippines.</Text>

            <Pressable
              accessibilityRole="button"
              onPress={addProfile}
              style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
            >
              <Text style={styles.buttonText}>Add a profile</Text>
              <View style={styles.buttonIcon}><Text style={styles.buttonIconText}>+</Text></View>
            </Pressable>
          </View>

          <View style={styles.heroArt}>
            <View style={styles.artTop}><Text style={styles.artLabel}>PEOPLE / PH</Text><Text style={styles.artLabel}>VOL. 01</Text></View>
            <View style={styles.artMark}>
              <View style={styles.artTile} />
              <View style={styles.artTileLight} />
              <View style={styles.artTileLight} />
              <View style={styles.artTile} />
            </View>
            <View style={styles.artBottom}><Text style={styles.artLabel}>Every story starts somewhere</Text><Text style={styles.artStar}>✳</Text></View>
          </View>

          <View style={styles.profiles}>
            <View style={styles.collectionHead}>
              <View>
                <Text style={styles.collectionEyebrow}>THE DIRECTORY</Text>
                <Text style={styles.collectionTitle}>Profiles</Text>
              </View>
              <Text style={styles.collectionCount}>{profiles.length} {profiles.length === 1 ? 'profile' : 'profiles'}</Text>
            </View>
            {profiles.length === 0 && <Text style={styles.emptyState}>Your profiles will appear here.</Text>}
            {profiles.map((profile) => (
              <View key={profile.id} style={styles.profileCard}>
                <View style={styles.profileTop}>
                  <Text style={styles.profileNumber}>PROFILE {String(profile.id).padStart(2, '0')}</Text>
                  <Text style={styles.location}>{profile.location}</Text>
                </View>
                <View style={styles.profileBody}>
                  <View style={[styles.avatar, { backgroundColor: profile.accent }]}>
                    <Text style={styles.avatarText}>{profile.initials}</Text>
                  </View>
                  <View style={styles.profileCopy}>
                    <Text style={styles.name}>{profile.name}</Text>
                    <Text style={styles.bio}>{profile.description}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f5ed',
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  content: {
    width: '100%',
    maxWidth: 560,
  },
  header: {
    minHeight: 72,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#d4ddd2',
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  brandMark: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#204b39',
  },
  brandMarkText: {
    color: '#ddff63',
    fontSize: 12,
    fontWeight: '700',
  },
  brandName: {
    color: '#202b24',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
  },
  brandSubtitle: {
    marginTop: 3,
    color: '#68736c',
    fontSize: 8,
    letterSpacing: 1,
  },
  headerLocation: {
    color: '#68736c',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.8,
  },
  hero: {
    paddingTop: 42,
    paddingBottom: 28,
  },
  eyebrow: {
    marginBottom: 16,
    color: '#204b39',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.2,
  },
  titleAccent: {
    color: '#204b39',
    fontFamily: 'Georgia',
    fontStyle: 'italic',
    fontWeight: '500',
  },
  title: {
    color: '#202b24',
    fontSize: 42,
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 47,
  },
  intro: {
    maxWidth: 380,
    marginTop: 14,
    marginBottom: 21,
    color: '#68736c',
    fontSize: 14,
    lineHeight: 22,
  },
  button: {
    minHeight: 49,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    borderRadius: 3,
    backgroundColor: '#204b39',
  },
  buttonPressed: {
    backgroundColor: '#173c2b',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
  },
  buttonIcon: {
    width: 21,
    height: 21,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 11,
    backgroundColor: '#ddff63',
  },
  buttonIconText: {
    color: '#202b24',
    fontSize: 18,
    lineHeight: 21,
  },
  heroArt: {
    width: '100%',
    aspectRatio: 1.65,
    justifyContent: 'space-between',
    overflow: 'hidden',
    padding: 18,
    backgroundColor: '#ef7657',
  },
  artTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  artLabel: {
    color: '#fffefa',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  artMark: {
    position: 'absolute',
    top: '32%',
    alignSelf: 'center',
    width: 68,
    height: 68,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
  },
  artTile: {
    width: 31,
    height: 31,
    backgroundColor: '#ddff63',
  },
  artTileLight: {
    width: 31,
    height: 31,
    backgroundColor: '#fffefa',
  },
  artBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  artStar: {
    color: '#ddff63',
    fontSize: 20,
  },
  profiles: {
    width: '100%',
    gap: 16,
    marginTop: 29,
  },
  collectionHead: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 2,
  },
  collectionEyebrow: {
    marginBottom: 4,
    color: '#204b39',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1,
  },
  collectionTitle: {
    color: '#202b24',
    fontSize: 25,
    fontWeight: '700',
  },
  collectionCount: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#d4ddd2',
    color: '#68736c',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  emptyState: {
    padding: 20,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#c9d3c8',
    color: '#68736c',
    fontSize: 13,
    textAlign: 'center',
  },
  profileCard: {
    width: '100%',
    padding: 18,
    borderWidth: 1,
    borderColor: '#dce3d9',
    borderRadius: 6,
    backgroundColor: '#fffefa',
    shadowColor: '#25342b',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 2,
  },
  profileTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    marginBottom: 16,
  },
  profileNumber: {
    color: '#68736c',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1,
  },
  location: {
    maxWidth: '68%',
    overflow: 'hidden',
    paddingHorizontal: 7,
    paddingVertical: 5,
    backgroundColor: '#edf2e8',
    color: '#204b39',
    fontSize: 9,
    fontWeight: '600',
  },
  profileBody: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  profileCopy: {
    flex: 1,
    minWidth: 0,
  },
  avatar: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  avatarText: {
    color: '#202b24',
    fontSize: 14,
    fontWeight: '700',
  },
  name: {
    color: '#202b24',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 23,
  },
  bio: {
    marginTop: 7,
    color: '#68736c',
    fontSize: 12,
    lineHeight: 19,
  },
});
