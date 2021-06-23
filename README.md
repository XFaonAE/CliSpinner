# CliSpinner
Create beautiful loading animations in the command line interface with ease 

###### What is this library?
This library was designed to help make the **CLI** design more user freidnly with simple loading animations and colored text.

# Get started

##### Table of Contents
 - [Installation](#Installation)
 - [Usage](#usage)

## Installation
To install this library, please make sure your server or application meets the minimum requirements:
 - Node Version: 8 and Above
 - NPM Version: 6 and Above

Now lets get to installing this library<br />
Please run the following command in your projects root directory:
```bash
npm install https://github.com/AxeriDev/CliSpinner
```

## Usage
Now lets get started with using this library
First lets create a simple message with a spinner without changing any settings.
**NOTE**: We recommend using __TypeScript__

```typescript
// Import the library
const { CliSpinner } = require("@axerllc/clispinner");

// Display a simple message
CliSpinner.write("Hello, world!");
```

When executed, your output should look like this but animated:
```
⠋ Hello, world!
```

###### End message function
You may notice that when the spinner is started, it never stops. To solve this, lets use a function to change the spinner icon and change the message, we will run this after `1000ms`:
```typescript
// Import the library
const { CliSpinner } = require("@axerllc/clispinner");

// Display a simple message
CliSpinner.write("Hello, world!");

// Change icon and message after 1000ms
setTimeout(() => {
    CliSpinner.stop("✓", "Stop function called!");
}, 1000);
```

When the stop function is called, your output should look something like this:
```
✓ Stop function called!
```

**NOTE:** If you do not specify a message for the stop function, it will use the same message provided from the `write()` function.
