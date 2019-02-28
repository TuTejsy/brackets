module.exports = function check(str, bracketsConfig) {
  // your solution
    var stack = [];
    var stackDouble = [];
     
    for (var i = 0; i < str.length; i++) {

        for (var j = 0; j < bracketsConfig.length; j++) {

            if ((str[i] != stackDouble[stackDouble.length - 1]) && (str[i] == bracketsConfig[j][0])) {
                stack.push(bracketsConfig[j][0]);

                if (bracketsConfig[j][0] == bracketsConfig[j][1]) {
                    stackDouble.push(bracketsConfig[j][0]);
                }
                break;
              }

              if (str[i] == bracketsConfig[j][1]) {
                if (stack.pop() == bracketsConfig[j][0]) {
                    if (bracketsConfig[j][0] == stackDouble[stackDouble.length - 1]) stackDouble.pop();
                    break;
                } else return false;
              }
            }
          }
      
      return stack.length == 0;
  }  


