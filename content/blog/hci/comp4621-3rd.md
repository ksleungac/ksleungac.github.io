---
title: "Group project 3 - Social VR Cultural World"
author: "@Leung King Suen, Oscar"
dates:
  published: "04-05-2022"
description: "Diary for COMP4621 Project 3"
---

## Ideation

Upon reading the project instruction PDF, Me and our groupmates have a very vague idea on actually what we are going to implement. Because the scope is very large for VR applications. After reading and watching some user scenario like mozilla hub and VRChat. I get some idea on what the project prototype may look like.

Our initial idea were really normal. Like some sports game, simple games inside it. Karaoke, watching films, concerting together, some other things also includes window shopping in a VR world. However, these idea don't have any charateristics inside it, it is also quite boring, that is, there not a theme.

Moreover, if we want to make things more complicated, let's say making a hide and seek game, or Among us style game inside our VR world. However, the functions provided by mozilla hub is really limited. I later found that mozilla hub isn't for game at all, people were saying it as a alternative to zoom, or zoom class. While another VR software VRChat is more game orientated. But we all thought that way the project will be too complicated, we are time limited and therefore don't have the time to continue on that

Then someone mention that, how about we make a language learning theme. It as like people will be gathering inside the VR world, and they will chat with each other using different languages. It will be a perfect scenario where language-learners can get themseleves into the atmosphere. Later we also decide to boarden the the scope a bit. Make it tourist/museum like theme. And because of this is a international theme, we just want to put international famous heritage around the world, and in the centre it will be a flat piazza for people to gather and chat. It also acts as a centre point for us. It will be a outdoor theme, since I think these years people can't go out to travel because of COVID, and making ourdoor theme will be better.

## Finding base map

then we decided to find base map and start building it in the spoke. I had to say spoke interface are kind of user friendly. But later it will become a disater because of this. As we don't want to stuck with old maps, so we need to find a new map, and it has to be beautiful.

![Sample Map 1](/img/4621_3/p31.jpg)

<figcaption class="text-center italic font-medium">Sample Map 1</figcaption>

![Sample Map 2](/img/4621_3/p32.jpg)

<figcaption class="text-center italic font-medium">Sample Map 2</figcaption>

We found some really good map on Sketchfab. They are really good looking and nice. Some of them are scanned or hand-built, but at the end they are really high definition. Some maps are not in .glb format originally, so it can't be loaded into spoke directly. But download it first and then convert it into .glb in blender solve the problem.

But when we try to export maps into mozilla hubs to test its size and texture, spoke isn't happy about it. Until now, I get to know that, spoke generates collision and walkable planes using two different techniques. Normally the walking plane is generated using trimesh. Trimesh provides a high definition walking plane, And user can walk up slope, uneven terrain. So every plane are made of triangles. However, although this method works fine in small indoor map. For such a big complex outdoor terrain map, it is too complicated for spoke to generate such terrain. and often it will throw out error such as 'error generating nav mesh'. And we always find it hard to upload onto mozilla hub.
![Setting trimesh](/img/4621_3/p33.jpg)

<figcaption class="text-center italic font-medium">Setting trimesh</figcaption>

You can see the 'force trimesh' box in this picture. Normally spoke will be using trimesh and 2d plane at the same time. Force trimesh is well, as stated.

![Mesh Plan and Glitching](/img/4621_3/p34.jpg)

<figcaption class="text-center italic font-medium">Mesh Plan and Glitching</figcaption>

The second method is called 2d plane. So it can only create planes that are different height. mostly slopes are ignored. So the user can't walk on terrain. And it is very confusing to have somewhere you can't walk. It't like meeting a airwall in a game. You can see the floor plan meseed up on slopes, and for stonhenge it's another mess. It means that the user can'walk inside the stonhenge, and walk up the slope.

So at the end, we settled on the default terrain map, we added a flat plane on it, so it would be flat. And we can place objects on it without making to much of adjustment to the objects.
![The Overview](/img/4621_3/p35.jpg)

<figcaption class="text-center italic font-medium">The Overview</figcaption>

This is the end product that ends up in the demo video. The grey flat plane is what I mentioned. And we added objects to the plane. Moreover, clouds like sphere were also added. Also the 'simple' water object was placed to make the titanic looks like sinking into the water.
![The Titanic](/img/4621_3/p36.jpg)

<figcaption class="text-center italic font-medium">The Titanic</figcaption>

You may already figured out. We want to make a scene in the Titanic film. And it would be fun to get a feeling of standing at the end of the ship, to feel what that height feels.

## Processing Models

We took some models on Sketchfab to be our heritage objects. But there are some models that are either hand-made or scanned using photogrammerty. We had a Fumishimi Castle in our map, which that model was originally scanned into a 3D object.
![Previewing model in Blender](/img/4621_3/p37.jpg)

<figcaption class="text-center italic font-medium">Previewing model in Blender</figcaption>

The original model is even larger than this, it is as if it's the whole scenery in there. But we need to trim it down as a smaller object. The reason is, a small history lesson first. The japanese castle were designed so high, and have a base that are multi stories is that, they can be higher when someone trys to attack the castle. But it means that the floor plan generation and collision handling will be very hard for us. So we need to trim down the model in blender first, make it 'simpler'.

## Battling the 128MB limit

Somewhere into our peoject, after we placed some of the objects into the the world. And we found that it cannot be compiled. The reason simply is, mozilla hub only supports a world up to 128MB!!!!! That means we need to shrink some sizes of the objects!! For example, a stonehenge will take approx. 37MB. a fushimi castle took up 32MB. There's really not much of the space left.

So what we done, is to reduce the texture size. The original texture in Fushimi Castle in 8K, which is 8192*8192. We reduces its size to 2048*2048 in photoshop. And that castle only takes up 15MB now!
![Inspecting image size](/img/4621_3/p38.jpg)

<figcaption class="text-center italic font-medium">Inspecting image size</figcaption>

We also changes the stonehenge to a simple one. Instead of the very high definition stonehenge you saw in m=my previous shot. The new stonhenge is rather simple, low poly. And it doesn't even have textures. So we need to paint it in brown in blender. The new stonehenge now only eats up 1MB of size!

Our final product eats up 127MB of size. This is really the most extreme size we can take. one more simple object would exceeds the size limit and ruin the whole thing!

Small reflection->I can imagine in the future I will be working with limited resources..I guess it's better to save resources for later use at first, so when later optimizing the size, it would be alot easier to shrink its sizes.

## Games implementation

As I said, we want to implement games inside the mozilla hub. But it is function limited. I tried make a basketball field inside it, but playing with it was rather boring. Primarily because of the hitbox are wrong, and controlling, moving things inside the hub is very hard.
![Basketball Game](/img/4621_3/p39.jpg)

<figcaption class="text-center italic font-medium">Basketball Game</figcaption>

So a guy suggest that, why we make some local traditional games around the world. That sounds interesting, And relatively easy to implement, also fits our culture exchange theme.
![Mini-Games](/img/4621_3/p310.jpg)

<figcaption class="text-center italic font-medium">Mini-Games</figcaption>

I searched some local games on web. And these traditional games are all mainly boardgames, so it's really easy to implement. and we use duck+chicken to be our chess. The fron two games are Kaooa from India and another strategy game from South Korea. The 3 games behind that are 3 different three in a row games from 3 different countries. Though If I have time I would change the texture of the chicken. because that chicken is in white color, while game map is also in white, it will be maybe a little bit hard to distinguish.

## DemoVideo

I get to create Demo video for the project. I get the idea from a discontinued programme by TVB. It's called the Earth Live (瞬間看地球), and it has been discontinued in the April the 1st. It's really sad lo...
![Earth Live](/img/4621_3/p311.jpg)

<figcaption class="text-center italic font-medium">Earth Live</figcaption>

The programme is just a live camera around the world. But I think that is a small part of collective memories of Hong Kong. So I want to mimic the programme, by using the same UIs and Musics from it.
![Editing the Demo video](/img/4621_3/p312.jpg)

<figcaption class="text-center italic font-medium">Editing the Demo video</figcaption>

You can see I photoshoped the UI into the video. And that UI acted as a title also for each part of the demo. In the demo I introduced and demo-ed many concepts in thie world, such as timetable feture, it's like, I don't know someone who's reading this have played GTAv before, on the online server, there will be random event every 5-10 minutes or so. And player will be motivated to paticipate in such event, so the online game play will be more interesting. It is the same idea in our world, but a little different. Just the events are talks/shars/tours/games, they are more 'educational' I would say. Because if you get into the world without anything todo, it would be rather boring. It also have souvenir exchange feature, which I see it as a good way to enhance exchange among players.

## End Credits

Till the end of this project. To be honest, I personally think the whole map can be better, as well as the lighting. I asked a friend which I do needfinding and surverying about the final product, he's also the guy who gives me initial idea on making a tourists spot map first. He said the map looks like a 3D game from the early 2000s. Where I can't agreed anymore. Because I later realized the lighting in mozilla hub is really for indoor lighting. I can imagine other group using directional lighting to make a colorful pub out of this.

More so, I with the size limit in the mozilla hub can be larger, Like at least 256MB of 200MB. Then we can put more building in the map to fill blanks, so the whole world will be prettier. and the objects will be more high definition, and you can really walk under the stonehenge to feel what is like under the great rocks.

But anyway, I think the idea is what our project really shines. Because when we are thinking this project, the normal ideas, like concert, karaoke and video watching is really old-school, and there are many alternatives now, like Discord. Think if you are a user, why would I use this instead of discord? Same goes for the games idea, why won't I just play human fall flat? Why I don't just play animal crossing or other sports games? When you start thinking this, you will realize there are really too much good product now, and it is really meaningless to make a bad replication of those.

But, there's no such culture/language exchange world right now, yes? Since people can't go our to travel due to travel restriction of COVID, people don't have the chance to talk to others right? Then why won't us make people meet in the virtual world? Oh yeah! Not to mention We have a souvenir feature, which allows players to exchange souvenirs that are a icon of its country with others! That's really the point, the highlight of our project, and that's what differs ours to other normal VR world. It will be a world with interactive, fruitful events.

![](/img/4621_3/p313.jpg)

<figcaption class="text-center italic font-medium">Gift Exchange</figcaption>
