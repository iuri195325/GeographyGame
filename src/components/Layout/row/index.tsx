import { StyleSheet, View, ViewProps } from 'react-native';

export const Row = ({children, style, ...props}: ViewProps) => {
    return (
        <View style={[{flexDirection: 'row'}, style]} {...props}>
          {children}
        </View>
    )
}