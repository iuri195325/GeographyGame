import { useWindowDimensions } from 'react-native';

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export const useResponsive = () => {
    const { width, height } = useWindowDimensions();
    const shortSide = Math.min(width, height);
    const isLandscape = width > height;
    const isWide = shortSide >= 600;

    return {
        width,
        height,
        isLandscape,
        isWide,
        scale: clamp(shortSide / 390, 0.85, 1.35),
    };
};
