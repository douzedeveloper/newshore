export class Member {
  constructor(data?: any) {
    Object.assign(this, data);
  }
  readonly id?: string;
  name?: string;
  image?: string;
  ancestry?: string;
}
