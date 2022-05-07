// try {
//     nonExistentFunction();
//   } catch (error) {
//     console.error(error);
//     // expected output: ReferenceError: nonExistentFunction is not defined
//     // Note - error messages will vary depending on browser
//   }


// try {
//     try_statements
//   }
//   catch (exception_var) {
//     catch_statements
//   }
//   finally {
//     finally_statements
//  }

// function isValidJSON(text) {
//     try {
//       JSON.parse(text);
//       return true;
//     } catch {
//       return false;
//     }
//   }
// console.log(isValidJSON(2))


////correct_wxample

// const numerator= 100, denominator = 'a';

// try {
//      console.log(numerator/denominator);
//      console.log(a);
// }
// catch(error) {
//     console.log('An error caught'); 
//     console.log('Error message: ' + error);  
// }
// finally {
//      console.log('Finally will execute every time');
// }




// try {
//     setTimeout(function() {
//         // console.log("setTimeout")
//         throw new Error("true")
//         // error in the code
//     }, 3000);
// } catch (e) {
//   console.log( "won't work" );
// }finally{
//     console.log("finally")
// }
  

// try{
//     console.log("try")
// }catch(b){
//     console.log("catch")
// }finally{
//     console.log("finally")
// }



// setTimeout(function() {
//     try {
//         // console.log("try")
//         async()
//         // error in the code
//     } catch {
//         console.log( "error is caught" );
//     }
// }, 3000);







// try {
//     dadalert("Welcome Fellow Geek!");
//     // async()
//     }
// catch(err) {
//     console.log(err);
// }




try {
	throw new Error('Yeah... Sorry');
}
catch(e) {
	console.log(e);
}


// try {
//     throw new Error("sorry")
//     // throw new Error('myException'); // generates an exception
//   } catch (e) {
    
//     console.log(e)
//   }