import React from 'react';
import { View } from 'react-native';
import * as Styles from '../../styles'
import { Line, Svg } from 'react-native-svg';

const HeaderInformation = () => {
   return (
      <>
      <Styles.ContainerTime>
         <Styles.ContainerInside>
            <Styles.TextTimeEstimated>Tempo Estimado</Styles.TextTimeEstimated>
            <Styles.TextTime>30 Min</Styles.TextTime>
         </Styles.ContainerInside>
         <Styles.ContainerInside>
            <Styles.TextTimeEstimated>Número de ID</Styles.TextTimeEstimated>
            <Styles.TextTime>#6789</Styles.TextTime>
         </Styles.ContainerInside>
      </Styles.ContainerTime>

      <View style={{ marginTop: 14, marginBottom: 20 }}>
            <Svg height="1" width="100%">
               <Line x1="0" y1="0" x2="110000" y2="0" stroke="#707070" strokeWidth="2" />
            </Svg>
      </View>

      <Styles.ContainerValueDelivery>
            <Styles.HeaderTitle>Valor da Entrega</Styles.HeaderTitle>
            <Styles.ValueDelivery>R$ 13,75</Styles.ValueDelivery>
      </Styles.ContainerValueDelivery>
 </>
   )
}

export default HeaderInformation;