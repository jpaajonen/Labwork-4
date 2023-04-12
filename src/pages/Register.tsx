import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonAvatar, IonLabel, IonItemOptions, IonItemSliding, IonItemOption, IonButton, IonInput, IonLoading } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { registerUser } from '../theme/firebaseConfig';


const Register: React.FC = () => {

  const [busy, setBusy] = useState<boolean>(false)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCPassword] = useState('')  

  async function register() {
    setBusy(true)
    if(password !== cpassword) {
      alert("Passwords do not match");
    }
    if(username.trim() === '' || password.trim() === '') {
      alert("Username and password are required")
    }

    const res = await registerUser(username, password);
      if(res) {
        alert("Registration successful")
      }
    setBusy(false)

  } 

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Registration in progress..." duration={0} isOpen={busy}/>
      <IonContent className="ion-padding">
        <IonInput label="Username:" onIonChange={(e: any) => setUsername(e.target.value)}/>
        <IonInput type="password" label="Password:" onIonChange={(e: any) => setPassword(e.target.value)}/>
        <IonInput type="password" label="Confirm Password:" onIonChange={(e: any) => setCPassword(e.target.value)}/>
        <IonButton onClick={register}>Register</IonButton>

        <p>Already have an account? <Link to="/login">Login</Link></p>
        
      </IonContent>
    </IonPage>
  )
  }

export default Register