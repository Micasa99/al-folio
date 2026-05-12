---
layout: page
title: AEI4U
permalink: /projects/aei4u/
description: Analog Electronic Intelligent for You — an AI teaching assistant for Tsinghua's <em>Fundamentals of Analog Electronics</em>. 🏆 Grand Prize, 43rd Tsinghua Challenge Cup.
img: assets/img/aei4u/poster.jpg
importance: 3
category: products
related_publications: false
---

> **AEI4U** (*Analog Electronic Intelligent for You*) is a course-grade AI teaching assistant for *Fundamentals of Analog Electronics*, built on the **Dify-THU** platform. It closes the loop from theory to simulation to personalized practice — and turns "low-code AI product landing" into a plug-and-play pattern for university courses.

**My role.** Project Lead.
**Award.** 🏆 **Grand Prize**, 43rd Tsinghua Challenge Cup — *AI Teaching-Agent Design Track* (awarded June 15, 2025).
**Platform.** Dify-THU.
**Course.** *Fundamentals of Analog Electronics* (《模拟电子技术基础》), Tsinghua.

#### What it does

AEI4U fuses three pillars into one assistant:

1. **Circuit topology recognition** — students upload a hand-drawn or screenshotted schematic; AEI4U identifies the circuit and grounds the conversation in it.
2. **Simulation in the loop** — connected to SPICE for real experimental feedback, not just textbook formulas.
3. **Personalized learning profiles** — tracks what each student struggles with and shapes the next interaction accordingly.

#### Pain points it addresses

- Analog electronics is **abstract** — circuit principles are hard to internalize without simulation.
- Lab operation is **complex** — students need scaffolded guidance, not just answers.
- Office hours don't scale — a 24/7 course-grade assistant fills that gap.

#### Architecture

- **Dify-THU workflow backbone** — low-code agent definition that's easy to iterate.
- **API-first front-end / back-end split** — embeddable into other learning platforms.
- **Knowledge graph** — covers theoretical content of the course.
- **SPICE bridge** — experimental simulation called as a tool.
- **User profile module** — drives adaptive interaction.

#### Why this template generalizes

The bigger contribution is **AEI4U-as-a-pattern**: a low-code template that other courses can drop in. We treat *course-AI as a product-engineering problem* — one that any STEM department can adopt without bespoke ML.

#### Gallery

<div class="row mt-3">
  <div class="col">
    {% include figure.liquid loading="eager" path="assets/img/aei4u/poster.jpg" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Project poster — Tsinghua 43rd Challenge Cup, AI Teaching-Agent Design Track. Three sections: <em>most expert</em> (course-content fidelity), <em>most considerate</em> (learner profiles), and <em>most deployable</em> (low-code product engineering).
</div>

<div class="row mt-3">
  <div class="col-md-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/aei4u/demo.jpg" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-md-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/aei4u/presentation.jpg" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Left: live demo at the exhibition — Dify-THU workflow + course-facing front-end.<br>
  Right: presenting AEI4U to Challenge Cup judges.
</div>

<div class="row mt-3">
  <div class="col-md-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/aei4u/tshirt.jpg" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-md-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/aei4u/logo.jpg" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Team identity — branded merchandise (left) and logo design (right).
</div>

#### Links

- 🏛️ Tsinghua's 43rd Challenge Cup — AI Teaching-Agent Design Track ([call announcement](https://m.sohu.com/a/866297133_121124031/))
