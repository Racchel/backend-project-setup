import { Test } from '@models/Test'

test('it should be ok', () => {
   const test = new Test

   test.name = 'First test'

   expect(test.name).toEqual('First test')
})