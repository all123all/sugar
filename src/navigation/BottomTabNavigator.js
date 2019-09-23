import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity, View, BackHandler} from "react-native";

const homeIcon = require('../../assets/kana1.png');
const menuIcon = require('../../assets/kana1.png');
const chatIcon = require('../../assets/kana1.png');
const notificacaoIcon = require('../../assets/kana1.png');

export default class BottomTabNavigator extends Component {
    render() {
        return (            
            <View style={styles.icons}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('AboutScreen')}>
                    <Image
                        style={styles.iconImage}
                        source={homeIcon}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeScreen')}>
                    <Image
                        style={styles.iconImage}
                        source={menuIcon}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.navigateScreen('SettingScreen')}>
                    <Image
                        style={styles.iconImage}
                        source={chatIcon}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.navigateScreen('CatalogScreen')}>
                    <Image
                        style={styles.iconImage}
                        source={notificacaoIcon}/>
                </TouchableOpacity>
            </View>
        );
    }
    navigateScreen(object) {
        this.props.navigation.navigate(object);
      }
}

const styles = StyleSheet.create({
    icons: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginLeft: 26,
        marginRight: 16,
        display: 'flex',
        justifyContent: 'center',
        flex: 1,
        marginBottom: 3,
        backgroundColor : 'transparent'
    },
    icon : {
        backgroundColor : 'transparent',
    },
    iconImage: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        height: 50,
        width: 50,
        marginBottom: 0,
        marginTop: 80,
        marginLeft: 16,
        marginRight: 16,
    },
});