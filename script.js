

var request =new XMLHttpRequest();
request.open('GET','https://restcountries.com/v2/all',true);
request.send();
request.onload=()=>{
    var data=JSON.parse(request.response);
    console.log(data);
     for(var i=0;i<data.length;i++){
        console.log(data[i].area,'-',data[i].capital,'-' ,data[i].flag);
     }
     let res=data.filter((ele)=>ele.population<100000);
     console.log(res);
}

