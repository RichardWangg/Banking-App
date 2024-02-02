import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal, } from 'react-native';
import BottomSheet from 'react-native-simple-bottom-sheet';
import TransactionInput from './transactionInput.jsx';
import Transaction from './transaction.jsx';
import { scale } from 'react-native-size-matters';
import menuStyles from '../styles/menuStyles.js';

export default function Menu() {
    const [transactions, setTransactions] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    const handleTransactionSubmit = ({ title, price }) => {

        console.log('Transaction submitted:', { title, price });
    };

    return (
        <BottomSheet isOpen wrapperStyle={menuStyles.sheetContainer}>
            {(onScrollEndDrag) => (
                <View>
                    <FlatList
                        data={transactions}
                        keyExtractor={(item, index) => `transaction-${index}`}
                        renderItem={({ item, index }) => (
                            <View>
                                {item}
                            </View>
                        )}
                        ListHeaderComponent={() => (
                            <View style={menuStyles.buttonCont}>
                                <TouchableOpacity
                                    style={menuStyles.button}
                                    onPress={() => setModalVisible(true)}
                                >
                                    <Text style={menuStyles.buttonTitle}> Add Transaction </Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        ItemSeparatorComponent={() => <View style={menuStyles.separator} />}
                        onScrollEndDrag={onScrollEndDrag}
                        contentContainerStyle={menuStyles.contentContainer}
                        indicatorStyle="black"
                        removeClippedSubviews
                    />
                    <Modal
                        transparent
                        animationType="slide"
                        visible={modalVisible}
                        onRequestClose={() => setModalVisible(false)}
                    >
                        <View style={menuStyles.modalContainer}>
                            <View style={menuStyles.modalContent}>
                                <TransactionInput onSubmit={handleTransactionSubmit} />
                                <View style={menuStyles.modalButtonsCont}>
                                    <TouchableOpacity onPress={() => setModalVisible(false)} style={menuStyles.modalButtons}>
                                        <Text style={{ color: 'white', textAlign: 'left' }}>Close</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </View>
                    </Modal>
                </View >
            )
            }
        </BottomSheet >
    );
}
