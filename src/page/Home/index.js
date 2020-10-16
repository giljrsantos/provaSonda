import React, {useState, useEffect} from 'react';
import { View, Text,  Image,  ScrollView } from 'react-native';
import md5 from 'js-md5';

const PUBLIC_KEY = '5ed4720157c3f19e76ec9c8e4cc88350'
const PRIVATE_KEY = '5dd9a0e559530ae3ef1d3b5d8bfa4b8805fc8785'

import api from '../../service/api';

import fothomemaranhao1 from '../../assets/homemaranha.jpg';
import homemferro from '../../assets/homemferro.jpg';
import hulk from '../../assets/hulk.png';
import mulhermaravilha from '../../assets/mulhermaravilha.png';

import styles from './styles'

function Home(){

    const [ heroes, setHeroes ] = useState([]);

    async function loadHeroes(){

        const timestamp = Number(new Date())
        const hash = md5.create()
        hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)

        await api.get(`/characters?nameStartsWith=A&ts=${timestamp}&orderBy=name&limit=100&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`)
            .then(res => {
                setHeroes(res.data.results);
                console.log(dados.data.results);
            })
            .catch(err => 
                console.log(err.response)
            )
    }

    useEffect(() => {
        loadHeroes();
    }, [])

    
    return (
        <View style={styles.container}>   

            <FlatList
                data={heroes}
                keyExtractor={ (heroes) => String(heroes.items.name)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadHeroes}
                renderItem={({ item }) => (
                    <ScrollView style={styles.ScrollView}>         
                        <View style={styles.heroes}>                
                                <Image style={styles.foto} source={{uri: `${heroes.thumbnail.path}.${heroes.thumbnail.extension}` }} />
                                <Text style={styles.texto}>{heroes.name}</Text>
                        </View>
                    </ScrollView>
                )}
            />        

        </View>
    );
}

export default Home;