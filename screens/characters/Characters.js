import React from 'react';

import {Text, View, Image, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useCharacters} from '../../hooks/useCharacters';
import {FlatList} from 'react-native';
import CharacterCell from '../../component/CharacterCell/CharacterCell';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const Characters = ({navigation}) => {
  const {loading, error, data} = useCharacters();

  function pressHandler() {
    navigation.navigate('CharacterDetail');
  }

  if (loading)
    return (
      <View>
        <Text>spinner ...</Text>
      </View>
    );

  if (error)
    return (
      <View>
        <Text>something went wrong</Text>
      </View>
    );

  return (
    <SafeAreaView edges={['right', 'left', 'top']}>
      <ScrollView>
        {data.characters.results.length > 0 && (
          <View style={styles.characterCellContainer}>
            {data.characters.results.map(character => (
              <View key={character.id} style={styles.characterCell}>
                <CharacterCell
                  onPress={() =>
                    navigation.navigate('CharacterDetail', {
                      character: character,
                    })
                  }
                  title={character.name}
                  uri={character.image}
                  characterId={character.id}
                />
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  characterCellContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    flex: 1,
  },
  characterCell: {
    width: '46%',
    marginBottom: verticalScale(20),
  },
});

export default Characters;
