test("测试代理",()=>{
    class RedoAble {
      _id:number;
      //全局唯一的栈
      static inStack:Array<any>=[];

      static redoStack:Array<any>=[];
      
      //事务支持
      start(){
          console.log("开始事务支持")
          throw new Error("Method not implemented.");
      }
      //丢弃事务
      abandon(){
          console.log("丢弃事务")
          throw new Error("Method not implemented.");
      }
      //提交
      commit(){
          console.log("提交事务")
          throw new Error("Method not implemented.");
      }

      //入栈
      static push(target:Base,prop:any,value:any){
        RedoAble.inStack.push([target,prop,value]);
      }
      //撤销
      static pop(){
        var oldData=RedoAble.inStack.pop();
        var target=oldData[0]
        RedoAble.redoStack.push(oldData);
        target[oldData[1]]=oldData[2];
      }
      //重做
      static redo(){
        var oldData=RedoAble.redoStack.shift();
        var target=oldData[0]
        target[oldData[1]]=oldData[2];
        //重新执行
      }
    }

    class Base {
      getId(){

      }
    }

    class  Node extends Base {
      width:number=20;
      constructor() {
        super();
      }
      getId(): number {
        throw new Error("Method not implemented.");
      }
    }
    var node = new Proxy(new Node(),{
      get:(target,key)=>{
        return target[key];
      },
      set:(target,prop,v)=>{
        RedoAble.push(target,prop,target[prop]);
        target[prop]=v;
        return true;
      }
    })
    node.width=30
    node.width=60
    node.width=80
    RedoAble.pop();
    RedoAble.pop();
    console.log(node.width); 
    RedoAble.redo();
    console.log(node.width); 
 
})