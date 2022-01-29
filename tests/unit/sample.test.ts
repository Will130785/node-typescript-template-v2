describe('Sample test', () => {
    it('Returns a string of success', () => {
      const sample = (): string => {
        return 'success'
      }
      expect(sample()).toEqual('success')
    })
  })