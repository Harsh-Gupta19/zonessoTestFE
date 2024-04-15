export default function vehiclesReducer(motors, action) {
    console.log('action.type', action.type);
    switch (action.type) {
      case 'getMotors': {
        return {
          ...motors,
            data: action.data,
          
        };
      }
      case 'getMotorsDetails': {
        const result = convertResponse(action.data[0]);
        console.log(result);
        return {
          ...motors,
            data: result,
          
        };
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }
  

  const convertResponse = (response)=> {
    const convertedOutput = [];
    const keysToConvert = {
      "category": "Category",
      "trim":"Trim",
      "cylindersNo" :"No of Cylinders",
      "regionSpecs":"Regional Specs",
      "doors":"Doors",
      "bodyType": "Body type",
      "fuelType":"Fuel Type",
      "horsepower":"Horsepower",
      "exteriorColor":"Exterior Color",
      "interiorColor":"Interior Color",
      "sellerType": "Seller Type",
      "postedDate": "Posted on",
      "transmissionType": "Transmission Type",
      "warranty":"Warranty",
      "market": "Target Market"

    };
    let count = 0;
    for (const [key, value] of Object.entries(response)) {
      if (keysToConvert[key]) {
        let finalValue = value;
       if(key==="warranty" ){
        finalValue = value=== false? "No":"Yes";
        } 
        convertedOutput.push({
          "key": keysToConvert[key],
          "id": ++count,
          "value": finalValue
        });
      }
    }
  
    return convertedOutput;
  }