import React from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import Title from './components/title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import globalStyle from './assets/styles/globalStyle';

const App = () => {
  return (
    <SafeAreaView>
      <View style={globalStyle.header}>
        <Title title={'Lets Explore'} />

        <TouchableOpacity style={globalStyle.messageIcon}>
          <FontAwesomeIcon icon={faEnvelope} size={22} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;
