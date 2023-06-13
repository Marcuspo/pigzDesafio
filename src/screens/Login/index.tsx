import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import Icons from '../../Components/Icons';
import * as Styles from './styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { Line, Svg } from 'react-native-svg';

const Login = () => {
     const [emailAndCell, setEmailAndCell] = useState("");
     const [password, setPassword] = useState("");
     const [showPassword, setShowPassword] = useState(true);
     const insets = useSafeAreaInsets();
     return (
          <Styles.FullContainer>
               <Styles.Container style={{
                    paddingTop: insets.top + 93,
                    paddingBottom: insets.bottom,
                    paddingLeft: insets.left,
                    paddingRight: insets.right
               }}>
                    <Icons name="pigz-logo" />
                    <Styles.TextHeader>Para entregadores</Styles.TextHeader>
               </Styles.Container>
               <Styles.ContainerInputs>
                    <Styles.TextLogin>Login</Styles.TextLogin>

                    <Styles.NameEmailAndCell>Email ou telefone</Styles.NameEmailAndCell>

                    <TextInput
                         value={emailAndCell}
                         onChangeText={setEmailAndCell}
                         placeholder='example@pigz.com.br'
                         keyboardType='email-address'
                         style={{ borderWidth: 1, borderColor: '#FA641E', borderRadius: 15, paddingLeft: 16, fontFamily: 'Poppins-Regular', fontSize: 14}}
                         
                    />

                    <Styles.TextPassword>Senha</Styles.TextPassword>

                    <View>
                         <TextInput
                              value={password}
                              onChangeText={setPassword}
                              placeholder='********'
                              secureTextEntry={showPassword}
                              style={{ borderWidth: 1, borderColor: '#FA641E', borderRadius: 15, paddingLeft: 16, fontFamily: 'Poppins-Regular', fontSize: 14}}
                         />

                         <Styles.ButtonHideAndShow onPress={() => setShowPassword(!showPassword)}>
                              <Icons name={showPassword ? "eye-slash" : "eye"} height={30} width={40} color="#FF671F" />
                         </Styles.ButtonHideAndShow>
                    </View>   

                    <Styles.ButtonForgetPassword>
                         <Styles.TextButton>Esqueci minha senha</Styles.TextButton>
                    </Styles.ButtonForgetPassword>

                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#FF881F', '#FA641E']} style={{backgroundColor: 'red', marginTop: 24, borderRadius: 15}}>
                         <Styles.ButtonSignIn>
                              <Styles.TextNameSignIn>Entrar</Styles.TextNameSignIn>
                         </Styles.ButtonSignIn>
                    </LinearGradient>

                    <Styles.ContainerNewAccount>
                         <Styles.TextNewAccount>Não te conta? <Styles.TextNewAccountColored>Criar agora!</Styles.TextNewAccountColored>
                         </Styles.TextNewAccount>
                    </Styles.ContainerNewAccount>

                    <Styles.ContainerFooter>
                         <Styles.NameFooter>Entrar com</Styles.NameFooter>
                         <Svg height="1" width="1000">
                              <Line x1="1000" y1="0" stroke="black" strokeWidth="2" />
                         </Svg>
                    </Styles.ContainerFooter>

                    <Styles.ButtonGoogle>
                         <Icons name="logo-google" />
                         <Styles.TextGoogleButton>Continuar com o Google</Styles.TextGoogleButton>
                         <View />
                    </Styles.ButtonGoogle>

               </Styles.ContainerInputs>
          </Styles.FullContainer>
        );
}

export default Login;