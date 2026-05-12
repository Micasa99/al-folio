---
layout: page
title: AEI4U
permalink: /projects/aei4u/
description: Analog Electronic Intelligent for You — an AI teaching assistant for Tsinghua's <em>Fundamentals of Analog Electronics</em>. 🏆 Grand Prize, 43rd Tsinghua Challenge Cup.
img: assets/img/aei4u/logo.jpg
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

<div class="row mt-3 justify-content-center">
  <div class="col-md-7 col-sm-10">
    {% include figure.liquid loading="eager" path="assets/img/aei4u/demo.jpg" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Live demo at the Tsinghua 43rd Challenge Cup exhibition — Dify-THU workflow backbone driving a course-facing front-end (<em>Hi, Micasa, I'm AEI4U — your analog electronics learning partner</em>).
</div>

#### Links

- 🏛️ Tsinghua's 43rd Challenge Cup — AI Teaching-Agent Design Track ([call announcement](https://m.sohu.com/a/866297133_121124031/))
