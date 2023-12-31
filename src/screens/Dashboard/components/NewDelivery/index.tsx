import React, { useState } from 'react';
import { TextInput, TouchableOpacity } from 'react-native'
import * as Styles from './styles';
import Icons from '../../../../components/Icons';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const NewDelivery = () => {
   const [newDelivery, setNewDelivery] = useState("");
   const navigation = useNavigation();

   return (
      <Styles.Container style={{ shadowOffset: {
         height: 7,
         width: 7,
      },
         shadowColor: 'black',
         shadowOpacity: 0,
         shadowRadius: 15,
         elevation: 15,
      }}>
         <Styles.TextHeader>Iniciar Nova Entrega</Styles.TextHeader>

         <Styles.TextInformation>Número de Identificação</Styles.TextInformation>
            <Styles.ContainerInputAndButton>
               <TextInput 
                  style={{ 
                     flex: 1, 
                     borderWidth: 1, 
                     borderColor: '#FA641E', 
                     borderRadius: 15, 
                     paddingLeft: 16, 
                     fontFamily: 'Poppins-Regular', 
                     fontSize: 14,
                     marginLeft: 14,
                     marginRight: 12,
                  }}
                  value={newDelivery}
                  onChangeText={setNewDelivery}
               />
               <Styles.ButtonOk onPress={() => navigation.navigate('Delivery')}>
                  <Styles.TextButton>Ok</Styles.TextButton>
               </Styles.ButtonOk>
            </Styles.ContainerInputAndButton>

            <TouchableOpacity>
               <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#FF881F', '#FA641E']} style={{marginBottom: 24, marginHorizontal: 14, borderRadius: 15}}>
                  <Styles.ContainerQrCode>
                     <Icons name="qrcode" />
                     <Styles.TextQrcode>Escanear Qrcode</Styles.TextQrcode>
                  </Styles.ContainerQrCode>
               </LinearGradient>
            </TouchableOpacity>

      </Styles.Container>
   )
}

export default NewDelivery;