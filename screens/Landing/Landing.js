import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Landing = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
    <View>
      <Text>Landing</Text>
    </View>
    </SafeAreaView>
  )
}

export default Landing

const styles = StyleSheet.create({})