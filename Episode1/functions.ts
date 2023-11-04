export function add(x: number, y: number): number {
    return x + y;
}

export function addStr(string1: string, string2?: string): string {

    if(string2 == undefined) {
        return string1;
    } else {
        return string1 + string2;
    }
}