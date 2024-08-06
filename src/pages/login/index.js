import React, { useState } from "react";
import { Text, View, TouchableOpacity, Pressable, Image, StyleSheet, TextInput } from "react-native";
import { Feather } from '@expo/vector-icons';
import { Checkbox } from "react-native-paper";

export function Login() {

// Const para Function
const [showIcon, setShowIcon] = useState('eye');
const [secureTextEntry, setSecureTextEntry] = useState(true);

// Const
const [checked, setChecked] = useState("checked")

// Functions
function showPassword() {
    setShowIcon((prevIcon) => (prevIcon === 'eye' ? 'eye-off' : 'eye'));
    setSecureTextEntry((prevState) => !prevState);
}

function rememberCheck() {
    setChecked((checked) => (checked === 'checked' ? 'unchecked' : 'checked'))
}

    return(
        <Pressable style={styles.container}>
            <Image source={require("../../images/logo-in.png")} style={styles.logo}/>
            <View style={styles.form}>
                <View style={styles.userForm}>
                    <Feather name="user" size={24} color="#808080" />
                    <TextInput style={styles.userInput} placeholder="Digite seu Usuario"/>
                </View>
                <View style={styles.passForm}>
                    <Feather name="lock" size={24} color="#808080" />
                    <TextInput style={styles.passInput} placeholder="Digite sua Senha" secureTextEntry={secureTextEntry}/>
                    <Feather name={showIcon} size={24} color="#808080" onPress={showPassword}/>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Acessar</Text>
                </TouchableOpacity>
                <View style={styles.forgot}>
                    <Text style={styles.forgotText}>Esqueceu sua senha? </Text>
                    <TouchableOpacity>
                        <Text style={styles.forgotAcess}>Recupere</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.language}>
                    <TouchableOpacity>
                        <Image style={styles.espanhaFlag} source={require("../../images/espanha-flag.png")} borderWidth="1" borderColor="transparent"/>
                        <Text style={styles.nameLanguage}>Español</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.brasilFlag} source={require("../../images/brasil-flag.png")} borderWidth="1" borderColor="#931813"/>
                        <Text style={styles.nameLanguage}>Português</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: "100%"
    },
    logo: {
        width: 130,
        height: 130,
        marginTop: 80
    },
    form: {
        marginTop: 120,
        width: '80%',
        alignItems: 'center'
    },
    userForm: {
        flexDirection: "row",
        gap: 10,
        backgroundColor: "rgba(177, 167, 166, .1)",
        padding: 10,
        borderRadius: 30,
        width: '100%',
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, .4)'
    },
    userInput: {
        backgroundColor: 'transparent',
        width:"75%",
        fontSize: 16
    },
    passForm: {
        flexDirection: "row",
        gap: 10,
        backgroundColor: "rgba(177, 167, 166, .1)",
        padding: 10,
        borderRadius: 30,
        width: '100%',
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, .4)',
        marginTop: 40
    },
    passInput: {
        backgroundColor: 'transparent',
        width:"75%",
        fontSize: 16
    },
    button: {
        backgroundColor: '#931813',
        width: "70%",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 120,
        marginTop: 50
    },
    textButton: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    forgot: {
        width: "100%",
        marginTop: 20,
        flexDirection: 'row'
    },
    forgotText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#000'
    },
    forgotAcess: {
        fontSize: 14,
        fontWeight: '600',
        color: '#931813'
    },
    espanhaFlag: {
        borderRadius: 360,
        width: 75
    },
    brasilFlag: {
        borderRadius: 360,
        width: 75
    },
    language: {
        width: "80%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 30
    },
    nameLanguage: {
        textAlign: 'center',
        marginTop: 5,
        fontSize: 14,
        fontWeight: '600'
    }
  });