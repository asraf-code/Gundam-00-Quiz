var ck=require('chalk');
var readLine=require('readline-sync')
console.log(ck.bold.red('Gundam-00 QUIZ\n'))

var username,useranswer,score=0,topscore=0;
username=readLine.question(ck.green('Enter your name : '))
console.log("------")
console.log("Hi", username + " Let's play the Gundam-00 Quiz!")
console.log("------")

var questions =[{
  question:'1. How many swords that Gundam Exia have?\na)8\nb)10\nc)7\nd)3',
  answer:'c'
},{
  question:'2.How many original drives that Celestial Being have?\na)2\nb)5\nc)3\nd)4',
  answer:'b'
}
,{
  question:'3. Who delivered the 00-raiser to setsuna during a battle with the a-laws?\na)Ian\nb)Sagi\nc)Marie\nd)Lasse',
  answer:'b'
},{
  question:'4. What is the real name of Setsuna?\na) Soran Ibrahim\nb)Soran Tamiran\nc)Kamal Majirif\nd)Soran Azuma Sarize',
  answer:'a'
},{
  question:'5. Where is Lockon Stratos actually from?\na) America\nb)Ireland\nc)Japan\nd)Middle-East',
  answer:'b'
},{
  question:'6. What food was Setsuna eating when he met Saji in the park with Louis?\na) Hotdog\nb)Sandwich\nc)Lunch Box\nd)Sausage',
  answer:'a'
},{
  question:'7. what was the gundam setsuna always dreamed of in the movie the awakening of the trailblazer?\na)00-quanta\nb)exia gundam\nc)00-raiser\nd)all of them',
  answer:'a'
},{
  question:'8. GN Particles have almost collectively known by the entire fandom as?\na)GN Halos\nb)GN Light Particles\nc)GN Aura\nd)GN Pixie Dust',
  answer:'d'
},{
  question:'9. Where was Allelujah during the four year time period before setsuna returns? \na) With Katheron\nb)HRL Detention Center\nc)Remains of Kurgis\nd)Space Colony',
  answer:'b'
},{
  question:'10. Who is the first girl that crush on Setsuna?\na)Nena Trinity\nb)Mary Parvacy\nc)Feldt Grace\nd)Sumeragi Lee Noriega',
  answer:'a'
}];


for(i=0;i<=questions.length-1;i++){
console.log(ck.red(questions[i].question))

useranswer=readLine.question(ck.yellow('Choose one option :'))

if(questions[i].answer===useranswer)
{
  console.log('Correct Answer! ')
  score++;
}else{
  console.log('Wrong! The answer is '+questions[i].answer)  
}
console.log("-----")
}
console.log(ck.magenta(username+' your score is: '+score))

if(score>topscore){
  topscore=score
};

console.log('Top score is '+topscore)