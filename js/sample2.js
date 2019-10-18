function sample2(){
        var value = window.localStorage.getItem("Q"+count);
        //String(value);
        //document.write("結果は"+value);

        //問題
        document.getElementById("area1").innerHTML = (count) + "問目：" + value;
        
        //次の質問を表示
        if (count<48){
            count++;
        } else {
            //終了
            document.getElementById("area1").innerHTML = " ";
        }
}