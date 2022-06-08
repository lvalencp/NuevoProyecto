function Nueva (x, y){
    if (x>y) {
        let z= 0.20;
        let total=x*z;
        console.log (total+y);
    } else {
        let z= 0.30;
        let total=y*z;
        console.log (total+x);
    }
}

Nueva(150, 40)