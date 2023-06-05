import React from  'react';
import {View, Text, Image} from 'react-native';

import estilo from './estilo';
import foto from '../../../assets/foto-capa.jpg';

const Topo = () => {
    return(
        <View>
            <Text style = {estilo.titulo}>
                Ayrton Senna
            </Text>
            <View style = {estilo.container}>
                <Image source = {foto} style = {estilo.img}/>

            <Text style = {estilo.texto}>
                No esporte mais global e veloz do mundo,
                 um piloto é considerado o mais rapido de todos os tempos:
                 Ayrton Senna. Seu expressivos numero ajudam a explicar porque o piloto ganhou
                 status de mito do esporte. Mas Senna é mais do que isso: O brasileiro foi o responsavel
                 por alguns dos momentos mais magicos da pricipal categoria do automobilismo mundial
            </Text>
            </View>
            
        </View>
    );
}

export default Topo;