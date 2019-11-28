import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import Header from '../../components/Header';

import api from '../../services/api';
import HeroItem from '../../components/HeroItem';

export default function Home() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    async function loadHeroes() {
      const response = await api.get('/heroStats');

      if (response.data) {
        setHeroes(response.data);
      }
    }

    loadHeroes();
  }, []);

  return (
    <View>
      <Header />
      <FlatList
        data={heroes}
        keyExtractor={hero => `${hero.id}`}
        renderItem={({item}) => <HeroItem item={item} />}
      />
    </View>
  );
}
