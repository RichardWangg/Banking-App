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
        backgroundColor: 'none',
    },

    buttonTitle: {
        color: 'white',
        fontSize: scale(18),
    },

    buttonCont: {
        paddingBottom: scale(10)
    },

    sheetContent: {
        alignItems: 'center'
    },

    separator: {
        height: 1,
        backgroundColor: "grey",
    },

    sheetContainer: {
        backgroundColor: '#041F3D',
        alignItems: 'center',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        height: scale(500)
    },

    contentContainer: {
        alignItems: 'center',
        paddingRight: scale(10)
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    modalContent: {
        backgroundColor: '#2F3E50',
        padding: 20,
        borderRadius: 10,
        width: 390,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,

    },

    modalButtonsCont: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: 'white'
    },

    modalButtons: {
        paddingVertical: scale(5),
    }
});

export default menuStyles;