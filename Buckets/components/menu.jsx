import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import BottomSheet from 'react-native-simple-bottom-sheet';
import Transactions from './transaction.jsx';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import menuStyles from '../styles/menuStyles.js';


export default function Menu() {
    const sheetContainer = { backgroundColor: 'black', alignItems: 'center' };
    const centerAlign = { alignItems: 'center' };
    const [extraPad, setExtraPad] = useState(true);
    const [transactions, setTransactions] = useState([]);

    const addTransaction = () => {
        // Add a new Transaction component to the transactions array
        setTransactions([...transactions, <Transactions key={transactions.length} />]);

        if (transactions.length > 4) {
            setExtraPad(false);
        }
    };


    return (
        <BottomSheet
            isOpen
            wrapperStyle={sheetContainer}
        >
            {(onScrollEndDrag) => (
                <ScrollView
                    onScrollEndDrag={onScrollEndDrag}
                    contentContainerStyle={centerAlign}
                    persistentScrollbar={true}
                >
                    <View style={extraPad ? menuStyles.buttonCont : menuStyles.buttonContFalse}>
                        <TouchableOpacity style={menuStyles.button} onPress={addTransaction}>
                            <Text style={menuStyles.buttonTitle}> Add Transaction </Text>
                        </TouchableOpacity>
                    </View>

                    {transactions.map((transaction, index) => (
                        <View key={`transaction-${index}`}>
                            {transaction}
                        </View>
                    ))}
                </ScrollView>
            )}
        </BottomSheet>
    );
};
