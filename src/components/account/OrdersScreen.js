import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import {
  getOrderProductList,
  setCurrentProduct,
} from '../../actions';
import OrderListItem from './OrderListItem';

import { NAVIGATION_HOME_SCREEN_PATH } from '../../navigation/routes';


class OrdersScreen extends Component {
  static navigationOptions = () => ({
    title: 'Orders',
    headerBackTitle: ' '
  });


  componentDidMount() {
    this.props.getOrderProductList(this.props.customerId);
  }

  renderItem = (orderItem) => {
    return (
      <OrderListItem item={orderItem.item} />
    );
  };

  renderOrderList = () => {
    return (
      <FlatList
        data={this.props.items}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  };

  renderEmptyOrderList = () => {
    const { navigate } = this.props.navigation;
    const {
      emptyListContainerStyle,
      textStyle,
      buttonTextStyle
    } = styles;


    return (
      <View style={emptyListContainerStyle}>
        <Text style={textStyle}>
          Oops, there is no orders yet
        </Text>
        <TouchableOpacity
          onPress={() => navigate(NAVIGATION_HOME_SCREEN_PATH)}
        >
          <Text style={buttonTextStyle}>
            Continue Shopping
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const { items } = this.props;

    if (items && items.length) {
      return (
        <View style={styles.containerStyle}>
          {this.renderOrderList()}
        </View>
      );
    }
    return this.renderEmptyOrderList();
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#fff',
  },
  emptyListContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 20,
    paddingTop: 7,
  },
  buttonTextStyle: {
    padding: 14,
    fontSize: 20,
    top: 0,
    color: '#3478f6',
  },
};

const mapStateToProps = ({ account }) => {
  return {
    customerId: account.customer.id,
    items: account.data.items,
  };
};

export default connect(mapStateToProps, {
  getOrderProductList,
  setCurrentProduct
})(OrdersScreen);