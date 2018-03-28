// banner效果
{
    $(".banner_nav li").each(function(){
        let index=$(this).index();
        $(this).mouseenter(function(){
            $(".banner_tanchu1").eq(index).show();
        })
        $(this).mouseleave(function(){
            $(".banner_tanchu1").eq(index).hide();
        })
    })

    let lunbo=document.querySelectorAll(".lunbo1");
    let imgs=document.querySelectorAll(".banner_imgs1");
    let banner=document.querySelector(".banner_bottom");
    lunbo.forEach(function(ele,index){
        ele.onmouseenter=function(){
            for(let i=0;i<imgs.length;i++){
                lunbo[i].classList.remove("active");
                imgs[i].classList.remove("active1");
            }
            this.classList.add("active");
            imgs[index].classList.add("active1");
            n=index;
        }
    })

    let n=0;
    let t=setInterval(move,3000);
    function move(){
        n++;
        if(n===imgs.length){
            n=0;
        }
        if(n<0){
            n=imgs.length-1;
        }
        for(var i=0;i<imgs.length;i++){
            lunbo[i].classList.remove("active");
            imgs[i].classList.remove("active1");
        }
        lunbo[n].classList.add("active");
        imgs[n].classList.add("active1");
    }
    banner.onmouseenter=function(){
        clearInterval(t);
    }
    banner.onmouseleave=function(){
        t=setInterval(move,3000);
    }

}
//天猫超市效果
{
    $(".jrfq_top1").mouseenter(function(){
        $(".jrfq_mid11").hide();
        $(".jrfq_mid").show();
        $(this).addClass("active").siblings(".active").removeClass("active");
        $(".jrfq_top11").removeClass("active");
    })

    $(".jrfq_top11").mouseenter(function(){
        $(".jrfq_mid").hide();
        $(".jrfq_mid11").show();
        $(this).addClass("active").siblings(".active").removeClass("active");
        $(".jrfq_top1").removeClass("active");


    })
}
{
    $(window).scroll(function () {
        let st = $(window).scrollTop();
        if (st > 700) {
            $(".fixed_top_nav").show();
        } else {
            $(".fixed_top_nav").hide();
        }
    })
}