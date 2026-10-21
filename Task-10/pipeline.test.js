   describe('Task 10 pipeline sanity', () => {
     test('math works', () => {
       expect(1 + 1).toBe(2);
     });

     test('runtime is node', () => {
       expect(typeof process.version).toBe('string');
     });
   });
