import React from 'react';
import * as Styles from './styles';

interface Props {
   titleResume: string;
   valueAccepted: number;
   valueRejected: number;
   valueTotal: number;
}

const Resume = ({titleResume, valueAccepted, valueRejected, valueTotal}: Props) => {
   return (
      <Styles.Container style={{ shadowOffset: {
         height: 7,
         width: 7,
      },
         shadowColor: 'black',
         shadowOpacity: 0,
         shadowRadius: 15,
         elevation: 15
      }}>
         <Styles.TextHeader>{titleResume ? titleResume : ''}</Styles.TextHeader>

         <Styles.ContainerInside>
            <Styles.Box>
               <Styles.TitleBox>Aceitas</Styles.TitleBox>
               <Styles.ValueBox>{valueAccepted ? valueAccepted : ''}</Styles.ValueBox>
            </Styles.Box>

            <Styles.Box>
               <Styles.TitleBox>Rejeitadas</Styles.TitleBox>
               <Styles.ValueBox>{valueRejected ? valueRejected : ''}</Styles.ValueBox>
            </Styles.Box>

            <Styles.Box>
               <Styles.TitleBox>Total</Styles.TitleBox>
               <Styles.ValueBox>{valueTotal ? valueTotal : ''}</Styles.ValueBox>
            </Styles.Box>
         </Styles.ContainerInside>
      </Styles.Container>
   )
}

export default Resume;