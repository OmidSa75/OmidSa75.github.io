---
layout: distill 
title: Ways of processing
date: 2024-08-14 00:30:00-0400
description: The concepts of processing in Python
tags: programming
categories: sample-posts
giscus_comments: true
related_posts: true
toc:
    # if a section has subsections, you can add them as follows:
    # subsections:
    #   - name: Example Child Subsection 1
    #   - name: Example Child Subsection 2
  - name: Introduction 
  - name: Default
  - name: Threading
  - name: Multi-Process
  - name: AsyncIO
---
# Introduction
In this blog we want to talk about the concepts of processing in the computer programming specially in python. So when we write a program and execute it, How Python Interpreter interfere with the code? What are the mechanisms to run? 

The following figure shows the default concepts of processing and some of their characteristics in the python.


{% include figure.liquid path="assets/img/posts/ways-of-processing/concepts.png" class="img-fluid rounded z-depth-1" zoomable=true %}

I will discuss about this concepts during this post.

# Default
General Speaking, When you run the Python program, a process will run known as `main process` and also we have a thread in the *main process* which is known as  `main thread`. 
All lines of codes are going to be executed in the *main process* by *main thread*. In detail, the *main-process* holds the `thread`s, but when we didn't create any thread, the program will start a *main-thread* automatically inside the *main process*, It means that a process can hold various threads.

{% include figure.liquid path="assets/img/posts/ways-of-processing/default.png" class="img-fluid rounded z-depth-1" zoomable=true %}
<div class="caption">
Simple visualization about default program timeline. Each colorized rectangle shows a time duration of a processing function.
</div>



# Threading
One of the ways of processing is using `Thread`s in you program, so what does thread do?
*Thread* creates a different timeline in your program that some functions could be executed in the separated timeline. Here, The important point is the object are used inside the thread are shared between the *main-thread* and the created *thread*, and also Python has a GIL (Global Interpreter Lock) which doesn't allow the program to run to functions simultaneously. In detail the GIL won't allow the interpreter to access the same object in the memory. This behavior causes non-parallelization but you can still do concurrency.
So your program will switch between your threads technically and because of this behavior, threads are good for IO bound tasks! 
{% include figure.liquid path="assets/img/posts/ways-of-processing/threading.png" class="img-fluid rounded z-depth-1" zoomable=true %}
<div class="caption">
<em>Main-thread</em> and the <em>Thread-1</em> timelines and function calling while the <strong>GIL</strong> is switching between them.
</div>

## Object Reference Concept
These are the stages on how an object is created in python, stored in memory and referenced during the program.
1. The Object created and the value with a reference stored in the memory.
2. The Thread is Opened and the object is used by thread so another reference will be created.
3. The Thread Stopped and the thread object reference was deleted.
4. The program is finished and all object references and values are deleted.
{% include figure.liquid path="assets/img/posts/ways-of-processing/object_reference_concept.png" class="img-fluid rounded z-depth-1" zoomable=true %}


# Multi-Process
Multi-Processing is designed for the situation you want to run and isolate (or not) part of your program to run independently. In order to use multi-processing you can run parts of your program with processes 
and there is no **GIL** to limit your timeline because each process has its own **GIL**. Processing doesn't have access to other's memory, So you can not expect a single variable to be changed in the main process by child processes or vice versa.

To acquire this purpose, a shared state should be defined. By using a shared state the processes can have access to it and use the same memory for reading and writing.

{% include figure.liquid path="assets/img/posts/ways-of-processing/multi_processing.png" class="img-fluid rounded z-depth-1" zoomable=true %}
<div class="caption">
A process is started during the program with its own <strong>GIL</strong> and it can share variables to <em>main-process</em> through the shared state.
</div>
# AsyncIO

AsyncIO method is designed to execute IO tasks since it can wait on async function response but doesn't block the CPU. This feature can help execute various async functions simultaneously and collect their responses almost at the same time.

> ##### TIP
> Python AsyncIO works only for network IO tasks **not** disk IO.
{: .block-tip }


> ##### Warning
>
> AsyncIO must used for IO tasks, it doesn't affect regular ones.
> 
{: .block-warning }

{% include figure.liquid path="assets/img/posts/ways-of-processing/asyncio.png" class="img-fluid rounded z-depth-1" zoomable=true %}
<div class="caption">
Executing some IO functions with asyncio methodology will achieve concurrency.
</div>