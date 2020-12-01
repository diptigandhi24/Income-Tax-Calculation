let db: IDBDatabase;

const TAXTABLENAME = 'TaxableInfo';

export function initDB() {
  let openRequest = indexedDB.open('Taxes', 1);
  openRequest.onupgradeneeded = function(event) {
    db = openRequest.result;
    let taxableInfo = db.createObjectStore('TaxableInfo', { keyPath: 'id', autoIncrement: true });
    taxableInfo.createIndex('userId', 'userId', { unique: false });
    console.log('Created Index', taxableInfo.indexNames.contains('userId'));
  };
  openRequest.onerror = function() {
    console.error('Error', openRequest.error);
  };
  openRequest.onsuccess = function() {
    db = openRequest.result;
    console.log('created indexeddb');
  };
  // let deleteRequest = indexedDB.deleteDatabase('Taxes');
  // deleteRequest.onsuccess = function() {
  //   console.log('Databases delete');
  // };
}
interface CalculatedTaxInfo {
  year: string;
  income: string;
  age: string;
  investment: string;
  totalTax: number;
  userId: number;
}

export function saveTaxInfo({ year, income, age, investment, totalTax, userId }: CalculatedTaxInfo) {
  console.log('Inside on save', year, income, age);
  let connectRequest = indexedDB.open('Taxes', 2);
  connectRequest.onsuccess = function() {
    console.log('coonected to data base');
    let db = connectRequest.result;
    let transaction = db.transaction(TAXTABLENAME, 'readwrite');
    let taxableInfo = transaction.objectStore(TAXTABLENAME);
    let request = taxableInfo.add({ year, income, age, investment, totalTax, userId });
    request.onsuccess = function() {
      console.log('Success', request.result);
    };
    request.onerror = function() {
      console.log('Error', request.error);
    };
  };
}
export async function getData(id: number, calculatedTaxResults: (calculatedTax: any[]) => void): Promise<void | any[]> {
  console.log('Running function getdata');
  let calculatedTaxData;
  let connectDBRequest: IDBOpenDBRequest = indexedDB.open('Taxes', 2);

  connectDBRequest.onsuccess = function() {
    let db = connectDBRequest.result;
    let transaction = db.transaction(TAXTABLENAME, 'readonly');
    console.log('was success trs=a');
    let store = transaction.objectStore(TAXTABLENAME);
    console.log('Get All keys', store.getAllKeys());
    let userIndex = store.index('userId');
    let i = 4;
    let taxCardData: Array<Object> = [];
    let data = userIndex.openCursor(111, 'prev');

    data.onsuccess = function(event) {
      var cursor = event.target.result;

      if (cursor && i != 0) {
        taxCardData.push(cursor.value);
        i--;
        cursor.continue();
      } else {
        console.log('No cursor found', taxCardData);
        calculatedTaxResults(taxCardData);
      }
    };
  };
}
