import utility from './utility'

it('should be able to update date to Month, Day format', () => {
  const dayBeforeUpdate = '2019-03-12'

  const dayAfterUpdate = utility.updateDate(dayBeforeUpdate)

  expect(dayAfterUpdate).toEqual('Mar,12')
})
