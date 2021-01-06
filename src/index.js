'use strict';

require('dotenv').config();
const { PubSub } = require('@google-cloud/pubsub');
const path = require('path');


const quickStart = async (topicName, subscriptionName) => {
  try {
    console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS)
    const pubsub = new PubSub({ 
      projectId: process.env.GOOGLE_PROJECT_ID
    });
  
    // const [topic] = await pubsub.createTopic(topicName);
    // console.log(`Topic ${topic.name} created`);
  
    const [subscription] = await pubsub.topic(topicName).createSubscription(subscriptionName);

    subscription.on('message', message => {
      console.log('Received message:', message.data.toString());
    })
    subscription.on('error', error => {
      console.error('Received error:', error);
      process.exit(1);
    });
  } catch (error) {
    console.error(error);
  }

}

const init = () => {
  console.log('Hello World!', process.env.TESTE);  

  quickStart('teste', 'teste');
}

init();