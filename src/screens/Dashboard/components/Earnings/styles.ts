import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
   height: 107px;
`

export const Header = styled.View`
   flex-direction: row;
   justify-content: space-between;
   padding-horizontal: 16px;
   padding-top: 16px;
`

export const TextEarnings = styled.Text`
   font-size: ${RFValue(16)}px;
   font-family: 'Poppins-Medium';
   color: #FFFF;
`

export const DateTime = styled(TextEarnings)``

export const Footer = styled.View`
   padding-top: 3px;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   padding-horizontal: 16px;
`

export const TextValue = styled.Text`
   font-family: 'Poppins-Bold';
   font-size: ${RFValue(30)}px;
   color: #fff;
`

