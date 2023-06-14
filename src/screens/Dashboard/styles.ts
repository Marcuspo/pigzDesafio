import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const FullContainer = styled.View`
     flex: 1;
     padding-horizontal: 24px;
     background-color: '#FFF';
     margin-bottom: 40px;
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
