import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'convertToSpaces'
})
export class ConvertToSpaces implements PipeTransform {
    private static readonly REPLACEMENT_CHAR: string = ' ';


    transform(value: string, character: string): string {
        return value.replace(character, ConvertToSpaces.REPLACEMENT_CHAR);
    }
}