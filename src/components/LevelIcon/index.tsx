import { Text, View } from 'react-native';
import { LevelProps } from '../../types/LevelIconProps';

export const LevelIcon = ({levelNumber, ...props}: LevelProps) => {
    return (
        <View {...props} style={{
          backgroundColor: '#7ADD8A',
          width: 80,
          height: 30,
          borderRadius: 30,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomColor: '#000',
          borderWidth: 1,
        }}>
          <Text style={{color: '#060F20', fontWeight: '900'}}>
            {levelNumber ?? 20}
          </Text>
        </View>
    )
}