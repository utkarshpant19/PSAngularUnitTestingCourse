import { StrengthPipe } from "./strength.pipe";

describe('StrengthPipe', ()=>{

  let pipe;
  beforeEach(()=>{
    // Arrange the initial State
    pipe = new StrengthPipe();
  });

  it('should display weak if result is 5', ()=>{

    //`Action to change state
    let value = pipe.transform(5);

    // Assert
    expect(value).toEqual('5 (weak)')
  })

  it('should display Strong if result is 10', ()=>{

    expect(pipe.transform(10)).toEqual('10 (strong)')
  });


  it('should display unbelievable if result is 20', ()=>{
    expect(pipe.transform(20)).toEqual('20 (unbelievable)')
  })
})
