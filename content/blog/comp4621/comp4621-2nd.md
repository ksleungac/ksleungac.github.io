---
title: "Group project 2 - Self Quarantine Chatbot"
author: "@Leung King Suen, Oscar"
dates:
  published: "30-03-2022"
description: "Diary for COMP4621 Project 2"
---

## Where did the idea came from?

When I first about that, the project is about a quarantine robot, I don't know what is really about maybe only some vague ideas, but not know exactly how the robot should do.

So I decided to ask my friends about it. I have some friends study aboared. And when they come back to Hong Kong, they will have to be quarantine for 14 days. They said the quarantine process is very boring. There's not much they can do in the quarantine room. Moreover, they said because they can't do exercises in the room, so they will get fatter later on.

And, Luckily, one of our groupmate elizabeth is a exchange student, she also shared about her own experiences in the quarantine, which mostly matched the feedback from above.

## Ideas are evolving

We firstly created the mindmap about the robot functions in Google slides, which is a rather simple version and later on we decided we would move them to mindmeister(same as lastime)

![](/img/4621_2/p21.jpg)

<figcaption class="text-center italic font-medium">Mindmap</figcaption>

We firstly created the mindmap about the robot functions in Google slides, which is a rather simple version and later on we decided we would move them to mindmeister(same as lastime)

To explain this in a simple way. I think the robot should have some entertainment features to keep user happy during the whole quarantine process. It would suggest some musics, workout youtube videos. Moreover, it should tell users some jokes to cheer the user up, and it would give some random images to make the user's quarantine life more elements. At last, I wish to implement a mini-wordle. (But that didn't work).

It should also have informational features. We are also targetting it as a personal assistant. So it can return time information, weather information.

At last, it is a quarantine robot. So it should have some functions related to covid19, right? We think, it should provide latest covid informations, as well as 'what user should do' if the user is confirmed positive, or felt unwell. At last, as in quarantine, it is eazy so lose the sense of dates, time. So There a quarantine progress, the user can inquire the quarantine progress.

## Storyboarding - what might happened

This is the least thing I want to declare as my work, but, fine, I drew this _masterpiece_

I want to express that, the user got into quarantine hotel, but he felt very bored, watched all youtube videos, and when he feels unwell, no one could help him. But then he found the quarantine chatbot, then suddenly his problem were solved. and his felt very good. Lastly at the end of the quarantine He felt love with the robot, and he don't want to leave anymore.

![](/img/4621_2/storyboard1.png)
![](/img/4621_2/storyboard2.jpg)
![](/img/4621_2/storyboard3.jpg)
![](/img/4621_2/storyboard4.jpg)

<figcaption class="text-center italic font-medium">the Storyboard</figcaption>

## Coding - The real part

We have 3 people working on the code works. I was incharge of implementing some entertainment functions. Also, I try to make the robot as humanly as possible.

#### Part 1 - Python Action.py - getting images/texts from online APIs

For the robot to return more interesting content to us, it would have to run things in python, which is done by implementing custom actions inside action.py. For example, In order to return images from the website, it would have to GET images from the APIs. I have not work with an APIs in Python before(not in any languages...) But with the help from teammates, I can pull the image and texts from the web. The format pulled are a python dictionary, so I can do

```python
something = data['attribute']
```

to pull the things I want. Here is a implementation of the program custom action to pull cat images from some random images API.

```python
class ActionGetCatImg(Action):
    def name(self) -> Text:
        return "action_cat_img"

    def run(self, dispatcher, tracker, domain):
        request = json.loads(
            requests.get("https://some-random-api.ml/img/cat").text
        )
        link = request["link"]
        dispatcher.utter_message(text=f"Look how cute she is...😸😸😸")
        dispatcher.utter_message(image=link)
        return []
```

In this class, def name is for rasa to recognise this class, it return the custom action name. So the rasa knows if the bot were to run 'action_cat_img', it would run this class. And def run function is the actual implementation of the custom actions. I think the first function is like a identifier, the second one is like the actual body. The implementation is the same for returning dog images.

Below is more complicated example. But it is similar, What I am trying to do is to pull travel images.

```python
class ActionGetScenicImg(Action):
    def name(self) -> Text:
        return "action_scenic_img"

    def run(self, dispatcher, tracker, domain):
        request = json.loads(
            requests.get("https://pixabay.com/api/?key=26374413-8b2996e47a5dc876f623bbab4&category=travel&image_type=photo&pretty=true&per_page=3").text
        )
        image_group = request["hits"]
        image0=image_group[0]["largeImageURL"]
        image1=image_group[1]["largeImageURL"]
        dispatcher.utter_message(image=image0)
        dispatcher.utter_message(image=image1)
        return []
```

Similarly, Pulling text jokes

```python
class ActionGeek(Action):
    def name(self) -> Text:
        return "action_geek"

    def run(self, dispatcher, tracker, domain):
        request = json.loads(
            requests.get("http://quotes.stormconsultancy.co.uk/random.json").text
        )
        author = request["author"]
        quote = request["quote"]
        ##permalink = request["permalink"]

        message = "'" + quote + "'"## " - [" + author + "]" ##(" + permalink + ")"
        dispatcher.utter_message(message)
        return []
```

#### Part 2 - Python Action.py - Dealing with time/ storing/ printing

In this part, I try to make the bot greet to the time of the day, say good morning good afternoon and good evening. also return a time , date in a organised, user friendly format ⬇️.

```python
class GreetTimeofDay(Action):
    def name(self) -> Text:
        return "action_greet_timeofday"
    def run(self, dispatcher: CollectingDispatcher,
                tracker: Tracker,
                domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

            dt=datetime.datetime.now()
            if dt.hour < 12:
                dispatcher.utter_message(text=f"Good Morning!")
            elif (dt.hour >= 12) and (dt.hour <5):
                dispatcher.utter_message(text=f"Good Afternoon!")
            else:
                dispatcher.utter_message(text=f"Good Evening!")

            return []

class ReturnDate(Action):
    def name(self) -> Text:
        return "action_show_time"
    def run(self, dispatcher: CollectingDispatcher,
                tracker: Tracker,
                domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

            dt=datetime.datetime.now()
            fullmonth=dt.strftime("%B")
            fullweekday=dt.strftime("%A")
            if ((dt.hour//10)<1) and ((dt.minute//10)<1):
                dispatcher.utter_message(text=f"Today is {fullweekday} {dt.day}th of {fullmonth}, the time now is 0{dt.hour}:0{dt.minute}.")
            elif (dt.minute//10)<1:
                dispatcher.utter_message(text=f"Today is {fullweekday} {dt.day}th of {fullmonth}, the time now is {dt.hour}:0{dt.minute}.")
            elif (dt.hour//10)<1:
                dispatcher.utter_message(text=f"Today is {fullweekday} {dt.day}th of {fullmonth}, the time now is 0{dt.hour}:{dt.minute}.")
            else:
                dispatcher.utter_message(text=f"Today is {fullweekday} {dt.day}th of {fullmonth}, the time now is {dt.hour}:{dt.minute}.")
            return []
```

In here, I am trying to implement the start quarantine action. Because we need to keep track of the quarantine progress, we need to store the date that the user start quarantine. Rasa comes with entity function to store text or number information. But I thought doing this in python will be faster and more convenient. Which turns out to be true. I store the current date and time the user start quarantine to the dictionary. Then it is stored to the json files locally. By doing so, when rasa restarts, the dates would not lost ⬇️.

```python
class ActionSetQuarantineDate(Action):
    def name(self) -> Text:
        return "action_start_quarantine"

    def run(self, dispatcher, tracker, domain):
        text = tracker.latest_message['text']
        dt=datetime.datetime.now()
        fullmonth=dt.strftime("%B")
        fullweekday=dt.strftime("%A")
        dictionary={}
        dictionary['date'] = dt.day
        dictionary['month'] = dt.month
        dictionary['year'] = dt.year
        with open("output.json", "w") as outfile:
            json.dump(dictionary, outfile)
        dispatcher.utter_message(text=f"Your quarantine starts now, today is {fullweekday} {dt.day}th of {fullmonth}")
        ##dispatcher.utter_message(text=f"{text}")
        return []
```

Then next, I implemented the can i leave function. Which is to tell the user then he can leave. In this function, I can then load back the json files I just stored. In here, I decided to print out a progress bar. This is to show the quarantine progress. I think it's good to have a progress bar, such that users knows their progress graphically, and maybe this progress bar act like a complishment, supporting them finish the quarantine ⬇️.

```python
class ActionCanleave(Action):
def name(self) -> Text:
return "action_question_can_leave"

    def run(self, dispatcher, tracker, domain):
        dt=datetime.datetime.now()
        with open('output.json') as json_file:
            data = json.load(json_file)
        startdate = datetime.datetime(data['year'], data['month'], data['date'])
        enddate = datetime.datetime(dt.year, dt.month, dt.day)
        difference = enddate - startdate
        if difference.days > 14:
            dispatcher.utter_message(text=f"You made it! Hope we don't meet again 🤣.")
        elif difference.days <= 14:
            dispatcher.utter_message(text=f"Add oil!")
            percentage_left=((14-difference.days)/14)*100
            percentage_left_display = (math.trunc(percentage_left))
            percentage_left = (math.trunc(percentage_left))//2
            Progress_bar='['
            for x in range(50-percentage_left):
               Progress_bar += '█'
            Progress_bar+='🙋‍♂️'
            for x in range(percentage_left):
               Progress_bar += ' '
            Progress_bar+=']🚩'
            dispatcher.utter_message(text=f"{Progress_bar}")
            dispatcher.utter_message(text=f"You only have {percentage_left_display}% left, {14-difference.days}days to go ✨")
        return []
```

#### Part 3 - Rasa parts - intents/ action/ rules

In this part, I will work the modules within Rasa. I don't want to explain too deeply how it works. (This diary is getting way too long...) In the nlu.yml files there's nothing special, I will mainly talk about the domain and stories files.

Below is showing a part of the stories.yml . In this file, I defined serveral path on my functions. Such as, when a user ask for music, it will ask the user which type of music the user want, then return corresponding musics to the user, match that type.

```yaml
- story: Pop Music
  steps:
    - intent: inquire_music
    - action: utter_which_type_music?
    - intent: inquire_pop_music
    - action: utter_pop_music

- story: Soft Music
  steps:
    - intent: inquire_music
    - action: utter_which_type_music?
    - intent: inquire_soft_music
    - action: utter_soft_music

- story: HumorousRobotPath
  steps:
    - intent: bot_challenge_humorous
    - action: utter_i_am_humorous
    - action: action_geek

- story: return a joke if the user asked fun
  steps:
    - intent: request_jokes
    - action: utter_searching for jokes
    - action: action_geek
    - action: utter_joke_ask_fun
    - intent: affirm
    - action: utter_thank_you

- story: return a joke if the user asked not fun
  steps:
    - intent: request_jokes
    - action: utter_searching for jokes
    - action: action_geek
    - action: utter_joke_ask_fun
    - intent: deny
    - action: utter_improve_next_time
```

⬇️Below is showing the domain.yml file. This is where I defined the actions, though default. In here, my goal is to make as much as reactions possible. By putting multiple text responses under the same action, rasa would choose randomly which text responses to take. So in this case, the responses are more random, the robot talks like a human

```yaml
utter_goodbye:
    - text: "Bye"
    - text: "Seeya"
    - text: "GoodBye~"

  utter_goodnight:
    - text: "See you tomorrow, Goodnight🌙🌙"
    - text: "Have a nice sleep."
    - text: "Here are some sleep music if you want\nhttps://youtu.be/7n9W8lKPdAE"

  utter_iamabot:
    - text: "I am your quarantine companion."

  utter_which_type_music?:
    - text: "Which genre of music you prefer? Pop music? Soft music?🎵"
    - text: "I have many types of music in my brain? Do you want pop songs or soft music?"

  utter_pop_music:
    - text: "There you go ♪(´▽｀):\nhttps://youtu.be/dQw4w9WgXcQ"
    - text: "How about this?\nhttps://youtu.be/fcZXfoB2f70"
    - text: "Hope you like this:\nhttps://youtu.be/atuFSv2bLa8"

  utter_soft_music:
    - text: "Calm radio for you~ (_　_)。゜zｚＺ:\nhttps://youtu.be/DWcJFNfaw9c"
    - text: "Do you like Lofi music?:\nhttps://youtu.be/DWcJFNfaw9c"

  utter_i_am_humorous:
    - text: "Yes! I am the most humorous bot on this planet!"
    - text: "Sure! I can make you laugh anytime"

  utter_searching for jokes:
    - text: "🤔Let me see...How about this? It sounds fun to me😂"
    - text: "Take this...I bet you can't stop laughing for 5 minutes straight on!"

  utter_joke_ask_fun:
    - text: "Is this fun?"
    - text: "Did this make you laugh"
```

## Coding & Thoughts - How do I make it respond like a human...

This is a long story.... If you had pay attention to what I showed above, mainly the codes, you will find there's many 'decoration' What I am trying to do in those case is to make the robot respond as humanly as possible.

This is a good example. Both responses are a online responeses pulled from an API. In the previous testing, we found that, sometimes network may lag. This is especially true when we host the robot on other server. In this case, I wish it to provide something first, so the user won't have to wait for a blank screen. Moreover, let's say if the user want weather, I add the robot actions before my teammates work, so it will feel more of human-like. I also want to see things the prespective of the robot. So by using 'asking my friend at HKO' , it would make much of the sense, the rasa robot is asking the friends in HKO, which is happended to be a robot that boardcast APIs. So the information makes sense, also the users get to know where the weather information comes from. Same for the jokes, it would need something before the actual jokes returned. Moreover, this is a robot, so why not programmer jokes?

```
Your input -> are you a humorous robot?
Yes! I am the most humorous bot in the planet! Let me cheer you up!
‘Perl - The only Language that looks the same before and after RSA encryption.' - [Keith Bostic]
Your input -> weather
Let me ask my friends at the Hong Hong Obeservatory.
There you go!
The temperature now is 16C, Cloudy with a few showers. More showers with a few squally thunderstorms later tomorrow. Temperatures will range between 17 and 21 degrees. Moderate to fresh easterly winds, occasionally strong offshore Later.
```

The second example, is where I used a lot of emojis and emoticon (表情符號 or 顔文字 if you like). I thought, well, human use emojis as well, so why don't my chatbot use it. Luckily rasa can direcly support print out of these complicated emojis. And I thought it is better. From my prespective, this would assembly what my girl friend (if I have had one🥲) will say to me, with many emojis.

```yaml
responses:
  utter_greet:
    - text: "Hey! How are you? ヾ(•ω•`)o"
    - text: "Hi! Nice to meet you!"
    - text: "Hello! How can I help you?"

  utter_thank_you:
    - text: "Thank you! You are kind."
    - text: "☆*: .｡. o(≧▽≦)o .｡.:*☆! ThankYou!"

  utter_bot_usage_help:
    - text: "🙇Sorry...I couldn't understand your words.\n
        I can recommend videos🎬, images and jokes to you. As well as providing assistance during your quarantine.\n
        Try to say words that are similar to 'Hi' or 'I want music' to start."
```

Remember I mentioned a progress bar and the Greet to the time of the day in the actions.py files? By using the greet to the time of the day, the robot will say good/morning/evening/afternoon to you according to the time, make it like a human.

Below is the progress bar. I think it would be better than just showing only a day left, of percentage left. It is good to show this as a bar. Like a game loading bar. Also, I have added emojis and indications, to add oil to users.

![](/img/4621_2/p22.png)

<figcaption class="text-center italic font-medium">Emojis in the respond</figcaption>

## Unfinished mini-wordle game...

I want to make a wordle games inside rasa. So users could play with rasa when boring. But due to my knowledge limitation, I can't. I made the forms, the entity to store the user guessed words, I also made the 2 actions, one to randomly choose a word from the word list, another one to validate uers word. Everything sounds fine, but I can't make past the nlu.yml.

In RASA, users intents is triggered by matching words in the nlu.yml. The problem is, I can't make sure everytime users input a wordle guess, the robot will know he is playing wordle, and repeatedly executing that intent. If the users answer something that is not in the wordlist, The intent won't be triggerd... and validate function won't be called... then everything won't work

![](/img/4621_2/p23.png)

<figcaption class="text-center italic font-medium">Wordle Game</figcaption>

## Ending - Reflection

At last, I am pretty confident and satisfied on the humanly reactions, speech tone of the final product. I would take this experience next time if I have to design simiar project, that is, think robot as a human. what a human would do, I would emulate, implement then in the robot. It is as imagining the robot is a real man.

But, I still think If I have more time, I should finalize, tweak more on the nlu intent part. The first problem is we discovered some problems in the final testing of the prototype. That is, we found sometimes our intent is not properly captured. I found that we three coder are too focused on the functions, responses part, but we kind of ignored the intent part. So the robot talks like a human, but it didn't 'think' or 'interpret' things as a human, specifically, not that well trained, our nlu model.

The second problem is somehow linked to the first one. I said we didn't match users words perfectly with user intents. Then now, the problem is we didn't design many 'intents' to express our own thinking. Let's say you saw a cute cat image, a normal would respond it with 'Wow, that's cute!' . But I didn't think of this and design this intent, so sometimes for daily talks (excepting requests) , the robot can't respond properly as we didn't implement many ways for users to express his intent. But hey, Siri and Google assistant won't work as intented sometimes lah. So I am really satisfied for this 'mini' project. And it is glad to see there's still room for improvement.

At last also huge praise to Marcus, he implemented the interface with telegram and cloud server. So we did not need to design our own interface and host our robot. And effectively, everyone in the class can try out our bots on telegram!
