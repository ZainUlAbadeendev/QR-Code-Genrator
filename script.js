function genQR()
        {
            
            var gapi="https://api.qrserver.com/v1/create-qr-code/?data=";
            var myimg=document.getElementById("img");
            var mytext=document.getElementById("qrtext").value;
            var mysize=document.getElementById("size").value;

            if (mytext!=="" && mysize=="100")
            {
                myimg.src=gapi+"100x100"+"?data="+mytext;
                // https://chart.googleapis.com/chart?cht=qr&chs=100x100&chl=hello
            }
            else if(mytext!=="" && mysize=="150")
            {

                myimg.src=gapi+"150x150"+"&data="+mytext;
            }

            else if(mytext!=="" && mysize=="200")
            {
                myimg.src=gapi+"200x200"+"&data="+mytext;
            }

            else if (mytext!=="" && mysize=="250")
            {
                myimg.src=gapi+"250x250"+"&data="+mytext;
            }

            else if (mytext!=="" && mysize=="300")
            {
                myimg.src=gapi+"300x300"+"&data="+mytext;
            }

            else
            {
                alert("Please Enter Text");
            }
        
        }