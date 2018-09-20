import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-native';
import { Appbar } from 'react-native-paper';
import LocationSelector from './LocationSelector';

class Navbar extends Component {
  renderNavbar() {
    const { pathname } = this.props.location;
    //change back to /customer once done
    if (pathname === '/customer') {
      return <View />
    } else {
      return (
        <Appbar.Header>
          {this.renderBackButton()}
          <Appbar.Content
            title='Scratch'
            subtitle='Your order made from scratch'
            style={pathname === '/' ? '' : { marginRight: 50 }}
          />
          {this.renderLocationSelector()}
        </Appbar.Header>
      );
    }
  }

  renderBackButton() {
    const { location: { pathname }, history: { push } } = this.props;
    if (pathname === '/' || pathname === '/home') {
      return null;
    } else {
      return <Appbar.BackAction onPress={() => push('/home')} />;
    }
  };

  renderLocationSelector() {
    if (this.props.location.pathname === '/') {
      return null;
    } else {
      return <LocationSelector />
    }
  };

  render() {
    return (
      <Fragment>
        {this.renderNavbar()}
      </Fragment>
    );
  }
}

export default withRouter(Navbar);
