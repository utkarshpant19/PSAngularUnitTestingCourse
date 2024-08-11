import { MessageService } from "./message.service"

describe('MessageService', ()=>{

  let messageService: MessageService
  beforeEach(()=>{
    messageService = new MessageService();
  });

  it('should have no messsages in the start', ()=>{
    expect(messageService.messages.length).toBe(0)
  });

  // Test 2: When message is added
  it('should add a message when add is called', ()=>{

    // Action
    messageService.add('message1');

    // Assert
    expect(messageService.messages.length).toBe(1);
  });

  // Test 3: When clear is called

  it('should empty the messages when clear is called ', ()=>{

    // Arrange
    messageService = new MessageService();
    messageService.add('message1');

    // Action
    messageService.clear();

    // Assert
    expect(messageService.messages.length).toBe(0);
  })
})
