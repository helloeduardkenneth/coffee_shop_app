interface Size {
    size_1: number
    size_2: number
    size_4: number
    size_8: number
    size_10: number
    size_12: number
    size_14: number
    size_16: number
    size_20: number
    size_24: number
    size_28: number
    size_32: number
    size_36: number
    size_40: number
    size_44: number
    size_48: number
    size_52: number
    size_56: number
    size_60: number
    size_64: number
    size_72: number
    size_80: number
    size_96: number
}

export const SIZES: Size = {
    size_1: 1,
    size_2: 2,
    size_4: 4,
    size_8: 8,
    size_10: 10,
    size_12: 12,
    size_14: 14,
    size_16: 16,
    size_20: 20,
    size_24: 24,
    size_28: 28,
    size_32: 32,
    size_36: 36,
    size_40: 40,
    size_44: 44,
    size_48: 48,
    size_52: 52,
    size_56: 56,
    size_60: 60,
    size_64: 64,
    size_72: 72,
    size_80: 80,
    size_96: 96,
}

interface Width extends Size {}
interface Height extends Size {}

export const WIDTH: Width = {
    ...SIZES,
}

export const HEIGHT: Height = {
    ...SIZES,
}

interface Spacing {
    space_2: number
    space_4: number
    space_8: number
    space_10: number
    space_12: number
    space_15: number
    space_16: number
    space_18: number
    space_20: number
    space_24: number
    space_28: number
    space_30: number
    space_32: number
    space_36: number
}

export const SPACING: Spacing = {
    space_2: 2,
    space_4: 4,
    space_8: 8,
    space_10: 10,
    space_12: 12,
    space_15: 15,
    space_16: 16,
    space_18: 18,
    space_20: 20,
    space_24: 24,
    space_28: 28,
    space_30: 30,
    space_32: 32,
    space_36: 36,
}

interface Color {
    primaryRedHex: string
    primaryOrangeHex: string
    primaryBlackHex: string
    primaryDarkGreyHex: string
    secondaryDarkGreyHex: string
    primaryGreyHex: string
    secondaryGreyHex: string
    primaryLightGreyHex: string
    secondaryLightGreyHex: string
    primaryWhiteHex: string
    primaryBlackRGBA: string
    secondaryBlackRGBA: string
}

export const COLORS: Color = {
    primaryRedHex: '#DC3535',
    primaryOrangeHex: '#D17842',
    primaryBlackHex: '#0C0F14',
    primaryDarkGreyHex: '#141921',
    secondaryDarkGreyHex: '#21262E',
    primaryGreyHex: '#252A32',
    secondaryGreyHex: '#252A32',
    primaryLightGreyHex: '#52555A',
    secondaryLightGreyHex: '#AEAEAE',
    primaryWhiteHex: '#FFFFFF',
    primaryBlackRGBA: 'rgba(12,15,20,0.5)',
    secondaryBlackRGBA: 'rgba(0,0,0,0.7)',
}

interface FontFamily {
    poppins_black: string
    poppins_bold: string
    poppins_extrabold: string
    poppins_extralight: string
    poppins_light: string
    poppins_medium: string
    poppins_regular: string
    poppins_semibold: string
    poppins_thin: string
}

export const FONTFAMILY: FontFamily = {
    poppins_black: 'Poppins-Black',
    poppins_bold: 'Poppins-Bold',
    poppins_extrabold: 'Poppins-ExtraBold',
    poppins_extralight: 'Poppins-ExtraLight',
    poppins_light: 'Poppins-Light',
    poppins_medium: 'Poppins-Medium',
    poppins_regular: 'Poppins-Regular',
    poppins_semibold: 'Poppins-SemiBold',
    poppins_thin: 'Poppins-Thin',
}

interface FontSize {
    size_8: number
    size_10: number
    size_12: number
    size_14: number
    size_16: number
    size_18: number
    size_20: number
    size_24: number
    size_28: number
    size_30: number
}

export const FONTSIZE: FontSize = {
    size_8: 8,
    size_10: 10,
    size_12: 12,
    size_14: 14,
    size_16: 16,
    size_18: 18,
    size_20: 20,
    size_24: 24,
    size_28: 28,
    size_30: 30,
}

interface BorderRadius {
    radius_4: number
    radius_8: number
    radius_10: number
    radius_15: number
    radius_20: number
    radius_25: number
}

export const BORDERRADIUS: BorderRadius = {
    radius_4: 4,
    radius_8: 8,
    radius_10: 10,
    radius_15: 15,
    radius_20: 20,
    radius_25: 25,
}
