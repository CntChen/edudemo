/**
 * by CntChen 2016.02.26
 */

'use strict';

import React, {
  Component,
  StyleSheet,
  View,} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import MentalityPage from './mentalitypage';
import CollagePage from './collagepage';
import PublicPage from './publicpage';
import AboutMePage from './aboutmepage';


class MyComponent extends Component{
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

    this._navigator;
  }

  componentDidMount(){
    console.log('componentDidMount');
  }

  componentWillUpdate(){
    console.log('componentWillUpdate');
  }

  render() {
    this._navigator = this.props.navigator;

    return (
      <ScrollableTabView tabBarPosition='bottom'>
        <MentalityPage tabLabel={this.state.tabItems[0].title} />
        <CollagePage tabLabel={this.state.tabItems[1].title} />
        <PublicPage tabLabel={this.state.tabItems[2].title} />
        <AboutMePage tabLabel={this.state.tabItems[3].title} />
      </ScrollableTabView>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});


export default MyComponent;
