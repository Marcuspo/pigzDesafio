import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
   background-color: white;
   margin-horizontal: 15px;
   border-radius: 15px;
   width: 92%;
`;

export const TextHeader = styled.Text`
   font-size: ${RFValue(16)}px;
   font-family: 'Poppins-Bold';
   padding: 12px 12px 18px;
   color: #333333;
`;


export const ContainerInside = styled.View`
   flex-direction: row;
   justify-content: center;
   margin-bottom: 32px;
`

export const Box = styled.View`
   margin-horizontal: 6px;
   border-width: 1px;
   border-color: #F0F0F0F0;
   border-radius: 9px;
   align-items: center;
   justify-content: center;
`

export const TitleBox = styled.Text`
   font-family: 'Poppins-Regular';
   font-size: ${RFValue(11)}px;
   color: #9F9F9F;
   padding-top: 9px;
   padding-horizontal: 20px;
`

export const ValueBox = styled.Text`
   font-family: 'Poppins-Medium';
   font-size: ${RFValue(40)}px;
   color: #333333;
   padding-horizontal: 5px;
`
