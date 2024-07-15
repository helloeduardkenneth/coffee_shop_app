import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { BORDERRADIUS, COLORS, HEIGHT, WIDTH } from '../theme/theme'
import CustomIcon from './CustomIcon'

interface GradientBGIconProps {
    name: string
    color: string
    size: number
}

const GradientBGIcon: React.FC<GradientBGIconProps> = ({
    name,
    color,
    size,
}) => {
    return (
        <View style={styles.container}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 0 }}
                colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
                style={styles.linearGradientBG}>
                <CustomIcon name={name} color={color} size={size} />
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: COLORS.secondaryDarkGreyHex,
        borderRadius: BORDERRADIUS.radius_10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.secondaryDarkGreyHex,
        overflow: 'hidden',
    },
    linearGradientBG: {
        height: HEIGHT.size_36,
        width: WIDTH.size_36,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default GradientBGIcon
