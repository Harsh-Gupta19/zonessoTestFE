export default function showroomReducer(showroom, action) {
    console.log('action.type', action.type);
    switch (action.type) {
      case 'getShowrooms': {
        // console.log('showroomsssss', showroom);
        // console.log('action.data', action.data);
        return {
          ...showroom,
            data: action.data,
          
        };
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }
  