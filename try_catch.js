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

function isValidJSON(text) {
    try {
      JSON.parse(text);
      return true;
    } catch {
      return false;
    }
  }
console.log(isValidJSON(2))
  