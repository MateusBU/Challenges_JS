var addTwoNumbers = function(l1, l2) {

    let currentL1 = l1;
    var arrL1=[];
    
    let currentL2 = l2;
    var arrL2=[];
    while(currentL2 != null || currentL1 != null ){
        if(currentL2 != null){
            arrL2.push(currentL2.val);
            currentL2 = currentL2.next;
        }
        if(currentL1 != null){
            arrL1.push(currentL1.val);
            currentL1 = currentL1.next;
        }
    }
    console.log(arrL1);
    console.log(arrL2);

    var maxLenght = arrL1.length > arrL2.length ? arrL1.length : arrL2.length;
    var dozen = 0;
    var unity = 0;
    var arrResp = [];
    for(let i = 0; i < maxLenght; i++){
        if(arrL1[i] == null){
            unity = (arrL2[i] + dozen) % 10;
            dozen = (arrL2[i] + dozen) / 10;
        }
        else if(arrL2[i] == null){
            unity = (arrL1[i] + dozen) % 10;
            dozen = (arrL1[i] + dozen) / 10;
        }
        else{
            unity = (arrL1[i] + arrL2[i] + dozen) % 10;
            dozen = (arrL1[i] + arrL2[i] + dozen) / 10;
        }
        unity = Math.floor(unity);
        dozen = Math.floor(dozen);
        arrResp.push(unity);
    }
    if(dozen){
        arrResp.push(dozen);
    }

    console.log(arrResp);

    var listNode = {val: arrResp[0], next: null};
    let current = listNode;

    for(let i = 1; i < arrResp.length; i++){
        current.next = { val: arrResp[i], next: null };
        current = current.next;
    }

    return listNode;
};
const l1 = {
  val: 9,
  next: {
    val: 9,
    next: {
      val: 9,
      next: {
        val: 9,
        next: {
          val: 9,
          next: {
            val: 9,
            next: {
              val: 9,
              next: null
            }
          }
        }
      }
    }
  }
};

const l2 = {
  val: 9,
  next: {
    val: 9,
    next: {
      val: 9,
      next: {
        val: 9,
        next: null
      }
    }
  }
};


console.log(addTwoNumbers(l1, l2));
