---
layout: page
title: Windows
permalink: /windows/
---
# Windows Copilot Runtime and the Windows 11 AI System

# A detailed overview of future technological tools

### Introduction
The development of artificial intelligence (AI) in recent years has significantly transformed the world of software and hardware solutions. One of the latest and most interesting advancements in this field is the Windows 11 AI System, which includes the Windows Copilot Runtime. These innovations allow users to utilize their computers more efficiently and intelligently.

### Brief Overview of the Windows 11 AI System
The Windows 11 AI System is an integral part of the Windows 11 operating system from version 24H2 onward, aimed at providing users with an intelligent and adaptive experience. The AI system enriches Windows 11 with numerous new features and possibilities, significantly enhancing user experience, productivity, accessibility, creativity, and efficiency.

### Main Features
Below are the most important features and capabilities of the Windows 11 AI System:
- **Intelligent Search**: The Windows 11 AI search engine can quickly and accurately find the necessary information, whether it be files, applications, or web content.
- **Virtual Assistant**: The system's built-in virtual assistant, Cortana, helps users manage daily tasks, set reminders, and more.
- **Data Privacy and Security**: The AI system continuously monitors and protects user data, ensuring high levels of privacy and security.
- **Resource Optimization**: The system can optimize computer resources, ensuring fast and smooth operations.

### Integration into Everyday Life
The Windows 11 AI System not only increases workplace productivity but also offers numerous useful features in everyday life. Whether it's working from home, studying, or simple entertainment, the AI system provides support in all areas.

### Future Developments
Microsoft is continuously working on enhancing the Windows 11 AI System. In the coming years, more intelligent features and capabilities are expected to be introduced, further increasing user experience and system efficiency. This supports developers in implementing AI capabilities natively, quickly, and cost-effectively within the Microsoft-provided system, without additional time investment.

### What is the Windows 11 AI System, and What Does It Do?
The Windows AI System encompasses all the technologies and models that support AI functions in Windows 11. This system aims to enhance user experience and efficiency by introducing AI-based features such as automatic image enhancement, real-time captions, and audio cleaning.

#### Some Key Integrated AI Features:
- **Windows Recall**: This function acts as a photo memory, capturing images of everything the user does on the computer in the background. With the help of AI models, all content becomes searchable in natural language, be it text or image. This helps users find things they have previously seen on the computer.
- **Windows Studio Effects**: A combination of various AI-based effects that improve video call and audio quality, such as automatic background adjustment, eye contact, portrait lighting, and creative filters for camera images.
- **Live Captions**: Creates real-time captions for videos and audio recordings, helping to address listening difficulties.
- **Auto Super Resolution**: Automatically enhances the resolution of images and videos for sharper and clearer display.
- **Voice Clarity**: Cleans the input audio for better understandability, especially during video calls.
- **Voice Focus**: Focuses on the speaker's voice and reduces background noise, filtering out unwanted non-human sounds.
- **Click to Do**: Enables users to quickly perform tasks on the computer by clicking and executing commands.
- **Cocreator for Paint**: Assists in creating and editing images with AI-based tools, for example, in the Paint application.
- **Restyle Image for Photos**: Applies new styles to photos with the help of AI in the Photos application.
- **Text Recognition (OCR)**: Detects, recognizes, and extracts text from images.

This system allows developers to integrate AI functions and all these technologies into their applications via the AI models, which are more than 40 in number.

### What is the Windows Copilot Runtime, and What Does It Do?
The Windows Copilot Runtime is a software solution designed to assist users in performing various tasks. The term "Copilot" implies that this system acts as the user's "co-pilot," helping and supporting them at every step. The Windows Copilot Runtime operates specifically in the Windows 11 environment under the Windows AI System, serving as the engine of the system and aiming to enhance user experience and productivity.

### Functions and Capabilities
The Windows Copilot Runtime has numerous functions and capabilities, some of which are detailed below:
- **Automatic Task Execution**: The Copilot can recognize the activities performed by the user and automatically suggest or execute certain tasks.
- **Native Integration**: The application integrates closely with the Windows 11 system, ensuring seamless operation with various applications and services.
- **Machine Learning and AI**: The system can learn from user habits and preferences, becoming increasingly efficient in supporting daily activities over time.

### Benefits
The Windows Copilot Runtime offers numerous benefits for users:
- **Time Savings**: Through automatic task execution and personalized suggestions, users can save a significant amount of time.
- **Increased Productivity**: With the help of the Copilot, users can work more efficiently as the system assists in faster and more accurate task completion.
- **Personalized Experience**: Thanks to machine learning, the system continuously adapts to user needs and habits.

### Windows Copilot Runtime from a Developer's Perspective
Within the Windows AI System, the new Windows Copilot Runtime is responsible for running AI models, APIs, and other tools. This layer includes specific AI frameworks (such as DirectML and ONNX Runtime) and models like Phi Silica. The Copilot Runtime optimizes the operation of AI functions, minimizing latency and power consumption.

![Windows Copilot Runtime](/copilot-resources/assets/windows/1-WindowsCopilotRuntime.jpg){: .image-centrator }

This system consists of three layers:
- **AI Frameworks and Tools**: This includes DirectML, ONNX Runtime, PyTorch, WebNN, and other developer tools.
- **Windows Copilot Library and Local AI Models**: The AI models and APIs enable the integration of AI functions into applications.
- **Applications Providing AI Functions**: These applications access AI functions and capabilities.

More Details on Each Component and Their Roles

![Direct ML System Architecture](/copilot-resources/assets/windows/2-DirectML.png){: .image-centrator }

- **DirectML**: A machine learning framework that allows developers to run AI models using GPUs, optimizing performance and scalability.
- **ONNX Runtime**: A tool for running models using the Open Neural Network Exchange (ONNX) format, enabling seamless integration of various AI models.
- **PyTorch**: An open-source machine learning library widely used in research and development, allowing for rapid development and application of AI models.
- **WebNN**: A web API that enables running machine learning models directly in the browser, allowing users to access AI functions without needing to install specialized software.
- **Phi-Silica Model**: A small-scale language model developed by Microsoft, specifically designed for Copilot+ PC NPUs (Neural Processing Units). It allows efficient and low-power AI task execution without servers.

The Phi Silica model is directly connected to the Windows 11 24H2 version via the Windows App SDK (Software Development Kit). The SDK allows developers to integrate local AI models, including Phi Silica, into their applications.

The Windows APP SDK language model class enables the optimized use of built-in AI models with minimal coding, instead of complex and embedded application integration.

### What Tasks Can the Phi Silica Perform?
The Phi Silica enables the following tasks:
- Generating chat responses to user prompts
- Solving mathematical problems
- Assisting in writing and editing code
- Analyzing and interpreting texts

The Windows App SDK offers special APIs that allow the use of the Phi Silica model and local processing. This provides a significant advantage for users as it minimizes latency and enhances data security.

### Model Parameters
This model has 3.3 billion parameters and is specifically designed for Copilot+ PC NPUs (Neural Processing Units). The Phi Silica is the smallest model in the Phi family, offering approximately 650 tokens per second performance while requiring only 1.5 watts of power.

The Phi Silica model consists of the following components:
- **KV Cache**: Uses the NPU KV cache for generating output tokens.
- **CPU**: The model can also run on the CPU, providing approximately 27 tokens per second performance.

The Phi Silica model aims to require minimal latency and power while making the PC's CPU and GPU available for other tasks.

### Use in Development
The applicability in development is not complicated. If the developer competence is given, there is nothing else needed but to use the appropriate, latest WindowsAppSDK.

### Developing with Lower Layers and Complex Code Base to Integrate Own AI Model
It is also possible to integrate alternative AI models into applications, for which Microsoft provides various assistance and demonstrative applications.

**See the AI Dev Gallery (pre-release) [here](https://github.com/microsoft/ai-dev-gallery)**

Recommended tools for NPU-based model development [here](https://learn.microsoft.com/en-us/windows/ai/npu-devices/)

### Developer Environment and First Steps
For AI development, it is recommended to acquire and use the latest Visual Studio 2022. If you do not have a subscription, choose the Community version. This tool is recommended for creating applications based on the WindowsApp SDK. Of course, alternative solutions and plugins can also use Visual Studio Code or external manufacturer IDE solutions.

The simplest way to download it is through the Microsoft Store:
Visual studio Community 2022 - see more info [here](https://apps.microsoft.com/detail/XPDCFJDKLZJLP8)

After installation, the next step is to run the Visual Studio installer and create the necessary development environment by installing the required components:
- Select the Windows application development package, and for optional add-ons, choose the C++ WinUI app development tools component.
- (For C# app development using the Windows App SDK, select Windows application development.)

![Visual Studio Snip](/copilot-resources/assets/windows/3-VS1.png){: .image-centrator }

- Select the C++ WinUI app development tools, then check the .NET desktop development and add the MSIX Package Tools optional component.
- (This is essential for building the AI Dev Gallery.)

![Visual Studio Snip](/copilot-resources/assets/windows/4-VS2.png){: .image-centrator }

During installation, enable developer mode in Windows settings.
In the Defender antivirus, add the source folder in the user's folder that collects source codes to the exclusion rules.
Install the latest experimental WindowsAppSDK package [here](https://learn.microsoft.com/en-us/windows/apps/windows-app-sdk/downloads)

#### Visual Studio Code case
While not the main focus of this material, it's worth mentioning that the AI catalog is accessible in Visual Studio Code using the [extension here](https://marketplace.visualstudio.com/items?itemName=ms-windows-ai-studio.windows-ai-studio-extension)

### Creating a Demonstrative AI Dev Gallery Application
After installing the development environment and necessary components, let's create our first example application. To do this, simply follow the steps below to create the latest AI Dev Gallery application based on the current source code:

![Visual Studio Snip](/copilot-resources/assets/windows/5-VS3.png){: .image-centrator }

After opening Visual Studio, start a new project by selecting Clone a Repository, and specify the following URL as the Repo location [here](https://github.com/microsoft/AI-Dev-Gallery.git)

![Visual Studio Snip](/copilot-resources/assets/windows/6-VS4.png){: .image-centrator }

Open the AIDevGallery.sln solution.
In the NuGet Package Manager, update the packages.
After updating the NuGets, restart Visual Studio and allow the necessary components to update.

![Visual Studio Snip](/copilot-resources/assets/windows/7-VS5.png){: .image-centrator }

Set the build configuration from Debug to Release in the solution and select the correct architecture.

Then, we create the application.

### Summary
The Windows Copilot Runtime and the Windows 11 AI System together enable users to utilize the most modern technological tools in their daily activities. These innovations not only increase productivity but also provide a personalized, intelligent, and efficient user experience. With expected future developments, these systems will play an even more defining role in our digital lives.

The Windows AI System provides a comprehensive overview of all AI-based functions and technologies, while the Windows Copilot Runtime serves as the engine of this system, ensuring the efficient operation of AI models. Phi Silica is a specific example of such a model used by the Copilot Runtime.

### What About Running LLM Models Locally?
It is not the intention of this document to detail the operation of LLM local environments, it is mentioned for informational purposes only:

### Running GPT-4 Locally
Currently, there is no shareable information that the Windows 11 24H2 version would directly support the local running of the GPT-4/5 model. However, the Windows 11 AI System supports many AI models and frameworks that enable the integration and running of AI functions.

It is possible to run the GPT-4/5 model locally, but several important considerations should be taken into account:
- **Resources**: The GPT LLM model requires a large amount of computational resources, and extremely powerful GPUs and supporting systems are necessary for running the full model. For example, CPU (AVX or AVX2 instructions), GPU: A100 or dual RTX 4090 40GB VRAM, RAM: 64GB for GPT-4 models with 65B and 70B parameters.
- **Frameworks**: Various AI frameworks can be used to run the model, such as PyTorch, ONNX Runtime, or DirectML.

### Cloud Alternative for Running GPT LLM Models
The optimal solution currently for running GPT LLM models is the cloud alternative:
- **OpenAI API**: The easiest way to run the GPT model is to use the Microsoft OpenAI API, which allows the model to run in the cloud, and the outputs can be integrated into local applications.