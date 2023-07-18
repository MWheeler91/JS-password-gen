function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char)
  }


function isLowerCase(str) {
    return str === str.toLowerCase() &&
           str !== str.toUpperCase();
}

function isUpperCase(str) {
    return str !== str.toLowerCase() &&
           str === str.toUpperCase();
}

function generateNewPassword() {
    //clears password field
    document.getElementById("password").value = "";

    //set variables
    const lower = "abcdefghijklmnopqrstuvwxyz"
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const nums = "0123456789"
    const specialchars = "!@#$%^&*()_+=-/.,;'[]?><:{}|"
    let builderArray = []
    let password = ""
    const lowercaseEl = document.getElementById("lowercase").checked;
    const uppercaseEl = document.getElementById("uppercase").checked;
    const symbolEl = document.getElementById("specialcharacters").checked;
    const numberEl = document.getElementById("numbers").checked;
    const numofcharsEl = document.getElementById("numberOfCharacters");

    // Build the string
    if (lowercaseEl) {
        builderArray.push(lower)
    }
    if (uppercaseEl) {
        builderArray.push(upper)
    }
    if (symbolEl) {
        builderArray.push(specialchars)
    }
    if (numberEl) {
        builderArray.push(nums)
    }
    builder = builderArray.join("")


    // main logic
    for (let i = 0; i < numofcharsEl.value; i++) {
        // get random index value for the builder script
        index = getRandomInt(builder.length)
        // add the index value to the password string
        password += builder[index]
        // the index value 
        value = builder[index]
        // remove index from the builder string so it can't be repeated.
        if (isCharacterALetter(value)){
            for (let x = 0; x < builder.length; x++){
                if (isLowerCase(value) || isUpperCase(value)){
                    builder = builder.replace(value.toLowerCase(), '')
                    builder = builder.replace(value.toUpperCase(), '')
                }
            }
        } else {
           builder = builder.slice(0, index) + builder.slice(index+1, builder.length)
        }
        console.log(builder)
    }
}