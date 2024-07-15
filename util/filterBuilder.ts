const _DATE = 'Date'

export class FilterBuilder {
    filters: string[];

    constructor() {
        this.filters = [];
    }

    private static verifyFieldIsString(field: string): void {
        if (typeof field !== 'string') throw new TypeError('field must be a string');
    }

    private static verifyListOfSingularType(value: any[], allowedTypes: string[]): void {
        if (value.length === 0) throw new TypeError('value cannot be an empty list');

        const firstType = typeof value[0];

        value.forEach((item) => {
            if(typeof item !== firstType) {
                throw new TypeError('All items in value must be of the same type');
            }
        });
    }

    private static verifyValueIsAllowedType(value: any, allowedTypes: string[], allowArray: boolean): void {
        let errorMessage = "";
        let typeCheckValue = value;
        if (allowArray && Array.isArray(value)) {
            FilterBuilder.verifyListOfSingularType(value, allowedTypes);
            errorMessage = "Items in ";
            typeCheckValue = value[0];
        }

        const isDateAndDateAllowed = allowedTypes.includes(_DATE) && typeCheckValue instanceof Date;
        const isAllowedType = allowedTypes.includes(typeof typeCheckValue);
        if (!(isDateAndDateAllowed || isAllowedType)) {
            throw new TypeError(`${errorMessage}value must be one of the following types: ${allowedTypes.join(', ')}`);
        }
    }

    private static adjustValue(value: any): any {
        const _adjustValue = (value: any) => {
            if (value instanceof Date) {
                return value.toISOString();
            } else if (typeof value === 'string') {
                return JSON.stringify(value)
            }
            return value;
        }
        if(Array.isArray(value)) {
            return `[${value.map(_adjustValue)}]`;
        } else {
            return _adjustValue(value);
        }
    }

    private addValueFilter(allowedTypes: string[], operator: string, field: string, value: any, allowArray: boolean=false) {
        FilterBuilder.verifyFieldIsString(field);
        FilterBuilder.verifyValueIsAllowedType(value, allowedTypes, allowArray);
        this.filters.push(`${operator}(${field},${FilterBuilder.adjustValue(value)})`);
    }

    equals(field: string, value: boolean | number | string | Date | string[] | number[] | boolean[] | Date[]) {
        const allowedTypes = ['boolean', 'number', 'string', _DATE];
        this.addValueFilter(allowedTypes, 'equals', field, value, true);
        return this;
    }

    lessThan(field: string, value: number | Date) {
        this.addValueFilter(['number', _DATE], 'less-than', field, value);
        return this;
    }
    
    greaterThan(field: string, value: number | Date) {
        this.addValueFilter(['number', _DATE], 'greater-than', field, value);
        return this;
    }

    lessOrEqual(field: string, value: number | Date) {
        this.addValueFilter(['number', _DATE], 'less-or-equal', field, value);
        return this;
    }

    greaterOrEqual(field: string, value: number | Date) {
        this.addValueFilter(['number', _DATE], 'greater-or-equal', field, value);
        return this;
    }

    contains(field: string, value: string | string[]) {
        this.addValueFilter(['string'], 'contains', field, value, true);
        return this;
    }
    
    containsAny(field: string, value: string | string[]) {
        this.addValueFilter(['string'], 'contains-any', field, value, true);
        return this;
    }

    containsAll(field: string, value: string | string[]) {
        this.addValueFilter(['string'], 'contains-all', field, value, true);
        return this;
    }

    endsWith(field: string, value: string) {
        this.addValueFilter(['string'], 'ends-with', field, value);
        return this;
    }

    startsWith(field: string, value: string) {
        this.addValueFilter(['string'], 'starts-with', field, value);
        return this;
    }

    any(field: string, value: string[] | number[] | boolean[] | Date[]) {
        if (!Array.isArray(value)) {
            throw new TypeError('value must be an array');
        }
        const allowedTypes = ['boolean', 'number', 'string', _DATE];
        this.addValueFilter(allowedTypes, 'any', field, value, true);
        return this;
    }

    has(field: string) {
        FilterBuilder.verifyFieldIsString(field);
        this.filters.push(`has(${field})`);
        return this;
    }

    build() {
        return this.filters.join(',');
    }
}
