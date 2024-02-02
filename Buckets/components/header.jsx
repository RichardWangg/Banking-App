import React from 'react';
import { View, Text } from 'react-native';
import HeaderStyles from '../styles/headerStyles.js';

export default function Header() {
    return (
        <View style={HeaderStyles.headerAmounts}>
            <View style={HeaderStyles.headerTotal}>
                <Text style={HeaderStyles.headerTotalText}>Total:</Text>
            </View>
            <View style={HeaderStyles.headerUntracked}>
                <Text style={HeaderStyles.headerUntrackedText}>Untracked:</Text>
            </View>
        </View>
    );
}
