import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';


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

const DonorConfirmation = ({ route, navigation }) => {
    const { name, phone, address, foodItem, quantity } = route.params;

    
    const handleConfirm = () => {
        // firestore
        

        navigation.navigate('SuccessScreen'); 
    };


    const handleEdit = () => {

        navigation.navigate('DonorForm');
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Animatable.View animation="fadeInUp" duration={800} style={styles.card}>
                {/* ... (rest of the display code for details) ... */}
                <View style={styles.detailItem}>
                    <Text style={styles.detailLabel}>Name:</Text>
                    <Text style={styles.detailValue}>{name}</Text>
                </View>
                <View style={styles.detailItem}>
                    <Text style={styles.detailLabel}>Phone:</Text>
                    <Text style={styles.detailValue}>{phone}</Text>
                </View>
                <View style={styles.detailItem}>
                    <Text style={styles.detailLabel}>Address:</Text>
                    <Text style={styles.detailValue}>{address}</Text>
                </View>
                <View style={styles.detailItem}>
                    <Text style={styles.detailLabel}>Food Item(s):</Text>
                    <Text style={styles.detailValue}>{foodItem}</Text>
                </View>
                <View style={styles.detailItem}>
                    <Text style={styles.detailLabel}>Quantity:</Text>
                    <Text style={styles.detailValue}>{quantity}</Text>
                </View>
                {/* ... (end of display code) ... */}


                <View style={styles.buttonContainer}>
                    {/* --- THIS BUTTON CALLS handleConfirm WHEN PRESSED --- */}
                    <Pressable
                        style={({ pressed }) => [
                            styles.button,
                            styles.confirmButton,
                            pressed && styles.buttonPressed,
                        ]}
                        onPress={handleConfirm} // <= Triggers the navigation
                    >
                        <Text style={styles.buttonText}>Confirm & Submit</Text>
                    </Pressable>
                    {/* --- END OF CONFIRM BUTTON --- */}

                    <Pressable
                        style={({ pressed }) => [
                            styles.button,
                            styles.editButton,
                            pressed && styles.buttonPressed,
                        ]}
                        onPress={handleEdit}
                    >
                        <Text style={[styles.buttonText, styles.editButtonText]}>Requires Editing</Text>
                    </Pressable>
                </View>
            </Animatable.View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: COLORS.background,
    },
    card: {
        backgroundColor: COLORS.surface,
        borderRadius: 10,
        padding: 25,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        color: COLORS.primary,
        textAlign: 'center',
        marginBottom: 25,
    },
    detailItem: {
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
        paddingBottom: 10,
    },
    detailLabel: {
        fontSize: 14,
        color: COLORS.textSecondary,
        marginBottom: 3,
    },
    detailValue: {
        fontSize: 17,
        color: COLORS.textPrimary,
        fontWeight: '500',
    },
    buttonContainer: {
        marginTop: 30,
    },
    button: {
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 15,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    confirmButton: {
        backgroundColor: COLORS.accent,
    },
    editButton: {
        backgroundColor: COLORS.surface, // White background
        borderWidth: 1,
        borderColor: COLORS.accent, // Accent border
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
    editButtonText: {
        color: COLORS.accent, // Accent text color
    },
    buttonPressed: {
        opacity: 0.8,
    },
});
// --- End of Styles ---

export default DonorConfirmation;
