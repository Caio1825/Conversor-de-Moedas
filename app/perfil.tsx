import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";

export default function Perfil() {
  return (
    <View style={styles.container}>

      <View style={styles.avatar}>
        <Ionicons
          name="person"
          size={60}
          color={Colors.primary}
        />
      </View>

      <Text style={styles.nome}>
        Caio Henrique
      </Text>

      <Text style={styles.email}>
        caio@email.com
      </Text>

      <TouchableOpacity style={styles.item}>
        <Ionicons name="person-outline" size={22} color={Colors.primary}/>
        <Text style={styles.texto}>Editar Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Ionicons name="time-outline" size={22} color={Colors.primary}/>
        <Text style={styles.texto}>Histórico</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Ionicons name="information-circle-outline" size={22} color={Colors.primary}/>
        <Text style={styles.texto}>Sobre</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.logout}
        onPress={() => router.replace("/login")}
      >
        <Text style={styles.logoutText}>
          SAIR
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:Colors.background,
    alignItems:"center",
    paddingTop:70,
    paddingHorizontal:25
  },

  avatar:{
    width:120,
    height:120,
    borderRadius:60,
    backgroundColor:Colors.card,
    justifyContent:"center",
    alignItems:"center",
    borderWidth:2,
    borderColor:Colors.primary
  },

  nome:{
    color:Colors.white,
    fontSize:28,
    fontWeight:"bold",
    marginTop:20
  },

  email:{
    color:Colors.gray,
    marginBottom:35
  },

  item:{
    width:"100%",
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:Colors.card,
    padding:18,
    borderRadius:15,
    marginBottom:15
  },

  texto:{
    color:Colors.white,
    marginLeft:15,
    fontSize:17
  },

  logout:{
    width:"100%",
    marginTop:40,
    backgroundColor:Colors.primary,
    height:55,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:15
  },

  logoutText:{
    color:Colors.secondary,
    fontWeight:"bold",
    fontSize:18
  }

});