import React from 'react';
import { connect } from 'react-redux';
import SingleOrderCard from './SingleOrderCard';

function OrderHistoryList({ orderHistory }) {
  return (
    <div>
      {orderHistory.map(order => {
        return <SingleOrderCard key={`${order.id}-${order.currentSize}`} order={order} />;
      })}
    </div>
  );
}

const mapStateToProps = state => ({
  orderHistory: state.orderHistory,
});

export default connect(mapStateToProps, null)(OrderHistoryList);
