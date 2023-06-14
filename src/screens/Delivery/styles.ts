import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const FullContainer = styled.ScrollView`
     flex: 1;
     padding-horizontal: 24px;
     background-color: 'white';
`

export const Container = styled.View`
     flex: 1;
`

export const Header = styled.View`
     flex-direction: row;
     justify-content: space-between;
     align-items: center;
`

export const Button = styled.TouchableOpacity`

`

export const TextHeader = styled.Text`
     font-size: ${RFValue(18)}px;
     font-family: 'Poppins-Medium';
     color: #222222;
`
export const ContainerTime = styled.View`
   margin-top: 60px;
   flex-direction: row;
   justify-content: space-around;
   margin-horizontal: 15px;
`

export const ContainerInside = styled.View`
   align-items: center;
`

export const TextTimeEstimated = styled.Text`
   font-size: ${RFValue(14)}px;
   color: #707070;
   font-family: 'Poppins-Regular';
`

export const TextTime = styled.Text`
   font-family: 'Poppins-Bold';
   font-size: ${RFValue(20)}px;
   color: #FA641F;
`
export const ContainerValueDelivery = styled.View`
   padding-bottom: 35px;
   align-items: center;
   justify-content: center;
`

export const HeaderTitle = styled.Text`
   font-family: 'Poppins-Regular';
   font-size: ${RFValue(14)}px;
   color: #707070;
`

export const ValueDelivery = styled.Text`
   font-family: 'Poppins-Bold';
   font-size: ${RFValue(35)}px;
   color: #FA641F;
`
export const ContainerDelivery = styled.View`
   flex-direction: row;
   padding: 7px 12px 5px 20px;
   align-items: center;
`

export const ContainerInsideDelivery = styled.View`
   padding-left: 14px;
`

export const TextDelivery = styled.Text`
   font-family: 'Poppins-Medium';
   font-size: ${RFValue(18)}px;
   color: #FFFF;
`

export const TextRoute = styled(TextDelivery)`
   font-family: 'Poppins-Regular';
   font-size: ${RFValue(12)}px;
`

export const TextDeliveryLine = styled.Text`
   font-family: 'Poppins-Medium';
   font-size: ${RFValue(18)}px;
   color: #FA641F;
`
export const TextDeliveryLineDescription = styled.Text`
   font-family: 'Poppins-Regular';
   font-size: ${RFValue(14)}px;
   color: #707070;
`
export const TextDistance = styled(TextDeliveryLineDescription)``

export const ButtonAccept = styled.View`
   margin-top: 13px;
   margin-bottom: 12px;
   align-items: center;
   flex-direction: row;
   justify-content: center;
`

export const TextNameAccept = styled.Text`
   font-family: 'Poppins-Medium';
   font-size: ${RFValue(16)}px;
   color: #FFF;
   margin-top: 3px;
   margin-left: 6px;
`

export const TextNameDecline = styled(TextNameAccept)`
   color: #E8453E;

`