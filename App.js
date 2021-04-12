import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }
import {RootNavigator} from './src/navigation/MainStackNavigator'

export default function App() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)




  // if (loading) {	
  //   return (	
  //     <></>	
  //   )	
  // }

  // useEffect(() => {
  //   const usersRef = firebase.firestore().collection('users');
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       usersRef
  //         .doc(user.uid)
  //         .get()
  //         .then((document) => {
  //           const userData = document.data()
  //           // console.log("Use effect working!!", userData, loading);
  //           setLoading(false)
  //           setUser(userData)
  //         })
  //         .catch((error) => {
  //           setLoading(false)
  //         });
  //     } else {
  //       setLoading(false)
  //     }
  //   });
  // }, [])

  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator>
  //       { user ? (
  //         <Stack.Screen name="Home">
  //           {props => <HomeScreen {...props} extraData={user} />}
  //         </Stack.Screen>
  //       ) : (
  //         <>
  //           <Stack.Screen name="Login" component={LoginScreen} />
  //           <Stack.Screen name="Registration" component={RegistrationScreen} />
  //         </>
  //       )}
  //     </Stack.Navigator>
  //   </NavigationContainer> 
  // );
  return <RootNavigator/> 

}