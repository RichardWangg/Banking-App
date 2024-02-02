import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const transactionStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#2F3E50',
        paddingVertical: scale(15)
    },

    title: {
        fontSize: scale(16),
        color: 'white',
        width: scale(210),
        borderRightWidth: 1,
        borderRightColor: 'white'
    },

    price: {
        fontSize: scale(16),
        color: 'white',
        textAlign: 'right',
        width: scale(85),
    }

});

export default transactionStyles;