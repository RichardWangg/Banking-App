import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const menuStyles = StyleSheet.create({
    button: {
        paddingHorizontal: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        borderRadius: 10,
        width: scale(200),
        elevation: 3,
        backgroundColor: 'lightblue',
    },

    buttonTitle: {
        color: 'white',
        fontSize: scale(18),
    },

    buttonCont: {
        paddingBottom: scale(50)
    },

    buttonContFalse: {
        paddingBottom: scale(10)
    },

    sheetContent: {
        alignItems: 'center'
    }
});

export default menuStyles;