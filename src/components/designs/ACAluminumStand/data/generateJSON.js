
input1 = [
  ["4", "24", "18", "8.92", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197"], 
  ["4", "24", "24", "8.92", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197"], 
  ["4", "24", "30", "8.92", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197"], 
  ["6", "28", "18", "11.15", "246", "194", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197"], 
  ["6", "28", "24", "11.15", "208", "164", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197"], 
  ["6", "28", "30", "11.15", "170", "134", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197"], 
  ["8", "32", "18", "13.38", "192", "151", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197"], 
  ["8", "32", "24", "13.38", "157", "124", "235", "185", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197"], 
  ["8", "32", "30", "13.38", "128", "101", "192", "152", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197"], 
  ["10", "36", "18", "14.86", "160", "126", "242", "191", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197"], 
  ["10", "36", "24", "14.86", "125", "99", "188", "148", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197"], 
  ["10", "36", "30", "14.86", "103", "81", "154", "121", "205", "162", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197"], 
  ["12", "36", "18", "17.83", "133", "105", "202", "159", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197"], 
  ["12", "36", "24", "17.83", "104", "82", "157", "124", "209", "165", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197"], 
  ["12", "36", "30", "17.83", "85", "67", "128", "101", "171", "135", "214", "169", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197"], 
  ["16", "36", "18", "23.78", "100", "79", "151", "119", "192", "152", "231", "182", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197"], 
  ["16", "36", "24", "23.78", "78", "62", "117", "93", "157", "124", "196", "154", "235", "185", "250", "197", "250", "197", "250", "197", "250", "197"], 
  ["16", "36", "30", "23.78", "64", "51", "96", "76", "128", "101", "160", "126", "192", "152", "224", "177", "250", "197", "250", "197", "250", "197"], 
  ["20", "36", "18", "29.72", "80", "63", "121", "96", "161", "127", "202", "159", "242", "191", "250", "197", "250", "197", "250", "197", "250", "197"], 
  ["20", "36", "24", "29.72", "63", "49", "94", "74", "125", "99", "157", "124", "188", "148", "219", "173", "250", "197", "250", "197", "250", "197"], 
  ["20", "36", "30", "29.72", "51", "40", "77", "61", "103", "81", "128", "101", "154", "121", "179", "142", "205", "162", "231", "182", "250", "197"], 
  ["25", "42", "18", "31.58", "64", "51", "96", "76", "129", "102", "159", "125", "181", "143", "204", "161", "227", "179", "249", "197", "250", "197"], 
  ["25", "42", "24", "31.58", "50", "39", "75", "59", "100", "79", "125", "99", "150", "118", "175", "138", "200", "158", "225", "177", "250", "197"], 
  ["25", "42", "30", "31.58", "41", "32", "61", "48", "82", "65", "102", "81", "123", "97", "143", "113", "164", "129", "184", "145", "204", "161"], 
  ["30", "48", "18", "33.44", "54", "42", "81", "64", "104", "82", "122", "96", "139", "110", "157", "124", "174", "137", "191", "151", "209", "165"], 
  ["30", "48", "24", "33.44", "42", "33", "63", "49", "83", "66", "104", "82", "125", "99", "146", "115", "167", "132", "188", "148", "209", "165"], 
  ["30", "48", "30", "33.44", "34", "27", "51", "40", "68", "54", "85", "67", "103", "81", "120", "94", "137", "108", "154", "121", "171", "135"], 
  ["40", "48", "18", "35.67", "40", "32", "60", "48", "81", "64", "95", "75", "108", "85", "122", "96", "135", "107", "149", "117", "162", "128"], 
  ["40", "48", "24", "35.67", "31", "25", "47", "37", "63", "49", "78", "62", "94", "74", "110", "87", "125", "99", "141", "111", "157", "124"], 
  ["40", "48", "30", "35.67", "26", "20", "38", "30", "51", "40", "64", "51", "77", "61", "90", "71", "103", "81", "115", "91", "128", "101"], 
  ["50", "60", "18", "37.90", "32", "25", "45", "36", "54", "43", "63", "50", "72", "57", "81", "64", "90", "71", "100", "79", "109", "86"], 
  ["50", "60", "24", "37.90", "25", "20", "38", "30", "50", "40", "63", "49", "72", "57", "81", "64", "90", "71", "100", "79", "109", "86"], 
  ["50", "60", "30", "37.90", "21", "16", "31", "24", "41", "32", "51", "40", "62", "49", "72", "57", "82", "65", "92", "73", "103", "81"]
]

input2 = [
  ["4", "24", "18", "8.92", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197"],
  ["4", "24", "24", "8.92", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197"],
  ["4", "24", "30", "8.92", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197"],
  ["6", "28", "18", "11.15", "246", "194", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197"],
  ["6", "28", "24", "11.15", "246", "194", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197"],
  ["6", "28", "30", "11.15", "214", "169", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197"],
  ["8", "32", "18", "13.38", "192", "151", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197"],
  ["8", "32", "24", "13.38", "192", "151", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197"],
  ["8", "32", "30", "13.38", "161", "127", "242", "191", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197"],
  ["10", "36", "18", "14.86", "160", "126", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197"],
  ["10", "36", "24", "14.86", "158", "125", "237", "187", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197"],
  ["10", "36", "30", "14.86", "129", "102", "194", "153", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197"],
  ["12", "36", "18", "17.83", "133", "105", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197"],
  ["12", "36", "24", "17.83", "131", "104", "197", "156", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197"],
  ["12", "36", "30", "17.83", "108", "85", "161", "127", "215", "170", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197"],
  ["16", "36", "18", "23.78", "100", "79", "189", "149", "236", "186", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197"],
  ["16", "36", "24", "23.78", "99", "78", "148", "117", "197", "156", "246", "195", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197"],
  ["16", "36", "30", "23.78", "81", "64", "121", "96", "161", "127", "202", "159", "242", "191", "250", "197", "250", "197", "250", "197", "250", "197"],
  ["20", "36", "18", "29.72", "80", "63", "152", "120", "203", "160", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197", "250", "197"],
  ["20", "36", "24", "29.72", "79", "62", "118", "93", "158", "125", "197", "156", "237", "187", "250", "197", "250", "197", "250", "197", "250", "197"],
  ["20", "36", "30", "29.72", "65", "51", "97", "76", "129", "102", "161", "127", "194", "153", "226", "178", "250", "197", "250", "197", "250", "197"],
  ["25", "42", "18", "31.58", "67", "53", "121", "96", "162", "128", "198", "156", "226", "179", "250", "197", "250", "197", "250", "197", "250", "197"],
  ["25", "42", "24", "31.58", "63", "50", "94", "74", "126", "99", "157", "124", "189", "149", "220", "174", "250", "197", "250", "197", "250", "197"],
  ["25", "42", "30", "31.58", "51", "41", "77", "61", "103", "81", "129", "102", "154", "122", "180", "142", "206", "163", "232", "183", "250", "197"],
  ["30", "48", "18", "33.44", "58", "46", "102", "80", "132", "104", "154", "121", "176", "139", "198", "156", "220", "173", "242", "191", "250", "197"],
  ["30", "48", "24", "33.44", "53", "42", "79", "62", "105", "83", "131", "104", "158", "125", "184", "145", "210", "166", "237", "187", "250", "197"],
  ["30", "48", "30", "33.44", "43", "34", "65", "51", "86", "68", "108", "85", "129", "102", "151", "119", "172", "136", "194", "153", "215", "170"],
  ["40", "48", "18", "35.67", "46", "36", "76", "60", "102", "80", "120", "95", "138", "109", "155", "122", "172", "136", "189", "149", "207", "163"],
  ["40", "48", "24", "35.67", "39", "31", "59", "47", "79", "62", "99", "78", "118", "93", "138", "109", "158", "125", "177", "140", "197", "156"],
  ["40", "48", "30", "35.67", "32", "25", "48", "38", "65", "51", "81", "64", "97", "76", "113", "89", "129", "102", "145", "115", "161", "127"],
  ["50", "60", "18", "37.90", "38", "30", "58", "46", "70", "55", "82", "65", "93", "74", "105", "83", "117", "92", "128", "101", "140", "111"],
  ["50", "60", "24", "37.90", "32", "25", "47", "37", "63", "50", "79", "62", "93", "74", "105", "83", "117", "92", "128", "101", "140", "111"],
  ["50", "60", "30", "37.90", "26", "20", "39", "31", "52", "41", "65", "51", "78", "61", "90", "71", "103", "82", "116", "92", "129", "102"]
]

function convertPapaToJSON(papaData){
  jsonData = []
  
  var curFrontArea = ""
  var curUnitHeight = ""
  var curTopArea = ""
  
  for(let i = 0; i < papaData.length; i++){
    if(curFrontArea !== papaData[i][0] || curUnitHeight !== papaData[i][1] || curTopArea !== papaData[i][3]){
      let newData = {
        "frontArea": parseFloat(papaData[i][0]),
        "topArea": parseFloat(papaData[i][1]),
        "unitHeight": parseFloat(papaData[i][3]),
        "values": []
      }
      curFrontArea = papaData[i][0]
      curUnitHeight = papaData[i][1]
      curTopArea = papaData[i][3]
      jsonData.push(newData)
    }
  
    let frameValues = []
    for(let j = 4; j < papaData[i].length; j+=2){
      let curValue = {
        "frames": j/2,
        "lateral": parseFloat(papaData[i][j]),
        "uplift": parseFloat(papaData[i][j+1])
      }
      frameValues.push(curValue)
    }
  
    newValue = {
      "standHeight": parseFloat(papaData[i][2]),
      frameValues
    }
  
    jsonData[jsonData.length-1].values.push(newValue)
  }
  
  return jsonData
}

var fs = require('fs');
fs.writeFile("NOA-standard.JSON", JSON.stringify(convertPapaToJSON(input1)), function(err) {
    if (err) {
        console.log(err);
    }
});

fs.writeFile("NOA-heavy.JSON", JSON.stringify(convertPapaToJSON(input2)), function(err) {
    if (err) {
        console.log(err);
    }
});