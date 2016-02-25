/**
 * by CntChen 2016.02.26
 */

import React, {
  Component,
  StyleSheet,
  Image,
  Navigator,
} from 'react-native';
import Dimensions from'Dimensions';


let styles = StyleSheet.create({
  background_image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});


let _navigator;
class MyComponent extends Component{
  constructor(props){
    super(props);
    this.state = {
    };

    // get data from local system to get user login state
    // if use logined, goto mainpage
    // if use don't login, goto signin
    // if get user name goto login page
    setTimeout(() => {}, 2000);
  }

  render() {
    _navigator = this.props.navigator;
    let {height, width} = Dimensions.get('window');

    return (
      <Image source={require('../res/imgs/loading.png')}
        resizeMode={Image.resizeMode.conver}
        style={[styles.background_image, {width:width,height:height}]}>
      </Image>
    );
  }
}


import { connect } from 'react-redux';
export default connect(state => ({
    value: state.signin
  })
)(MyComponent);