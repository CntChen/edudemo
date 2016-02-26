/**
 * by CntChen 2016.02.24
 */
 
'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  TouchableHighlight,
  Image,
  Text,
} from 'react-native';


const DefaultStyleValue = {
  toolbar_height: 40,
  contentInsetStart: 0,
  contentInsetEnd: 0,
};

const styles = StyleSheet.create({
  container: {
    height: DefaultStyleValue.toolbar_height,
    flexDirection: 'row',
    backgroundColor: 'white',
  },

  content:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // hack for contentInset
    borderWidth:0,
  },

  logo:{
    height: DefaultStyleValue.toolbar_height,
    width: DefaultStyleValue.toolbar_height,
  },

  navIcon: {
    height: DefaultStyleValue.toolbar_height,
    width: DefaultStyleValue.toolbar_height,
  },

  titleText: {
    color: 'tomato',
    marginLeft: 10,
    fontSize: 20,
  }
});

class MyComponent extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    let toolbar_height = this.props.style.height || DefaultStyleValue.toolbar_height;

    return (
      <View style = {[styles.container,this.props.style]}>
        <View style={[styles.content,{
          marginLeft: this.props.contentInsetStart || DefaultStyleValue.contentInsetStart,
          marginRight: this.props.contentInsetEnd || DefaultStyleValue.contentInsetEnd,
        }]}>
          {(() => {
            if(this.props.logo)
              return (
                  <Image
                    style={[styles.logo,{width:toolbar_height, height:toolbar_height}]}
                    source={this.props.logo}>
                  </Image>
              );
            })()}

          {(() => {
            if(this.props.navIcon)
              return (
                <TouchableHighlight onPress={this.props.onIconClicked}>
                  <Image
                    style={[styles.navIcon,{width:toolbar_height, height:toolbar_height}]}
                    source={this.props.navIcon}>
                  </Image>
                </TouchableHighlight>
              );
            })()}

          {(() => {
            if(this.props.navIcon)
              return (
                <Text style={[styles.titleText,{color:this.props.titleColor}]}>
                {this.props.title}
                </Text>
              );
            })()}
        </View>
      </View>
    );
  }
}


module.exports = MyComponent;