export function forEach(items, cb) {
  for (let index = 0; index < items.length; index++) {
    cb(items[index]);
  }
}
