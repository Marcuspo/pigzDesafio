import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
   background-color: white;
   margin-horizontal: 15px;
   border-radius: 15px;
   width: 92%;
   margin-top: 32px;
`;

export const TextHeader = styled.Text`
   font-size: ${RFValue(16)}px;
   font-family: 'Poppins-Bold';
   padding: 12px 12px 8px;
   color: #333333;
`;

export const TextInformation = styled.Text`
   margin-horizontal: 15px;
   padding-bottom: 10px;
   color: #707070;
   font-family: 'Poppins-Regular';
   font-size: ${RFValue(12)}px;
`

export const ContainerInputAndButton = styled.View`
   margin-bottom: 18px;
   flex-direction: row;
   justify-content: flex-start;
   align-items: center;
`

export const ButtonOk = styled.TouchableOpacity`
   align-items: center;
   justify-content: center;
   background-color: #FF671F;
   margin-right: 14px;
   padding: 12px 20px 10px 20px;
   border-radius: 16px;
   elevation: 10;
`

export const TextButton = styled.Text`
   text-transform: uppercase;
   font-size: ${RFValue(17)}px;
   color: #fff;
   font-family: 'Poppins-Medium';
`

export const ContainerQrCode = styled.View`
   flex-direction: row;
   justify-content: center;
   align-items: center;
   padding: 12px;
`

export const TextQrcode = styled.Text`
   font-family: 'Poppins-Light';
   font-size: ${RFValue(16)}px;
   margin-left: 8px;
   margin-top: 4px;
   color: #FFFFFF;
`
