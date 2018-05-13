function theBeatlesPlay(musicians,instruments){
  var beatBand = new Array()
  var j = musicians.length
  for (let i=0;i < j ; i++) {
    beatBand[i]= `${musicians[i]} plays ${instruments[i]}`
  }
  return beatBand
}

function johnLennonFacts(facts){
  var johnfacts = new Array()
  var i=0;
  var j=facts.length
  while (i<j){
    johnfacts[i]=`${facts[i]}!!!`
    i++
  }

  return johnfacts
}

function iLoveTheBeatles(i){
  var iLove = new Array()
  var j=0
  do {
            iLove[j]="I love the Beatles!"
            j++
  }  while ( i++<15)
  return iLove

}
