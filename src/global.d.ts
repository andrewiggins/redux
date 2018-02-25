// types for process.env.NODE_ENV
interface Process {
  env: {
    NODE_ENV: string;
  }
}

declare const process: Process;

interface Console {
  error(...args: any[]): void;
}

declare const console: Console;
