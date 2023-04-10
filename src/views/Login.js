
import {  View } from 'react-native';
import { Input, Text, Image, CheckBox } from 'react-native-elements';
import {styles} from '../styles/login.style'
import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword } from '../services/auth.service';
import logo from '../assets/logo.png';
import { Storage } from '../services/storage.service';
import ButtonComponent from '../components/Button.component';

export default props => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isSelected, setSelection] = useState(false);
  const storage = new Storage();

  // vai rodar sempre que iniciar o component
  /**
  useEffect( () => {
    async function getStorageItem() {
      const email = await storage.getItem("email");
      const password = await storage.getItem("password");
  
      if(email !== null){
        setEmail(email)  
      }
      if(password !== null){
        setEmail(password)  
      }
    }
    getStorageItem()
  }, []);
  */

  // salvar dados do input email
  const handleEmailChange = (text) => {
    setEmail(text)  
  }

  // salvar dados do input password
  const handlePasswordChange = (text) => {
    setPassword(text)  
  } 

  // realizar o login e verificar se é para salvar os dados de login
  const submitSignIn = async () => {

    if(email == ""){
      //voltar e mudar essa logica
      return console.warn("Falta preencher o email")
    }else if(password == ""){
      //voltar e mudar essa logica
      return console.warn("Falta preencher o password")
    }else{

      /** 
      if(isSelected == true){
        await storage.addItem("email", email);
        await storage.addItem("password", password);
      }else{
        await storage.removeItem(email);
        await storage.removeItem(password);
      }
      */  
      const auth = await signInWithEmailAndPassword(email, password);
      if(auth == true){
        props.navigation.navigate("Home")
      }
    }
  }

  return (
    <View style={styles.container}>
        <Image  source={logo} style={{width: 297, height: 68, resizeMode: "contain" }}/>
        <Text h3 h3Style={styles.h3}>Laser Notes</Text>
        <Text h4 h4Style={styles.text_label}>Login:</Text>
        <Input value={email}
          placeholder='Email'
          onChangeText={handleEmailChange}
          containerStyle={{
            borderRadius: "5px",
            marginBottom: 48,
            marginLeft: 20
          }}
        />
        <Text h4 h4Style={styles.text_label}>Senha:</Text>
        <Input value={password} placeholder="Password" secureTextEntry={true} onChangeText={handlePasswordChange} containerStyle={{
            borderRadius: "5px",
            marginBottom: 15,
            marginLeft: 20
          }}/>
        <View style={{display: "flex", width: "100%", flexDirection: "row", justifyContent: "space-between"}}>
          <CheckBox  checked={isSelected} containerStyle={{backgroundColor: 'transparent', border: "none"}} onPress={() => setSelection(!isSelected)} title="Lembrar minha senha"/>
          <Text h4 h4Style={styles.h4} onPress={() => props.navigation.navigate("Reset")}>Esqueceu sua senha?</Text>
        </View>
        <ButtonComponent title="Acessar" nav={submitSignIn} />
    </View>
  );
}

/**
 *  <Button title="Acessar" buttonStyle={{ backgroundColor: "#603E93" }} containerStyle={{
                width: 150,
                height: 40,
                marginVertical: 20
            }}
          onPress={submitSignIn}
        />
 */
