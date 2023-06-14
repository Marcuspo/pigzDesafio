import React from "react";
import { View, TouchableOpacity } from 'react-native'
import LinearGradient from "react-native-linear-gradient";
import * as Styles from '../../styles'
import Icons from "../../../../components/Icons";
import { Circle, Line, Svg } from "react-native-svg";

const InformationDelivery = () => {
   return (
      <>
         <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#FF881F', '#FA641E']} style={{ marginHorizontal: 9, borderRadius: 15 }}>
            <Styles.ContainerDelivery>
               <Icons name='bike' width={24} height={24} />
               <Styles.ContainerInsideDelivery>
                  <Styles.TextDelivery>Entrega</Styles.TextDelivery>
                  <Styles.TextRoute>Percurso Total: 8km</Styles.TextRoute>
               </Styles.ContainerInsideDelivery>
            </Styles.ContainerDelivery>
         </LinearGradient><View style={{ marginLeft: 40 }}>
               <Svg height="50" width="100">
                  <Line x1="0" y1="0" x2="0" y2="100" stroke="#040404" strokeWidth="1" />
               </Svg>
            </View><View style={{ flexDirection: 'row' }}>
               <Svg height="17" width="1000">
                  <Circle cx="40" cy="9" r="8" fill="#FF881F" />
                  <View style={{ marginTop: -5, marginLeft: 60 }}>
                     <Styles.TextDeliveryLine>Coleta</Styles.TextDeliveryLine>
                  </View>
               </Svg>
            </View><View style={{ marginLeft: 40 }}>
               <Svg height="15" width="100">
                  <Line x1="0" y1="0" x2="0" y2="100" stroke="#040404" strokeWidth="1" />
               </Svg>
            </View><View style={{ flexDirection: 'row' }}>
               <Svg height="17" width="1000">
                  <Circle cx="40" cy="9" r="6" fill="white" stroke="#FF881F" />
                  <View style={{ marginTop: -2, marginLeft: 60 }}>
                     <Styles.TextDeliveryLineDescription>Restaurante Recanto da Peixada</Styles.TextDeliveryLineDescription>
                     <Styles.TextDistance>Distancia: 2km</Styles.TextDistance>
                  </View>
               </Svg>
            </View><View style={{ marginLeft: 40 }}>
               <Svg height="60" width="100">
                  <Line x1="0" y1="0" x2="0" y2="100" stroke="#040404" strokeWidth="1" />
               </Svg>
            </View><View style={{ flexDirection: 'row' }}>
               <Svg height="17" width="1000">
                  <Circle cx="40" cy="9" r="8" fill="#FF881F" />
                  <View style={{ marginTop: -5, marginLeft: 60 }}>
                     <Styles.TextDeliveryLine>Entrega</Styles.TextDeliveryLine>
                  </View>
               </Svg>
            </View><View style={{ marginLeft: 40 }}>
               <Svg height="15" width="100">
                  <Line x1="0" y1="0" x2="0" y2="100" stroke="#040404" strokeWidth="1" />
               </Svg>
            </View><View style={{ flexDirection: 'row' }}>
               <Svg height="17" width="1000">
                  <Circle cx="40" cy="9" r="6" fill="white" stroke="#FF881F" />
                  <View style={{ marginTop: -2, marginLeft: 60 }}>
                     <Styles.TextDeliveryLineDescription>Av: Cabo dos Soldados - Caranã</Styles.TextDeliveryLineDescription>
                     <Styles.TextDistance>Distancia: 6km</Styles.TextDistance>
                  </View>
               </Svg>
            </View><TouchableOpacity style={{ marginTop: 45 }}>
               <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#FF881F', '#FA641E']} style={{ borderRadius: 15 }}>
                  <Styles.ButtonAccept>
                     <Icons name='check' />
                     <Styles.TextNameAccept>Aceitar</Styles.TextNameAccept>
                  </Styles.ButtonAccept>
               </LinearGradient>
            </TouchableOpacity><TouchableOpacity style={{ marginBottom: 45, marginTop: 20 }}>
               <View style={{ borderWidth: 1, borderColor: '#E8453E', borderRadius: 16 }}>
                  <Styles.ButtonAccept>
                     <Icons name='decline' />
                     <Styles.TextNameDecline>Rejeitar</Styles.TextNameDecline>
                  </Styles.ButtonAccept>
               </View>
            </TouchableOpacity>
         </>
   )
}

export default InformationDelivery;