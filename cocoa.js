window.onload = function(){
  var percent = 0;
  var negative_count_2 = 0;
  var positive_count_2 = 0;
  var all_count_2 = 0;
  var per2 = document.getElementById('per2');
  var negative_count_3 = 0;
  var positive_count_3 = 0;
  var all_count_3 = 0;
  var per3 = document.getElementById('per3');
  var negative_count_4 = 0;
  var positive_count_4 = 0;
  var all_count_4 = 0;
  var per4 = document.getElementById('per4');
  var negative_count_5 = 0;
  var positive_count_5 = 0;
  var all_count_5 = 0;
  var per5 = document.getElementById('per5');
  var negative_count_6 = 0;
  var positive_count_6 = 0;
  var all_count_6 = 0;
  var per6 = document.getElementById('per6');
  var negative_count_7 = 0;
  var positive_count_7 = 0;
  var all_count_7 = 0;
  var per7 = document.getElementById('per7');

  var neg2button = document.getElementById('neg2button');
  var pos2button = document.getElementById('pos2button');
  var neg3button = document.getElementById('neg3button');
  var pos3button = document.getElementById('pos3button');
  var neg4button = document.getElementById('neg4button');
  var pos4button = document.getElementById('pos4button');
  var neg5button = document.getElementById('neg5button');
  var pos5button = document.getElementById('pos5button');
  var neg6button = document.getElementById('neg6button');
  var pos6button = document.getElementById('pos6button');
  var neg7button = document.getElementById('neg7button');
  var pos7button = document.getElementById('pos7button');
  
  neg2button.addEventListener('click', () => {
    negative_count_2++;
    all_count_2++;
    per2.innerHTML = Math.floor((positive_count_2/all_count_2)*100) + '%';
  });
  pos2button.addEventListener('click', () => {
    positive_count_2++;
    all_count_2++;
    per2.innerHTML = Math.floor((positive_count_2/all_count_2)*100) + '%';
  });

  neg3button.addEventListener('click', () => {
    negative_count_3++;
    all_count_3++;
    per3.innerHTML = Math.floor((positive_count_3/all_count_3)*100) + '%';
  });
  pos3button.addEventListener('click', () => {
    positive_count_3++;
    all_count_3++;
    per3.innerHTML = Math.floor((positive_count_3/all_count_3)*100) + '%';
  });

  neg4button.addEventListener('click', () => {
    negative_count_4++;
    all_count_4++;
    per4.innerHTML = Math.floor((positive_count_4/all_count_4)*100) + '%';
  });
  pos4button.addEventListener('click', () => {
    positive_count_4++;
    all_count_4++;
    per4.innerHTML = Math.floor((positive_count_4/all_count_4)*100) + '%';
  });

  neg5button.addEventListener('click', () => {
    negative_count_5++;
    all_count_5++;
    per5.innerHTML = Math.floor((positive_count_5/all_count_5)*100) + '%';
  });
  pos5button.addEventListener('click', () => {
    positive_count_5++;
    all_count_5++;
    per5.innerHTML = Math.floor((positive_count_5/all_count_5)*100) + '%';
  });

  neg6button.addEventListener('click', () => {
    negative_count_6++;
    all_count_6++;
    per6.innerHTML = Math.floor((positive_count_6/all_count_6)*100) + '%';
  });
  pos6button.addEventListener('click', () => {
    positive_count_6++;
    all_count_6++;
    per6.innerHTML = Math.floor((positive_count_6/all_count_6)*100) + '%';
  });

  neg7button.addEventListener('click', () => {
    negative_count_7++;
    all_count_7++;
    per7.innerHTML = Math.floor((positive_count_7/all_count_7)*100) + '%';
  });
  pos7button.addEventListener('click', () => {
    positive_count_7++;
    all_count_7++;
    per7.innerHTML = Math.floor((positive_count_7/all_count_7)*100) + '%';
  });

}