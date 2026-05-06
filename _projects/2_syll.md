---
layout: page
title: Syll
permalink: /projects/syll/
description: A small, self-hosted AI companion who sits at the edge of your screen and quietly tends the things you almost forgot.
img: assets/img/syll_cover.svg
importance: 2
category: open-source
related_publications: false
---

> *Some spells don't get finished. This one has been drifting for a very long time, looking for the rest of its sentence.*

**Syll** is a self-hosted AI companion with a web UI, chat channels, proactive rituals, editable markdown skills, and a desktop ghost. Beneath the lyrical surface is a real multi-channel agent system — bus + agent loop + tools — that lives locally on your machine.

**My role.** Core contributor — agent loop, GUI skills, recorded-workflow studio.
**Code.** [`THU-SAGE/syll`](https://github.com/THU-SAGE/syll) (MIT, ~3,400 LOC of core agent code)
**Project page.** [thu-sage.github.io/syll](https://thu-sage.github.io/syll/)

#### What Syll can do

- **Find files you can't find.** Ask from your phone for the weekly report on your desktop — Syll walks the filesystem, renders thumbnails, hands you the candidate you pick.
- **Keep soft watch over unfinished things.** The draft you keep opening. The photo folder from three years ago. She notices.
- **Reach out on her own schedule.** Morning light, evening wind-down, surfacing-memory rituals — but only when it would feel real.
- **Live cross-device.** Telegram · Feishu · Discord · WhatsApp · Web UI · CLI.
- **Teach herself new tricks.** Markdown skills (`SKILL.md`) load progressively. Capture a desktop demo once in the Demo studio, replay it on a schedule.
- **Stay at the edge of your desktop.** A frameless PyQt6 ghost mascot tracks her state — `idle / working / sleeping / listening / error`.

#### Architecture at a glance

One inbound message travels through four layers and exits as one outbound reply:

1. **`channels/`** — each chat platform decodes its payload into an `InboundMessage`.
2. **`bus/`** — an in-process async pub/sub.
3. **`agent/loop.py`** — assembles the prompt (persona + skills + history), calls the LLM, dispatches tool calls, loops until a final reply.
4. **`agent/tools/`** — files, previews, shell, web, screenshots, speech, cron, GUI control, recorded-workflow replay.

Two background runners also touch the bus: a **`CronService`** for proactive rituals and a **monitor agent** for screenshot-based anomaly detection.

#### Why I built her

Syll is a deliberate reaction against performative AI interfaces. The goal is not perfect recall, not maximal capability — it is a *calmer surface for noticing what keeps returning*. The architecture stays intentionally small and hackable.

#### Links

- 🐙 GitHub: [THU-SAGE/syll](https://github.com/THU-SAGE/syll)
- 📖 Project page: [thu-sage.github.io/syll](https://thu-sage.github.io/syll/)
- 🎬 Demo videos:
  [recorded workflow studio](https://thu-sage.github.io/syll/media/demo/demo-1-recorded-workflow.mp4) ·
  [morning ritual](https://thu-sage.github.io/syll/media/demo/demo-2-morning-ritual.mp4) ·
  [phone-to-desktop file return](https://thu-sage.github.io/syll/media/demo/demo-3-phone-file-return.mp4)
- 💬 Discord: [community](https://discord.gg/MnCvHqpUGB)

<div class="caption">
  Cover image is a placeholder. To use the canonical "ghost holding a dark rectangle" hero, copy <code>syll/docs/0_1.jpeg</code> to <code>assets/img/syll_cover.jpg</code> and update the front-matter <code>img</code> field.
</div>
