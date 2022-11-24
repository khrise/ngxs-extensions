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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvcmUvaW50ZXJuYWwvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUNBQW1DO0FBQ25DLE1BQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUVyQjs7Ozs7Ozs7Ozs7O0dBWUc7QUFDSCxNQUFNLFVBQVUsUUFBUSxDQUFDLE1BQU0sR0FBRyxPQUFPO0lBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDdEIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUN2QjtJQUVELE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9CLElBQUksTUFBTSxLQUFLLE9BQU8sRUFBRTtRQUN0QixPQUFPLEdBQUcsRUFBRSxFQUFFLENBQUM7S0FDaEI7SUFFRCxPQUFPLEdBQUcsTUFBTSxHQUFHLEVBQUUsRUFBRSxDQUFDO0FBQzFCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogVXNlZCB0byBnZW5lcmF0ZSB1bmlxdWUgSURzLiAqL1xyXG5jb25zdCBpZENvdW50ZXIgPSB7fTtcclxuXHJcbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSB1bmlxdWUgSUQuIElmIGBwcmVmaXhgIGlzIGdpdmVuLCB0aGUgSUQgaXMgYXBwZW5kZWQgdG8gaXQuXHJcbiAqXHJcbiAqIEBwYXJhbSBwcmVmaXggVGhlIHZhbHVlIHRvIHByZWZpeCB0aGUgSUQgd2l0aC5cclxuICogQHJldHVybnMgUmV0dXJucyB0aGUgdW5pcXVlIElELlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiB1bmlxdWVJZCgnY29udGFjdF8nKVxyXG4gKiAvLyA9PiAnY29udGFjdF8xMDQnXHJcbiAqXHJcbiAqIHVuaXF1ZUlkKClcclxuICogLy8gPT4gJzEwNSdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1bmlxdWVJZChwcmVmaXggPSAnJGlkcyQnKTogc3RyaW5nIHtcclxuICBpZiAoIWlkQ291bnRlcltwcmVmaXhdKSB7XHJcbiAgICBpZENvdW50ZXJbcHJlZml4XSA9IDA7XHJcbiAgfVxyXG5cclxuICBjb25zdCBpZCA9ICsraWRDb3VudGVyW3ByZWZpeF07XHJcbiAgaWYgKHByZWZpeCA9PT0gJyRpZHMkJykge1xyXG4gICAgcmV0dXJuIGAke2lkfWA7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gYCR7cHJlZml4ICsgaWR9YDtcclxufVxyXG4iXX0=