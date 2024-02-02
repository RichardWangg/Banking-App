import React, { useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated, PanResponder } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const windowHeight = Dimensions.get('window').height;

const CustomBottomSheet = () => {
    const translateY = useRef(new Animated.Value(windowHeight)).current;

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, { dy: translateY }], {
                useNativeDriver: false,
            }),
            onPanResponderRelease: (_, gestureState) => {
                // Adjust the snap points based on your requirements
                const snapPoints = [windowHeight / 2, 0];
                const nearestSnapPoint = snapPoints.reduce((prev, point) =>
                    Math.abs(gestureState.dy - prev) < Math.abs(gestureState.dy - point) ? prev : point
                );

                Animated.spring(translateY, {
                    toValue: nearestSnapPoint,
                    useNativeDriver: false,
                }).start();
            },
        })
    ).current;

    return (
        <Animated.View
            style={[
                styles.bottomSheet,
                {
                    transform: [{ translateY }],
                },
            ]}
            {...panResponder.panHandlers}
        >
            <TouchableOpacity style={styles.snapPoint}>
                <Text>Snap Point 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.snapPoint}>
                <Text>Snap Point 2</Text>
            </TouchableOpacity>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    bottomSheet: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 16,
        minHeight: windowHeight / 2,
    },
    snapPoint: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
    },
});

export default CustomBottomSheet;
