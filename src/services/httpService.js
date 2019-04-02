import Axios from 'axios';

export default function sendDataToOrch(name, email, city, month, refId) {
  var token = "";
  var config = {
    headers: { 'Authorization': "Bearer " + token }
  };
  Axios.post("https://platform.uipath.com/odata/Queues/UiPathODataSvc.AddQueueItem", {
    "itemData": {
      "Name": "TEST-Queue",
      "Priority": "High",
      "SpecificContent": {
          name,
          email,
          city,
          month,
          status: 'processing',
      },
      "DeferDate": "2019-04-01T06:31:12.164Z",
      "DueDate": "2019-04-01T06:31:12.164Z",
      "Reference": refId
    }
  }, config)
}
