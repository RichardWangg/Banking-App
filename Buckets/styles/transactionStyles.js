import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const transactionStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'black',
        paddingVertical: scale(15)
    },

    title: {
        fontSize: scale(16),
        color: '#ABADAE',
        width: scale(210),
    },

    price: {
        fontSize: scale(16),
        color: '#ABADAE',
        textAlign: 'right',
        width: scale(85),
    }

});

export default transactionStyles;