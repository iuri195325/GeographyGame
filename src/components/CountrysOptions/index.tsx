import { useEffect, useRef } from 'react';
import { Animated, Image, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { styles, statusStyles } from '../../styles/CountrysOptionsStyles';
import { CountrysOptionsProps } from '../../types/CountrysOptionsProps';

export const CountrysOptions = ({ nome, imageName, status = 'idle', flagSize = 56, style, ...props }: CountrysOptionsProps) => {
    const palette = statusStyles[status];
    const pressScale = useRef(new Animated.Value(1)).current;
    const cardRef = useRef<any>(null);

    useEffect(() => {
        if (status === 'correct') cardRef.current?.pulse(700);
        if (status === 'wrong') cardRef.current?.shake(700);
    }, [status]);

    const pressIn = () => {
        Animated.spring(pressScale, { toValue: 0.94, useNativeDriver: true, speed: 40, bounciness: 0 }).start();
    };
    const pressOut = () => {
        Animated.spring(pressScale, { toValue: 1, useNativeDriver: true, speed: 20, bounciness: 8 }).start();
    };

    const { width: wrapperWidth, ...restStyle } = (style ?? {}) as ViewStyle;

    return (
        <Animated.View style={[{ width: wrapperWidth, transform: [{ scale: pressScale }] }]}>
            <TouchableOpacity
                activeOpacity={0.9}
                {...props}
                onPressIn={(e) => { pressIn(); props.onPressIn?.(e); }}
                onPressOut={(e) => { pressOut(); props.onPressOut?.(e); }}
                disabled={status !== 'idle'}
                style={{ flex: 1 }}
            >
                <Animatable.View ref={cardRef} style={[styles.container, palette.container, restStyle]}>
                    <View style={[styles.flagWrapper, { width: flagSize + 8, height: flagSize + 8 }]}>
                        <Image style={[styles.flag, { width: flagSize, height: flagSize }]} source={{ uri: imageName }} />
                    </View>
                    <Text style={[styles.text, palette.text]} numberOfLines={2}>{nome}</Text>
                </Animatable.View>
            </TouchableOpacity>
        </Animated.View>
    )
}