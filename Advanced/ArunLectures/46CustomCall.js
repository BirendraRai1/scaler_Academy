let cap = {
  name: "Steve",
  team: "Cap",
  petersTeam: function (mem1, mem2) {
    console.log(`Hey ${this.name} I am your neighborhood's  
          spiderman and i belong to ${this.team}'s team with members  ${mem1} ${mem2}`);
  },
};
let ironMan = {
  name: "Tony",
  team: "Iron Man",
};

Function.prototype.myCall = function(requiredObj, ...args) {
  console.log("this inside myCall is",this)
  let requiredFn = this;
  requiredObj.requiredFn = requiredFn;
  requiredObj.requiredFn(...args);
  delete requiredObj.requiredFn;
};

let peterTeamFN = cap.petersTeam;
peterTeamFN.myCall(ironMan, "loki", "thor");


