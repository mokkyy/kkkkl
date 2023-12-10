$(function(){
    $('.errorMSG').each(function(){
        showErrorMSG($(this))
    })
    $('.msg_input').focus(function(){
        let id = $(this).attr('id')
        let errorid = id+"_error"
        showErrorMSG($('#'+errorid))//假设errorid的值为"error-message"，那么$('#'+errorid)就相当于$("#error-message")，表示选取页面中ID为"error-message"的元素。
    })
    $('.msg_input').blue(function(){
        let id = $(this).attr('id')
        let fn_call = "validate"+id.substr(0,1).toUpperCase()+id.substr(1)+"()"
        eval(fn_call)
    })
    $('.msg_input').on('input propertychange',function(){
        let id = $(this).attr('id')
        let fn_call = "validata"+id.substr(0,1).toUpperCase()+id.substr(1)+"()"
        eval(fn_call)
    })
})

function showErrorMSG(ele){
    let text = ele.text()
    if(!text){
        ele.css("display","none")
    }else{
        els.css("dislay","inline-block")
    }
}

function validateUser_name(){
    let id = "user_name"
    let value = $('#'+id).val()
    let flag = true
    if(!value){
        $('#'+id+'_error').text('用户名不能为空')
        flag = false
    }
    else{
        let regl = /^[a-zA-Z] \w{5,15}$/
        if(regl.test(value)){
            $.post("user_nameProcess.php",{user_name:value},function(data){
                if(data,status == 1){
                    $('#'+id+"_error").text("该用户名被占有")
                  
                    $('#'+id+"_error").css('color','')
                    flag = false
                }else{
                    $('#'+id+"_error").text("通过")
                    $('#'+id+"_error").css('color','#4BB900')
                   
                }
            },'json')
        }else{
            $('#'+id+"_error").text("用户名必须用字母开头，且长度为6·16位")
           
            $('#'+id+"_error").css('color','')
            flag = false
        }
    }
    showErrorMSG($('#'+id+'_error'))
    return flag
}

function validateUser_password(){
    let flag = true
    let id = "user_password"
    let value = $('#'+id).val()
    let reg1 = /^[a-zA-Z]{6,16}$|^[0-9]{6,16}$/
    let reg2 = /^[a-zA-Z]{6,16}$/
    let reg3 = /^\w{6,16}$/
    if(!value){
        $('#',id+'_eiror').text('密码不能为空')
        flag = false
    }
    else{
        if(reg1.test(value)){
            $('#'+id+'_error').text("安全性弱：试试字母、数字和下划线组合")
            $('#'+id+'_error').css('color','#808080')
            
        }
        else if(reg2.test(value)){
            $('#'+id+'_error').text("安全性中：试试字母、数字和下划线组合")
            $('#'+id+'_error').css('color','#808080')
           
        }
         else if(reg3.test(value)){
            $('#'+id+'_error').text("安全性强：请牢记密码")
            $('#'+id+'_error').css('color','#808080')
           
        }
        else{
            if(value.length<6||value.length>16){
                $('#'+id+'_error').text('密码为6-16位')
                $('#'+id+'_error').css('color','')
            }else{
                $('#'+id+'_error').text('密码由数字、字母、下划线组成')
                $('#'+id+'_error').css('color','')
            }
                $('#'+id+'_error').css('color','')
               
                flag = false
        }
    }
    showErrorMSG($('#'+id+'_error'))
    return flag
}

function validateUser_repassword(){
     let flag = true
     let id  = "user_repassword"
     let value = $('#'+id).val()
     if(!value){
        $('#'+id+'_error').text("两次密码不能为空")
        $('#'+id+'_error').css('color','')
        flag = false
     }else{
        if($('#user_password').val() != value){
            $('#'+id+'_error').text("两次密码不一致")
            $('#'+id+'_error').css('color','')
            flag = false
        }else{
            $('#'+id+'_error').text("通过")
            $('#'+id+'_error').css('color','#4BB900')
        }
     }
      showErrorMSG($('#'+id+'_error'))
      return flag
}

function validateUser_email(){
     let flag = true
     let reg = /^([a-zA-Z] | [0-9])(\w|\-)+@[a-zA-z0-9]+\([a-zA-z]{2,4})$/
     let id  = "user_email"
     let value = $('#'+id).val()
     if(!value){
        $('#'+id+'_error').text("邮箱不能为空")
        flag = false
     }
     else{
        if(reg.test(value)){
            $.post("user_nameProcess.php",{user_email:value},function(data){
                if(data,status == 1){
                    $('#'+id+"_error").text("邮箱被注册")
                  
                    $('#'+id+"_error").css('color','')
                    flag = false
                }else{
                    $('#'+id+"_error").text("通过")
                    $('#'+id+"_error").css('color','#4BB900')
        
                }
            },'json')
        }
        else{
            $('#'+id+'_error').text("邮箱格式不合法")
            $('#'+id+'_error').css('color','#4BB900')
            flag = false
        }
     }
     
      showErrorMSG($('#'+id+'_error'))
      return flag
}