import React, { useRef } from 'react';
import { View, TextInput } from 'react-native';
import transactionStyles from '../styles/transactionInputStyles.js';

export default function TransactionInput({ onSubmit }) {
    const titleInputRef = useRef(null);  // Ref for the first input field
    const [title, onChangeTitle] = React.useState('');
    const [price, onChangePrice] = React.useState('');

    const formatNumberWithCommas = (number) => {
        // Remove non-digit characters and leading zeros
        const cleanedValue = number.replace(/[^0-9.]/g, '').replace(/^0+/g, '');

        // Split the value into integer and decimal parts
        const [integerPart, decimalPart] = cleanedValue.split('.');

        // Format the integer part with commas
        const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        // Limit decimal part to two places
        const formattedDecimal = decimalPart ? `.${decimalPart.slice(0, 2)}` : '';

        return `${formattedInteger}${formattedDecimal}`;
    };

    const handleTitleEndEditing = () => {
        // Focus on the second input field when hitting "Done" on the first field
        titleInputRef.current && titleInputRef.current.focus();
    };

    const handlePriceEndEditing = () => {
        // Apply formatting when the user finishes editing the price field
        onChangePrice(formatNumberWithCommas(price));
    };

    const handleSubmit = () => {
        // Call the onSubmit prop with the title and price
        onSubmit({ title, price });
    };

    return (
        <View style={transactionStyles.container}>
            <TextInput
                style={transactionStyles.title}
                onChangeText={onChangeTitle}
                value={title}
                placeholder='Name of transaction'
                placeholderTextColor={'#7B7F81'}
                multiline
                blurOnSubmit={true}
                returnKeyType="done"
                onSubmitEditing={handleTitleEndEditing}
                textAlignVertical="center"
                keyboardAppearance="dark"
                autoFocus={true}
            />
            <TextInput
                ref={titleInputRef}  // Assign the ref to the first input field
                style={transactionStyles.price}
                onChangeText={(value) => onChangePrice(value)}
                onEndEditing={handlePriceEndEditing}
                onSubmitEditing={handleSubmit}
                value={price}
                keyboardType="numeric"
                placeholder='0.00'
                placeholderTextColor={'#7B7F81'}
                multiline
                blurOnSubmit={true}
                returnKeyType="done"
                textAlignVertical="center"
                keyboardAppearance="dark"
            />
        </View>
    );
}
