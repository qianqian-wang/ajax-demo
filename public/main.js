getCSS.onclick=()=>{
    const request=new XMLHttpRequest();
    request.open('GET','style.css')
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            if(request.status>=200 && request.status<300){
                console.log(request.response)
                let style=document.createElement('style')
                style.innerHTML=request.response
                document.head.append(style)               
            }
        }
    }
    request.send()
}
getJS.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','2.js')
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            if(request.status>=200&&request.status<300){
                let scr=document.createElement('script')
                scr.innerHTML=request.response
                document.body.appendChild(scr)
            }
        }
    }
    request.send()
}
getHTML.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','3.html')
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            if(request.status>=200&&request.status<300){
                let html=document.createElement('div')
                html.innerHTML=request.response
                document.body.appendChild(html)
            }
        }
    }
    request.send()
}
getXML.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','4.xml')
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            if(request.status>=200&&request.status<300){            
                let dom=request.responseXML
                let tagname=dom.getElementsByTagName('warning')[0].textContent.trim()
                console.log(request.responseXML)
                console.log(tagname)
                let html=document.createElement('div')
                html.innerHTML=tagname
                document.body.appendChild(html)
            }
        }
    }
    request.send()
}
getJSON.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','5.json')
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            if(request.status>=200&&request.status<300){            
                let json=request.response
                console.log(json)
                let obj=JSON.parse(json)
                console.log(obj)
                myName.textContent=obj.name
            }
        }
    }
    request.send()
}