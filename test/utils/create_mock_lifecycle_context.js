import spy from 'sinon/lib/sinon/spy.js'; // avoid babel-register-related error by importing only spy

export default function createMockLifecycleContext() {
  return {
    on: spy()
  };
}
