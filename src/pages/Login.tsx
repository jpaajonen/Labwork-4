import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonAvatar, IonLabel, IonItemOptions, IonItemSliding, IonItemOption, IonButton, IonInput, IonLoading } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { loginUser } from '../theme/firebaseConfig';
import { toast } from '../theme/toast';



const Login: React.FC = () => {

  const [busy, setBusy] = useState<boolean>(false)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function login() {
    setBusy(true)
    const res = await loginUser(username, password)
      if(res) {
        alert('You have logged in!')
      }
    setBusy(false)  
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Please wait..." duration={0} isOpen={busy}/>
      <IonContent className="ion-padding">
        <IonInput label="Username:" onIonChange={(e: any) => setUsername(e.target.value)}/>
        <IonInput label="Password:" type="password" onIonChange={(e: any) => setPassword(e.target.value)}/>
        <IonButton onClick={login}>Login</IonButton>

        <p>New here? <Link to="/register">Register</Link></p>
        
      </IonContent>
    </IonPage>
  )
  }

export default Login