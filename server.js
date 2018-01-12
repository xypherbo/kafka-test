let kafka = require('kafka-node');
let client = new kafka.KafkaClient({
    kafkaHost:'velomobile-01.srvs.cloudkafka.com,velomobile-02.srvs.cloudkafka.com,velomobile-03.srvs.cloudkafka.com'
});
let producer = new kafka.Producer(client, {
    requireAcks: 1
});

producer.on('ready', function () {
    var message = 'a message';
    var keyedMessage = new KeyedMessage('keyed', 'a keyed message');

    producer.send([{
        topic: topic,
        partition: p,
        messages: [message, keyedMessage],
        attributes: a
    }], function (err, result) {
        console.log(err || result);
        process.exit();
    });
});

producer.on('error', function (err) {
    console.log('error', err);
});