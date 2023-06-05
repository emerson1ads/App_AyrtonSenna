import React from 'react';
import {View,Text, Image,ImageBackground} from 'react-native';

import fundo from '../../assets/fundo.jpg';
import foto from '../../assets/foto-capa.jpg';
import estilo from './estilo';

const Inicio = () => {
    return(
        <ImageBackground style={estilo.fundo} source = {fundo} blurRadius={5}>
            <View style = {estilo.container}>
                <Image source = {foto} style = {estilo.img}/>

                <View style = {estilo.box}>
                    <Text style = {estilo.titulo}>Ayrton Senna</Text>
                    <Text style ={estilo.texto}>Através desse APP, você vai conhecer um pouco de quem foi esse grande piloto</Text>
                </View>
            </View>
        </ImageBackground>
    );
}

export default Inicio;