$(document).ready(function(){
        $('#send_message').click(function(){
            
            //Stop form submission & check the validation
            // e.preventDefault();
            
            // Variable declaration
            var error = false;
            const regex1 = /^[|가-힣a-zA-Z\s+]+$/;
            const regex = /^[|0-9|]+$/;
            var exam = $('#exam').val();
            var name = $('#name').val();
            var age = $('#age').val();
            var phone = $('#phone').val();
            var time = $('#time').val();
            var agree = $('#agree11').is(":checked");
			
			
			$('#exam,#name,#phone,#message,#agree11').click(function(){
				$(this).removeClass("error_input");
			});
            

            if(exam == null ){
                var error = true;
                $('#exam').addClass("error_input");
               alert("시험 종류를 선택하세요.");
            }else{
                $('#exam').removeClass("error_input");
            }

         	// Form field validation
             if(!regex1.test(name) || name.length<0 ){
                var error = true;
                $('#name').addClass("error_input");
               alert("성함을 확인하세요");
            }else{
                $('#name').removeClass("error_input");
            }

            if(age.length ==2 && regex.test(age) && age>19 && age <40){
                
                $('#phone').removeClass("error_input");
            }else if(age <= 19 || age > 39){
                var error = true;
                $('#phone').addClass("error_input");
                alert("20세 이상 ~ 39세까지 신청 가능합니다.");
            }else{
                var error = true;
                $('#phone').addClass("error_input");
                alert("나이를 확인하세요");
            }

            if(phone.substr(0, 3) == "010" && phone.length ==11 && regex.test(phone) ){
                
                $('#phone').removeClass("error_input");
            }else{
                var error = true;
                $('#phone').addClass("error_input");
                alert("전화번호를 확인하세요");
            }

            if(time == null ){
                var error = true;
                $('#time').addClass("error_input");
               alert("통화 시간을 확인하세요");
            }else{
                $('#time').removeClass("error_input");
            }

            if (agree == false){
                var error = true;
                $('#agree11').addClass("error_input");
                alert("개인정보동의를 체크하세요");
            }else{
                $('#agree11').removeClass("error_input");
            }
			
            
            // If there is no validation error, next to process the mail function
            if(error == false){
               // Disable submit button just after the form processed 1st time successfully.
              
               $('#form_e11').prop("action", "https://docs.google.com/forms/u/0/d/e/1FAIpQLScUcpNXnLmyKs51BrFErRN8leT1KwUCrOCcdy_jmdQ58IWPfw/formResponse");
               $('#send_message').attr({'disabled' : 'true', 'value' : 'Sending...' });
               
                
		 $('#send_message').prop("disabled", false);
        $('#send_message').css({transition:"1s"});
        $('#send_message').css({background:"transparent"});
        $('#send_message').css({color:"#fff"});
        $('#hidden_iframe11').attr("onload", "hoa();site1111();");
      
  
              
            }
        });    

       

    });


    function dll(){
  
    }
     
    function maxLengthCheck(object){
      if (object.value.length > object.maxLength){
        object.value = object.value.slice(0, object.maxLength);
      }    
    }
     
     function hoa(){
      alert("예상 문제 신청이 완료되었습니다. 전화로 주소 안내를 진행드리겠습니다.");
     }
     
     function site1111(){
      //$('#mc-embedded-subscribe').click();
      
    
      window.location.reload();
     }
 