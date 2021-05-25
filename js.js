var out = {}
fetch ('http://localhost/test/index.php').then(response => response.json())
.then(function (test) {
        console.log(test);
        out = test;
        answers(n_question.value, test);

        btn.addEventListener("click", f_out);
        btn1.addEventListener("click", f_out1);
        btn2.addEventListener("click", () => f_out2(test));
}
);


//test = {
// question_arr : ["Заработала 1 млрд. долларов инвестировав:","Создала собственную компанию:","До создания собственного бизнеса, она была топ-менеджером компании:","С 2015 года она стала совладелицей:"],
// a1_arr : ["5 тыс. долларов","Декоративной косметики","Nike","Футбольного клуба"],
// a2_arr : ["50 тыс. долларов","Спортивной одежды","Addidas","Баскетбольного клуба"],
// a3_arr : ["100 тыс. долларов","Корректирующего белья","Champion","Хоккейного клуба"],
// answer_arr : ["5 тыс. долларов","Корректирующего белья","Nike","Баскетбольного клуба"],
// n_right_answer_arr : [1,3,1,2]
//}

let n_right_answer = 1;
let right_answer = 0;
let n_answer = 3;

answers (n_question.value)
//question.innerHTML=question_arr[n_question.value];
//a1.innerHTML = a1_arr[n_question.value];
//a2.innerHTML = a2_arr[n_question.value];
//a3.innerHTML = a3_arr[n_question.value];
//answer.innerHTML = answer_arr[n_question.value];

//n_right_answer = n_right_answer_arr[n_question.value];
//console.log(n_question.value)
function f_out (){
    console.log(y1.checked);
    console.log(y2.checked);
    console.log(y3.checked);

    if (y1.checked){ n_a = 1;}
    if (y2.checked){ n_a = 2;}
    if (y3.checked){ n_a = 3;}
    console.log(n_a);
    
    if (n_a == n_right_answer){
    right_answers += 1;
    right_div.classList.remove("hidden");
    wrong_div.classList.add("hidden");
    console.log("n_question.value = "+n_question.value);
    console.log("n_answer = "+n_answer);
    if (n_question.value == n_answer){
        btn2.classList.add("hidden");
        let el1 = document.createElement("p");
        el1.innerHTML = "<b>"+right_answers+"</b>";
        right_div.appendChild(el1);
    }
    }
    else{
    right_answers-=1;
    right_div.classList.add("hidden");
    wrong_div.classList.remove("hidden");
    }
}
function f_out1 (){
    answer.classList.toggle("hidden");
    btn1.classList.toggle("opend");
  }
  function f_out2 (){
    right_div.classList.add("hidden");
    k = Number(n_question.value);
    k+=1;
    answers(k);
    //n_question.value = k;
    //console.log(n_question)
    //question.innerHTML=question_arr[n_question.value];
    //a1.innerHTML = a1_arr[n_question.value];
    //a2.innerHTML = a2_arr[n_question.value];
    //a3.innerHTML = a3_arr[n_question.value];
    //answer.innerHTML = answer_arr[n_question.value];
    
    //n_right_answer =n_right_answer_arr[n_question.value];
    
  }
  function answers(k) {
    n_question.value = k;
    question.innerHTML=test.question_arr[n_question.value];
    a1.innerHTML = test.a1_arr[n_question.value];
    a2.innerHTML = test.a2_arr[n_question.value];
    a3.innerHTML = test.a3_arr[n_question.value];
    answer.innerHTML = test.answer_arr[n_question.value];
    n_right_answer = test.n_right_answer_arr[n_question.value];
  }