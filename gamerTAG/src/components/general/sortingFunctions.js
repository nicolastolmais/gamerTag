var exports = module.exports ={};

exports.sortFriends = function(array, value){
  if(value === 5){
   return array.sort(function(a, b) {
      if (a.gamerTAG.toLowerCase() < b.gamerTAG.toLowerCase())
          return -1;
      if (a.gamerTAG.toLowerCase() > b.gamerTAG.toLowerCase())
          return 1;
      return 0;
    });
  } else if (value === 6) {
    return array.sort(function(a, b) {
       if (a.gamerTAG.toLowerCase() > b.gamerTAG.toLowerCase())
           return -1;
       if (a.gamerTAG.toLowerCase() < b.gamerTAG.toLowerCase())
           return 1;
       return 0;
     });
  } else if (value === 7) {
    return array.sort(function(a, b) {
       if (a.status.toLowerCase() > b.status.toLowerCase())
           return -1;
       if (a.status.toLowerCase() < b.status.toLowerCase())
           return 1;
       return 0;
     });
  } else if (value === 8) {
    return array.sort(function(a, b) {
       if (a.status.toLowerCase() < b.status.toLowerCase())
           return -1;
       if (a.status.toLowerCase() > b.status.toLowerCase())
           return 1;
       return 0;
     });
  } else {
    return array;
  }
};