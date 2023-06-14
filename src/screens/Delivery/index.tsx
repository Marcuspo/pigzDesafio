import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Styles from './styles'
import Icons from '../../components/Icons';
import HeaderInformation from './components/HeaderInformation';
import InformationDelivery from './components/InformationDelivery';

const Delivery = () => {
     const insets = useSafeAreaInsets();

     return (
          <Styles.FullContainer>
               <Styles.Container style={{
                    paddingTop: insets.top + 20,
                    paddingBottom: insets.bottom,
                    paddingLeft: insets.left,
                    paddingRight: insets.right,
               }}>
                    <Styles.Header>
                         <Styles.Button>
                              <Icons name="back-button"  width={25} height={30} color='#FF671F' />
                         </Styles.Button>
                              <Styles.TextHeader>Nova entrega</Styles.TextHeader>
                              <View style={{ width: 20}} />
                    </Styles.Header>

                    <HeaderInformation />
                         
                    <InformationDelivery />

               </Styles.Container>

          </Styles.FullContainer>
     )
}

export default Delivery;