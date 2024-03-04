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
    sum = cell(wl[i][0][0], wl[i][0][1], 'r', null) + cell(wl[i][1][0], wl[i][1][1], 'r', null) + cell(wl[i][2][0], wl[i][2][1], 'r', null);
    if(sum == "XXX" || sum == "OOO"){
      return true
    }
  }
  return false
}
function draw(){
  let d = 0
  for(let f=1; f<4; f++){
    for(let r=1; r<4; r++){
      if(cell(f, r, 'r', null) == "_"){
        d++
      }
    }
  }
  return (d==0 && !win()) ? true : false;
}
function pan(){
  //This function needs to be removed.
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
    localStorage.test += 'e'
    return;
  }
  if(!block()){
      pan();
  }
  localStorage.test += '['+board+']';
  if(win()){
    alert("Player "+tl[t%2]+" won!!"); 
    localStorage.test += 'e'
    return;
  }
  t++;
}
function ttt(f, r, cn){
  if(win() || ava){return;}
  if(cell(f, r, 'r', null) == "_"){
    cell(f, r, 's', tl[t%2]);
    localStorage.test += '['+board+']';
    if(win()){
      alert("Player "+tl[t%2]+" won!!"); 
      //localStorage.test += 'e'
      return;
    }
    t++;
    if(default_settings_items["playWith"] == "computer"){setTimeout(ai, 250);}
    //Second player clicks and restarts whole function. If ai second, ai here.
    if(draw()){alert("Draw!!!")}
  }
}