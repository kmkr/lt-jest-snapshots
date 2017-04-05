# lt-jest-snapshots

* Hva er Jest?
   * Mocha, Jasmine, AVA, Karma, QUnit, Tape, Lab, Testem, *Jest*, ...
* Jest
   * Test-runner (screenshot av `jest` run)
   * Assertions (expect(x).toBe(y))
   * DOM-støtte (window. ...)
   * Mocks, stubs og spies (jest.fn() og jest.mock())
       * jest.mock('./my-service.js');
       * jest.mock('./my-service.js', () => {
          foo() {
            return 'bar';
          }
       });
       * const mySpy = jest.fn();
   * Asynk-støtte (Promise)
   * Mulighet for debugging (screenshot av chrome)
   * Rask feedback (screenshot av Watch usage)
   * Test-isolasjon (slipper teardown)
   * Vise grad av testdekning (screenshot)
   * Snapshots (yay!)
* Snapshots
    * React
    * Serialiserte ting
* Erfaringer
    * Hastighetsforbedring
    * Enklere å skrive tester
