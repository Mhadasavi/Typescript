class genericsDemo<T> {
  private data: T[] = [];

  add(item: T) {
    this.data.push(item);
  }

  remove() {
    this.data.shift();
  }
}
const obj = new genericsDemo<string>();
obj.add("add");
const obj2 = new genericsDemo<number>();
obj2.add(2);
