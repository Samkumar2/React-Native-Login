import { View, Text,TextInput, Image, TouchableOpacity, StatusBar } from 'react-native';

import React from 'react';

import { useNavigation } from '@react-navigation/native';
import Animated,{ FadeIn, FadeInDown, FadeInUp, FadeOut } from 'react-native-reanimated';

export default function SignupScreen() {

  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: 'white',height:"100%",width:"100%" }}>
      <StatusBar style="light" />

      <Image
        style={{ width: "100%", height: "100%",position:"absolute" }}
        source={require('../assets/images/background.png')}
      />

      <View style={{ position: "absolute", top: 5, left: 80 }}>
      <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify().damping(3)}
          style={{ width: 90, height: 225 }}
          source={require('../assets/images/light.png')}
        />
        </View>
        <View style={{ position: 'absolute', top: 5, left: 200 }}>
        <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify().damping(3)}
            style={{ width: 65, height: 160 }}
            source={require('../assets/images/light.png')}
          />
        </View>
      

      <View style={{  backgroundColor:"transparent",flex: 1, justifyContent: "space-evenly",paddingTop:100,paddingBottom:5 }}>
      <View style={{  marginTop:30,justifyContent:"center",alignItems:"center"}}>
        <Animated.Text entering={FadeInUp.duration(1000).springify().damping(3)}
         style={{ color: 'white', fontWeight: "900",fontSize: 44, letterSpacing: 2,}}>
          SignUp
        </Animated.Text>
      </View>
      <View
          style={{
            //flex: 1,
            alignItems: "center",
            padding: 4,
            ///justifyContent: "space-evenly",
          }}
        >
          <Animated.View entering={FadeInDown.duration(1000).springify().damping(3)}
            style={{
              backgroundColor: "#f4f4f4",
              padding: 8,
              borderRadius: 10,
              width: "80%",
              //marginTop: -70,
              marginBottom: 15,
            }}
          >
            <TextInput
              placeholder="Username"
              placeholderTextColor={"gray"}
              style={{ color: "black" }} // Added style for text color
            />
          </Animated.View>
          <Animated.View entering={FadeInDown.duration(1000).springify().damping(3)}
            style={{
              backgroundColor: "#f4f4f4",
              padding: 8,
              borderRadius: 10,
              width: "80%",
              //marginTop: -70,
              marginBottom: 15,
            }}
          >
            <TextInput
              placeholder="Email"
              placeholderTextColor={"gray"}
              style={{ color: "black" }} // Added style for text color
            />
          </Animated.View>
          <Animated.View entering={FadeInDown.duration(1000).springify().damping(3)}
            style={{
              backgroundColor: "#f4f4f4",
              padding: 8,
              borderRadius: 10,
              width: "80%",
            }}
          >
            <TextInput
              placeholder="Password"
              placeholderTextColor={"gray"}
              style={{ color: "black" }}
              // secureTextEntry // Added style for text color
            />
          </Animated.View>
          <Animated.View entering={FadeInDown.duration(1000).springify().damping(3)}
           style={{ width: "100%", marginTop: 15 }}>
            <TouchableOpacity
              style={{
                alignSelf: "center",
                backgroundColor: "#45C3F1",
                padding: 8,
                borderRadius: 10,
                width: "80%",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 17,
                  textAlign: "center",
                }}
              >
                Signup
              </Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View entering={FadeInDown.duration(1000).springify().damping(3)}
           style={{ marginTop: 8, flexDirection: "row" }}>
            <Text style={{ padding: 2 }}>Already have an account ?</Text>
            <TouchableOpacity onPress={() => navigation.push("Login")}>
              <Text
                style={{
                  color: "#1E328E",
                  fontWeight: "bold",
                  fontSize: 17,
                  textAlign: "center",
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}