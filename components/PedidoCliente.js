import React from "react"; 
import {View , StyleSheet, Image, Text} from 'react-native'

export default function PedidoCliente({produto}){


    return (
        <View style={styles.pedidoCliente}>

            <View style={styles.nomePrato}>
                <Text style={styles.nomePratoTexto}>{produto.nome_produto}</Text>
            </View>

            <View style={styles.valor} >
                <Text style={styles.valorTexto}>R$ {produto.preco}</Text>
            </View> 


         </View>

    )
}

const styles=StyleSheet.create({

pedidoCliente:{
    width: '90%',
    height: 62,
    borderRadius:20,
    borderWidth:2,
    borderColor:'#445A14',
    
},

nomePrato:{
    paddingLeft:15,
   
    

},

nomePratoTexto:{
    color: '#000',
    fontFamily: 'lemonada',
    fontSize: 14,
},

valor:{
    alignItems:'flex-end',
    paddingRight:40,
},
valorTexto:{
    color: '#000',
    fontFamily: 'lemonada',
    fontSize: 14,
},

})