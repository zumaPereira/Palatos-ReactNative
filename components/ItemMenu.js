import React, {useState, useEffect, memo} from "react";
import * as Font from 'expo-font';
import fontKavoon from "../assets/fonts/kavoon.ttf"
import fontLemonada from "../assets/fonts/lemonada.ttf"
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, TextInput, StyleSheet, Pressable, Image } from "react-native";
import { useFormTools } from "../providers/FormRestContext";


function ItemMenu({index}) {

    const [fontLoaded, setFontLoaded] = useState(false);
    const [nome, setNome] = useState("")
    const [desc, setDesc] = useState("")
    const [price, setPrice] = useState("")
    const [foto, setFoto] = useState("")
    const { menu, menuTools } = useFormTools()

    useEffect(() => { 

        const itemMenu = menu[index]

        const itemNow = {
            nome: nome,
            descricao: desc,
            preco: price,
            foto: foto
        }

        function setMenu() {
            menuTools.setItem({
                nome: nome,
                descricao: desc,
                preco: price,
                foto: foto
            }, index)
        }

        function compareItens(item1, item2) {
            const keys1 = Object.keys(item1);
            const keys2 = Object.keys(item2);
          
            if (keys1.length !== keys2.length) {
              return false;
            }
          
            for (const key of keys1) {
              if (item1[key] !== item2[key]) {
                return false;
              }
            }
          
            return true;
          }

          if (!compareItens(itemMenu, itemNow)) {
            setMenu()
          }
        
    }, [nome, desc, price, foto])

    useEffect(() => {
        async function loadFonts() {
        await Font.loadAsync({
            'kavoon': fontKavoon,
            'lemonada': fontLemonada,
        });
        setFontLoaded(true);
        }

        loadFonts();
    }, []);

    if (!fontLoaded) {
        return null; 
    }

    return(
        <View style={styles.item}>
            <View style={styles.boxPhoto}>
                <Pressable activeOpacity={1} style={styles.btnAddPhoto} accessibilityRole='button' accessibilityLabel="Adicionar foto">
                    <View style={{position: "absolute", top: 2, right: 2}}>
                        <Icon 
                            name="plus"
                            size={25}
                            color={"#445A14"}
                            style={{alignItems: "flex-end"}}
                        />
                    </View>
                    <View style={{width: "100%", height: "100%", alignItems: "center", justifyContent: "center"}}>
                        <Icon 
                            name="cutlery"
                            size={30}
                            color={"#445A14"}
                        />
                        </View>
                </Pressable>
            </View>
            <View style={styles.boxDescItem}>

                <View style={styles.titleProduct}>
                    <TextInput 
                        style={styles.inptTitle}
                        placeholder="Nome do Prato"
                        cursorColor={"black"}
                        value={nome}
                        onChangeText={setNome}
                    />
                </View>

                <View style={styles.descProduct}>
                    <TextInput  
                        style={styles.inptDesc}
                        multiline={true}
                        numberOfLines={5}
                        maxLength={186}
                        cursorColor={"#445A14"}
                        placeholder="Descrição"
                        accessibilityRole="text"
                        accessibilityLabel="Descrição do Prato:"
                        value={desc}
                        onChangeText={setDesc}
                    />

                </View>

                <View style={styles.priceProduct}>
                    <View style={{width: "35%", alignItems: "center", justifyContent: "center"}}><Text style={styles.textUnid}>1 unid.</Text></View>
                    <View style={{width: "65%", alignItems: "center", justifyContent: "center", flexDirection: "row", gap: 5}}>
                        <Text style={styles.textR$}>R$</Text>
                        <TextInput 
                            style={styles.inptPrice}
                            placeholder="Valor"
                            keyboardType="numeric"
                            cursorColor={"#445A14"}
                            value={price}
                            onChangeText={setPrice}
                        />
                    </View>
                </View>

                {
                   (menu.length - 1) === index ? (
                    <Pressable style={styles.btnAddItem} accessibilityRole='button' accessibilityLabel="Adicionar item ao menu" onPress={menuTools.createItem}>
                        <Image source={require("../assets/icons/adicionar.png")} style={styles.imgAddItem}/>
                    </Pressable>
                   ) : (
                    <Pressable style={styles.btnRemoveItem} accessibilityRole='button' accessibilityLabel="Adicionar item ao menu" onPress={() => menuTools.deleteItem(index)}>
                        <Image source={require("../assets/icons/BotaoRemover.png")} style={styles.imgRemoveItem}/>
                    </Pressable>
                   )
                }

            </View>    
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        width: "90%",
        height: 150,
        flexDirection: "row",
        alignItems: "center",
    },
    boxPhoto: {
        height: 150,
        width: 140,
        backgroundColor: "#B7A187",
        alignItems: "center",
        justifyContent: "center"
    },
    btnAddPhoto: {
        height: 130,
        width: 120,
        backgroundColor: "white",
        borderRadius: 2,
        position: "relative",
    },
    boxDescItem: {
        flex: 1,
        height: 150,
        backgroundColor: "#D1C0AB",
        position: "relative",
        
    },
    btnAddItem: {
        width: 30,
        height: 30,
        resizeMode: "contain",
        position: "absolute",
        bottom: -7,
        right: -10,
    },
    btnRemoveItem: {
        width: 31,
        height: 31,
        resizeMode: "contain",
        position: "absolute",
        bottom: -8,
        right: -11,
    },
    imgAddItem: {
        width: 30,
        height: 30,
    },
    imgRemoveItem: {
        width:30,
        height: 30,
        resizeMode: "cover"
    },
    titleProduct: {
        width: "100%",
        height: "25%",
        alignItems: "center",
        paddingTop: 4
    },
    descProduct: {
        width: "100%",
        height: "55%",
        alignItems: "center",
        paddingTop: 4
    },
    priceProduct: {
        width: "100%",
        height: "20%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    inptTitle: {
        width: "95%",
        height: 35,
        borderWidth: 2,
        borderColor: "#445A14",
        borderRadius: 8,
        backgroundColor: "white",
        paddingLeft: 8,
        fontFamily: "lemonada"
    },
    inptDesc: {
        width: "95%",
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "#445A14",
        borderRadius: 15,
        paddingLeft: 10,
        fontFamily: "lemonada",
        padding: 5, 
        height: 80, 
        textAlignVertical: "top",
        fontSize: 12,
    },
    inptPrice: {
        width: 60,
        height: 24,
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "#445A14",
        borderRadius: 5,
        textAlign: "center",
        fontFamily: "lemonada",
        fontSize: 11
    },
    textUnid: {
        fontSize: 15,
        fontFamily: "kavoon",
        textAlign: "center",
        color: "#445A14",
        paddingBottom: 2
    },
    textR$: {
        fontSize: 15,
        fontFamily: "kavoon",
        textAlign: "center",
        color: "#445A14",
        paddingBottom: 2
    }
})

export default memo(ItemMenu) 