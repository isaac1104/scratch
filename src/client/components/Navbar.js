import React, { Component, Fragment } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { withRouter } from 'react-router-native';
import { Appbar } from 'react-native-paper';

class Navbar extends Component {
  renderNavbar() {
    //change back to /customer once done
    if (this.props.location.pathname === '/customer') {
      return <View />
    } else {
      return (
        <Appbar
          style={styles.navbar}
          >
          {this.renderBackButton()}
          <Appbar.Content
            title='Scratch'
          />
        </Appbar>
      );
    }
  }

  renderBackButton() {
    if (this.props.location.pathname === '/' || this.props.location.pathname === '/home') {
      return null;
    } else {
      return <Appbar.BackAction onPress={() => this.props.history.push('/home')} />;
    }
  }

  render() {
    return (
      <Fragment>
        {this.renderNavbar()}
      </Fragment>
    );
  }
}

const styles = {
  navbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%'
  },
  navbarText: {
    textAlign: 'center',
    lineHeight: 30
  },
}

export default withRouter(Navbar);
