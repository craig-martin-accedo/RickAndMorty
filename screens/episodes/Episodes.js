import React from 'react';

import {
  FlatList,
  SafeAreaView,
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';
import Capsule from '../../component/Capsule/Capsule';
import Header from '../../component/Header/Header';
import globalStyle from '../../assets/styles/globalStyle';
import {updateSelectedCategoryId} from '../../redux/reducers/Seasons';
import {useFilteredEpisode} from '../../hooks/useEpisodes';

function Episodes() {
  const dispatch = useDispatch();
  const seasons = useSelector(state => state.seasons);
  
  const {loading, error, data} = useFilteredEpisode(seasons.seasonId);

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
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView style={styles.scrollView}>
        <View>
          <View style={styles.heading}>
            <Header title={'Seasons'} type={2} />
          </View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.seasons}
            data={seasons.seasons}
            renderItem={({item}) => (
              <View style={styles.seasonCategory} key={item.categoryId}>
                <Capsule
                  onPress={value => dispatch(updateSelectedCategoryId(value))}
                  categoryId={item.categoryId}
                  filterId={item.seasonId}
                  title={item.name}
                  isInactive={item.categoryId !== seasons.selectedCategoryId}
                />
              </View>
            )}
          />
          <FlatList
            data={data.episodes.results}
            renderItem={({item}) => <Text>{item.name}</Text>}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: verticalScale(12),
  },
  heading: {
    paddingHorizontal: horizontalScale(20),
    paddingBottom: verticalScale(8),
  },
  seasons: {
    paddingLeft: horizontalScale(20),
  },
  seasonCategory: {
    marginRight: 10,
  },
});

export default Episodes;
