import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-paper';
import { connect } from 'react-redux';
import MenuItem from './MenuItem';
import MenuItemType from './MenuItemType';

class Menus extends Component {
  state = {
    loading: false
  };

  renderMainMenus() {
    const { item_type } = this.props.orderItems;
    if (item_type === 'burgers') {
      return (
        <ScrollView>
          <MenuItem item='burgers' image='https://cdn.arstechnica.net/wp-content/uploads/2018/08/IF-Burger-800x603.jpg' />
          <MenuItem item='burgers' image='https://cdn.arstechnica.net/wp-content/uploads/2018/08/IF-Burger-800x603.jpg' />
          <MenuItem item='burgers' image='https://cdn.arstechnica.net/wp-content/uploads/2018/08/IF-Burger-800x603.jpg' />
          <MenuItem item='burgers' image='https://cdn.arstechnica.net/wp-content/uploads/2018/08/IF-Burger-800x603.jpg' />
          <MenuItem item='burgers' image='https://cdn.arstechnica.net/wp-content/uploads/2018/08/IF-Burger-800x603.jpg' />
          <MenuItem item='burgers' image='https://cdn.arstechnica.net/wp-content/uploads/2018/08/IF-Burger-800x603.jpg' />
        </ScrollView>
      );
    } else if (item_type === 'starters') {
      return (
        <ScrollView>
          <MenuItem item='starters' image='http://itzzapitzza.pk/wp-content/uploads/2017/12/Wings.png' />
          <MenuItem item='starters' image='http://itzzapitzza.pk/wp-content/uploads/2017/12/Wings.png' />
          <MenuItem item='starters' image='http://itzzapitzza.pk/wp-content/uploads/2017/12/Wings.png' />
          <MenuItem item='starters' image='http://itzzapitzza.pk/wp-content/uploads/2017/12/Wings.png' />
          <MenuItem item='starters' image='http://itzzapitzza.pk/wp-content/uploads/2017/12/Wings.png' />
          <MenuItem item='starters' image='http://itzzapitzza.pk/wp-content/uploads/2017/12/Wings.png' />
        </ScrollView>
      );
    } else if (item_type === 'combos') {
      return (
        <ScrollView>
          <MenuItem item='combos' image='https://burgerbroiler.com/images/Combo1.png' />
          <MenuItem item='combos' image='https://burgerbroiler.com/images/Combo1.png' />
          <MenuItem item='combos' image='https://burgerbroiler.com/images/Combo1.png' />
          <MenuItem item='combos' image='https://burgerbroiler.com/images/Combo1.png' />
          <MenuItem item='combos' image='https://burgerbroiler.com/images/Combo1.png' />
          <MenuItem item='combos' image='https://burgerbroiler.com/images/Combo1.png' />
        </ScrollView>
      );
    } else if (item_type === 'boxes') {
      return (
        <ScrollView>
          <MenuItem item='boxes' image='https://www.burgerim.com/wp-content/uploads/2015/12/Burgerim-Burger-Pack-pack.png' />
          <MenuItem item='boxes' image='https://www.burgerim.com/wp-content/uploads/2015/12/Burgerim-Burger-Pack-pack.png' />
          <MenuItem item='boxes' image='https://www.burgerim.com/wp-content/uploads/2015/12/Burgerim-Burger-Pack-pack.png' />
          <MenuItem item='boxes' image='https://www.burgerim.com/wp-content/uploads/2015/12/Burgerim-Burger-Pack-pack.png' />
          <MenuItem item='boxes' image='https://www.burgerim.com/wp-content/uploads/2015/12/Burgerim-Burger-Pack-pack.png' />
          <MenuItem item='boxes' image='https://www.burgerim.com/wp-content/uploads/2015/12/Burgerim-Burger-Pack-pack.png' />
        </ScrollView>
      );
    }
  };

  render() {
    return (
      <Fragment>
        <View style={styles.itemCategories}>
          <MenuItemType
            itemType='burgers'
            image='http://www.pattyburger.com/wp-content/uploads/2016/03/pic-burger.png'
          />
          <MenuItemType
            itemType='starters'
            image='https://content.freddysusa.com/wp-content/uploads/2016/02/onion-rings.png'
          />
          <MenuItemType
            itemType='combos'
            image='https://burgerbroiler.com/images/Combo1.png'
          />
          <MenuItemType
            itemType='boxes'
            image='https://www.burgerim.com/wp-content/uploads/2015/12/Burgerim-Burger-Pack-pack.png'
          />
          <Button
            style={styles.summaryButton}
            mode='contained'
          >
            <Text>Order Summary</Text>
          </Button>
        </View>
        <View style={styles.menus}>
          {this.renderMainMenus()}
        </View>
      </Fragment>
    );
  }
};

const styles = StyleSheet.create({
  itemCategories: {
    width: '30%',
    backgroundColor: '#36393f',
    paddingLeft: 10,
    paddingRight: 10
  },
  menus: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    backgroundColor: '#f7fff7'
  },
  summaryButton: {
    marginTop: 30,
    width: '100%',
    backgroundColor: '#ff4f00'
  }
});

function mapStateToProps({ orderItems }) {
  return {
    orderItems
  }
};

export default connect(mapStateToProps, null)(Menus);
