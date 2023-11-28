import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ConnectWallet } from '@thirdweb-dev/react-native'

const Testing = () => {
  return (
    <View style={styles.container}>
      <ConnectWallet />
    </View>
  )
}

export default Testing

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})