a = 1;
b = 2; 
c = 3; 
tl = ["X", "O"]; 
t = 0;
playwith = "computer";
gp = 0;
gpl = [];
ava = true;
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
function rs(){
  for(let rsf=0; rsf<3; rsf++){
    for(let rsr=0; rsr<3; rsr++){
      document.getElementById(boardn[rsf][rsr]).innerText = "";
      board[rsf][rsr] = "_";
    }
  }
  t = 0;
  //window.location.reload();
}
function cell(f, r, s, v){
  if(s == 'r'){
    return board[3-r][f-1];
  }else if(s == 's'){
    board[3-r][f-1] = v;
    document.getElementById(boardn[3-r][f-1]).innerText = v;
  } 
}
function win(){
  for(let i=0; i<8; i++){
    sum = cell(wl[i][0][0], wl[i][0][1], 'r', null) + cell(wl[i][1][0], wl[i][1][1], 'r', null) + cell(wl[i][2][0], wl[i][2][1], 'r', null)
    if(sum == "XXX" || sum == "OOO"){
      return true
    }
  }
  return false
}
function pan(){
  for(let f=1; f<4; f++){
    for(let r=1; r<4; r++){
      if(cell(f, r, 'r', null) == "_"){
        cell(f, r, 's', tl[t % 2]);
        return;
      }
    }
  }
}
function block(){
  for(let i=0; i<8; i++){
    sum = cell(wl[i][0][0], wl[i][0][1], 'r', null) + cell(wl[i][1][0], wl[i][1][1], 'r', null) + cell(wl[i][2][0], wl[i][2][1], 'r', null)
    if(sum == tl[(t+1)%2]+tl[(t+1)%2]+"_" || sum == tl[(t+1)%2]+"_"+tl[(t+1)%2] || sum == "_"+tl[(t+1)%2]+tl[(t+1)%2]){//alert(sum)
      if(sum[0] == "_"){
        cell(wl[i][0][0], wl[i][0][1], 's', tl[t % 2])
      }else if(sum[1] == "_"){
        cell(wl[i][1][0], wl[i][1][1], 's', tl[t % 2])
      }else if(sum[2] == "_"){
        cell(wl[i][2][0], wl[i][2][1], 's', tl[t % 2])
      }
     // t++
      return true
    }
  }
  return false
}
function ai(){
  if(win()){
    return;
  }
  if(!block()){
      pan();
  }
  if(win()){
    //alert("Player "+tl[t%2]+" won!!"); 
    return;
  }
  t++;
}
function ai2(){
  if(win()){
    return;
  }
  pan()
  if(win()){
    alert("Player "+tl[t%2]+" won!!"); 
    return;
  }
  t++;
}
function ttt(f, r, cn){
  if(win() || ava){
    return;
  }
  if(cell(f, r, 'r', null) == "_"){
    cell(f, r, 's', tl[t%2]);
    if(win()){
      alert("Player "+tl[t%2]+" won!!"); 
      return;
    }
    t++;
    if(playwith == "computer"){
      ai();
    }
    //Second player clicks and restarts whole function. If ai second, ai here.
  }
}
function aivsai(){
  while(gp < 9){
    //ai()
    //ai2();
    while(!win()){
      ai();
    }
    gpl[gp] = board;
    //rs();
    gp++;
  }
  console.log(gpl);
}
//aivsai()