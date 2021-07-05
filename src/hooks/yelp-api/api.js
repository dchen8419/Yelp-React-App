import { API_Base_URL, BEARER_TOKEN } from "./config";
import queryString from 'query-string'
// import { app } from './App'


// let allowCrossDomain = function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', "*");
//     res.header('Access-Control-Allow-Headers', "*");
//     next();
//   }
//     app.use(allowCrossDomain);

export function get(path, queryParams) {
   const query = queryString.stringify(queryParams);
   return fetch(`${API_Base_URL}${path}?${query}`,{
       mode: 'no-cors',
       headers: {
           Authorization: `Bearer ${BEARER_TOKEN}`,
           Origin:'localhost',
           withCredentials: true,
       }
   });
}