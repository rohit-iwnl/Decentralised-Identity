import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import { Button } from 'react-native-elements';

import { WalletConnectModal,useWalletConnectModal } from '@walletconnect/modal-react-native'

const projectId = 'a9deae8e4c1815815a60a18044a665aa'

const providerMetadata = {
  name: 'soulbound',
  description: 'YOUR_PROJECT_DESCRIPTION',
  url: 'https://your-project-website.com/',
  icons: ['https://your-project-logo.com/'],
  redirect: {
    native: 'YOUR_APP_SCHEME://',
    universal: 'YOUR_APP_UNIVERSAL_LINK.com'
  }
}

export default function App() {

  const {open , isConnected ,provider,address } = useWalletConnectModal();

  const onPress = () =>{
    if(isConnected){
      provider.disconnect()
    }else{
      open();
    }
  }

  return (  
    <View style={styles.container}>
    <Text>Hello Soulbound</Text>
    <WalletConnectModal projectId={projectId} providerMetadata={providerMetadata} />
    <Button title="Connect Wallet" type='outline' onPress={onPress}/>
    <Text>{isConnected? address : "Wallet not connected yet" }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
