// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-قدمِ-شب",
          title: "قدمِ شب",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/night_step/index.html";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "This is My CV",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "Github Profile Summeries",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-shared-memory-in-python",
        
          title: "Shared Memory in python",
        
        description: "Different types of shared memory in python which are provided by multiprocessing module.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/shared-memory-python/";
          
        },
      },{id: "post-ways-of-processing",
        
          title: "Ways of processing",
        
        description: "The concepts of processing in Python",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/ways-of-processing/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "night_step-بولت-ژورنال",
          title: 'بولت ژورنال',
          description: "خلاصه‌ای از برنامه‌ریزی به روش بولت ژورنال",
          section: "Night_step",handler: () => {
              window.location.href = "/night_step/2024-08-04-bullet-journal";
            },},{id: "night_step-یک-روز-باید-انجامش-بدم",
          title: 'یک روز باید انجامش بدم',
          description: "موسیقی پیوند دهنده‌ی عمیق احساسات آدمی",
          section: "Night_step",handler: () => {
              window.location.href = "/night_step/2024-08-13-one-day-I-will-do";
            },},{id: "night_step-یادگیری-تقویتی",
          title: 'یادگیری تقویتی',
          description: "یادگیری تقویتی و روند تغییرات و یادگیری انسان",
          section: "Night_step",handler: () => {
              window.location.href = "/night_step/2024-11-19-reinforcement-learning";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-chehreara",
          title: 'ChehreAra',
          description: "A virtual try-on makeup service",
          section: "Projects",handler: () => {
              window.location.href = "/projects/chehra_ara/";
            },},{id: "projects-green-pellet-size-estimation",
          title: 'Green Pellet Size Estimation',
          description: "Pipeline to Estimate the size of the green iron pellet",
          section: "Projects",handler: () => {
              window.location.href = "/projects/green-pellet-detection/";
            },},{id: "projects-parstech-video-intelligent-assistant",
          title: 'Parstech Video Intelligent Assistant',
          description: "Integrated AI assistance to process and analyze videos with modules like human detection, face recognition, and license plate recognition.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/parstech_video_intelligent_assistant/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
