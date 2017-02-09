/**
 * Converts a string containing a comma-separated list of values
 * to a list of values
 *
 * @param commaSeparatedValues
 * @return {string[]}
 */
export function listOf (commaSeparatedValues: string): string[] {
    return commaSeparatedValues.split(',').map(i => i.trim());
};
