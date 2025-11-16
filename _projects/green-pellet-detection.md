---
layout: page
title: Green Pellet Size Estimation
description: Pipeline to Estimate the size of the green iron pellet
img: assets/img/projects/green-pellet/cover.jpg
importance: 1
category: Freelance 
giscus_comments: true
---

---
## Project Description
**_Goal:_** Segment the green iron pellet and estimate the size of the pellets in order to check the overall size distribution. The quality of the final iron pellet relates to its size.   
**_Employer:_** [Durali System Design and Automation (DSDA)](https://www.dsdaco.com/en/)  
**_date:_** 20 March 2024  

## Project Overview
The Green Pellet Segmentation project is an advanced computer vision solution designed for automated segmentation and analysis of green pellets in industrial images. This project combines state-of-the-art segmentation techniques with practical industrial applications to provide detailed statistical information about pellet size and area.

## Key Features

### 1. Advanced Segmentation Pipeline
- Implements a sophisticated filter chain architecture for image processing
- Utilizes Facebook's Segment Anything Model (SAM) for precise pellet detection
- Supports customizable image processing pipelines through a modular filter system
- Includes texture analysis and morphological operations for enhanced segmentation

### 2. Comprehensive Analysis Tools
- Real-time pellet size estimation
- Area measurement capabilities
- Statistical information extraction
- Contour-based analysis with IOU (Intersection Over Union) calculations

### 3. Industrial-Grade Features
- Camera calibration system for accurate measurements
- Support for multiple input sources including:
  - Basler industrial cameras
  - Standard CV cameras
  - Image directory processing
- Perspective transformation capabilities
- Pixel-to-centimeter conversion functionality

### 4. Modern Architecture
- RESTful API integration for remote control and monitoring
- PostgreSQL database integration for result storage and analysis
- Docker support for easy deployment
- Modular and extensible codebase
- Comprehensive logging system

### 5. Development Features
- Built with Python 3.11
- Advanced profiling capabilities
- Extensive documentation
- Automated testing infrastructure
- Flexible configuration system using YAML

## Technical Architecture
The project is structured into several key components:

1. **Core Pipeline**
   - Modular filter chain system
   - Customizable image processing sequences
   - Real-time processing capabilities

2. **Data Management**
   - Database integration for result storage
   - File-based history tracking
   - Configuration management system

3. **Interface Layer**
   - REST API for remote interaction
   - Command-line interface for direct operation
   - Support for multiple camera interfaces

4. **Analysis Tools**
   - Statistical analysis modules
   - Size estimation algorithms
   - Quality control metrics

## Applications
This system is particularly useful in:
- Industrial quality control
- Pellet production monitoring
- Automated inspection systems
- Research and development in material processing

## Future Development
The project is actively maintained with planned enhancements including:
- Advanced configuration management through API
- Enhanced manual calibration capabilities
- Image area cropping functionality
- Docker deployment optimizations

## Installation and Deployment
The project supports multiple deployment options:
- Standard Python installation
- Docker containerization
- Database integration through PostgreSQL
- Flexible configuration through environment variables

---

This project represents a comprehensive solution for industrial pellet analysis, combining modern computer vision techniques with practical industrial requirements. Its modular architecture and extensive feature set make it suitable for both research and production environments.


# Processing Steps


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/green-pellet/1.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/green-pellet/2.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/green-pellet/3.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
 Summerized processing steps
</div>

<div class="row justify-content-sm-center">
    <div class="row-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/green-pellet/5.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="row-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/green-pellet/4.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Visualization and Statistics
</div>