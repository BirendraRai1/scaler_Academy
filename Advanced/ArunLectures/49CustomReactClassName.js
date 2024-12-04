function classNames(...args) {
  const results = [];
  args.forEach((arg) => {
    // If the `arg` is a falsy value just return away (null, false, '', undefined)
    if (!arg) return;
    else if (typeof arg == "string" || typeof arg == "number") {
      results.push(arg);
    } else if (Array.isArray(arg)) {
      for (let val of arg) {
        if (val) results.push(classNames(val));
      }
    } else {
      for (let key in arg) {
        const val = arg[key];
        if (val) results.push(key);
      }
    }
  });
  return results.join(" ");
}

//console.log(classNames('hide', 'minimize', 100))
// 'hide minimize 100'

//console.log(classNames('hide', 'maximize', false));
// 'hide maximize'

//console.log(classNames('show', 'maximize', false, 200))
// 'show maximize 200'

// const input1 = ['container', { visible: true, 'width-300': 300
// }, { height: null }];
// console.log(classNames(input1))
// 'container visible width-300'

// const input2 = [
//   "child-container",
//   { visible: false, "width-300": 300 },
//   [{ isMobile: "yes", responsive: undefined }, { "margin-5": true }],
// ];
// console.log(classNames(input2))
// 'child-container width-300 isMobile margin-5'

// const input3 = [
//   "child-container",
//   { visible: false, "width-300": 300 },
//   [{ isMobile: "yes", responsive: undefined }, { "margin-5": true }],
// ];

// console.log(classNames('toggled', input3, [ { isWrapped: true } ], {
// 'color-warning': undefined }))
// 'toggled child-container width-300 isMobile margin-5 isWrapped'
