// let myArray = [
//   {id: 0, name: "Jhon"},
//   {id: 1, name: "Sara"},
//   {id: 2, name: "Domnic"},
//   {id: 3, name: "Bravo"}
// ],
    
// //Find index of specific object using findIndex method.    
// objIndex = myArray.findIndex((obj => obj.id == 1));//1 hiii
// console.log(objIndex,'hiii')
// //Log object to Console.
// console.log("Before update: ", myArray[objIndex])//Before update:  { id: 1, name: 'Sara' }

// //Update object's name property.
// myArray[objIndex].name = "Laila"

// //Log object to console again.
// console.log("After update: ", myArray[objIndex])

// // this.setState(prevState => ({
// //   itemList: prevState.itemList.map(
// //   obj => (obj._id === 1234 ? Object.assign(obj, { description: "New Description" }) : obj)
// // )
// // }));
// //1 hiii
// //Before update:  { id: 1, name: 'Sara' }
// //After update:  { id: 1, name: 'Laila' }
// "response": [
//   {
//       "cropId": "5e12f050e076fb213c66772f",
//       "cropName": "Cucumber",
//       "cropFamily": "Cucurbitaceae",
//       "numOfStages": 7,
//       "cropYieldTime": 140,
//       "avgMortality": 20,
//       "imageUrl": "https://s3.ap-south-1.amazonaws.com/adminuploadclover//crop/1580455392267-clover-Pokchoy.jpeg",
//       "ActivesBatches": [
//           {
//               "_id": "5e8aedba62db280008245d2c",
//               "stageId": [
//                   "5e131feb7daf351a9ab24160",
//                   "5e1320a87daf35241bb24163",
//                   "5e131f7b7daf35373ab2415f",
//                   "5e13204f7daf35c2d5b24162",
//                   "5e13202a7daf35a50fb24161",
//                   "5e1320cb7daf3535c6b24164",
//                   "5e12f06ce076fbc775667730"
//               ],
//               "isActive": true,
//               "ratingId": "5e8aedba62db280008245d2d",
//               "taskId": [
//                   "5e8aedba62db280008245d2e",
//                   "5e8aedba62db280008245d2f",
//                   "5e8aedba62db280008245d30",
//                   "5e8aedba62db280008245d31",
//                   "5e8aedba62db280008245d32",
//                   "5e8aedba62db280008245d33",
//                   "5e8aedba62db280008245d34",
//                   "5e8aedbb62db280008245d35"
//               ],
//               "zone": "bangalore",
//               "farmerId": "5e83239a62942d0008738520",
//               "cropId": "5e12f050e076fb213c66772f",
//               "batchNum": "SAN_CUC_1",
//               "batchStart": "2020-03-01T00:00:00.000Z",
//               "batchEnd": "2020-07-19T00:00:00.000Z",
//               "expectedHarvestQty": 25000,
//               "expectedHarvestDate": "2020-04-15T00:00:00.000Z",
//               "createdAt": "2020-04-06T08:52:10.840Z",
//               "updatedAt": "2020-05-18T09:40:55.873Z",
//               "__v": 0
//           }
//       ]//crop active batches...
//   },//one response..
  
//   {
//       "cropId": "5e47e2e20aa56a7d4a1e85ae",
//       "cropName": "Green Butterhead",
//       "cropFamily": "Asteraceae",
//       "numOfStages": 5,
//       "cropYieldTime": 70,
//       "avgMortality": 2,
//       "imageUrl": "https://s3.ap-south-1.amazonaws.com/adminuploadclover//crop/1585558504647-clover-1585558091343-clover-1578038651392-clover-broccoli.png",
//       "ActivesBatches": [
//           {
//               "_id": "5e94561c974bd0000858ae2b",
//               "stageId": [
//                   "5e47e3260aa56a40141e85b0",
//                   "5e47e35f0aa56a51071e85b3",
//                   "5e47e3130aa56a5bb01e85af",
//                   "5e47e3380aa56a11001e85b1",
//                   "5e47e3480aa56a334b1e85b2"
//               ],
//               "isActive": true,
//               "ratingId": "5e94561c974bd0000858ae2c",
//               "taskId": [
//                   "5e94561c974bd0000858ae2d",
//                   "5e94561c974bd0000858ae2e"
//               ],
//               "zone": "bangalore",
//               "farmerId": "5e83239a62942d0008738520",
//               "cropId": "5e47e2e20aa56a7d4a1e85ae",
//               "batchNum": "qw2",
//               "batchStart": "2020-04-04T00:00:00.000Z",
//               "batchEnd": "2020-06-13T00:00:00.000Z",
//               "expectedHarvestQty": 343,
//               "expectedHarvestDate": "2020-05-29T00:00:00.000Z",
//               "createdAt": "2020-04-13T12:07:56.645Z",
//               "updatedAt": "2020-05-18T09:40:55.873Z",
//               "__v": 0
//           }
//       ]
//   }
// ]
import React, { Component } from 'react';
import { View, Text } from 'react-native';
//import RangeSlider from 'react-native-range-slider'
import { TextInput } from 'react-native-gesture-handler';
import RangeSlider from 'rn-range-slider';
class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      
          <View style={{flex: 1, flexDirection: 'row'}}>
              <Text>Hii</Text>
              <Text>Byee</Text>
             


<RangeSlider
    style={{width:250, height: 80}}
    gravity={'center'}
    min={200}
    max={1000}
    step={20}
    thumbRadius={15}//size of round
    selectionColor="#7a6311"//middle
    blankColor="#737798"//extra part
    thumbBorderColor="#f9ca24"
    thumbColor="#f9ca24"//round
    // onValueChanged={(low, high, fromUser) => {
    //     this.setState({rangeLow: low, rangeHigh: high})
   // }}
    />

</View>
       
    );
  }
}

export default Data;
