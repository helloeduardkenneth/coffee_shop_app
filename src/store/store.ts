import { create } from 'zustand'
import { produce } from 'immer'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'
import CoffeeData from '../data/CoffeeData'
import BeanData from '../data/BeanData'

export const useStore = create(
    persist(
        (set, get) => ({
            CoffeeList: CoffeeData,
            BeanList: BeanData,
            CartPrice: 0,
            FavoritesList: [],
            CartList: [],
            OrderHistoryList: [],
        }),
        {
            name: 'coffee-shop',
            storage: createJSONStorage(() => AsyncStorage),
        },
    ),
)
