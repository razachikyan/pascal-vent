export function logger(message: string): void {
    alert(message);
}

interface ILogger {
    logger: (message :string) => void;
}