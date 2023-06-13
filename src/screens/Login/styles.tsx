import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const FullContainer = styled.ScrollView.attrs({
     showsVerticalScrollIndicator: false
})`
     flex: 1;
     padding-horizontal: 24px;
     background-color: white;
`

export const TextHeader = styled.Text`
     font-family: 'Poppins-SemiBold';
     padding-top: 8px;
     font-size: ${RFValue(18)}px;
`

export const Container = styled.View`
     align-items: center;
`

export const ContainerInputs = styled.View`
     padding-top: 37px;
`

export const TextLogin = styled.Text`
     font-family: 'Poppins-SemiBold';
     font-size:  ${RFValue(16)}px;
`

export const NameEmailAndCell = styled.Text`
     font-family: 'Poppins-Regular';
     font-size:  ${RFValue(13)}px;
     color: #676767;
     padding-top: 16px;
     padding-bottom: 6px;
`

export const TextPassword = styled(NameEmailAndCell)`
     font-size:  ${RFValue(14)}px;
     font-family: 'Roboto-Regular';
     padding-top: 17px;
`

export const ButtonHideAndShow = styled.TouchableOpacity`
     position: absolute;
     top: 10px;
     right: 16px;
`

export const ButtonForgetPassword = styled.View`
`

export const TextButton = styled(NameEmailAndCell)`
     padding-top: 24px;
     text-decoration: underline;
`
export const ButtonSignIn = styled.TouchableOpacity`
     width: 100%;
     height: 48px;
     align-items: center;
     justify-content: center;
`

export const TextNameSignIn = styled.Text`
     font-size:  ${RFValue(16)}px;
     color: #FFF;
     font-family: 'Poppins-Medium';
`

export const ContainerNewAccount = styled.TouchableOpacity`
     margin-top: 36px;
     justify-content: center;
     align-items: center;
`

export const TextNewAccount = styled.Text`
     font-size:  ${RFValue(13)}px;
     font-family: 'Poppins-Regular';
`

export const TextNewAccountColored = styled.Text`
     color: #FA641E;
`
export const ContainerFooter = styled.View`
     align-items: center;
     margin-top: 97px;
     flex-direction: row;
`

export const NameFooter = styled.Text`
     font-family: 'Poppins-SemiBold';
     font-size: ${RFValue(13)}px;
     margin-right: 10px;
`

export const ButtonGoogle = styled.TouchableOpacity`
     margin-vertical: 24px;
     flex-direction: row;
     justify-content: space-between;
     align-items: center;
     border-width: 1px;
     border-color: black;
     padding-horizontal: 16px;
     padding-vertical: 14px;
     border-radius: 18px;
`

export const TextGoogleButton = styled.Text`
     font-family: 'Poppins-Medium';
     font-size: ${RFValue(16)}px;
     color: #676767;
`
