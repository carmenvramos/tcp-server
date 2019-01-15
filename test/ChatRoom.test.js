const ChatRoom = require('../lib/ChatRoom');

describe('ChatRoom', () => {

  it('can add a client', () => {
    // const client {}
    const client = {};
    const chatroom = new ChatRoom();
    // call the chatroom.add(client)
    chatroom.add(client);
    // expect client.username is defined
    expect(client.username).toBeDefined();
  });
  
  it('gets the client with said username', () => {
    const client = {};
    const chatroom = new ChatRoom();
    chatroom.add(client);

    const gotClient = chatroom.getClient(client.username);
    expect(gotClient).toEqual(client);
  });

  it('renames username to newusername', () => {
    const client = {};
    const chatroom = new ChatRoom();
    chatroom.add(client);
    const origName = client.username;
    expect(chatroom.rename(client.username, 'Carmen')).toBeTruthy();
    expect(client.username).toEqual('Carmen');
    expect(chatroom.getClient(origName)).toBeFalsy();
    
  });

  
});



