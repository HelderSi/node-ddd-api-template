import { v4 as uuidv4 } from "uuid";

class Foo {
  id?: string;
  name: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Foo };