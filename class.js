class Mobile{
    constructor(brand,price,colour){
        this.brand=brand;
        this.price=price;
        this.colour=colour;
    }

    call(){
        console.log("call ho pa rahi hai");
    }
    charge(){
        console.log("phone charge ho pa rha hai")
    }
}
const mobile1=new Mobile("motorola",10000,"black");
mobile1.call();
mobile1.charge();
