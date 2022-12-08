import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, Button, Alert} from 'react-native';


export default function MarkerScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#efe4be" }}>
            <>
                <ScrollView>
                    <Button 
                    title="Valley Oak Tree >" 
                    onPress= {() => Alert.alert('Navigate to valley oak!')}/>

                    <Text>Marker 1: Valley Oak Tree</Text>
                    <Text>Marker 2: Some Other Stop</Text>
                    <Text>Marker 3: Stop 3</Text>
                    <Text>Marker 4</Text>
                </ScrollView>
            </>
        </View>
    );
}


{/* <Text
    onPress={() => navigation.navigate('Home')}
    style={{ fontSize: 26, fontWeight: 'bold' }}>Marker Screen
    </Text>
     */}