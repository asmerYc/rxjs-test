const MyClass = class Me {
    constructor(){
        this.name = 'zhangsan';
        this.age = 18;
    }
    getClassName() {
      return Me.name;
    }
  };
  console.log(new MyClass().getClassName())