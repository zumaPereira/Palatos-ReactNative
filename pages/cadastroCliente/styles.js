import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerCadastroCliente: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 20, 
        
      
      },
    
      titulo:{ 
       height:'20%',
       width:'100%',
       alignItems:'center',
       justifyContent:'flex-end',
       padding:50

       
    
      },
      textoTitulo:{
       fontFamily: "kavoon",
        color: "#445A14",
        fontSize: 26,
        paddingLeft: 5,
      },
      formularioCadastroCliente:{
          width: "100%",
          alignItems: "center",
          height:'50%',
          justifyContent: 'center',
          gap:20,
        
      },
      inputsPar:{
         width: "100%",
         alignItems: "center",        
      },
       inputs:{
        width: "80%",
        height: 50,
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: "#445A14",
        borderRadius: 15,
        fontSize: 12,
        paddingLeft: 10,
        fontFamily: "lemonada"
       },
       textoInput:{
        fontFamily: "lemonada",
        color: "#445A14",
        fontSize: 15,
        paddingLeft: 5,
        width:'80%',
       
        },
        confirmar:{
        width: "100%",
        alignItems: "center",
        height:'20%',
        paddingTop:20,
        
  
        },
        botaoConfirmar:{
          width:190,
          height:44,
          backgroundColor:'transparente',
          borderColor: "#445A14",
          borderRadius:15,
          alignSelf: 'center', 
          textAlignVertical: 'top',
          alignSelf:'center', 
         textAlignVertical: 'top',
         borderWidth:2,
         justifyContent:'center',
         alignItems: 'center',
        },
        textoBotaoConfirmar:{
          color: "#445A14",
          textAlign:'center',
          fontSize:16,
          fontStyle:'normal',
          textAlignVertical: 'center',
        },
        botaoJaTenhoCadastro: {
          position: "absolute",
          bottom: 40,
          left: 20
        },
        textoJaTenhoCadastro:{
          color: "#445A14",
          textAlign: "justify",
          fontFamily: "lemonada",
          fontSize: 16
        }
        
    
})