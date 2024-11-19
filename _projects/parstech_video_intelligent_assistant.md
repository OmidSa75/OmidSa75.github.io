---
layout: page
title: Parstech Video Intelligent Assistant 
description: Integrated AI assistance to process and analyze videos with modules like human detection, face recognition, and license plate recognition.
img: 
importance: 1
category: ParsTech
related_publications: true
---

I deeply worked on the human detection and restriction area services, I also had the responsibility on developing a camera & stream handling service and system design of this application.
I am going to explain the services, modules, and features which I worked on:

## Restricted Area
### description
The Restricted Area module is responsible to watch the registered areas and alert the client if someone entered the restricted area. 

### Features
* Multi polygon Areas 
* Multi Camera Supported
* The model is trained on the collected tough dataset of humans.

## Face Recognition
Adding face bank updater to the service. A parrallel task which gets new images with its owner name and pass them to the embedding extractor then returns the embedding to the backend to save on the database.


## Camera & Streaming Service



