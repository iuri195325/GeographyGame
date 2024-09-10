import { View, ViewProps } from 'react-native';

export const Column = ({children,style, ...props}: ViewProps) => {
    return (
        <View {...props} style={[{flexDirection: 'column'}, style] }>
          {children}
        </View>
    )
}