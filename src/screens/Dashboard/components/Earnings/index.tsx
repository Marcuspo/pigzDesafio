import React, { useState } from 'react';
import * as Styles from './styles';
import { TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Icons from '../../../../Components/Icons';

interface Props {
   nameHeader: string;
   date: string;
   value: string;
   showIcon: boolean;
}

const Earnings = ({nameHeader, date, value, showIcon}: Props) => {
   const [showValue, setShowValue] = useState(false);
   return (
      <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#FF881F', '#FA641E']} style={{marginTop: 59, marginBottom: 32, marginHorizontal: 15, borderRadius: 15}}>
         <Styles.Container>
            <Styles.Header>
               <Styles.TextEarnings>{nameHeader ? nameHeader : ''}</Styles.TextEarnings>
               <Styles.DateTime>{date ? date : ''}</Styles.DateTime>
            </Styles.Header>

            <Styles.Footer>
               <Styles.TextValue>{value && showValue ? value : '*****'}</Styles.TextValue>
               {showIcon ? (
                  <TouchableOpacity onPress={() => setShowValue(!showValue)}>
                     <Icons name={!showValue ? "eye" : "eye-slash"} height={30} width={40} color='#FFF' />
                  </TouchableOpacity>
               ) : null}
            </Styles.Footer>
         </Styles.Container>
      </LinearGradient>
      
   )
}

export default Earnings;