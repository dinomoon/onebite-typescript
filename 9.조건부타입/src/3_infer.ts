type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type T0 = ReturnType<() => string>;
// type T0 = string
type T1 = ReturnType<(s: string) => void>;
// type T1 = void
type T2 = ReturnType<<T>() => T>;
// type T2 = unknown
type T3 = ReturnType<<T extends U, U extends number[]>() => T>;
// type T3 = number[]

type UnpackedPromise<T> = T extends Promise<infer R> ? R : never;
type T4 = UnpackedPromise<Promise<string>>;
// type T4 = string
type T5 = UnpackedPromise<string>;
// type T5 = never
