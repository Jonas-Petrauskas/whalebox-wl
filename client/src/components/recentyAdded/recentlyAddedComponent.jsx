import React, { useEffect, useState } from "react";

import { Amplify, API, graphqlOperation } from "aws-amplify";
import { listTables } from "../../graphql/queries";

import "./recentlyAddedComponent.scss";

import awsExports from "../../aws-exports";
Amplify.configure(awsExports);

const RecentlyAdded = () => {
  const [items, setItems] = useState([]);

  let timeStampList = [];

  for (let i = 0; i < items.length; i++) {
    if (items[i].timestamp) {
      timeStampList.push(items[i]);
    }
  }

  const sortedArray = timeStampList.sort((a, b) =>
    b.timestamp.localeCompare(a.timestamp)
  );
  const firstFourItems = sortedArray.slice(0, 4);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const itemsData = await API.graphql(graphqlOperation(listTables));
      const itemsList = itemsData.data.listTables.items;
      setItems(itemsList);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="recentlyAdded-container">
      <div className="recentyAdded-wrapper">
        <div className="title-container">
          <h3>RECENTLY ADDED</h3>
          <div className="live-badge">
            <div className="live-badge__text">Live</div>
          </div>
        </div>
        <div children="live-data-wrapper">
          <div className="label-container">
            <p>WALLET ADDRESS</p>
            <p>ACCESS CODE</p>
            <p>TIME APPLIED</p>
          </div>
          <div className="overflow">
            {firstFourItems.map((item, index) => (
              <div className="live-data-container" key={index}>
                <p>{`${item.walletAddress.slice(0, 20)}...`}</p>
                <p>{item.accessCode}</p>
                <p>{item.timestamp}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentlyAdded;
