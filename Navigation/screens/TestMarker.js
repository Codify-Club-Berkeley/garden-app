import * as React from 'react';
import { View, Text} from 'react-native';

export default function MarkerScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#efe4be" }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Test Marker Screen</Text>
        </View>
    );
}