function every(interval, callback) {
  var parts = interval.split(/(?=[hms])/);
  var amount = parseInt(parts[0]);
  var unit = parts[1];
  amount *= (unit == "m") ? 60 : 1;    // convert mins to seconds
  amount *= (unit == "h") ? 3600 : 1;  // convert hours to seconds
  amount *= 1000;                      // convert to milliseconds
  callback();                          // run it straight away
  setInterval(callback, amount);       // and then every whatever
}
