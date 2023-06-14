import React from 'react';
import { View } from 'react-native';
import * as Styles from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icons from '../../components/Icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Earnings from './components/Earnings';
import Resume from './components/Resume';
import NewDelivery from './components/NewDelivery';

const Dashboard = () => {
     const insets = useSafeAreaInsets();

     return (
          <KeyboardAwareScrollView style={{flex: 1, backgroundColor: 'white'}}>
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
                                   <Styles.TextHeader>Visão geral</Styles.TextHeader>
                                   <View style={{ width: 20}} />
                         </Styles.Header>

                         <Earnings
                              nameHeader='Ganhos do dia'
                              date='29/07'
                              value='R$ 150'
                              showIcon
                         />

                         <Resume
                              titleResume='Resumos das Entregas'
                              valueAccepted={15}
                              valueRejected={5}
                              valueTotal={20}
                         />

                         <NewDelivery />

                    </Styles.Container>
               </Styles.FullContainer>
          </KeyboardAwareScrollView>
          
     )
}

export default Dashboard;