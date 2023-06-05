import React from 'react';
import {View,Text,ScrollView,ImageBackground, Image} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

import estilo from './estilo';
import fundo from '../../assets/corrida1.jpg';
import v1 from '../../assets/vitoria1.jpg';
import v2 from '../../assets/vitoria2.jpg';
import v3 from '../../assets/vitoria3.jpg';

const Vitorias = () => {
    return(
        <ImageBackground source={fundo} style = {estilo.container} blurRadius={5}>
            <ScrollView>
                <View style = {estilo.box1}>
                    <Text style = {estilo.tituloBox1}>
                        Senna em Número
                    </Text>
                    <Text style = {estilo.texto}>
                        Ele conquistou três campeonatos mundiais em
                        1988, 1990 e 1991, e ganhou 41 Grandes Prêmios e 
                        65 pole positions
                    </Text>
                    <View style = {estilo.boxIcones}>
                        <FontAwesome5 name = "trophy" size = {25} color = '#ceb105'/>
                        <Text style = {estilo.texto1}>161</Text>
                        <Text style = {estilo.texto2}>gps disputados</Text>
                    </View>
                    <View style = {estilo.boxIcones}>
                        <FontAwesome5 name = "trophy" size = {25} color = '#ceb105'/>
                        <Text style = {estilo.texto1}>65</Text>
                        <Text style = {estilo.texto2}>pole postions</Text>
                    </View>
                    <View style = {estilo.boxIcones}>
                        <FontAwesome5 name = "trophy" size = {25} color = '#ceb105'/>
                        <Text style = {estilo.texto1}>41</Text>
                        <Text style = {estilo.texto2}>vitória </Text>
                    </View>
                    <View style = {estilo.boxIcones}>
                        <FontAwesome5 name = "trophy" size = {25} color = '#ceb105'/>
                        <Text style = {estilo.texto1}>3x</Text>
                        <Text style = {estilo.texto2}>campeão mundial</Text>
                    </View>
                </View>
                <View style = {estilo.box2}>
                    <Text style = {estilo.tituloBox2}>Campeonato Mudial - 1988</Text>
                    <Image source = {v1} style = {estilo.img}/>
                </View>
                <View style = {estilo.box2}>
                    <Text style = {estilo.tituloBox2}>Campeonato Mudial - 1988</Text>
                    <Image source = {v2} style = {estilo.img}/>
                </View>
                <View style = {estilo.box2}>
                    <Text style = {estilo.tituloBox2}>Campeonato Mudial - 1988</Text>
                    <Image source = {v3} style = {estilo.img}/>
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

export default Vitorias;