import Axios from 'axios';
import https from 'https';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export default function sendDataToOrch(token, name, email, city, month, refId) {
  let config = {
    headers: { 'Authorization': "Bearer " + token },
    httpsAgent: new https.Agent({ rejectUnauthorized: false })
  };
  Axios.post("https://35.246.134.35/odata/Queues/UiPathODataSvc.AddQueueItem", {
    "itemData": {
      "Name": "testqueue",
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
