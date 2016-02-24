/**
 * by CntChen 2016.02.24
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  BackAndroid,
  View,
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import SignIn from './signin/index';

import MentalityPage  from './mentalitypage';
import CollagePage  from './collagepage';
import PublicPage  from './publicpage';
import AboutMePage  from './aboutmepage';

let ExitFlag = 0;
BackAndroid.addEventListener('hardwareBackPress', () => {
  console.log('in app');


  return true;
});


var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

class MyComponent extends Component{
  constructor(props){
    super(props);

    let userState = 'unsignin';

    let data = [{
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
    }];
    this.state = {
      tabItems: data,
      userState: userState,
    };
  }

  render() {
    switch(this.state.userState)
    {
      case 'unsignin':
      return (
          <SignIn />
      );
      break;
      case 'signined':
      return (
        <ScrollableTabView tabBarPosition='bottom'>
          <MentalityPage tabLabel={this.state.tabItems[0].title} />
          <CollagePage tabLabel={this.state.tabItems[1].title} />
          <PublicPage tabLabel={this.state.tabItems[2].title} />
          <AboutMePage tabLabel={this.state.tabItems[3].title} />
        </ScrollableTabView>
      );
      break;
    }
  }
}


module.exports = MyComponent;