// screens/NeederHome.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';


const COLORS = {
  primary: '#2E7D32',
  accent: '#FF8F00',
  background: '#F5F5F5',
  surface: '#FFFFFF',
  textPrimary: '#212121',
  textSecondary: '#757575',
  white: '#FFFFFF',
  border: '#E0E0E0',
};

const NeederHome = ({ navigation }) => {
  // Placeholder list of Donors - In a real app, this would come from state/API
  const donors = [
    { id: '1', name: 'Anonymous Donor A', details: 'Offering vegetables and rice' },
    { id: '2', name: 'Local Bakery', details: 'Surplus bread available' },
    { id: '3', name: 'Community Farm', details: 'Fresh produce donation' },
    { id: '4', name: 'John Smith', details: 'Canned goods and pasta' },
  ];

  const renderDonorItem = ({ item, index }) => (
    <Animatable.View
      animation="fadeInUp"
      duration={500}
      delay={index * 100} // Stagger animation
      style={styles.listItemCard}
    >
      <Icon name="gift-outline" size={40} color={COLORS.accent} style={styles.itemIcon}/>
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDetails}>{item.details}</Text>
      </View>
       {/* Add a button or touchable area if interaction is needed */}
       {/* <Pressable onPress={() => alert('View details for ' + item.name)}>
          <Icon name="chevron-forward-outline" size={24} color={COLORS.textSecondary} />
       </Pressable> */}
    </Animatable.View>
  );

  return (
    <View style={styles.container}>
        <Text style={styles.infoText}>
         Available donations from donors (Placeholder):
       </Text>
      <FlatList
        data={donors}
        renderItem={renderDonorItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContentContainer}
        ListEmptyComponent={<Text style={styles.emptyListText}>No donations found currently.</Text>}
      />

      {/* Optional: Button to go back to Welcome Screen or add new request */}
       <Animatable.View animation="fadeInUp" delay={donors.length * 100 + 100}>
          <Pressable
             style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed,
             ]}
            onPress={() => navigation.navigate('WelcomeScreen')}
          >
            <Text style={styles.buttonText}>Go to Main Home</Text>
          </Pressable>
        </Animatable.View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
   infoText: {
    fontSize: 16,
    color: COLORS.textSecondary,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  listContentContainer: {
    paddingHorizontal: 15,
    paddingBottom: 20, // Space at the bottom of the list
  },
  listItemCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.surface,
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  itemIcon: {
    marginRight: 15,
  },
  itemTextContainer: {
    flex: 1, // Take available space
  },
  itemName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
  },
  itemDetails: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginTop: 3,
  },
  emptyListText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: COLORS.textSecondary,
  },
  button: {
    backgroundColor: COLORS.accent,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    margin: 20, // Add margin around the button
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonPressed: {
    opacity: 0.8,
  },
});


export default NeederHome;