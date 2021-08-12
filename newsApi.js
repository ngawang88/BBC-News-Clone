

function getNews(){
    var url = 'https://newsapi.org/v2/top-headlines?' +
          'sortBy=popularity&' +
          'sources=bbc-news&'+
          'apiKey=bc7e31b51b694d00949671898343f022';

    var req = new Request(url);

    var art ;

    fetch(req)
    .then(response => response.json())
    .then((news) => {
        art = news.articles
        console.log(art);
       

        // firstHomeSectionLeft.........................................................................................

        // const firstHomeSectionLeft = document.querySelector(".firstHomeSectionLeft")
        const firstHomeSection_headlineText = document.querySelector(".firstHomeSection-headlineText")
        const firstHomeSection_brifdis = document.querySelector(".firstHomeSection-brifdis");
        const firstHomeSectionimage = document.getElementById("firstHomeSectionimage")
        const timee = document.querySelector(".time")
        firstHomeSection_headlineText.innerHTML=art[0].title
        firstHomeSection_brifdis.innerHTML = art[0].description
        firstHomeSectionimage.src = art[0].urlToImage;

        const time = Date.parse(art[0].publishedAt)
        console.log(time)
        const ct = new Date()
        const mct = Date.parse(ct)
        console.log(mct)

        const d  = mct - time
        var df =Math.trunc(d/60000)
        if(df>60){

            df = Math.trunc(df/60)

            if(df>24){
                df = Math.trunc(df/24)
                timee.innerHTML = df +" day"
            }else{
                timee.innerHTML = df +" hr"
            }
            
        }else{
            timee.innerHTML = Math.trunc(d/60000) +" min"
        }


        

        

       



        const firstHomeSectionRight = document.querySelector('.firstHomeSection');
        for (let i=1; i<7;i++){
            const divcontainer = document.createElement('div');
            divcontainer.className  = '.firstHomeSectionRightInnercontainer'

            const img = document.createElement('img');
            img.className = 'firstHomeSectionimageRight1'
            const div = document.createElement('div');
            div.className  = 'firstHomeSectionDesContainerRight1'
            const h1 = document.createElement('h1');
            h1.className = 'firstHomeSectionRight1-headlineText'
            const h3 = document.createElement('h3');
            h3.className = 'firstHomeSectionRight1-brifdis'
            const h6 = document.createElement('h6');
            h6.className = 'time'
            const timeimg = document.createElement('img')
            timeimg.className = "timeImage"
            timeimg.src = 'resource/time.svg'


            h1.innerHTML=art[i].title
            h3.innerHTML = art[i].description 
            img.src = art[i].urlToImage;


            const time = Date.parse(art[i].publishedAt)
            console.log(time)
            const ct = new Date()
            const mct = Date.parse(ct)
            console.log(mct)

            const d  = mct - time
            var df =Math.trunc(d/60000)
            if(df>60){

                df = Math.trunc(df/60)

                if(df>24){
                    df = Math.trunc(df/24)
                    h6.innerHTML = df +" day"
                }else{
                    h6.innerHTML = df +" hr"
                }
                
            }else{
                h6.innerHTML = Math.trunc(d/60000) +" min"
            }
        
            
           
            div.appendChild(h1)
            div.appendChild(h3)
            div.appendChild(timeimg)
            div.appendChild(h6)
            divcontainer.appendChild(img)
            divcontainer.appendChild(div)
            firstHomeSectionRight.appendChild(divcontainer)



        }
        // firstHomeSectionLeft.........................................................................................
        getNewspolitics()
    })
    .catch(error => {
        console.log(error);
    });
}




function getNewspolitics(){
    var url = 'https://newsapi.org/v2/top-headlines?' +
          'q=apple&'+
          'sortBy=popularity&' +
          'apiKey=bc7e31b51b694d00949671898343f022';

    var req = new Request(url);

    var art ;

    fetch(req)
    .then(response => response.json())
    .then((news) => {
        art = news.articles
        console.log(art);
        const firstHomeSectionRight = document.querySelector('.firstHomeSection');
        for (let i=1; i<7;i++){
            const divcontainer = document.createElement('div');
            divcontainer.className  = '.firstHomeSectionRightInnercontainer'

    
            const div = document.createElement('div');
            div.className  = 'firstHomeSectionDesContainerRight1'
            const h1 = document.createElement('h1');
            h1.className = 'firstHomeSectionRight1-headlineText'
            const h6 = document.createElement('h6');
            h6.className = 'time'
            const timeimg = document.createElement('img')
            timeimg.className = "timeImage"
            timeimg.src = 'resource/time.svg'


            h1.innerHTML=art[i].title
           


            const time = Date.parse(art[i].publishedAt)
            console.log(time)
            const ct = new Date()
            const mct = Date.parse(ct)
            console.log(mct)

            const d  = mct - time
            var df =Math.trunc(d/60000)
            if(df>60){

                df = Math.trunc(df/60)

                if(df>24){
                    df = Math.trunc(df/24)
                    h6.innerHTML = df +" day"
                }else{
                    h6.innerHTML = df +" hr"
                }
                
            }else{
                h6.innerHTML = Math.trunc(d/60000) +" min"
            }
        
            
           
            div.appendChild(h1)
            div.appendChild(timeimg)
            div.appendChild(h6)
            divcontainer.appendChild(div)
            firstHomeSectionRight.appendChild(divcontainer)



        }
        // firstHomeSectionLeft.........................................................................................
        getNewsBitcoin()
    })
    .catch(error => {
        console.log(error);
    });
}


function getNewsBitcoin(){
    var url = 'https://newsapi.org/v2/top-headlines?' +
          'q=sports&'+
          'sortBy=popularity&' +
          'apiKey=bc7e31b51b694d00949671898343f022';

    var req = new Request(url);

    var art ;

    fetch(req)
    .then(response => response.json())
    .then((news) => {
        art = news.articles
        console.log(art);
        const firstHomeSectionRight = document.querySelector('.bitcoinnewscontainer');
        for (let i=0; i<5;i++){
            const divcontainer = document.createElement('div');
            divcontainer.className  = '.firstHomeSectionRightInnercontainer'

            const img = document.createElement('img');
            img.className = 'firstHomeSectionimageRight1'
            const div = document.createElement('div');
            div.className  = 'firstHomeSectionDesContainerRight1'
            const h1 = document.createElement('h1');
            h1.className = 'firstHomeSectionRight1-headlineText'
            const h3 = document.createElement('h3');
            h3.className = 'firstHomeSectionRight1-brifdis'
            const h6 = document.createElement('h6');
            h6.className = 'time'
            const timeimg = document.createElement('img')
            timeimg.className = "timeImage"
            timeimg.src = 'resource/time.svg'


            h1.innerHTML=art[i].title
            h3.innerHTML = art[i].description 
            img.src = art[i].urlToImage;


            const time = Date.parse(art[i].publishedAt)
            console.log(time)
            const ct = new Date()
            const mct = Date.parse(ct)
            console.log(mct)

            const d  = mct - time
            var df =Math.trunc(d/60000)
            if(df>60){

                df = Math.trunc(df/60)

                if(df>24){
                    df = Math.trunc(df/24)
                    h6.innerHTML = df +" day"
                }else{
                    h6.innerHTML = df +" hr"
                }
                
            }else{
                h6.innerHTML = Math.trunc(d/60000) +" min"
            }
        
            
           
            div.appendChild(h1)
            div.appendChild(h3)
            div.appendChild(timeimg)
            div.appendChild(h6)
            divcontainer.appendChild(img)
            divcontainer.appendChild(div)
            firstHomeSectionRight.appendChild(divcontainer)

        }
        
    })
    .catch(error => {
        console.log(error);
    });
}







getNews()



