function Decorator(target: Function) {
  target.prototype.id = "xyz";
}

function Decorator2(itemId: string) {
  return (target: Function) => {
    target.prototype.id = itemId;
  };
}
@Decorator
class Pizza {
  id: string;
}

@Decorator2("Mulchand")
class Samosa {
  id: string;
}

console.log(new Pizza().id);
console.log(new Samosa().id);
