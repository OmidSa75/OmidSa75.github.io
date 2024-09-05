---
layout: post
title: Shared Memory in python
date: 2024-08-14 00:30:00-0400
description: Different types of shared memory in python which are provided by multiprocessing module.
tags: programming
categories: sample-posts
giscus_comments: true
related_posts: true
# toc:
#   - name: Introduction 
#   - name: Queue & Pipe
#     subsections: 
#       - name: Queue
#       - name: Pipe
#       - name: Comparison
#   - name: Managers
#   - name: SharedMemory
#   - name: Tutorial Video
toc: 
  sidebar: left
---
# Introduction
Consider you want to write a Python program and take advantage of multiprocessing logic. For 
example, some of your functions need to be run in different processes for parallelizing or some task handlers which are waiting to receive data on specific situations. However, there is a need to have a shared state in the memory so you can share data between your processes. So I'm going to introduce 
common multiprocessing shared memory in Python.
Here I want to talk about the following shared states.
1. Queue
2. Pipe
3. Manager
4. SharedMemory


# Queue & Pipe
## Queue
Queue and Pipe are the simplest classes to be used in sharing data between processes. Creating a Queue will give you an object with which you can put and get data from it. Put data in a process and get that data 
in another process. The Queue is used to communicate between multiple processes. 

{% include figure.liquid path="assets/img/posts/shared-memory-python/Queue.png" class="img-fluid rounded z-depth-1" zoomable=true %}

The Python Code:
```python
import time
import multiprocessing as mp


def process_1(data: list, queue:mp.Queue):
  for _data in data:
    print(f"Process 1 is sending data: {_data}")
    queue.put(_data)
    time.sleep(2)


def process_2(queue: mp.Queue):
  while True:
    _data = queue.get(block=True)
    print(f"Process 2 got `{_data}` data")
    time.sleep(1)


if __name__ == "__main__":
  shm_queue = mp.Queue()
  data_list = list(range(10))
  p1 = mp.Process(target=process_1, args=(data_list, shm_queue), daemon=True)
  p2 = mp.Process(target=process_2, args=(shm_queue, ), daemon=True)
  p1.start()
  p2.start()
  p1.join()
  p2.join()
```
## Pipe
The Pipe will give us two objects which refer to both the start and ending of a pipe, The first can send/receive data and, the second can receive/send data through it. The pipe is used for communication between two processes.


{% include figure.liquid path="assets/img/posts/shared-memory-python/Pipe.png" class="img-fluid rounded z-depth-1" zoomable=true %}

```python
import time
import multiprocessing as mp


def process_1(data: list, conn_1):
  for _data in data:
    print(f"Process 1 is sending data: {_data}")
    conn_1.send(_data)
    time.sleep(0.2)


def process_2(conn_2):
  while True:
    _data = conn_2.recv()
    print(f"Process 2 got `{_data}` data")
    time.sleep(1)
    if _data == "END":
      break


if __name__ == "__main__":
  conn_1, conn_2 = mp.Pipe()
  data_list = list(range(10)) + ["END"]
  p1 = mp.Process(target=process_1, args=(data_list, conn_1), daemon=True)
  p2 = mp.Process(target=process_2, args=(conn_2, ), daemon=True)
  p1.start()
  p2.start()
  p1.join()
  p2.join()

```

## Comparison
In Python's `multiprocessing` module, both `Queue` and `Pipe` are used for communication between processes, but they serve slightly different purposes and have different characteristics. Here's a comparison:

### 1. **Queue**:
- **Purpose**: `Queue` is designed for communication between multiple processes. It allows multiple producers (processes) to put data into the queue and multiple consumers (processes) to get data out of the queue.
- **Implementation**: `Queue` is built on top of a `Pipe` with an additional layer of locks and semaphores to ensure thread-safe and process-safe operations.
- **Usage**: `Queue` is often used when you have many processes that need to communicate with each other in a concurrent manner. It's suitable for a producer-consumer pattern where one or more processes produce data, and one or more processes consume it.
- **Interface**: `Queue` provides a high-level API similar to the `queue.Queue` used in threading. It has methods like `put()`, `get()`, `empty()`, `full()`, etc.

### 2. **Pipe**:
- **Purpose**: `Pipe` is used for communication between two processes. It establishes a direct connection between two endpoints (i.e., two processes).
- **Implementation**: `Pipe` is simpler than `Queue`. It provides a pair of connected file descriptors or connection objects, with one process writing to one end and another process reading from the other.
- **Usage**: `Pipe` is best used when you need a simple, low-level, and fast communication channel between exactly two processes. It can be used in both duplex (two-way) and simplex (one-way) modes.
- **Interface**: `Pipe` provides two connection objects, `conn1` and `conn2`. You can send and receive data using `send()` and `recv()` methods on these objects.

### Summary:
- **Queue** is more flexible and suitable for scenarios where you need to manage communication among multiple processes in a thread-safe manner.
- **Pipe** is more straightforward and is ideal for direct communication between two processes.



# Managers
Manager is a server process that manages shared objects, it can also manage sharing over a network.
It has Python data types like list and dict which are shared. 
```python
import time
import multiprocessing as mp

def process_1(shared_list):
    range_numbers = list(range(10))
    for num in range_numbers:
        shared_list.append(num)

def process_2(shared_list):
    range_numbers = list(range(10, 20))
    for num in range_numbers:
        shared_list.append(num)

if __name__ == "__main__":
    manager = mp.Manager()
    shared_list = manager.list()
    p1 = mp.Process(target=process_1, args=(shared_list,), daemon=True)
    p2 = mp.Process(target=process_2, args=(shared_list,), daemon=True)
    p1.start()
    p2.start()
    p1.join()
    p2.join()
    print(f"The final list is : {shared_list}")
```
An example with a lock object to control the access.
```python
import multiprocessing as mp

def process_1(shared_list, lock):
    range_numbers = list(range(100))
    with lock:
        for num in range_numbers:
            shared_list.append(num)

def process_2(shared_list, lock):
    range_numbers = list(range(100, 200))
    with lock:
        for num in range_numbers:
            shared_list.append(num)

if __name__ == "__main__":
    lock = mp.Lock()
    manager = mp.Manager()
    shared_list = manager.list()
    p1 = mp.Process(target=process_1, args=(shared_list, lock), daemon=True)
    p2 = mp.Process(target=process_2, args=(shared_list, lock), daemon=True)
    p1.start()
    p2.start()
    p1.join()
    p2.join()
    print(f"The final list is : {shared_list}")
```

# SharedMemory
A SharedMemory object is a low level by creating it the interpreter gives you a part of a memory by its address with which you can read and write into it directly. The point is it gives you the higher performance compared to the previous methods but it needs more care in managing the read and write into it. You must specify the types, sizes, and shapes of your data. This is the implementation of SharedMemory with Numpy functionality.


```python
import multiprocessing as mp

from multiprocessing import shared_memory
import numpy as np


def process_1(shm_name, shape, dtype):
    shm = shared_memory.SharedMemory(name=shm_name)  # Connect to the shared memory address
    shared_array = np.ndarray(  # Get the value from the shm
            shape=shape,
            dtype=dtype,
            buffer=shm.buf
            )
    print(shared_array)


if __name__ == "__main__":
    array = np.full((100, 100), 255, dtype=np.uint8)  # Create an array

    shm = shared_memory.SharedMemory(create=True, size=array.size)  # Create a shared memory with the size of the array

    shared_array = np.ndarray(  # Initial a ndarray object
        array.shape,  # Set the shape of the ndarray equals to the array
        dtype=array.dtype,  # Set the type the same as the array type
        buffer=shm.buf,  # Connect the ndarray buffer to the shm buffer
    )
    np.copyto(shared_array, array)  # copy the array to the buffer
    shm_name = shm.name
    print(shm_name)

    p1 = mp.Process(target=process_1, args=(shm_name, array.shape, array.dtype), daemon=True)
    p1.start()  # Start the process
    p1.join()
    shm.close()  # Close the shm buffer
    shm.unlink()  # Disconnect all links to it
```




# Tutorial Video
I also prepared a YouTube video about this section.
{% include video.liquid path="https://www.youtube.com/embed/GVdupoMQ43c?si=IjAuNiE9OMVEQ_1x" class="img-fluid rounded z-depth-1" width=720 height=480 %}

# Conclusion
These are some methods of shared memory in python that you should select wisely by their usage.
definitely, there are some other ways of sharing a memory in Python that I hope I can prepare other tutorials in the future. 

# References
* [Shared Memory in Python](https://docs.python.org/3/library/multiprocessing.shared_memory.html#multiprocessing.shared_memory.SharedMemory)
* [Multiprocessing Python](https://docs.python.org/3/library/multiprocessing.html#multiprocessing-managers)
* [Excalidraw drawing link](https://excalidraw.com/#json=1FaN_i6OgUFryUADDnXEQ,8AsBYEFd3v4SJnZg62cLOQ)