import React, { useState } from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { useStore } from '../store/store'
import { COLORS } from '../theme/theme'
import HeaderBar from '../components/HeaderBar'

const getCategoriesFromData = (data: any) => {
    let temp: any = {}
    for (let i = 0; i < data.length; i++) {
        if (temp[data[i].name] == undefined) {
            temp[data[i].name] = 1
        } else {
            temp[data[i].name]++
        }
    }

    let categories = Object.keys(temp)
    categories.unshift('All')
    return categories
}

const getCoffeeList = (category: string, data: any) => {
    if ('All') {
        return data
    } else {
        let coffeelist = data.filter((item: any) => item.name) == category
        return coffeelist
    }
}

const HomeScreen = () => {
    const CoffeeList = useStore((state: any) => state.CoffeeList)
    console.log('Coffee List = ', CoffeeList.length)

    const BeanList = useStore((state: any) => state.BeanList)
    console.log('Coffee Bean List: ', BeanList.length)

    const [categories, setCategories] = useState(
        getCategoriesFromData(CoffeeList),
    )
    const [searchText, setSearchText] = useState(undefined)
    const [categoryIndex, setCategoryIndex] = useState({
        index: 0,
        category: categories[0],
    })
    const [sortedList, setSortedList] = useState(undefined)

    return (
        <View style={styles.screenContainer}>
            <StatusBar backgroundColor={COLORS.primaryBlackHex} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewFlex}>
                <HeaderBar />
            </ScrollView>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: COLORS.primaryBlackHex,
    },
    scrollViewFlex: {
        flexGrow: 1,
    },
})
