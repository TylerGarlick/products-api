export = index;
declare function index(options: any): any;
declare namespace index {
  // Circular reference from index
  const datastore: any;
  function fromInstance(nedbInstance: any): any;
}
