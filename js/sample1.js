function sample1(){

    if (count==1){
        sample2();
    } else {
        var value = window.localStorage.getItem("key"+(count-1));
        document.getElementById("area1").innerHTML = "あなたにオススメの県は"+value+"です";
    }
}
