// Write your solution in this file!

const driver = {};

def updateDriverWithKeyAndValue(driver, key, value) {
return Object.assign({}, driver, {[key]:value} );
}

def destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
 driver = [key]value;
 return driver;
}
