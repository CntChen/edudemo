'use strict';

import React, {Component} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import SignIn from './signin/index';

import MentalityPage from './mentalitypage';
import CollagePage from './collagepage';
import PublicPage from './publicpage';
import AboutMePage from './aboutmepage';


var {
  AppRegistry,
  StyleSheet,
  View,
} = React;

class MyComponent extends  Component{
  constructor(props) {
    super(props);

    this.state = {
      tabItems: [{
        title: '心理',
        component: MentalityPage,
      }, {
        title: '高校',
        component: CollagePage,
      }, {
        title: '公共区',
        component: PublicPage,
      }, {
        title: '我的',
        component: AboutMePage,
      }],
    };
  }

  render() {
    let {value, actions} = this.props;
    console.log(value, actions);

    switch(value.loginSuccess)
    {
      case false:
      return (
        <View style={styles.container}>
          <SignIn />
        </View>
      );
      break;
      case true:
      return (
        <ScrollableTabView tabBarPosition='bottom'>
          <MentalityPage tabLabel={this.state.tabItems[0].title} />
          <CollagePage tabLabel={this.state.tabItems[1].title} />
          <PublicPage tabLabel={this.state.tabItems[2].title} />
          <AboutMePage tabLabel={this.state.tabItems[3].title} />
        </ScrollableTabView>
      );
      break;
      default:
        return (
        <View style={styles.container}>
          <SignIn />
        </View>
      );
    }
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});


import { connect } from 'react-redux';

export default connect(state => ({
    value: state.signin
  })
)(MyComponent);
