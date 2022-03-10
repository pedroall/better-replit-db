export class Client {
  constructor(key?: string);

  public connect(key: string);

  // Native
  public get(key: string, options?: { raw?: boolean }): Promise<unknown>;
  public set(key: string, value: any, options?: { raw?: boolean }): Promise<Client>;
  public delete(key: string): Promise<Client>;
  public list(prefix?: string): Promise<string[]>;

  // Dynamic
  public empty(): Promise<Client>;
  public getAll(): Promose<Record<any, any>>;
  public setAll(obj: Record<any, any>): Promise<Client>;
  public deleteMultiple(...args: string[]): Promise<Client>;
}
