//localStorage.test += 's'
//Variables for settings starts here
var default_settings_items = {
    "page": "page1",
    "playWith": "computer",
    "computerGoes" : "second",
    "symbolGoesFirst" : "X"
}
//Variables for settings ends here
//Variables for game starts here
a = 1;
b = 2; 
c = 3; 
tl = ["_", "_"]; 
con1 = ["", false, 0];
con1l = [[[c, 3], [c, 2], [b, 3]],
         [[a, 3], [a, 2], [b, 3]],
         [[a, 1], [b, 1], [a, 2]],
         [[c, 1], [b, 1], [c, 2]]
        ];
con2 = 0;
con2l = [[[a, 2], [c, 1], [c, 3]],
         [[b, 3], [a, 1], [a, 3]],
         [[c, 2], [a, 1], [a, 3]],
         [[b, 1], [a, 3], [c, 3]]
        ];
if(default_settings_items["symbolGoesFirst"] == "X"){tl = ["X", "O"];}else{tl = ["O", "X"];}
t = 0; //  tHIS IS THE COUNT VARAIBLE FOR WHOSE TURN IT IS
//playwith = "computer";
//playwith = "human";
gp = 0;
gpl = [];
ava = false;
board = [["_", "_", "_"],
         ["_", "_", "_"],
         ["_", "_", "_"]]; 
boardn = [["a3", "b3", "c3"],
          ["a2", "b2", "c2"],
          ["a1", "b1", "c1"]];
wl = [[[a, 1], [b, 1], [c, 1]],
      [[a, 2], [b, 2], [c, 2]],
      [[a, 3], [b, 3], [c, 3]],
      [[a, 1], [a, 2], [a, 3]],
      [[b, 1], [b, 2], [b, 3]],
      [[c, 1], [c, 2], [c, 3]],
      [[a, 3], [b, 2], [c, 1]],
      [[c, 3], [b, 2], [a, 1]]
  ];
//game vaiables end here.
