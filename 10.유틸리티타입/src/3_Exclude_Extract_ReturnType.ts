type Exclude<T, U> = T extends U ? never : T;
type Extract<T, U> = T extends U ? T : never;
type ReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer R
  ? R
  : never;

type T0 = Exclude<'a' | 'b' | 'c', 'a'>; // 'b' | 'c'
type T1 = Extract<'a' | 'b' | 'c', 'a'>; // 'a'

function func1(x: number, y: number): number {
  return x + y;
}

type T2 = ReturnType<() => string>; // string
type T3 = ReturnType<typeof func1>; // number
type T4 = ReturnType<(x: number) => Promise<boolean>>; // Promise<boolean>
type T5 = ReturnType<(...args: string[]) => void>; // void
