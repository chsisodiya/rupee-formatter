/**
 * Created by narendrasisodiya on 13/06/17.
 */

import { gql, graphql } from "react-apollo";
import { Text } from "./styled";
import React from "react";
import { View, ActivityIndicator } from "react-native";
import rf from "rupee-formatter";

const getTotalRemainingQuery = gql`
  query {
    getMerchantInfo {
      id
      totalRemaining
    }
  }
`;

function TotalRemaining(props) {
  console.log("Props", this.props);
  if (props.data.loading) {
    return <ActivityIndicator size="large" />;
  }
  if (props.data.error) {
    return <Text size="12">Unexpected error.</Text>;
  }
  return (
    <View>
      <Text size="20">
        {rf(props.data.getMerchantInfo.totalRemaining)}
      </Text>
    </View>
  );
}

export default graphql(getTotalRemainingQuery)(TotalRemaining);
