// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Peer-reviewed papers on multimodal agentic systems — computer-use agents, AI for scientific discovery, and inference-time reasoning.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Three flagship projects spanning education, open-source agents, and course-grade AI tutoring.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-aei4u-won-the-grand-prize-特等奖-at-tsinghua-s-43rd-challenge-cup-ai-teaching-agent-design-track-for-an-analog-electronics-teaching-assistant-on-dify-thu",
          title: 'AEI4U won the Grand Prize (特等奖) at Tsinghua’s 43rd Challenge Cup — AI...',
          description: "",
          section: "News",},{id: "news-aicosmos-tsinghua-s-educational-multi-agent-platform-went-public-at-aicosmos-ai",
          title: 'AICosmos — Tsinghua’s educational multi-agent platform — went public at aicosmos.ai.',
          description: "",
          section: "News",},{id: "news-bami-accepted-to-cvpr-2026-training-free-bias-mitigation-in-gui-grounding-with-borui-zhang-bo-wang-wenzhao-zheng-and-collaborators-at-tsinghua-and-lenovo-research-code",
          title: 'BAMI accepted to CVPR 2026 — Training-Free Bias Mitigation in GUI Grounding. With...',
          description: "",
          section: "News",},{id: "news-syll-v0-2-0-released-recorded-workflow-studio-layered-memory-workspace-and-the-desktop-ghost-are-all-live-project-code",
          title: 'Syll v0.2.0 released — recorded-workflow studio, layered memory workspace, and the desktop ghost...',
          description: "",
          section: "News",},{id: "news-embodiedact-accepted-to-icml-2026-grounding-llms-in-scientific-discovery-via-embodied-actions-with-jinfeng-zhou-yuxuan-chen-jianing-yin-minlie-huang-and-hongning-wang-code",
          title: 'EmbodiedAct accepted to ICML 2026 — Grounding LLMs in Scientific Discovery via Embodied...',
          description: "",
          section: "News",},{id: "projects-aicosmos",
          title: 'AICosmos',
          description: "Educational multi-agent platform — incubated at Tsinghua, live at aicosmos.ai.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/aicosmos/";
            },},{id: "projects-syll",
          title: 'Syll',
          description: "A small, self-hosted AI companion who sits at the edge of your screen and quietly tends the things you almost forgot.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/syll/";
            },},{id: "projects-aei4u",
          title: 'AEI4U',
          description: "Analog Electronic Intelligent for You — an AI teaching assistant for Tsinghua&#39;s Fundamentals of Analog Electronics. 🏆 Grand Prize, 43rd Tsinghua Challenge Cup.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/aei4u/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%62%6F%7A%68%61%6E%67%32%33@%6D%61%69%6C%73.%74%73%69%6E%67%68%75%61.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
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
