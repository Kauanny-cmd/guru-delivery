import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import styles from "./style";

export default function Pedido({ navegacao, item: { id, valorTotal, status }}) {

  return (
    <View style={styles.container}>
      <View style={styles.itens}> 
        <View>  
          <Text style={styles.nome}> Pedido #{id} </Text>
          <Text style={styles.descricao}> Tradicional </Text>
        </View>

        <View style={styles.status}>
          <Text style={styles.statusText}> { status } </Text>
        </View>
      </View>

      <View style={styles.itens}>
        <View>
          <Text style={styles.descricao}> Total </Text>
          <Text style={styles.preco}>R$ {valorTotal} </Text>
        </View>

        <TouchableOpacity style={styles.botao} 
        onPress={() => 
          navegacao.navigate("Detalhes", {
              itemId: id,
          })
        }>
          <Image source={seta}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}