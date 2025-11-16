---
layout: page
title: Intelligent Video Surveillance Assistant  
description: An AI-powered computer vision system designed to enhance traditional CCTV networks with intelligent video analytics.
img: assets/img/projects/parstech_video_intelligent_assistant/cover.png
importance: 1
category: ParsTech
related_publications: false
---

**Duration:** Joined the project at Aug 2021 until Sep 2025  
**Team Size & Role:** 3-5 developers, My role was ML Engineer & Backend Developer  
**Tech Stack:** `Pytorch`, `ONNX`, `GStreamer`, `OpenCV`, `Celery`  

---

# Project Goal

An AI-powered computer vision system designed to enhance traditional CCTV networks with intelligent video analytics. The platform performs real-time object and person detection, face recognition, and behavioral analysis to improve safety, security, and operational monitoring. It supports multi-camera processing, event-based alerts, and an integrated dashboard for visualization and reporting.


# Role and Contributions

- Implemented Restriction Area sub-application.
- Designed a module to manage the AI Core in the background with flexible sources.
- Structured architecture to use Celery to connect micro services.
- Developed a camera management service with multiprocessing and GStreamer to manage the incomming streaming from camera.
- Implemented an enhanced error handling module for the GStreamer's pipeline.
- Collaborated on License Detection & Face Recognition pipelines and models.

# Project Architecture

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/parstech_video_intelligent_assistant/architecture.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Main architecture of the project.
</div>


# Lessons Learned
> This was my first product to work on, and I learned a lot of things from this project. Learned the concept of using Threads, Multiprocessing, and Asyncio in Python. Using the GStreamer package in the real project and how to handle the pipeline carefully. Got familiar with backend and front development sides, and how to communicate between them with REST API and MPI. Also, Docker plays a huge role here, and I tried to understand it at the beginning of the project since this project can be deployed to the cloud and local host, so we needed a suitable and uncomplicated tool.

> The AI part of the project was so dangling too, cause we needed to train different and multiple models on our self-collected dataset, and, after preparing the models, the complicated part arrived, which was designing an environment to serve the model in production. The AI, backend, and camera server were on independent services, so to communicate and sync between these services, we used Redis and Celery. 

> About soft skills, we were a team, backend, frontend, AI engineer, product manager, and QA. I played the role of product manager and AI engineer here. Developers were friendly and professional in their behaviour. We always tried to learn new technologies, and part of our time was spent on refactoring the product with the new knowledge. **_I miss the boys_**

---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/parstech_video_intelligent_assistant/2025-11-16_22-35.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Home Page
</div>