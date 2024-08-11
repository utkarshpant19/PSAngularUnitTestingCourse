describe('My first test ', ()=>{

  // This callback contains the body of the tests

  let sut; // System under Test

  // This function runs before every test , we reset the test back to its initial state on each

  beforeEach(()=>{

    sut = {};
  })

  it('Should be true if true', ()=>{

    // A test contains 3 parts

    //  Arrange: Arrange an initial State

    sut.a = false;

    // Act: Take action on system under test, change state
    sut.a = true;

    // Assert: Check if new state is what we expect it toBe
    expect(sut.a).toBe(true); // toBe function is a matcher , provided by Jasmine
  })
})
