import React from 'react';
import {ScrollView} from 'react-native';

import estilo from './estilo';
import Topo from './Topo/index';
import Conteudo from './Conteudo/index';
import rei from '../../assets/rei-da-chuva.png';
import reimonaco from '../../assets/rei-de-monaco.png';
import silva from '../../assets/silvastone.png';
import preparacao from '../../assets/preparacao.png';

const Sobre = () => {
    return(
        <>
        <Topo />
        <ScrollView>
        <Conteudo imageSource={rei} title={"Rei Da Chuva"} text={"Aprimorou a pilotagem no asfalto molhado e mostrou ser um piloto de determinação, garra e persistencia"}/>
        <Conteudo imageSource={reimonaco} title={"Rei da Mônaco"} text={"Conquistou o posto por ser o mais recordista de vitórias, com seis conquista"}/>
        <Conteudo imageSource={silva} title={"Silvastone"} text={"Por seu curriculo impressionante em silvestone, Ayrton Senna recebeu o apelido de SilveStone pela imprensa  inglesa"}/>
        <Conteudo imageSource={preparacao} title={"Preparação"} text={"Para vencer corridas e campeonatos o piloto precisa ter uma preparação fisica de atleta."}/>
        </ScrollView>
        </>
    );
}

export default Sobre;