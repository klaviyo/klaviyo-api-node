/**
 * @link https://developers.klaviyo.com/en/docs/filtering_#filter-operations
 * @example
 * ```ts
 * const filter = new FilterBuilder()
  .equals('email', 'sarah.mason@klaviyo-demo.com')
  .lessThan('datetime', new Date())
  .lessOrEqual('datetime', new Date())
  .greaterThan('number', 123)
  .greaterOrEqual('number', -123)
  .contains('name', 'sarah')
  .containsAny('name', ['sarah', 'mason'])
  .containsAll('name', ['sarah', 'mason'])
  .endsWith('name', 'mason')
  .startsWith('name', 'sarah')
  .any('name', ['sarah', 'mason'])
  .not(
    new FilterBuilder()
      .equals('name', 'sarah')
      .greaterOrEqual('number', 123)
      .containsAll('name', ['sarah', 'mason']),
  )
  .build();
 * ```
 */
export class FilterBuilder {
  private filters: any[] = [];

  equals(field: string, value: string) {
    this.filters.push(`equals(${field}, "${value}")`);
    return this;
  }
  lessThan(field: string, value: number | Date) {
    this.filters.push(
      `less-than(${field}, ${value instanceof Date ? value.toJSON() : value})`,
    );
    return this;
  }
  lessOrEqual(field: string, value: number | Date) {
    this.filters.push(
      `less-or-equal(${field}, ${value instanceof Date ? value.toJSON() : value})`,
    );
    return this;
  }
  greaterThan(field: string, value: number | Date) {
    this.filters.push(
      `greater-than(${field}, ${
        value instanceof Date ? value.toJSON() : value
      })`,
    );
    return this;
  }
  greaterOrEqual(field: string, value: number | Date) {
    this.filters.push(
      `greater-or-equal(${field}, ${
        value instanceof Date ? value.toJSON() : value
      })`,
    );
    return this;
  }
  contains(field: string, value: string | string[]) {
    this.filters.push(`contains(${field}, ${JSON.stringify(value)})`);
    return this;
  }
  containsAny(field: string, value: string | string[]) {
    this.filters.push(`contains-any(${field}, ${JSON.stringify(value)})`);
    return this;
  }
  containsAll(field: string, value: string | string[]) {
    this.filters.push(`contains-all(${field}, ${JSON.stringify(value)})`);
    return this;
  }
  endsWith(field: string, value: string) {
    this.filters.push(`ends-with(${field}, "${value}")`);
    return this;
  }
  startsWith(field: string, value: string) {
    this.filters.push(`starts-with(${field}, "${value}")`);
    return this;
  }
  any(field: string, value: (number | string | Date | boolean)[]) {
    this.filters.push(`any(${field}, ${JSON.stringify(value)})`);
    return this;
  }

  not(builder: FilterBuilder) {
    this.filters.push(`not(${builder.build()})`);
    return this;
  }

  build() {
    return this.filters.join();
  }
}
