import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


const HeaderStyles = StyleSheet.create({
    headerAmounts: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: scale(15)
    },

    headerTotal: {
    },

    headerTotalText: {
        color: '#ECF0F5',
        fontSize: scale(40)
    },

    headerUntracked: {
        paddingTop: scale(10),
        paddingLeft: scale(5)
    },

    headerUntrackedText: {
        color: '#ECF0F5',
        fontSize: scale(17)
    },


});

export default HeaderStyles;