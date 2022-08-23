import {getSumBetween} from './getSumBetween.js';
import {findNotEntering} from './findNotEntering.js';
import {deleteFromArray} from './deleteFromArray.js';
import {findObject} from './findObject.js';
import {setSpinalCase} from './setSpinalCase.js';
import {replaceStrInStr} from './replaceStrInStr.js';
import {searchForMissingSymbol} from './searchForMissingSymbol.js';
import {findNotEnteringE} from './findNotEnteringE.js';
import {replaceSpecialCharacters} from './replaceSpecialCharacters.js';
import {additionPrimes} from './additionPrimes.js';
import {deleteWhileNotTrue} from './deleteWhileNotTrue.js';
import {deploymentArray} from './deploymentArray.js';
import {addExpectedArgument} from './addExpectedArgument.js';



// console.log(getSumBetween([4,1]));
// console.log(findNotEntering([1,2,4],[2,3,5]));
// console.log(deleteFromArray([1,2,4],1,2,3));
// console.log(findObject([{ "apple": 1, "bat": 2 }, { "apple": 1 },{ "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }));
// console.log(setSpinalCase("This Is Spinal_Tap"));
// console.log(replaceStrInStr("hello My friend", "My", "our"));
// console.log(searchForMissingSymbol("a"));
// console.log(findNotEnteringE([[1,2],[3,4],[1,2,4]]));
// console.log(replaceSpecialCharacters("<\"might \& magic\">"));
// console.log(additionPrimes(10));
console.log(deleteWhileNotTrue([1,2,3,4], value => {return value >= 3;}));
// console.log(deploymentArray([1, [2], [3, [[4]]]]));
// console.log(addExpectedArgument(2));

