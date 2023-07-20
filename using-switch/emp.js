function convert(){
    const radval=document.getElementsByName("educ");
    console.log(radval);
    for (i = 0; i < radval.length; i++) {
        if (radval[i].checked){
            let val = radval[i].value;
            let res='';
            switch(val){
                case 'illiterate' : res =  "Not eligible for this job :( \n eligible for job if high school or Ug only"
                                    break;
                case 'High school' :res =  "Eligible for this job :)"
                                    break;
                case 'Ug' : res =  "Eligible for this job :)"
                                    break;
                case 'Pg' : res = "Not eligible for this job :( \n eligible for job if high school or Ug only"
                                    break;
            }
            document.getElementById("result").innerHTML = res;
        }
    }
}