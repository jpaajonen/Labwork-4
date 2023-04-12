import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonText, IonAvatar, IonLabel, IonItemOptions, IonItemSliding, IonItemOption, IonButton, IonIcon, IonInput } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

import { star } from 'ionicons/icons'
import { useEffect, useState } from 'react';

const Home: React.FC = () => {

  const [input, setInput] = useState<string>('')

  useEffect(() => {
    console.log(input)
  }, [input])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Best app ever!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton routerLink='/login'>Login</IonButton>
        <IonButton routerLink='/register' color="secondary">Register</IonButton>
      </IonContent>
    </IonPage>
  )
}

export default Home