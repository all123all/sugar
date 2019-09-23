import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Image, Text, TouchableOpacity, ScrollView, Button, TouchableHighlight } from 'react-native';
import { Icon, ListItem, Divider, SearchBar } from 'react-native-elements';

import {BottomTabNavigator} from '../../navigation/BottomTabNavigator';

const homeIcon = require('../../../assets/kana1.png');
const menuIcon = require('../../../assets/kana1.png');
const chatIcon = require('../../../assets/kana1.png');
const notificacaoIcon = require('../../../assets/kana1.png');
const namoradinhaDestaque = require('../../../assets/cc.png');

export default class HomeScreen extends React.Component {
    state = {
        search: '',
      };

    updateSearch = search => {
    this.setState({ search });
    };
  render() {
    const { search } = this.state;
    return(
      <ScrollView style={styles.container}>
        <SearchBar
            placeholder="nome da namoradinha aqui"
            onChangeText={this.updateSearch}
            value={search}
            containerStyle={styles.searchBarStyle}
            inputStyle={{fontSize: 16}}
            platform="android"
            placeholderTextColor="grey"
        />
        <View style={styles.mainPanel}>
            <Image 
                style={styles.mainPanelNamoradinhaDestaque}
                source={require('../../../assets/cc.png')}
            />
            <View style={styles.mainPanelNamoradinhaDestaqueDescricao}>
                <View>
                    <Text style={styles.mainPanelNamoradinhaDestaqueDescricaoNome}>Nome da Namoradinha Destaque</Text>
                </View>
                <View>
                    <Text style={styles.mainPanelNamoradinhaDestaqueDescricaoInfo}>Idade: 99 anos</Text>
                    <Text style={styles.mainPanelNamoradinhaDestaqueDescricaoInfo}>Cor: branca</Text>
                    <Text style={styles.mainPanelNamoradinhaDestaqueDescricaoInfo}>Orientação Sexual: Pansexual</Text>
                    <Text style={styles.mainPanelNamoradinhaDestaqueDescricaoInfo}>Preço: R$30,00/hora</Text>
                    <Text style={styles.mainPanelNamoradinhaDestaqueDescricaoInfo}>Castidade: Resguardada</Text>
                </View>
            </View>            
        </View>
        <View style={styles.icons}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeScreen')}>
                <Icon
                    raised
                    name='home'
                    color='#501346'/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                <Icon
                    raised
                    name='settings'
                    color='#501346'/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.navigateScreen('')}>
                <Icon
                    raised
                    name='person-add'
                    color='#501346'/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.navigateScreen('')}>
                <Icon
                    raised
                    name='menu'
                    color='#501346'/>
            </TouchableOpacity>
        </View>
      </ScrollView>
    );    
  }
  navigateScreen(object) {
    this.props.navigation.navigate(object);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#501346',
    paddingTop: 24,
    flexDirection: 'column',
  },
  icons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor : '#C61D64',
    height: '100%',
    width: '80%',
    alignSelf: 'center',
    borderColor: "#C61D64",
    borderWidth: 2,
    borderRadius: 10,
    marginTop: '5%',
    bottom: 0,
  },
  searchBarStyle:{
    backgroundColor: '#C6D8F3',
    width: '80%',
    alignSelf: 'center',
    marginTop: '5%',
    borderColor: "#C61D64",
    borderWidth: 1,
    borderRadius: 10
  },
  mainPanel:{
    
  },
  mainPanelNamoradinhaDestaque:{
    width: "80%",
    height: 200,
    alignSelf: 'center',
    borderColor: "#C61D64",
    borderWidth: 2,
    borderRadius: 10,
    marginTop: '5%',
  },
  mainPanelNamoradinhaDestaqueDescricao:{
    alignSelf: 'center',
    backgroundColor: '#C61D64',
    width: '80%',
    borderColor: "#C61D64",
    borderWidth: 2,
    borderRadius: 10,
    marginTop: '5%',
    paddingBottom: 10,
  },
  mainPanelNamoradinhaDestaqueDescricaoNome:{
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  mainPanelNamoradinhaDestaqueDescricaoInfo:{
    textAlign: 'left',
    color: '#C6D8F3',
    fontSize: 12,
    marginLeft: 10
  },
});
