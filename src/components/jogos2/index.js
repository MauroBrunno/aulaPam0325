import React from "react";
import {View, TouchableOpacity, StyleSheet, Text, Image} from "react-native";

export default function Jogos2({titulo2, valor2, imagem2}) {
    return (
        <TouchableOpacity style={estilo.containerJogos}>
        <Image
        style={estilo.images}
        source={require(`../../imagens/${imagem2}`)}
        />

        <Text style={estilo.titulo}>{titulo2}</Text>
        <Text style={estilo.valor}>{valor2}</Text>
        </TouchableOpacity>
    );
}

const estilo = StyleSheet.create({
    containerJogos:{
        backgroundColor: "#DCDCDC",
        borderRadius: 10,
        marginTop: 8,
        padding: 10,
        margin: 2,
        alignItems: "center",
        justifyContent: "space-between",
        width: 100,
        height: 150,
        marginLeft: 8,
    },
    titulo: {
        color: "black",
        fontSize: 12,
        fontWeight: "bold",
    },
    valor: {
        color: "green",
        fontSize: 12,
        marginLeft: 29,
        marginTop: 2,
        fontWeight: "bold",
    },
    images: {
        width: "100%",
        height: 75,
        borderRadius: 3,
    },
});