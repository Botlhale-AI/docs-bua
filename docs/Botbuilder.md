---
sidebar_position: 1
---

# Bot Builder

The botbuilder section of this documentation suite outlines processes related to the creation, training, deployment, and versioning of your virtual assistant. 

## Create Virtual Assistant

Once you have successfully logged in to the Bua site and selected your organisation, you can begin creating your chatbot.

:::info
Only users with admin and botbuilder permissions are able to create bots on this platform.
:::

Use the following steps to create your virtual assistant. 

1. Click on the `CREATE BOT` button as shown in the following image.

![alt text](/img/image-30b.png)

2. A pop-up window appears, prompting you to name your new bot and select one or more languages the bot will support. Fill in the required fields and click `CREATE BOT`.

![alt text](/img/imageb.png)

3. The newly created bot is added to the My Chatbots list on the dashboard. You can toggle between different bots by clicking the Chatbot dropdown menu in the top right-hand corner of the page as seen in the bordered portion of the following image.

![alt text](/img/image-1b.png)

4. Once the bot has been created, click on the `Edit` icon to add the Bot builder parameters such as Intents, Entities, and Dialogue. These are discussed in detail in the sections that follow.


## Manage Intents

An intent is all about the motive of a given chatbot user. It’s the goal behind each message the chatbot receives from the user. Intents categorise text based on the goal or purpose expressed in the user’s message. For example, the intent **"greetings"** enables your bot to understand when the user says **"Hi"**. This creates a simple question-answer dialogue that provides a response to messages categorised to a specific intent.

### Add Intents

Use the following steps to add intents to your selected chatbot.

1. From the My Chatbots page, click on the `Edit` icon of the chatbot you wish to add intents to. You are directed to the Intents Manager page.

2. Click the `New Intent` button.

3. A pop-up window appears, prompting you to enter an intent name. Fill in the required field, and click `Create Intent`.


![alt text](/img/image-2b.png)

![alt text](/img/image-4b.png)

:::tip
You need to provide example messages and responses for each language you selected when creating your chatbot. This is because on the backend, an intent classifier is trained for each language. A pre-trained language model for each intent classifier is used to create embeddings for the classifier to train accurately with fewer example messages. To toggle between predefined languages, select the desired language from the drop-down list of the language tab.
:::

3. Once you have provided a list of example messages and possible responses in your various predefined languages, click the `Save` button to save the created intents of your bot.

![alt text](/img/image-5b.png)

### Upload Intents

You can upload intents to the Intents Manager page as a CSV. 

1. From the Intents Manager page, click `Upload Intents`
2. Specify the language of the intents.
3. Select the intents file you wish to upload. Ensure the file is formatted correctly by referencing the example file.
4. Click `Upload`.
5. Your new intents are uploaded and appear on the Intents Manager page.

### Generate Intent Examples

Once an intent is created, you have the option of automatically generating examples of user messages that trigger this intent. Use the following steps to do so:

1. From the Intents Manager page, click on the `View` icon next to the intent for which you wish to generate examples.
2. In the new page you are taken to, click on the `Generate` button.
3. In the pop-up window that appears, enter an example sentence and specify the number of sentences you would like generated.

![alt text](/img/genereate-intents.png)

4. Click `Generate`.
5. Your newly generated intent examples appear under the User Says tab.

:::tip
You also have the option of auto-generating translations for your intents. To do so, simply click the `Translate` button and select your target language. The auto-generated translations appear in the tab corresponding to your target language. This generated translation is fully editable.
:::

### Delete Intents

You can delete an intent from the Intents Manager page. Before you delete an intent, ensure it is not in use in the Dialogue Manager. If the intent you wish to delete is in use, you must first delete the dialogue using the intent before you can delete the intent.

Use the following steps to delete an intent.

1. From the Intents Manager page, click on the `Delete` icon corresponding to the intent you wish to remove.

2. A pop-up window appears, prompting you to confirm this action by clicking the `Delete Intent` button.

:::danger
Deleting an intent permanently deletes any example values associated with that intent. This cannot be restored.
:::

:::info
Only users with admin and botbuilder permissions are able to create bots on this platform.
:::


## Manage Entities

Entities are words or phrases that are relevant for a particular conversation. They can be names of people, organizations, cities, products, brands, and so on. These entities are usually extracted from the sentence to use later on for an API-call, product recommendation, or to redirect a message to the right flow.

### Create Entities

Use the following steps to create a custom entity.

:::tip

Only users with admin and botbuilder permissions are able to create bots on this platform.
:::


1. From the Entities Manager page, click on the `New Entity` button.

![alt text](/img/image-6b.png)


2. A pop-up window appears prompting you to select the entity type and name your new entity.

![alt text](/img/image-7b.png)

3. Fill in the required fields and click the `Create Entity` button. Your new entity appears on the Entities Manager page upon creation.

4. Click the `Edit` icon next to your newly created entity. You are directed to a page where you can add entity examples and roles.

![alt text](/img/image-8b.png)

5. To add an entity example, ensure the Entity examples tab is selected and click the `New entity example` button.

6. A pop-up window appears, prompting you to enter an example for your entity.

![alt text](/img/image-9b.png)


7. Fill in the required information and click `Create entity example`.

8. You entity example is created. You can add synonyms by clicking the `Edit` icon next to the newly created entity.

![alt text](/img/image-10b.png)


9. Add as many synonyms as you need. When you are done, click the `Save` button to retain your changes.


:::tip
Toggle between languages using the arrows on the language tab to add entity examples for each relevant language.
:::

:::note
Entity roles are classifications added to an entity to help your bot with disambiguation. Consider the entity **"place"** in an ecommerce chatbot. Here the chatbot may need to differentiate between the **"place" **for delivery, billing, or collection. Adding these roles (delivery, billing, collection) to the entity allows the bot to appropriately classify the information it receives in the forms it sends out.
:::


10. To add an entity role, ensure the Entity roles tab is selected and click the `New entity role` button.

11. A pop-up window appears, prompting you to enter a role for your entity.

![alt text](/img/image-11b.png)

12. Fill in the required information and click `Create entity role`. Repeat the process again to add as many roles as needed.

13. Your entity roles are created and they appear in a list on the `Entity roles` tab.

![alt text](/img/image-12b.png)


:::tip
You have the option of using a pre-trained entity instead of a custom one. Pre-trained variables do not require examples and the available ones can be selected from a dropdown list. The list of pre-trained variables is as follows:
:::

- Time
- Duration
- Email
- Distance
- Phone number
- Volume
- Url
- Temperature
- Quantity
- Number


### Tag Entities

The Intent Manager allows you to tag entities to your example intent messages.

To tag an entity, use the following steps.

1. From the Intents Manager page, find the intent which you want to tag.

2. Highlight that intent using your cursor.

3. A pop-up window appears, prompting you to assign an entity to the intent as seen in the following image.

![alt text](/img/image-13b.png)

4. Select the appropriate entity for your intent, and assign it a role, if necessary.

5. Click `Save` to retain your changes.

:::tip
For detailed information on Intents, see the Intents section of the Botlhale AI NLP Toolkit Documentation.
:::

### Delete Entities

Use the following steps to delete an entity.

1. On the Entities Manager page, locate the entity you wish to delete.
2. Click the `Delete` icon that corresponds to the entity you wish to delete.
3. A pop-up window appears prompting you to confirm this action. Click the `Delete Entity` button to finalise the deletion.

:::warning
Deleting an entity also deletes any example values associated with that entity. Deleted content cannot be restored.
:::


## Create FAQs

With Bua, you can create a collection of questions, complete with answers, that are commonly asked about your product or service. These are a useful way of improving the customer's experience and reducing support tickets.

On Bua, these FAQs work similarly to intents in that the chatbot categorises messages to a particular FAQ and returns the response associated with the selected question.

Use the following steps to create one or more FAQs for your chatbot.

1. From the FAQs Manager page of the platform, click the `+New FAQ` button.

2. A pop-up window appears, prompting you to assign a name to your new FAQ.

3. Enter your desired name and click `Create FAQ`.

4. Click on the `Edit` icon next to your newly created FAQ.

5. You are taken to a new page. Here, you can begin adding the question and response associated with this FAQ. Note that this must be added in all the languages supported by your chatbot.

6. Repeat these steps for as many FAQs as needed.


You can also create FAQs by uploading an FAQ CSV to the FAQs Manager page 

1. From the FAQs Manager page, click `Upload FAQs`
2. Specify the language of the FAQs.
3. Select the FAQs file you wish to upload. Ensure the file is formatted correctly by referencing the example file.
4. Click `Upload`.
5. Your new FAQs are uploaded and appear on the FAQs Manager page.


Once created, these FAQs can be added to your dialogue in the form of button elements via the Dialogue Manager. For more information on this, see the [Dialogue Elements](/docs/Botbuilder#create-dialogue-elements) section of this documentation.

:::tip
You also have the option of auto-generating translations for your FAQs. To do so, simply click the `Translate` button and select your target language. The auto-generated translations appear in the tab corresponding to your target language. This generated translation is fully editable.
:::


## Manage Dialogues

The Dialogue Manager is a conversation management interface which allows you to create more complex dialogues with your bot.

These complex dialogues are capable of the following:

- Sending multiple responses following an intent.
- Hitting APIs which return plain-text responses to the end user.
- Using buttons as quick responses.
- Collecting information from the user.
- Generating rich responses in the form of images, PDFs, Word documents, and so on.

:::info
The rich response generation capabilities of the Dialogue Manager interface need to be configured to work. This configuration happens on the `Custom Functions` page. See the [Custom Functions](/docs/Botbuilder#enable-custom-functions) section of this documentation for additional information.
:::

The Dialogue Manager interface gives you the option of creating both story-based and rule-based dialogues. Story-based dialogues allow builders to create flexible journeys which are dependent on the user's intents and responses. Rule-based dialogues allows builders to create journeys that follow a fixed path. No other journey can be triggered by the same intent that triggers the rule.

These dialogues can either be custom or preset. Preset dialogues are pre-built conversation starters for common situations. They're easy to use but offer limited flexibility. Think of them like convenient pre-made meals. Custom dialogues let you build conversations from scratch, tailoring them to your specific needs. They require more effort but offer full control over the flow and content. Imagine them as cooking your own meal - more work, but you get exactly what you want.

Together, these dialogues outline a sequence for your bot to follow during a conversation. The flow of the conversation sequence is determined by the intent put forward by the end user. Consider the example of an ecommerce bot presented with a greeting intent where the end user sends a message saying "Hello". This greeting intent could be configured to trigger a Bot button response where the ecommerce bot responds with a greeting and a series of buttons prompting the end user to select a product for purchase.

### Create Dialogues

Use the following steps to create a story-based dialogue for your chatbot.

1. On the Dialogue Manager, click `New dialogue`.
2. A pop-up window appears, prompting you to name your dialogue and assign it a type.

![alt text](/img/create-dialogues.png)

3. Specify whether this will be a story- or rule-based dialogue.
4. Specify whether this will be a custom or preset dialogue.
5. If you selected preset, specify which of the preset dialogues you wish to create.
6. If you selected custom, assign a name to your dialogue.
7. Click `Create Dialogue`.
8. Depending on the type selected, your newly created dialogue appears on either the Story or the Rules tab.

Now, you can begin building the conversation sequence for your dialogue by creating and adding dialogue elements. This is discussed in detail in the section that follows.


## Create Dialogue Elements

As mentioned in the previous section, dialogues outline a script for your chatbot to follow during a conversation. The flow of the conversation sequence is determined by the intent put forward by the end user. Dialogue elements constitute the building blocks for the continuation of this conversation flow. Dialogue elements allow for multiple response types following an intent. These element types include bot text responses, actions, and buttons.

### Bot Response

A bot response is the free-form text response that the bot returns during the dialogue. With this element type, you have the option of creating a new response or using an existing one. In addition to this, you have the option of using the response examples from an existing intent to create this type of dialogue element.

1. From the Dialogue Manager page, create a new custom dialogue. See the [Dialogue Manager](/docs/Botbuilder#manage-dialogues) section of this documentation for information on how to go about this.
2. Click the `Edit` icon that corresponds to your newly created custom dialogue.
3. You are taken to a new page, illustrated in the image that follows.

![alt text](/img/image-16b.png)

4. Click the `New dialogue element` button.

5. A pop-up window, illustrated in the image that follows, appears, prompting you to choose a name and type for your new element.

![alt text](/img/image-17b.png)


6. All dialogues must begin with an intent. So, first set the type to User Intent and either create a new intent element or select an existing intent from the drop-down menu.

7. Click either the `Create element` or the `Select existing` button based on the field you filled.

8. Your Bot Response element is created and appears on the page. Click `Save` to retain your changes.

9. Repeat steps 4 and 5.

10. Set the element type to **Bot Response**. Once again, either create a new element or select an existing one from the dropdown.

11. Click either the `Create element` or the `Select existing ` button based on the field you filled.

12. Your Bot Response element is created and appears on the page. Click `Save` to retain your changes.

13. You can now begin adding examples to your dialogue elements. Click the `Add examples`button that corresponds to the element you wish to add examples to.

14. A new page, illustrated in the image that follows, is shown, prompting you to add examples for your intent.

![alt text](/img/image-18b.png)

15. Add as many examples as needed and click `Save`

:::tip
Element examples must be added in all the languages supported by your bot. Use the language tab to toggle between your supported languages when adding examples.
:::


### Bot Action

Bot actions allow your chatbot to perform certain operations during the dialogue. The bot actions available on our platform are form actions, custom actions, and preset actions.


#### Form Actions

Form actions collect information (variables) from the user.

To add a form action to your dialogue:

1. From the Dialogue Manager page, click the `Edit` icon corresponding to the dialogue to which you wish to add a form action.

2. Click `New dialogue element`

3. In the pop-up window that appears, ensure the element type is set to Bot Action and the action type is set to Form.

4. Either enter a name for your new form action or select an existing form action from the drop-down menu.

5. Click either the `Create element` or the `Select existing` button based on the field you filled.

6. Your Form action element is created and listed on the page. Click `Save` to retain your changes.

7. You can now begin adding entities to your new form action element. Click the `Add Entity` button to do this.

8. A pop-up window, illustrated in the image that follows, appears, prompting you to name and configure the new entity.

![alt text](/img/image-19b.png)

9. Fill in the requested information and click `Save`



The following description list defines the fields found in the Add entity pop-up window.


**Form item name**\
This is the name you wish to give your form item.


**Entity type**\
This is a dropdown field which allows you to select the type of entity you give your form item. The two entity types available for selection are as follows:

- from_text: If this option is selected, the chatbot extracts the user's response to the form action via free-form text. In the event your chatbot has ASR capabilities, the user input is extracted from a transcript of the voicenote.

- from_entity: If this option is selected, you can select the entity you wish to associate with the response to this form action sent by the end user.


**Entity**\
This field is only visible when the selected entity type is **"from_entity"**. This is a dropdown field from which you can select the entity you wish to associate with the user response.


**Form item request question**\
This is the message sent by the chatbot to obtain the information needed from your bot form action. The text in this field must be entered in all the languages supported by your chatbot.


**Present as button**\
This field is only visible when the selected entity type is **"from_entity"**. Selecting this checkbox allows you to add buttons to the form request question. The buttons visible to the end user are obtained from the entity examples you set for the selected entities. See the [Entities](/docs/Botbuilder#manage-entities) section of this documentation for more information about entity examples.



**Attach role to entity**\
This field is only visible when the selected entity type is **"from_entity"**. Selecting this checkbox allows you to attach a role to your selected entity for disambiguation purposes. See the [Entities](/docs/Botbuilder#manage-entities) section of this documentation for more information about entity roles.



#### Custom Actions

Custom actions can hit external APIs. Once a custom action has been created, clicking on a language allows you to send a POST or GET request to a webhook endpoint for that language. You also have the option of sending the information collected from forms as part of your payload. At the moment, API responses are limited to plain text only.

Use the following steps to create a custom action.

1. From the Dialogue Manager page, click the `Edit` icon that corresponds to the dialogue to which you wish to add this custom bot action element.

2. Click `New dialogue element`

3. Ensure the element type is set to Bot Action and the action is set to Custom.

4. You have the option of naming and creating a `new custom action element`, or `selecting an existing` one from the dropdown.

5. Click either the `Create element` or the `Select existing` button based on the field you filled.

6. The element is created and is listed in the Dialogue Manager window.


#### Preset Actions
 
Preset actions are preconfigured bot actions which allow your bot to perform certain operations. At present, there are four preset actions available to you on the platform. These are described in the following list.

*Human handoff*

This preset action triggers a human handoff sequence of the end user to a live agent. To add this element to a dialogue, simply create a preset human handoff dialogue. See the Dialogue Manager section of this documentation for more information on preset dialogues.

*Check contact list*

This preset action checks if an end user's information is available in the Contact List prior to handoff. If the user's contact information is not found, your chatbot obtains this information prior to executing a handoff. To add this element to a dialogue, simply create a preset human handoff dialogue. See the Dialogue Manager section of this documentation for more information on preset dialogues.

*Change language*

This preset action allows your end user to switch between languages during a conversation with the chatbot. To add this element to a dialogue, simply create a preset change language dialogue. See the Dialogue Manager section of this documentation for more information on preset dialogues.

*Reset all form items*

This preset action clears all the information collected by your chatbot from forms. It is recommended that you add this action to the end of all dialogues that include forms. If this is not done, the forms will retain all previously collected information if the dialogue is triggered again. To add this preset bot action dialogue element:

1. From the Dialogue Manager page, click the `Edit` icon that corresponds to the dialogue to which you wish to add this reset element.

2. Click `New dialogue element` 

3. Ensure the element type is set to Bot Action and the action is set to Preset.

4. In the preset dropdown field, select the reset_all_form_items option.
 
5. Click the `Select existing` button.

6. The element is created and is listed in the Dialogue Manager window.

:::tip 
This reset element will only clear the information from form elements that precede it in placement in the dialogue. As such, it's recommended that you place the reset_all_form_items dialogue element after all the form elements in your dialogue. Simply drag and drop the element to change its position in the dialogue.
:::


**Reset Action**

This bot action element clears the information collected from specific forms. This is useful if you have several form elements in a dialogue but only need the information cleared from certain forms. To add this bot action element to your dialogue:

1. From the Dialogue Manager page, click the `Edit` icon that corresponds to the dialogue to which you wish to add this reset element.

2. Click `New dialogue element` 

3. Ensure the element type is set to Bot Action and the action is set to Reset.

4. You have the option of naming and creating a new reset element, or selecting an existing one from the dropdown

5. Click either the `Create element`  or the `Select existing` button based on the field you filled.

6. The element is created and is listed in the Dialogue Manager window.

7. You can now begin adding entities to your new element by clicking on the `Add Element` button.


:::tip 
The entities added here need to match the entities associated with the form action you would like to clear.
:::


### Bot Buttons (Menu)

The bot buttons or menu element allows you to add a menu functionality to your chat that gives your users the option of using buttons rather than free-form text.

Use the following steps to add this element to your dialogue.

1. From the Dialogue Manager page, click the `Edit` icon that corresponds to the dialogue to which you wish to add this menu element.

2. Click `New dialogue element` 

3. A pop-window, illustrated in the following image, appears, prompting you to fill in the required fields.

![alt text](/img/image-20b.png)


4. Ensure the element type is set to **Bot Button**.

5. Enter the button group name. This is the collective name you wish to assign to the buttons in this new element.

6. Enter the text you want displayed before the buttons. This text must be entered in all the languages your chatbot supports.

7. Click `Create element` 

8. Your new button element is created and listed in your dialogue.

9. You can now begin adding the individual buttons (options) for your new menu element. Click `Add` button to do this.

10. A pop-window, illustrated in the following image, appears, prompting you to fill in the required fields.

![alt text](/img/image-21b.png)

11. Select the payload type from the drop-down menu.

    a. Selecting from_intent as the payload type prompts you to select the intent your button should be linked to.
    
    b. Selecting from_faq as the payload type prompts you to select the frequently asked question your button should be linked to. See the FAQ section of this documentation for more information.

12. You have the option of attaching an entity to your button. To do so, select the `Attach entity to payload` checkbox and choose the entity you would like to attach from the dropdown.

13. Enter the title for your new button in the field provided. This is the text that should be displayed on the button. This text needs to be entered in all the languages your chatbot supports.

14. Click `Save` . Your new button is now added.


**Example**

The following example shows how these dialogue elements can be used together.

1. A user sends text to the bot. This text is classified as a flight_search intent.

2. The bot then requests two information items from the user: departure_city and arrival_city.

3. The user responds with the requested information.

4. The bot then uses an action to hit an API and send the collected information in the API request. The response from the API is in plain text and displayed to the user.

5. A feedback question is also displayed to the user, along with two buttons that the user can click.


## Enable Custom Functions

Botlhale AI's platform allows for a range of custom functions that can be used to tailor and personalise the way your chatbot interacts with the end user. These custom functions are either predefined or customisable. Integrating custom functions on the platform allows you to integrate with third parties, hit endpoints on a server, process specific documents, and much more. These functions not only streamline and enhance the user's experience, but also provide you with invaluable insights and increased efficiency.

Custom functions are configurable and visible on the Actions Dashboard page of Botlhale's NLP Toolkit platform. The following image shows a code snippet of a custom action that allows your chatbot to process images.

![alt text](/img/image-22b.png)

The Actions Dashboard also flags any errors in your code, highlighting the erroneous code. You are able to resolve these errors within the Actions Dashboard window. The following screenshots illustrate this.

![alt text](/img/image-23b.png)

![alt text](/img/image-24b.png)

:::warning
Adding preset or custom bot actions to your dialogue via Dialogue Manager automatically will override any previous related configuration done in the Actions Dashboard. See the section on Bot Action for more information.
:::


### Human Handoff Integration

The Botlhale NLP Toolkit has a predefined dialogue that can be selected to enable the human handoff feature. See the Dialogue Manager section of this documentation for information on how to enable this preset dialogue.
The human handoff dialogue contains the following two dialogue streams:

- provide_handoff_options
- execute_handoff

These two dialogues work off the shell and do not require any modifications.

The human handoff capability uses Socket.IO, a library that allows message passing between a server and multiple clients. All chatbots with human handoff set up need to connect to Botlhale AI's Socket.IO server.

The following code snippets can be used to set up socket IO, as well as event listener and emitter functions to interface with Botlhale AI's Socket.IO server. The code snippets use JavaScript. However, if your bot is integrated in a non-JavaScript environment, there are several client implementations available in other languages. See the Socket.IO documentation for additional information.

```js
<script src="https://cdn.socket.io/3.1.3/socket.io.min.js" 
integrity="sha384-cPwlPLvBTa3sKAgddT6krw0cJat7egBga3DJepJyrLl4Q9/5WLra3rrnMcyTyOnh" crossorigin="anonymous"></script>

// SOCKET IO initialisation !
const socket = io.connect('https://app.botlhale.io/live_agent', {autoConnect: false});

// first time connecting to the main socket !
socket.on('startConversation', function() {
   socket.emit('username', {
       "ConversationID": ConversationID,
       "BotID": BotID
   });
});
 
// receiving a message !
socket.on('to_user', function(data) {
   let text = data.message;
   setBotResponse(text);
});
 
// send messages to clients !
socket.on('messages', function(data) {
   let messages = []
   // populate messages variable with user-bot conversation !
   // each element in the array must have the following format:
   // {'sender': String, 'message': String}
   // if message belongs to the user, then the value of 'sender' must be 'user'
   // if message belongs to the bot, then the value of 'sender' must be 'bot'
   socket.emit('messages_to_client', {
       "messages": messages,
       "bot_id": BotID
   });
});
 
// disconnecting socket !
socket.on('disconnect_socket', function(data) {
   socket.disconnect();
});

 // Sending a message
if (socket.connected) {
  // Send a message to socket 
   socket.emit('from_user', {
       "message": message,
       "ConversationID": ConversationID,
       "BotID": BotID
   });
 
} else {
  // Send a message bot
}

```


## Test Virtual Assistant


This section outlines the procedures for testing your chatbot once it's been created and trained.

:::tip
It's recommended that you open the Test page in a new Tab or Window should you want to browse through the app while you test your chatbot. Leaving the Test page while testing is ongoing will require you to reload the model.
:::

You have the option of performing a Quick Test or a Telegram Test for your chatbot. Quick Tests happen within the Botlhale NLP Toolkit platform. With Telegram Tests, you need to have an existing Telegram portal to which to deploy the test. The following subsections outline the procedures for both tests.


### Quick Test

Use the following steps to perform a Quick Test on your chatbot.

1. On the Testing Dashboard, ensure the Quick Test tab is selected.

2. Enter the Model Parameters for your Quick Test. This is the language and model (trained chatbot) you wish to test.

![alt text](/img/image-25b.png)


:::tip
Like with training, you can only test one model and language at a time.
:::

3. Click the `Load Model` button.

4. Once your model is loaded, a message from your chatbot appears on the Chat Interface, and you can begin interacting with the chatbot.

![alt text](/img/image-26b.png)




### Telegram Test

:::tip
You need a valid bot token to test a chatbot on Telegram Click here to learn how to create a bot on telegram.
:::

Use the following steps to test your chatbot on Telegram.

:::info
Telegram testing sessions last for 15 minutes.
:::

1. On the Testing Dashboard, ensure the Test on Telegram tab is selected.

2. Enter the Model Parameters and provide a valid Telegram bot token.

3. Click `Connect to Telegram`

4. A green ribbon appears at the top of the Testing Dashboard page, indicating you can begin testing your bot on Telegram.

5. Click the Send icon to begin a testing instance in a new window.

6. You can now begin testing your chatbot on Telegram.



## Train Virtual Assistant


This section outlines the procedure for training a chatbot with the intents and user examples provided in the previous sections. Training is done with a dataset which comprises many sentences organised into intents. This represents what users say to a chatbot. The training dataset teaches the chatbot to understand a user's needs and trigger the right conversation sequence.

Use the following steps to train your chatbot.

1. Ensure the chatbot you wish to train is selected. Use the dropdown menu in the top-right corner of the Botlhale NLP Toolkit site to toggle between chatbots.
2. Navigate to the Training Dashboard.

![alt text](/img/image-27b.png)

3. Select the language you wish to use to train your chatbot.

:::info
You can only train your chatbot with one language at a time.
:::

4. Set the Training Cycle parameter. This parameter indicates the number of times you would like to train your chatbot.

5. Click the `Train` button. Your chatbot training begins. You can monitor the status of your training in the Saved Models tab.

![alt text](/img/image-28b.png)

7. Once training is completed, the status changes to **"Done"**. You will also receive an email confirming this.

8. Repeat this process until you have trained your chatbot in all your desired languages.



## Version Virtual Assistant

Botlhale's NLP Toolkit platform offers versioning capabilities for your chatbots. This gives you the ability to manage and control different versions or iterations of your chatbot, enabling you to manage the evolution of your bot over time.

You can create a new version of your chatbot from any of the following pages on the platform:
- Intents Manager
- FAQs Manager
- Entities Manager
- Dialogue Manager

To create a new chatbot version:

1. From any of the pages previously listed, click the `Save New Version` button that features on the top-right corner.
2. A pop-up window appears, prompting you to name your version.
3. Enter your desired version name and click `Create version`
4. Your new chatbot version is created.

:::tip
You can toggle between different versions of your chatbot by using the dropdown menu in the top-right corner of any page on the platform.
:::

## Contact us

:::info
We are here to help! Please [contact us](mailto:support@botlhale.ai) with any questions.
:::
