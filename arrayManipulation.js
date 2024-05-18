let numbers= [1,2,3,4,5,6,7,8,9,10];
const strings =["one","two","three","four","five","six","seven","eight","nine","ten"];
const originalArray =["one","two","three","four","five","six","seven","eight","nine","ten"];
function processArray(numbers){
    numbers.forEach((num)=>{
        if(num%2==0){
            return(num**2);
        }
     else{
        return(num*3)
     }
    }
    )
}
processArray(numbers);
 
const formatArrayStrings =  function(numbers, strings){
    if(numbers.length !==strings.length){
        console.error("The arrays must be of the same length")
        return;
    }

    for (let i=0; i<numbers.length; i++){
        if (numbers[i]%2==0){
            strings[i] = strings[i].toUpperCase();
        }
        else{
            strings[i] = strings[i].toLowerCase();
        }
    }
    
    return strings;
}
const modifiedArray = formatArrayStrings(numbers, strings)

module.exports = {modifiedArray,originalArray}