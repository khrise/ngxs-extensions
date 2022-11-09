/** Used to generate unique IDs. */
const idCounter = {};
/**
 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
 *
 * @param prefix The value to prefix the ID with.
 * @returns Returns the unique ID.
 * @example
 *
 * uniqueId('contact_')
 * // => 'contact_104'
 *
 * uniqueId()
 * // => '105'
 */
export function uniqueId(prefix = '$ids$') {
    if (!idCounter[prefix]) {
        idCounter[prefix] = 0;
    }
    const id = ++idCounter[prefix];
    if (prefix === '$ids$') {
        return `${id}`;
    }
    return `${prefix + id}`;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiQzovRGV2ZWxvcC9naXRodWIvbmd4cy1leHRlbnNpb25zL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL2ludGVybmFsL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1DQUFtQztBQUNuQyxNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFFckI7Ozs7Ozs7Ozs7OztHQVlHO0FBQ0gsTUFBTSxVQUFVLFFBQVEsQ0FBQyxNQUFNLEdBQUcsT0FBTztJQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ3RCLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDdkI7SUFFRCxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQixJQUFJLE1BQU0sS0FBSyxPQUFPLEVBQUU7UUFDdEIsT0FBTyxHQUFHLEVBQUUsRUFBRSxDQUFDO0tBQ2hCO0lBRUQsT0FBTyxHQUFHLE1BQU0sR0FBRyxFQUFFLEVBQUUsQ0FBQztBQUMxQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIFVzZWQgdG8gZ2VuZXJhdGUgdW5pcXVlIElEcy4gKi9cclxuY29uc3QgaWRDb3VudGVyID0ge307XHJcblxyXG4vKipcclxuICogR2VuZXJhdGVzIGEgdW5pcXVlIElELiBJZiBgcHJlZml4YCBpcyBnaXZlbiwgdGhlIElEIGlzIGFwcGVuZGVkIHRvIGl0LlxyXG4gKlxyXG4gKiBAcGFyYW0gcHJlZml4IFRoZSB2YWx1ZSB0byBwcmVmaXggdGhlIElEIHdpdGguXHJcbiAqIEByZXR1cm5zIFJldHVybnMgdGhlIHVuaXF1ZSBJRC5cclxuICogQGV4YW1wbGVcclxuICpcclxuICogdW5pcXVlSWQoJ2NvbnRhY3RfJylcclxuICogLy8gPT4gJ2NvbnRhY3RfMTA0J1xyXG4gKlxyXG4gKiB1bmlxdWVJZCgpXHJcbiAqIC8vID0+ICcxMDUnXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdW5pcXVlSWQocHJlZml4ID0gJyRpZHMkJyk6IHN0cmluZyB7XHJcbiAgaWYgKCFpZENvdW50ZXJbcHJlZml4XSkge1xyXG4gICAgaWRDb3VudGVyW3ByZWZpeF0gPSAwO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaWQgPSArK2lkQ291bnRlcltwcmVmaXhdO1xyXG4gIGlmIChwcmVmaXggPT09ICckaWRzJCcpIHtcclxuICAgIHJldHVybiBgJHtpZH1gO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGAke3ByZWZpeCArIGlkfWA7XHJcbn1cclxuIl19