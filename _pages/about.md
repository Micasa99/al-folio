---
layout: about
title: about
permalink: /
subtitle: Undergraduate researcher · Department of Automation, Tsinghua University

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false
  more_info: >
    <p>B.Eng. in Automation, expected 2027</p>
    <p>Beijing, China</p>
    <p><a href="mailto:bozhang23@mails.tsinghua.edu.cn">bozhang23@<wbr>mails.tsinghua.edu.cn</a></p>

selected_papers: true
social: true

announcements:
  enabled: true
  scrollable: true
  limit: 5

latest_posts:
  enabled: false
---

I am Bo Zhang (张博), an undergraduate student in the Department of Automation at Tsinghua University. I am interested in the interface between foundation models and real environments, with a focus on observation representations, action-space design, temporal context, and the translation of high-level intentions into reliable low-level actions.

Two recent papers approach this question from very different settings. In **BAMI** (CVPR 2026), I worked on training-free bias mitigation for GUI grounding, where an agent must connect visual perception to precise screen actions. **EmbodiedAct** (ICML 2026) studies LLM agents that drive scientific software like MATLAB — executing simulations, observing outcomes, and adjusting their plans mid-run. The settings are different, but the underlying question is how to make model behavior reliable once reasoning has to pass through an observation-action loop.

I complement paper-driven work with systems that expose real-world constraints. [AICosmos](https://aicosmos.ai) explores multi-agent infrastructure for learning and teaching, where course context and feedback must be coordinated over time. [Syll](https://thu-sage.github.io/syll/) treats daily computing as an agent environment, with persistent context and user-facing actions. **AEI4U** brings course-specific AI assistance into analog electronics learning and won the Grand Prize at Tsinghua's 43rd Challenge Cup. These projects keep my research tied to real users, real context, and real failure modes, exposing details that benchmarks often hide.

*I am currently open to research collaborations on agent reliability, AI for science, and educational AI.*

---

#### Featured projects

<div class="row mt-3 mb-2">
  <div class="col-md-4 mb-3">
    <a href="{{ '/projects/aicosmos/' | relative_url }}" style="color: inherit; text-decoration: none;">
      {% include figure.liquid loading="eager" path="assets/img/aicosmos_cover.svg" class="img-fluid rounded z-depth-1" %}
      <h6 class="mt-2 mb-0">AICosmos</h6>
      <p class="small text-muted mb-0">Educational multi-agent platform · <code>aicosmos.ai</code></p>
    </a>
  </div>
  <div class="col-md-4 mb-3">
    <a href="{{ '/projects/syll/' | relative_url }}" style="color: inherit; text-decoration: none;">
      {% include figure.liquid loading="eager" path="assets/img/syll_cover.svg" class="img-fluid rounded z-depth-1" %}
      <h6 class="mt-2 mb-0">Syll</h6>
      <p class="small text-muted mb-0">Self-hosted AI companion · open-source (MIT)</p>
    </a>
  </div>
  <div class="col-md-4 mb-3">
    <a href="{{ '/projects/aei4u/' | relative_url }}" style="color: inherit; text-decoration: none;">
      {% include figure.liquid loading="eager" path="assets/img/aei4u_cover.svg" class="img-fluid rounded z-depth-1" %}
      <h6 class="mt-2 mb-0">AEI4U</h6>
      <p class="small text-muted mb-0">AI teaching assistant for analog electronics · Tsinghua Challenge Cup Grand Prize</p>
    </a>
  </div>
</div>
